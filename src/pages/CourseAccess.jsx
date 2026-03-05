import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Circle, ChevronRight, ChevronLeft, BookOpen, MessageSquare, X, Send, Loader2, Lock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";

export default function CourseAccess() {
  const params = new URLSearchParams(window.location.search);
  const tokenParam = params.get("token");
  const sessionParam = params.get("session_id");

  const [token, setToken] = useState(tokenParam || localStorage.getItem("course_token") || "");
  const [emailInput, setEmailInput] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState("");
  const [enrollment, setEnrollment] = useState(null);
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [activeLessonId, setActiveLessonId] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // If coming from Stripe success with session_id, verify enrollment
  useEffect(() => {
    if (sessionParam && !token) {
      verifyBySession(sessionParam);
    } else if (token) {
      localStorage.setItem("course_token", token);
      fetchEnrollmentByToken(token);
    }
  }, []);

  const verifyBySession = async (sessionId) => {
    setVerifying(true);
    try {
      const res = await base44.functions.invoke("courseVerifyAccess", { sessionId });
      if (res.data.enrollment) {
        setEnrollment(res.data.enrollment);
        setToken(res.data.enrollment.access_token);
        localStorage.setItem("course_token", res.data.enrollment.access_token);
      }
    } catch (_) {}
    setVerifying(false);
  };

  const fetchEnrollmentByToken = async (t) => {
    setVerifying(true);
    try {
      const res = await base44.functions.invoke("courseVerifyAccess", { accessToken: t });
      if (res.data.enrollment) {
        setEnrollment(res.data.enrollment);
      } else {
        setToken("");
        localStorage.removeItem("course_token");
      }
    } catch (_) {
      setToken("");
      localStorage.removeItem("course_token");
    }
    setVerifying(false);
  };

  const handleEmailVerify = async () => {
    if (!emailInput.trim()) return;
    setVerifying(true);
    setVerifyError("");
    try {
      const res = await base44.functions.invoke("courseVerifyAccess", { email: emailInput.trim().toLowerCase() });
      if (res.data.enrollment) {
        setEnrollment(res.data.enrollment);
        setToken(res.data.enrollment.access_token);
        localStorage.setItem("course_token", res.data.enrollment.access_token);
      } else {
        setVerifyError("No enrollment found for that email. Please check your email or purchase the course.");
      }
    } catch (_) {
      setVerifyError("No enrollment found for that email. Please check your email or purchase the course.");
    }
    setVerifying(false);
  };

  const { data: course } = useQuery({
    queryKey: ["course", enrollment?.course_id],
    queryFn: () => base44.entities.Course.filter({ id: enrollment.course_id }),
    enabled: !!enrollment?.course_id,
    select: d => d[0],
  });

  const { data: modules = [] } = useQuery({
    queryKey: ["course-modules", enrollment?.course_id],
    queryFn: () => base44.entities.CourseModule.filter({ course_id: enrollment.course_id }, "order"),
    enabled: !!enrollment?.course_id,
    onSuccess: (data) => {
      if (data.length && !activeModuleId) setActiveModuleId(data[0].id);
    },
  });

  const { data: lessons = [] } = useQuery({
    queryKey: ["course-lessons", enrollment?.course_id],
    queryFn: () => base44.entities.CourseLesson.filter({ course_id: enrollment.course_id }, "order"),
    enabled: !!enrollment?.course_id,
    onSuccess: (data) => {
      if (data.length && !activeLessonId) {
        const first = data[0];
        setActiveModuleId(first.module_id);
        setActiveLessonId(first.id);
      }
    },
  });

  const activeLesson = lessons.find(l => l.id === activeLessonId);
  const moduleLessons = (mid) => lessons.filter(l => l.module_id === mid);
  const completedIds = enrollment?.completed_lesson_ids || [];

  const markComplete = async (lessonId) => {
    if (completedIds.includes(lessonId)) return;
    const updated = [...completedIds, lessonId];
    await base44.entities.CourseEnrollment.update(enrollment.id, { completed_lesson_ids: updated });
    setEnrollment(e => ({ ...e, completed_lesson_ids: updated }));
  };

  const progress = lessons.length > 0 ? Math.round((completedIds.length / lessons.length) * 100) : 0;

  const goNext = async () => {
    if (!completedIds.includes(activeLesson.id)) {
      await markComplete(activeLesson.id);
    }
    const idx = lessons.findIndex(l => l.id === activeLessonId);
    if (idx < lessons.length - 1) {
      const next = lessons[idx + 1];
      setActiveLessonId(next.id);
      setActiveModuleId(next.module_id);
    }
  };

  const goPrev = () => {
    const idx = lessons.findIndex(l => l.id === activeLessonId);
    if (idx > 0) {
      const prev = lessons[idx - 1];
      setActiveLessonId(prev.id);
      setActiveModuleId(prev.module_id);
    }
  };

  const sendChat = async () => {
    if (!chatInput.trim()) return;
    const userMsg = { role: "user", content: chatInput };
    setChatMessages(m => [...m, userMsg]);
    setChatInput("");
    setChatLoading(true);
    const context = activeLesson ? `Current lesson: "${activeLesson.title}"\n\n${activeLesson.content?.slice(0, 1000)}` : "";
    const res = await base44.integrations.Core.InvokeLLM({
      prompt: `You are an AI marketing course assistant for the course based on David Berkowitz's book "The Non-Obvious Guide to Using AI for Marketing". Help the student understand the concepts. Be concise, practical, and encouraging.\n\n${context}\n\nStudent question: ${chatInput}`,
    });
    setChatMessages(m => [...m, { role: "assistant", content: res }]);
    setChatLoading(false);
  };

  // Not yet verified
  if (!enrollment && !verifying) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <BookOpen className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Your Course</h1>
          <p className="text-gray-500 text-sm mb-6">Enter the email you used to purchase the course.</p>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            value={emailInput}
            onChange={e => { setEmailInput(e.target.value); setVerifyError(""); }}
            onKeyDown={e => e.key === "Enter" && handleEmailVerify()}
          />
          {verifyError && <p className="text-red-500 text-xs mb-2">{verifyError}</p>}
          <button onClick={handleEmailVerify} className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors">
            Access Course
          </button>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link to={createPageUrl("CourseHome")} className="text-sm text-gray-500 hover:text-red-600">
              ← Back to course page
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (verifying) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top bar */}
      <div className="bg-gray-900 h-14 flex items-center px-4 gap-4 flex-shrink-0 z-30">
        <Link to={createPageUrl("CourseHome")} className="text-gray-400 hover:text-white text-xs">← High Caliber AI</Link>
        <div className="flex-1 text-center">
          <span className="text-white text-sm font-semibold">{course?.title || "Course"}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs text-gray-400">{progress}% complete</div>
          <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <button onClick={() => setChatOpen(true)} className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white bg-gray-800 px-3 py-1.5 rounded-lg">
          <MessageSquare className="w-3.5 h-3.5" /> AI Assistant
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar toggle */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-12 bg-gray-100 border-r border-gray-200 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
            title="Open sidebar"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        )}
        
        {/* Sidebar */}
        <aside className={`bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0 transition-all duration-200 ${sidebarOpen ? "w-72" : "w-0"}`}>
          <div className="p-4 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-gray-500 uppercase">Course</span>
              <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-gray-600">
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
            {modules.map((mod) => (
              <div key={mod.id} className="mb-4">
                <button
                  onClick={() => setActiveModuleId(activeModuleId === mod.id ? null : mod.id)}
                  className="w-full text-left text-xs font-bold text-gray-500 uppercase tracking-wide mb-2 hover:text-gray-700 flex items-center justify-between"
                >
                  <span>{mod.title}</span>
                  <span className="text-gray-300">{moduleLessons(mod.id).filter(l => completedIds.includes(l.id)).length}/{moduleLessons(mod.id).length}</span>
                </button>
                <div className="space-y-1">
                   {moduleLessons(mod.id).map(lesson => (
                     <button
                       key={lesson.id}
                       onClick={() => { setActiveLessonId(lesson.id); setActiveModuleId(mod.id); }}
                       className={`w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${activeLessonId === lesson.id ? "bg-red-50 text-red-700 font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                     >
                       {completedIds.includes(lesson.id)
                         ? <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                         : <Circle className="w-4 h-4 text-gray-300 flex-shrink-0" />
                       }
                       <div className="flex-1 truncate">
                         <span>{lesson.title}</span>
                         {lesson.estimated_minutes && <span className="text-xs text-gray-400 ml-1">({lesson.estimated_minutes} min)</span>}
                       </div>
                     </button>
                   ))}
                 </div>
              </div>
            ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          {activeLesson ? (
            <div className="max-w-3xl mx-auto px-6 py-10">
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                <span>{modules.find(m => m.id === activeLesson.module_id)?.title}</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-gray-600">{activeLesson.title}</span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">{activeLesson.title}</h1>
              {activeLesson.estimated_minutes && (
                <p className="text-sm text-gray-400 mb-8">{activeLesson.estimated_minutes} min read</p>
              )}

              <div className="prose prose-gray max-w-none">
                <ReactMarkdown>{activeLesson.content || "*Content coming soon.*"}</ReactMarkdown>
              </div>

              {activeLesson.key_takeaways?.length > 0 && (
                <div className="mt-8 bg-red-50 border border-red-100 rounded-xl p-5">
                  <h3 className="font-bold text-red-800 text-sm mb-3">Key Takeaways</h3>
                  <ul className="space-y-2">
                    {activeLesson.key_takeaways.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-red-900">
                        <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeLesson.exercise_prompt && (
               <div className="mt-6 bg-gray-900 rounded-xl p-5">
                 <h3 className="font-bold text-white text-sm mb-3">✏️ Exercise</h3>
                 <p className="text-gray-300 text-sm leading-relaxed mb-4">{activeLesson.exercise_prompt}</p>
                 <textarea
                   placeholder="Write your answer or notes here..."
                   className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 h-32 resize-none"
                   defaultValue={localStorage.getItem(`exercise_${activeLessonId}`) || ""}
                   onChange={(e) => localStorage.setItem(`exercise_${activeLessonId}`, e.target.value)}
                 />
                 <p className="text-xs text-gray-400 mt-2">Your response is saved locally in your browser.</p>
               </div>
              )}

              <div className="mt-10 flex items-center justify-between gap-4">
                <button onClick={goPrev} disabled={lessons.findIndex(l => l.id === activeLessonId) === 0}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-30">
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                {!completedIds.includes(activeLesson.id) ? (
                  <button onClick={goNext}
                    className="flex items-center gap-2 px-6 py-2.5 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors">
                    <CheckCircle className="w-4 h-4" /> Mark Complete & Continue
                  </button>
                ) : (
                  <span className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
                    <CheckCircle className="w-4 h-4" /> Completed
                  </span>
                )}

                <button onClick={goNext} disabled={lessons.findIndex(l => l.id === activeLessonId) === lessons.length - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 disabled:opacity-30">
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <div className="text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p>Select a lesson from the sidebar to get started</p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* AI Chat Drawer */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed right-0 top-14 bottom-0 w-80 bg-white border-l border-gray-200 flex flex-col z-40 shadow-xl"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-red-600" />
                <span className="font-semibold text-sm text-gray-900">AI Course Assistant</span>
              </div>
              <button onClick={() => setChatOpen(false)}><X className="w-4 h-4 text-gray-400 hover:text-gray-600" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.length === 0 && (
                <div className="text-center text-gray-400 text-sm py-8">
                  <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-30" />
                  <p>Ask me anything about this lesson or AI marketing!</p>
                </div>
              )}
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${msg.role === "user" ? "bg-red-600 text-white" : "bg-gray-100 text-gray-800"}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-xl px-3 py-2">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                  </div>
                </div>
              )}
            </div>
            <div className="p-3 border-t border-gray-100 flex gap-2">
              <input
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Ask a question..."
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendChat()}
              />
              <button onClick={sendChat} className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}