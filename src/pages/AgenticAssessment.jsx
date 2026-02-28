import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";

const pillars = [
  {
    id: "data",
    name: "Data Readiness",
    color: "text-blue-400",
    bg: "bg-blue-900/20",
    border: "border-blue-700/40",
    questions: [
      { id: "d1", text: "We have centralized, accessible data repositories for our key marketing and client data." },
      { id: "d2", text: "Our data is clean, well-structured, and regularly maintained." },
      { id: "d3", text: "We have APIs or integrations that allow our tools to share data effectively." }
    ]
  },
  {
    id: "process",
    name: "Process Maturity",
    color: "text-purple-400",
    bg: "bg-purple-900/20",
    border: "border-purple-700/40",
    questions: [
      { id: "p1", text: "Our core workflows are well-documented and repeatable." },
      { id: "p2", text: "We have clear metrics for measuring the success of our work." },
      { id: "p3", text: "We regularly review and optimize our internal processes." }
    ]
  },
  {
    id: "talent",
    name: "Talent & Culture",
    color: "text-green-400",
    bg: "bg-green-900/20",
    border: "border-green-700/40",
    questions: [
      { id: "t1", text: "Our team is comfortable experimenting with new AI tools and technologies." },
      { id: "t2", text: "Leadership actively encourages and invests in AI adoption." },
      { id: "t3", text: "We have at least one internal AI champion or advocate on our team." }
    ]
  },
  {
    id: "tech",
    name: "Technology Stack",
    color: "text-yellow-400",
    bg: "bg-yellow-900/20",
    border: "border-yellow-700/40",
    questions: [
      { id: "tc1", text: "Our current tools and platforms support API integrations and automation." },
      { id: "tc2", text: "We already use some form of marketing automation or AI-assisted tools." },
      { id: "tc3", text: "We have a process for evaluating and adopting new technology." }
    ]
  },
  {
    id: "strategy",
    name: "AI Strategy",
    color: "text-red-400",
    bg: "bg-red-900/20",
    border: "border-red-700/40",
    questions: [
      { id: "s1", text: "We have identified specific use cases where AI agents could add value." },
      { id: "s2", text: "We have a budget allocated (or earmarked) for AI tool experimentation." },
      { id: "s3", text: "We understand the ethical and legal considerations of using AI in our work." }
    ]
  }
];

const ratingLabels = {
  1: "Strongly Disagree",
  2: "Disagree",
  3: "Neutral",
  4: "Agree",
  5: "Strongly Agree"
};

function getRecommendations(scores) {
  return pillars.map(pillar => {
    const pillarScores = pillar.questions.map(q => scores[q.id] || 0);
    const avg = pillarScores.reduce((a, b) => a + b, 0) / pillarScores.length;
    let rec = "";
    if (avg < 2.5) rec = "This is a critical gap. Prioritize building foundational capabilities here before expanding AI use.";
    else if (avg < 3.5) rec = "Room for improvement. Set specific goals and allocate resources to strengthen this pillar.";
    else rec = "Strong foundation. Look for opportunities to deepen capabilities and share best practices.";
    return { pillar, avg, rec };
  });
}

export default function AgenticAssessment() {
  const [currentPillar, setCurrentPillar] = useState(0);
  const [scores, setScores] = useState({});
  const [showResults, setShowResults] = useState(false);

  const pillar = pillars[currentPillar];
  const allInPillar = pillar.questions.every(q => scores[q.id]);
  const totalAnswered = Object.keys(scores).length;
  const totalQuestions = pillars.reduce((a, p) => a + p.questions.length, 0);

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const maxScore = totalQuestions * 5;
  const pct = Math.round((totalScore / maxScore) * 100);

  const getLevel = () => {
    if (pct >= 70) return { label: "Agentic-Ready", color: "text-green-400" };
    if (pct >= 45) return { label: "Agentic-Curious", color: "text-yellow-400" };
    return { label: "Agentic-Nascent", color: "text-red-400" };
  };

  if (showResults) {
    const { label, color } = getLevel();
    const recs = getRecommendations(scores);
    return (
      <div className="min-h-screen bg-[#0d0b1f] text-white pt-24 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-center mb-12">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">Your Agentic Readiness Report</h1>
              <p className="text-6xl font-bold mb-2">{pct}%</p>
              <p className={`text-2xl font-semibold ${color}`}>{label}</p>
            </div>

            <div className="space-y-6">
              {recs.map(({ pillar, avg, rec }) => (
                <div key={pillar.id} className={`border ${pillar.border} ${pillar.bg} rounded-xl p-6`}>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className={`font-bold text-lg ${pillar.color}`}>{pillar.name}</h3>
                    <span className="text-2xl font-bold">{avg.toFixed(1)}<span className="text-gray-400 text-base">/5</span></span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <div className="bg-purple-500 h-2 rounded-full transition-all" style={{ width: `${(avg / 5) * 100}%` }} />
                  </div>
                  <p className="text-gray-300 text-sm">{rec}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button onClick={() => { setScores({}); setCurrentPillar(0); setShowResults(false); }} variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900/20">
                Retake Assessment
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0b1f] text-white">
      <section className="pt-24 pb-12 px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Agency Readiness Assessment</h1>
        <p className="text-xl text-gray-300 mb-6">
          Score your agency against the 5 Pillars of Agentic AI.
        </p>
        {/* Progress */}
        <div className="flex gap-2 justify-center mb-2">
          {pillars.map((p, i) => (
            <div key={p.id} className={`h-2 flex-1 rounded-full transition-all ${i < currentPillar ? "bg-purple-500" : i === currentPillar ? "bg-purple-400" : "bg-gray-700"}`} />
          ))}
        </div>
        <p className="text-gray-500 text-sm">{totalAnswered}/{totalQuestions} questions answered</p>
      </section>

      <section className="px-4 pb-24 max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className={`border ${pillar.border} ${pillar.bg} rounded-xl p-8 space-y-8`}
          >
            <div>
              <span className={`text-sm font-semibold ${pillar.color}`}>Pillar {currentPillar + 1} of {pillars.length}</span>
              <h2 className={`text-2xl font-bold mt-1 ${pillar.color}`}>{pillar.name}</h2>
            </div>

            {pillar.questions.map((q) => (
              <div key={q.id}>
                <p className="font-medium mb-4 text-gray-100">{q.text}</p>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      onClick={() => setScores({ ...scores, [q.id]: val })}
                      className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                        scores[q.id] === val
                          ? "border-purple-400 bg-purple-600 text-white font-semibold"
                          : "border-gray-600 text-gray-400 hover:border-purple-400"
                      }`}
                    >
                      {val} – {ratingLabels[val]}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex justify-between pt-4">
              <Button
                onClick={() => setCurrentPillar(currentPillar - 1)}
                disabled={currentPillar === 0}
                variant="outline"
                className="border-gray-600 text-gray-300 disabled:opacity-30"
              >
                Back
              </Button>
              {currentPillar < pillars.length - 1 ? (
                <Button
                  onClick={() => setCurrentPillar(currentPillar + 1)}
                  disabled={!allInPillar}
                  className="bg-purple-600 hover:bg-purple-700 gap-2 disabled:opacity-50"
                >
                  Next Pillar <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={() => setShowResults(true)}
                  disabled={!allInPillar}
                  className="bg-green-600 hover:bg-green-700 gap-2 disabled:opacity-50"
                >
                  <CheckCircle className="w-4 h-4" /> Get My Results
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}