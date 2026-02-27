import React from "react";

const NEWS = [
  "🚨 BREAKING: Robin Uthappa STILL the most famous person David Berkowitz has ever met in a hotel lobby",
  "🔴 LIVE: Texas Football shirt officially deemed 'greatest fashion choice in cricket meeting history'",
  "⚡ ALERT: Paparazzi outside hotel CONFIRMED to be there for Robin, NOT David",
  "📡 DEVELOPING: January 26, 2008 named 'Best Day of David's Life' by self-appointed independent panel",
  "🚨 BREAKING: Robin Uthappa's smile in lobby photo scientifically rated 11/10 by leading researchers",
  "🔴 LIVE UPDATE: David Berkowitz reportedly still telling this story at every dinner party since 2008",
  "⚡ CONFIRMED: That Sahara India kit was the most stylish thing ever worn in a hotel lobby",
  "📡 SOURCES SAY: Robin was 'very chill' about the whole encounter. David was NOT.",
  "🚨 DEVELOPING: The Indian cricket team's hotel is now a pilgrimage site for David Berkowitz",
  "🔴 ALERT: Bowl-out legend Robin Uthappa has zero idea he has an American superfan website dedicated to him",
];

export default function BreakingNewsTicker() {
  const text = NEWS.join("   •••   ");

  return (
    <div className="relative z-20 flex items-stretch overflow-hidden" style={{ background: "#1a0000", height: "40px" }}>
      {/* BREAKING label */}
      <div
        className="flex-shrink-0 flex items-center px-4 font-black text-sm tracking-widest uppercase z-10"
        style={{ background: "#CC0000", color: "#fff", minWidth: "130px" }}
      >
        🚨 BREAKING
      </div>

      {/* Scrolling text */}
      <div className="overflow-hidden flex-1 relative flex items-center">
        <div
          className="whitespace-nowrap text-sm font-bold"
          style={{
            color: "#FFD700",
            animation: "ticker-scroll 60s linear infinite",
          }}
        >
          {text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}
        </div>
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}