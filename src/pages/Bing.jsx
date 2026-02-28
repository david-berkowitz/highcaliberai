import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, Star, RotateCcw } from "lucide-react";

const scenarios = [
  {
    id: 1,
    title: "The Email Campaign Conundrum",
    description: "Your startup needs to send personalized emails to 10,000 leads, but you only have 2 hours and a tiny budget.",
    question: "What's the Bearcat's smartest AI-powered move?",
    options: [
      { id: "a", text: "Send the same email to everyone - fast and cheap!" },
      { id: "b", text: "Use AI to segment audiences and personalize subject lines" },
      { id: "c", text: "Hire 50 interns to write custom emails" },
      { id: "d", text: "Use AI to completely automate writing, sending, and follow-ups" }
    ],
    correct: "b",
    explanation: "Segmenting and personalizing with AI strikes the right balance - it's scalable, cost-effective, and still gives you human oversight. Full automation (D) sounds tempting but removes strategic judgment. Option B gives you the personalization lift without the cost or complexity."
  },
  {
    id: 2,
    title: "The Social Media Scramble",
    description: "A competitor just launched a viral campaign and your CEO wants you to respond on social media within the hour.",
    question: "How does a savvy Bearcat use AI here?",
    options: [
      { id: "a", text: "Let AI write and post the response automatically" },
      { id: "b", text: "Ask AI to draft 5 response options, then pick and edit the best one" },
      { id: "c", text: "Wait - never respond to competitors on social media" },
      { id: "d", text: "Use AI to analyze the competitor's campaign first, then draft a response" }
    ],
    correct: "d",
    explanation: "Intelligence before response! Use AI to quickly understand what made the competitor's campaign work, then craft a strategic counter-message. Option D gives you the insights AND the speed. Option B is good but reactive - better to understand the landscape first."
  },
  {
    id: 3,
    title: "The Content Calendar Crisis",
    description: "You need 30 days of social content by tomorrow morning. Your team is exhausted.",
    question: "What's the winning Bearcat strategy?",
    options: [
      { id: "a", text: "Use AI to generate all 30 posts completely from scratch" },
      { id: "b", text: "Repurpose your top 5 existing posts manually" },
      { id: "c", text: "Use AI to repurpose your existing best content across formats" },
      { id: "d", text: "Cancel the content calendar for the month" }
    ],
    correct: "c",
    explanation: "Work smarter, not harder! AI is excellent at taking your proven content and repurposing it into new formats - turning a blog post into tweets, turning a podcast clip into a LinkedIn post. You get 30 days of on-brand content fast, without starting from scratch."
  }
];

export default function Bing() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const scenario = scenarios[currentScenario];

  const handleAnswer = (optionId) => {
    if (selectedAnswer) return;
    setSelectedAnswer(optionId);
    if (optionId === scenario.correct) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const next = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameOver(true);
    }
  };

  const reset = () => {
    setCurrentScenario(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setGameOver(false);
  };

  const getScoreMessage = () => {
    if (score === scenarios.length) return "Perfect Score! You're a true Bearcat AI Marketing Champion! 🏆";
    if (score >= scenarios.length * 0.6) return "Great work! You've got solid AI marketing instincts. 🌟";
    return "Good effort! Review the explanations to sharpen your AI marketing skills. 📚";
  };

  if (gameOver) {
    return (
      <div className="min-h-screen bg-green-900 text-white flex items-center justify-center px-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-xl w-full text-center">
          <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Safari Complete!</h1>
          <p className="text-6xl font-bold mb-4">{score}/{scenarios.length}</p>
          <div className="flex justify-center mb-6">
            {[...Array(scenarios.length)].map((_, i) => (
              <Star key={i} className={`w-10 h-10 ${i < score ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
            ))}
          </div>
          <p className="text-xl text-green-200 mb-10">{getScoreMessage()}</p>
          <Button onClick={reset} className="bg-green-500 hover:bg-green-600 gap-2 text-lg px-8 py-3">
            <RotateCcw className="w-5 h-5" /> Play Again
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-900 text-white">
      {/* Header */}
      <div className="pt-24 pb-6 px-4 text-center">
        <div className="text-6xl mb-4">🐻</div>
        <h1 className="text-3xl md:text-5xl font-bold text-green-300 mb-2">Bearcat's AI Marketing Safari</h1>
        <p className="text-green-200 text-lg mb-6">A special challenge for Binghamton Alumni</p>
        <div className="flex items-center justify-center gap-6">
          <span className="bg-green-800 border border-green-600 px-4 py-2 rounded-full text-sm font-semibold">
            Scenario {currentScenario + 1} of {scenarios.length}
          </span>
          <span className="bg-green-800 border border-green-600 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-400" /> Score: {score}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="px-4 mb-8 max-w-2xl mx-auto">
        <div className="flex gap-2">
          {scenarios.map((_, i) => (
            <div key={i} className={`h-2 flex-1 rounded-full ${i < currentScenario ? "bg-green-400" : i === currentScenario ? "bg-green-300" : "bg-green-800"}`} />
          ))}
        </div>
      </div>

      {/* Scenario Card */}
      <div className="px-4 pb-24 max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScenario}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="bg-green-800/50 border border-green-600/40 rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-300 text-sm font-semibold">🎯</span>
              <h2 className="text-xl font-bold">{scenario.title}</h2>
            </div>
            <p className="text-green-200 mb-6">{scenario.description}</p>

            <div className="bg-green-900/50 rounded-xl p-5 mb-8">
              <div className="flex items-center gap-2 text-green-300 font-semibold mb-1">
                <span>💡</span> {scenario.question}
              </div>
            </div>

            <div className="space-y-3">
              {scenario.options.map((option) => {
                let style = "border-green-600/40 bg-green-800/30 hover:border-green-400 hover:bg-green-700/30";
                if (showResult) {
                  if (option.id === scenario.correct) style = "border-green-400 bg-green-700/60";
                  else if (option.id === selectedAnswer) style = "border-red-500 bg-red-900/30";
                  else style = "border-green-700/30 bg-green-900/20 opacity-50";
                }
                return (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    disabled={!!showResult}
                    className={`w-full text-left px-5 py-4 rounded-xl border transition-all flex items-center gap-3 ${style}`}
                  >
                    <span className="font-bold text-green-300 uppercase shrink-0">{option.id}.</span>
                    <span>{option.text}</span>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                <div className={`rounded-xl p-5 mb-6 ${selectedAnswer === scenario.correct ? "bg-green-700/50 border border-green-500" : "bg-orange-900/40 border border-orange-600"}`}>
                  <p className="font-semibold mb-2">{selectedAnswer === scenario.correct ? "✅ Correct!" : "❌ Not quite!"}</p>
                  <p className="text-sm text-green-100">{scenario.explanation}</p>
                </div>
                <Button onClick={next} className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-3">
                  {currentScenario < scenarios.length - 1 ? "Next Scenario →" : "See My Results →"}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}