import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SPARKLES = ["✨", "💙", "🏏", "⭐", "🔥", "💫", "🇮🇳", "🏆", "💥", "❤️"];

function FloatingSparkle({ emoji, style }) {
  return (
    <motion.div
      className="fixed pointer-events-none text-2xl z-0 select-none"
      style={style}
      animate={{ y: [0, -30, 0], rotate: [0, 15, -15, 0], scale: [1, 1.3, 1] }}
      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
    >
      {emoji}
    </motion.div>
  );
}

function GlitterText({ children, className = "" }) {
  return (
    <span
      className={className}
      style={{
        background: "linear-gradient(90deg, #FF9933, #FFFFFF, #138808, #00BFFF, #FF9933)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "shimmer 3s linear infinite",
      }}
    >
      {children}
    </span>
  );
}

const sparklesData = Array.from({ length: 18 }, (_, i) => ({
  emoji: SPARKLES[i % SPARKLES.length],
  style: {
    left: `${(i * 47 + 11) % 95}%`,
    top: `${(i * 31 + 7) % 95}%`,
  },
}));

export default function Cricket() {
  const [heartCount, setHeartCount] = useState(0);
  const [showPop, setShowPop] = useState(false);

  const handleHeart = () => {
    setHeartCount((c) => c + 1);
    setShowPop(true);
    setTimeout(() => setShowPop(false), 600);
  };

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background: "linear-gradient(135deg, #00308F 0%, #003580 30%, #0055A4 60%, #001F5B 100%)",
      }}
    >
      <style>{`
        @keyframes shimmer { to { background-position: 200% center; } }
        @keyframes bounce-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .spin-star { animation: spin-slow 6s linear infinite; display:inline-block; }
        .blink { animation: blink 1.2s step-start infinite; }
        .text-shadow-glow { text-shadow: 0 0 20px #FF9933, 0 0 40px #FF6600, 0 0 60px rgba(255,153,51,0.5); }
        .border-glow { box-shadow: 0 0 0 4px #FF9933, 0 0 30px #FF9933, 0 0 60px rgba(255,153,51,0.4); }
        .card-glow { box-shadow: 0 0 0 3px rgba(0,191,255,0.5), 0 8px 40px rgba(0,100,200,0.5); }
      `}</style>

      {sparklesData.map((s, i) => (
        <FloatingSparkle key={i} emoji={s.emoji} style={s.style} />
      ))}

      {/* TOP BANNER */}
      <div
        className="relative z-10 text-center py-3 text-xs sm:text-sm font-bold tracking-widest uppercase overflow-hidden"
        style={{ background: "linear-gradient(90deg, #FF9933, #FF6600, #FF9933)", color: "#00308F" }}
      >
        🏏 THE OFFICIAL DAVID BERKOWITZ × ROBIN UTHAPPA FAN PAGE 🏏 ★ EST. JANUARY 26, 2008 ★ WE LOVE YOU ROBIN!!! 💙💙💙
      </div>

      {/* HERO */}
      <section className="relative z-10 pt-16 pb-8 px-4 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
        >
          <div className="text-6xl mb-4">🏏✨🏆✨🏏</div>
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-black uppercase mb-2 bounce-slow"
            style={{ color: "#FF9933", letterSpacing: "-1px", textShadow: "0 0 20px #FF9933, 0 0 40px #FF6600" }}
          >
            ROBIN
          </h1>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-black uppercase mb-4"
            style={{ color: "#FFFFFF", letterSpacing: "4px", textShadow: "0 0 20px #00BFFF" }}
          >
            UTHAPPA
          </h1>
          <div className="text-3xl sm:text-4xl font-black italic mb-6" style={{ color: "#00BFFF" }}>
            "The Walking Assassin" 🔥
          </div>
          <GlitterText className="text-xl sm:text-2xl font-bold block mb-8">
            ★ MY ABSOLUTE CRICKET HERO & THE DAY I MET HIM ★
          </GlitterText>
        </motion.div>

        {/* Heart button */}
        <div className="flex justify-center items-center gap-4 mb-4">
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.15 }}
            onClick={handleHeart}
            className="relative text-5xl cursor-pointer select-none bg-transparent border-none"
          >
            ❤️
            <AnimatePresence>
              {showPop && (
                <motion.div
                  key="pop"
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  animate={{ opacity: 0, y: -50, scale: 1.8 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-8 left-1/2 -translate-x-1/2 text-2xl pointer-events-none"
                >
                  +1💙
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          <span className="text-white font-black text-xl">
            {heartCount > 0 ? `${heartCount.toLocaleString()} hearts sent! 💙` : "Tap to send love!"}
          </span>
        </div>

        <div className="blink text-yellow-300 font-bold text-lg">
          ★★★ BEST. CRICKETER. EVER. ★★★
        </div>
      </section>

      {/* THE MEETING - MAIN PHOTO */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div
              className="inline-block text-2xl sm:text-3xl font-black uppercase px-6 py-3 rounded-full mb-6"
              style={{ background: "#FF9933", color: "#00308F" }}
            >
              🚨 THE HISTORIC MEETING 🚨
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-2">
              JANUARY 26, 2008
            </h2>
            <p className="text-xl text-blue-200 font-bold">Republic Day • India • The Most Epic Day of My Life</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -60, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ type: "spring" }}
              className="relative"
            >
              <div className="border-glow rounded-2xl overflow-hidden">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/1b379b605_image.png"
                  alt="David Berkowitz meets Robin Uthappa"
                  className="w-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 text-center px-4 py-2 rounded-xl font-black text-sm rotate-3 z-10"
                style={{ background: "#FF9933", color: "#00308F" }}
              >
                ME & MY HERO!!! 😭💙
              </div>
              <div className="absolute -top-4 -left-4 text-4xl spin-star">⭐</div>
              <div className="absolute -top-4 -right-4 text-4xl" style={{ animation: "spin-slow 6s linear infinite reverse", display: "inline-block" }}>🏆</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div
                className="rounded-2xl p-6 card-glow"
                style={{ background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,153,51,0.4)" }}
              >
                <div className="text-3xl mb-3">📖</div>
                <h3 className="text-2xl font-black text-orange-400 mb-3 uppercase">My Diary Entry</h3>
                <p className="text-blue-100 leading-relaxed text-base">
                  I literally could NOT BELIEVE IT. I was staying at a luxury hotel in India and I looked up and there he was — <strong className="text-orange-400">ROBIN UTHAPPA</strong> — just casually walking through the lobby in his Sahara India training kit like it was nothing. I was wearing my Texas Football shirt (very on-brand for a cricket lobby encounter lol) and I just had to go up to him. He was SO NICE and posed for this photo and I was shaking. This was just months after he helped India win the T20 World Cup. I WAS MEETING AN ACTUAL CRICKET LEGEND.
                </p>
              </div>
              <div
                className="rounded-2xl p-6 card-glow"
                style={{ background: "rgba(255,255,255,0.08)", border: "2px solid rgba(0,191,255,0.4)" }}
              >
                <div className="text-3xl mb-3">🌟</div>
                <h3 className="text-2xl font-black text-cyan-400 mb-3 uppercase">Why This Moment Changed Me</h3>
                <p className="text-blue-100 leading-relaxed text-base">
                  Being an American in India and randomly bumping into one of cricket's brightest stars was the most surreal travel experience of my life. The paparazzi were literally outside the hotel waiting for him. <strong className="text-cyan-400">PAPARAZZI.</strong> I was basically adjacent to celebrity. This is my origin story as a cricket stan and I REGRET NOTHING.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PAPARAZZI PHOTO */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div
              className="inline-block text-xl sm:text-2xl font-black uppercase px-6 py-3 rounded-full mb-4"
              style={{ background: "rgba(0,191,255,0.2)", border: "2px solid #00BFFF", color: "#00BFFF" }}
            >
              📸 PROOF THAT ROBIN IS A BIG DEAL
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              The Paparazzi Were THERE For Him 👀
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden mx-auto max-w-3xl card-glow"
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/51b377e2d_image.png"
              alt="Paparazzi outside hotel waiting for the cricket team"
              className="w-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4 text-center font-black text-lg"
              style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.85))", color: "#FF9933" }}
            >
              📹 The press corps outside our hotel. This is what FAME looks like. 📹
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-blue-200 mt-6 max-w-2xl mx-auto text-lg font-medium italic"
          >
            "I stepped outside the hotel and was greeted by an army of photographers and camera crews all waiting for the Indian cricket team. I had never seen anything like it outside of a Hollywood premiere. These boys were ROYALTY in India."
            <span className="block text-orange-400 font-black mt-2 not-italic">— David Berkowitz, Biggest Robin Fan in New York</span>
          </motion.p>
        </div>
      </section>

      {/* ROBIN'S ACHIEVEMENTS */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-2 uppercase">
              Why Robin Is <GlitterText>THE GOAT</GlitterText>
            </h2>
            <p className="text-blue-300 text-xl">Let me count the ways... 🥰</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: "🏆", title: "T20 World Cup Winner", year: "2007", desc: "Part of the legendary Indian squad that WON the inaugural ICC World Twenty20! Absolute icon energy!" },
              { emoji: "🎯", title: "The Bowl-Out Hero", year: "2007", desc: "Nerves of steel against Pakistan in the bowl-out. Every Indian cricket fan knows this moment. LEGEND STATUS." },
              { emoji: "🔥", title: "The Walking Assassin", year: "2008+", desc: "His nickname for WALKING DOWN THE PITCH to smash fast bowlers. Who does that?! Robin Uthappa does that." },
              { emoji: "🏅", title: "Orange Cap Winner", year: "2014", desc: "Highest run-scorer of the ENTIRE IPL 2014 season with KKR. Most dominant batting performance that year." },
              { emoji: "💰", title: "$2 Million IPL Star", year: "2011", desc: "One of the first multi-million dollar IPL signings. Pune Warriors paid MASSIVE money. He was THAT good." },
              { emoji: "🏏", title: "IPL Double Champion", year: "2014 & 2021", desc: "Won the IPL with KKR AND Chennai Super Kings. Doesn't matter what team — Robin wins trophies." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? 1 : -1 }}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(255,153,51,0.15), rgba(0,191,255,0.1))",
                  border: "2px solid rgba(255,153,51,0.35)",
                }}
              >
                <div className="text-5xl mb-3">{item.emoji}</div>
                <div
                  className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3"
                  style={{ background: "#FF9933", color: "#00308F" }}
                >
                  {item.year}
                </div>
                <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAN OATH */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-8 sm:p-12 text-center card-glow"
            style={{
              background: "linear-gradient(135deg, rgba(255,153,51,0.2), rgba(19,136,8,0.1), rgba(0,48,143,0.3))",
              border: "3px solid #FF9933",
            }}
          >
            <div className="text-6xl mb-6">🇮🇳💙🏏</div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase">
              David's Official Fan Oath
            </h2>
            <div
              className="text-lg sm:text-xl font-bold leading-relaxed mb-8 p-6 rounded-2xl"
              style={{ background: "rgba(0,0,0,0.3)", color: "#93C5FD", border: "1px dashed rgba(255,153,51,0.5)" }}
            >
              <span className="text-orange-400 font-black text-2xl block mb-4">✋ I, David Berkowitz, do solemnly swear ✋</span>
              That January 26, 2008 — Indian Republic Day — was the greatest day of my travels. That meeting Robin Uthappa in a hotel lobby in India, wearing my Texas Football shirt, while he wore the iconic Sahara India kit, was a once-in-a-lifetime moment. That he was INCREDIBLY gracious and kind and absolutely deserved every ounce of fame those paparazzi outside were there to document. That I will forever be Team Robin Uthappa. World without end. Amen. 🏏
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-2xl mb-6">
              {["💙", "🏆", "🔥", "🇮🇳", "⭐", "🏏", "💫", "👑", "✨", "❤️"].map((e, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                >
                  {e}
                </motion.span>
              ))}
            </div>
            <div
              className="text-5xl sm:text-6xl font-black uppercase"
              style={{ color: "#FF9933", textShadow: "0 0 30px #FF6600" }}
            >
              WE LOVE YOU ROBIN!!!
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="relative z-10 text-center py-8 px-4 mt-4"
        style={{ background: "rgba(0,0,0,0.4)", borderTop: "2px solid rgba(255,153,51,0.3)" }}
      >
        <p className="text-blue-300 text-sm font-bold mb-2">
          🏏 Made with infinite love by David Berkowitz — Robin Uthappa's #1 American Fan Since January 26, 2008 🏏
        </p>
        <p className="text-blue-500 text-xs">
          Colors: India Light Blue 💙 • Saffron 🧡 • White ⚪ • Green 💚
        </p>
        <div className="mt-4 text-2xl">🏆🏏🇮🇳⭐💙🔥✨</div>
      </footer>
    </div>
  );
}