import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Brain, MessageSquare, Lock, ChevronRight, Star, Clock } from "lucide-react";
import MetaTags from "@/components/SEO/MetaTags";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";

export default function CourseHome() {
  const [email, setEmail] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [purchasing, setPurchasing] = useState(false);
  const [error, setError] = useState("");

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: () => base44.entities.Course.filter({ published: true }),
  });

  const course = courses[0]; // Primary course

  const { data: modules = [] } = useQuery({
    queryKey: ["course-modules", course?.id],
    queryFn: () => base44.entities.CourseModule.filter({ course_id: course.id }, "order"),
    enabled: !!course?.id,
  });

  const handlePurchase = async () => {
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setPurchasing(true);
    setError("");
    if (window.self !== window.top) {
      alert("Checkout is only available from the published app, not in preview mode.");
      setPurchasing(false);
      return;
    }
    const res = await base44.functions.invoke("courseCheckout", {
      courseId: course.id,
      email: email.trim(),
      origin: window.location.origin,
      discountCode: discountCode.trim() || undefined,
    });
    if (res.data.url) {
      window.location.href = res.data.url;
    } else {
      setError(res.data.error || "Something went wrong. Please try again.");
      setPurchasing(false);
    }
  };

  const features = [
    { icon: BookOpen, text: "Chapter-by-chapter lessons drawn directly from the book" },
    { icon: Brain, text: "Hands-on exercises to apply AI to your real marketing work" },
    { icon: MessageSquare, text: "AI chat assistant to answer questions about any concept" },
    { icon: CheckCircle, text: "Track your progress and revisit lessons anytime" },
    { icon: Star, text: "Lifetime access — no subscription required" },
    { icon: Clock, text: "Self-paced — complete in a weekend or over weeks" },
  ];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Loading course...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title={`${course.title} — Interactive Online Course`}
        description={course.subtitle || course.description}
        url="https://highcaliberai.com/course"
        canonical="https://highcaliberai.com/course"
      />

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 py-3 px-4 text-center">
        <p className="text-gray-900 font-bold text-sm sm:text-base flex items-center justify-center gap-2 flex-wrap">
          <span>🎉</span>
          <span>Founding Member Offer:</span>
          <span className="font-black">First 100 students get 25% off</span>
          <span>—</span>
          <span>Use code</span>
          <span className="bg-gray-900 text-yellow-300 font-black px-2.5 py-0.5 rounded tracking-widest text-sm">AI25</span>
          <span>at checkout</span>
          <span>🚀</span>
        </p>
      </div>

      {/* Hero */}
      <section className="pt-20 pb-16 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-red-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
             Interactive Course
            </span>
            <p className="text-sm text-red-200 mb-3">Based on the bestselling book by David Berkowitz</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
             {course.title}
            </h1>
            {course.subtitle && (
              <p className="text-xl text-gray-300 mb-6">{course.subtitle}</p>
            )}
            <div className="mb-6 p-4 bg-white/10 rounded-lg border border-white/20">
              <p className="text-sm text-gray-200 leading-relaxed">
                From the author of <span className="font-semibold">The Non-Obvious Guide to Using AI for Marketing</span>, an interactive course packed with hands-on exercises, real-world case studies, and AI-powered Q&A. Get lifetime access for one price — no subscription.
              </p>
              <a href="https://www.amazon.com/Non-Obvious-Guide-AI-Marketing-Guides/dp/1646871863/" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-red-300 hover:text-red-200 underline">
                Read the book on Amazon →
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8">
              {course.total_lessons && (
                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {course.total_lessons} lessons</span>
              )}
              {course.estimated_hours && (
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> ~{course.estimated_hours} hours</span>
              )}
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400" /> Lifetime access</span>
            </div>

            {/* Purchase box */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-gray-900">${course.price}</span>
                <span className="text-gray-500 text-sm">one-time · lifetime access</span>
              </div>
              <input
                type="email"
                placeholder="Enter your email to get started"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={email}
                onChange={e => { setEmail(e.target.value); setError(""); }}
                onKeyDown={e => e.key === "Enter" && handlePurchase()}
              />
              <input
                type="text"
                placeholder="Discount code (optional)"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-600"
                value={discountCode}
                onChange={e => { setDiscountCode(e.target.value); setError(""); }}
              />
              {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
              <button
                onClick={handlePurchase}
                disabled={purchasing}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {purchasing ? "Redirecting to checkout..." : `Enroll for $${course.price}`}
                <ChevronRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-gray-400 text-center mt-3">Secure checkout via Stripe. 30-day money-back guarantee.</p>
              <div className="mt-3 pt-3 border-t border-gray-100 text-center">
                <Link to={createPageUrl("CourseAccess")} className="text-xs text-red-600 hover:text-red-700 underline">
                  Already enrolled? Access your course →
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img
              src={course.cover_image || "https://m.media-amazon.com/images/I/71QZe3-WQKL._SL1500_.jpg"}
              alt={course.title}
              className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* What you'll get */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">What's Included</h2>
          <p className="text-gray-500 text-center mb-10">More than a book summary — a hands-on learning experience</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <f.icon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Outline */}
      {modules.length > 0 && (
       <section className="py-16 px-4 sm:px-6 bg-gray-50">
         <div className="max-w-3xl mx-auto">
           <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Course Outline</h2>
           <p className="text-gray-500 text-center mb-10">Structured around the chapters of the book</p>
           <div className="space-y-3">
             {modules.map((mod, i) => (
               <div key={mod.id} className="group">
                 <Link
                   to={mod.is_free_preview ? createPageUrl("CourseAccess") : "#"}
                   className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200 hover:border-red-200 hover:bg-red-50 transition-colors cursor-pointer"
                 >
                   <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold text-sm flex items-center justify-center flex-shrink-0">
                     {i + 1}
                   </div>
                   <div className="flex-1">
                     <p className="font-semibold text-gray-900 text-sm">{mod.title}</p>
                     {mod.description && <p className="text-xs text-gray-500 mt-0.5">{mod.description}</p>}
                   </div>
                   {mod.is_free_preview ? (
                     <span className="text-xs text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full group-hover:bg-green-100">Free Preview →</span>
                   ) : (
                     <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                   )}
                 </Link>
               </div>
             ))}
           </div>
         </div>
       </section>
      )}

      {/* About the author */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8 bg-gray-900 rounded-2xl p-8">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png"
            alt="David Berkowitz"
            className="w-20 h-20 rounded-full object-cover flex-shrink-0 bg-white p-1"
          />
          <div>
            <p className="text-white font-bold text-lg mb-1">David Berkowitz</p>
            <p className="text-gray-400 text-sm mb-3">Founder, High Caliber AI · Author · AI Marketers Guild (7,000+ members)</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              David has been helping marketers navigate AI since before it was mainstream. As the author of <em>The Non-Obvious Guide to Using AI for Marketing</em> and founder of the AI Marketers Guild, he brings real-world practitioner experience — not just theory — to every lesson.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 bg-red-600">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to level up your AI marketing skills?</h2>
          <p className="text-red-100 mb-8">One-time payment. Lifetime access. Start today.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border-0 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button
              onClick={handlePurchase}
              disabled={purchasing}
              className="bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {purchasing ? "..." : `Enroll — $${course.price}`}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}