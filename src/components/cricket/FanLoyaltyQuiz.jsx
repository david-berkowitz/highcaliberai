import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUESTIONS = [
  {
    q: "What tournament did Robin Uthappa help India win in 2007?",
    options: ["ICC World Twenty20", "The Ashes", "IPL Season 1", "The Olympics (cricket)"],
    correct: 0,
    roast: "REALLY?? The T20 WORLD CUP. The MOST ICONIC moment of his career. Pay attention!!",
  },
  {
    q: "What is Robin Uthappa's legendary nickname?",
    options: ["The Gentle Giant", "The Walking Assassin", "Helicopter Uthappa", "The Lobby Legend"],
    correct: 1,
    roast: "IT'S 'THE WALKING ASSASSIN'! He literally walks down to smash fast bowlers. Iconic!!!",
  },
  {
    q: "What was David Berkowitz wearing when he met Robin?",
    options: ["A suit", "An India jersey", "Texas Football shirt", "A cricket whites"],
    correct: 2,
    roast: "A TEXAS FOOTBALL SHIRT. In India. In a cricket star's hotel. Peak David energy.",
  },
  {
    q: "What date was the legendary meeting?",
    options: ["July 4, 2007", "January 26, 2008", "March 15, 2009", "December 31, 2007"],
    correct: 1,
    roast: "January 26, 2008 — INDIA'S REPUBLIC DAY. You call yourself a fan??",
  },
  {
    q: "How many IPL titles has Robin Uthappa won?",
    options: ["Zero (he's overrated)", "One", "Two", "Seventeen"],
    correct: 2,
    roast: "TWO! KKR 2014 and CSK 2021. And if you said zero you need to leave this website immediately.",
  },
];

export default function FanLoyaltyQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);
  const [showRoast, setShowRoast] = useState(false);

  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === QUESTIONS[current].correct;
    if (correct) setScore((s) => s + 1);
    else setShowRoast(true);
    setTimeout(() => {
      setShowRoast(false);
      setSelected(null);
      if (current + 1 >= QUESTIONS.length) setDone(true);
      else setCurrent((c) => c + 1);
    }, correct ? 1200 : 2500);
  };

  const reset = () => { setCurrent(0); setScore(0); setSelected(null); setDone(false); setShowRoast(false); };

  const getRating = () => {
    if (score === 5) return { label: "CERTIFIED ROBIN SUPERFAN 🏆", color: "#FF9933", emoji: "🏆🏆🏆" };
    if (score >= 3) return { label: "Decent Fan. Could Do Better.", color: "#00BFFF", emoji: "💙💙" };
    if (score >= 1) return { label: "You Barely Know Him. For Shame.", color: "#FF6600", emoji: "😬" };
    return { label: "Delete This Website From Your Browser History.", color: "#CC0000", emoji: "💀" };
  };

  const q = QUESTIONS[current];

  return (
    <div
      className="rounded-3xl p-8 max-w-2xl mx-auto"
      style={{ background: "rgba(0,0,0,0.5)", border: "3px solid #FF9933" }}
    >
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">🏏</div>
        <h3 className="text-3xl font-black text-white uppercase">Fan Loyalty Test</h3>
        <p className="text-orange-400 font-bold text-sm mt-1">ARE YOU REALLY A TRUE BELIEVER?</p>
      </div>

      {!done ? (
        <div>
          <div className="flex justify-between text-sm text-blue-300 font-bold mb-4">
            <span>Question {current + 1} of {QUESTIONS.length}</span>
            <span>Score: {score} 💙</span>
          </div>
          <div
            className="text-xl font-black text-white text-center mb-6 p-4 rounded-xl"
            style={{ background: "rgba(255,153,51,0.15)" }}
          >
            {q.q}
          </div>

          <AnimatePresence>
            {showRoast && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-red-400 font-black text-sm mb-4 p-3 rounded-xl"
                style={{ background: "rgba(200,0,0,0.2)", border: "1px solid red" }}
              >
                ❌ WRONG! {q.roast}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 gap-3">
            {q.options.map((opt, i) => {
              let bg = "rgba(255,255,255,0.08)";
              let border = "rgba(255,153,51,0.3)";
              if (selected !== null) {
                if (i === q.correct) { bg = "rgba(19,136,8,0.3)"; border = "#138808"; }
                else if (i === selected && selected !== q.correct) { bg = "rgba(200,0,0,0.3)"; border = "#CC0000"; }
              }
              return (
                <motion.button
                  key={i}
                  whileHover={selected === null ? { scale: 1.03 } : {}}
                  whileTap={selected === null ? { scale: 0.97 } : {}}
                  onClick={() => handleAnswer(i)}
                  className="text-left p-4 rounded-xl text-white font-bold transition-all"
                  style={{ background: bg, border: `2px solid ${border}`, cursor: selected !== null ? "default" : "pointer" }}
                >
                  {String.fromCharCode(65 + i)}. {opt}
                </motion.button>
              );
            })}
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">{getRating().emoji}</div>
          <div className="text-5xl font-black mb-2" style={{ color: getRating().color }}>
            {score}/5
          </div>
          <div className="text-2xl font-black text-white mb-2 uppercase">{getRating().label}</div>
          <p className="text-blue-300 mb-6">
            {score === 5 ? "David Berkowitz approves of you. Welcome to the inner circle." : "Robin deserves better fans. Try again."}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="font-black px-8 py-3 rounded-full uppercase text-sm"
            style={{ background: "#FF9933", color: "#00308F" }}
          >
            Try Again 🔄
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}