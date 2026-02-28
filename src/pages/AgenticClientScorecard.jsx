import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const questions = [
  { id: 1, text: "How accessible and well-structured is your customer and operational data?", category: "Data & Infrastructure" },
  { id: 2, text: "How would you rate your company's comfort level with adopting new technologies like AI?", category: "Strategy & Culture" },
  { id: 3, text: "How much of your marketing and customer service process is currently automated?", category: "Marketing & Customer Experience" },
  { id: 4, text: "Do you have clear goals or KPIs that an AI solution could potentially help you achieve?", category: "Strategy & Culture" },
  { id: 5, text: "How are you currently using data to personalize the customer journey?", category: "Marketing & Customer Experience" },
  { id: 6, text: "What is the state of your technical infrastructure (e.g., CRM, data warehouse, APIs)?", category: "Data & Infrastructure" },
  { id: 7, text: "How well does your team understand AI capabilities and limitations?", category: "Strategy & Culture" },
  { id: 8, text: "How mature is your data governance and privacy compliance?", category: "Data & Infrastructure" },
  { id: 9, text: "How integrated are your marketing, sales, and customer service platforms?", category: "Marketing & Customer Experience" },
  { id: 10, text: "How committed is leadership to investing in AI transformation?", category: "Strategy & Culture" }
];

const categoryColors = {
  "Data & Infrastructure": "text-blue-400",
  "Strategy & Culture": "text-purple-400",
  "Marketing & Customer Experience": "text-green-400"
};

function getReadinessLevel(score) {
  if (score >= 40) return { label: "AI-Ready", color: "text-green-400", desc: "Your client is well-positioned to implement AI agents. Focus on high-impact use cases." };
  if (score >= 25) return { label: "AI-Curious", color: "text-yellow-400", desc: "Good foundation with some gaps. Address data infrastructure and build internal champions before major AI investments." };
  return { label: "AI-Nascent", color: "text-red-400", desc: "Significant groundwork needed. Start with education, data hygiene, and small pilot projects." };
}

export default function AgenticClientScorecard() {
  const [scores, setScores] = useState({});
  const [results, setResults] = useState(null);

  const setScore = (id, val) => setScores({ ...scores, [id]: val });

  const submit = () => {
    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    const byCategory = {};
    questions.forEach(q => {
      if (!byCategory[q.category]) byCategory[q.category] = { total: 0, count: 0 };
      byCategory[q.category].total += scores[q.id] || 0;
      byCategory[q.category].count += 1;
    });
    setResults({ total, byCategory });
  };

  const allAnswered = Object.keys(scores).length === questions.length;

  if (results) {
    const { label, color, desc } = getReadinessLevel(results.total);
    return (
      <div className="min-h-screen bg-[#0d0b1f] text-white pt-24 pb-24 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="border border-purple-800/40 bg-[#1a1535] rounded-xl p-10 text-center">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-2">Client Readiness Score</h2>
            <p className="text-6xl font-bold mt-6 mb-2">{results.total}<span className="text-2xl text-gray-400">/50</span></p>
            <p className={`text-2xl font-semibold mb-4 ${color}`}>{label}</p>
            <p className="text-gray-300 mb-10">{desc}</p>
            <div className="space-y-4 text-left mb-10">
              {Object.entries(results.byCategory).map(([cat, data]) => (
                <div key={cat}>
                  <div className="flex justify-between mb-1">
                    <span className={`text-sm font-medium ${categoryColors[cat]}`}>{cat}</span>
                    <span className="text-sm text-gray-400">{data.total}/{data.count * 5}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${(data.total / (data.count * 5)) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <Button onClick={() => { setScores({}); setResults(null); }} variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900/20">
              Start Over
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0b1f] text-white">
      <section className="pt-24 pb-12 px-4 text-center max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Readiness Scorecard</h1>
          <p className="text-xl text-gray-300">
            Evaluate your client's AI readiness. Rate on a scale of 1 (Non-existent) to 5 (Highly Advanced).
          </p>
        </motion.div>
      </section>

      <section className="px-4 pb-24 max-w-2xl mx-auto">
        <div className="border border-purple-800/40 bg-[#1a1535] rounded-xl p-8 space-y-10">
          {questions.map((q, i) => (
            <div key={q.id}>
              <p className="font-medium mb-1">{i + 1}. {q.text}</p>
              <p className={`text-xs mb-4 ${categoryColors[q.category]}`}>{q.category}</p>
              <div className="flex gap-3">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    onClick={() => setScore(q.id, val)}
                    className={`w-10 h-10 rounded-full border-2 font-bold transition-all ${
                      scores[q.id] === val
                        ? "border-purple-400 bg-purple-600 text-white"
                        : "border-gray-600 text-gray-400 hover:border-purple-400"
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <Button
            onClick={submit}
            disabled={!allAnswered}
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 text-lg disabled:opacity-50"
          >
            Get Client Results
          </Button>
          {!allAnswered && (
            <p className="text-center text-gray-500 text-sm">
              Please answer all {questions.length} questions ({Object.keys(scores).length}/{questions.length} completed)
            </p>
          )}
        </div>
      </section>
    </div>
  );
}