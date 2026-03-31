import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Globe, Shuffle, Sparkles, Volume2, RefreshCw } from "lucide-react";

const QUEENS_LANGUAGES = [
  { name: "Mandarin Chinese", community: "Flushing, Queens — the largest Chinatown outside Manhattan", emoji: "🇨🇳", script: "中文" },
  { name: "Spanish", community: "Jackson Heights & Corona — Queens is home to one of NYC's largest Latino communities", emoji: "🇪🇸", script: "Español" },
  { name: "Korean", community: "Flushing — Little Korea, one of the largest Korean communities outside Korea", emoji: "🇰🇷", script: "한국어" },
  { name: "Hindi", community: "Jackson Heights & Elmhurst — the heart of South Asian Queens", emoji: "🇮🇳", script: "हिन्दी" },
  { name: "Punjabi", community: "Richmond Hill — home to a thriving Sikh community", emoji: "🌐", script: "ਪੰਜਾਬੀ" },
  { name: "Bengali", community: "Jamaica — one of NYC's fastest-growing Bangladeshi communities", emoji: "🇧🇩", script: "বাংলা" },
  { name: "Greek", community: "Astoria — once the largest Greek community outside Greece", emoji: "🇬🇷", script: "Ελληνικά" },
  { name: "Tagalog", community: "Woodside — known as 'Little Manila', one of the largest Filipino communities in the US", emoji: "🇵🇭", script: "Filipino" },
  { name: "Romanian", community: "Sunnyside & Woodside — a large Eastern European community", emoji: "🇷🇴", script: "Română" },
  { name: "Gujarati", community: "Jackson Heights — alongside a thriving South Asian business district", emoji: "🌐", script: "ગુજરાતી" },
  { name: "Urdu", community: "Jamaica & Richmond Hill — a major South Asian hub in southern Queens", emoji: "🇵🇰", script: "اردو" },
  { name: "Arabic", community: "Astoria — home to a large Egyptian and Middle Eastern community", emoji: "🇪🇬", script: "عربي" },
  { name: "Polish", community: "Ridgewood — a historically Polish neighborhood on the Queens/Brooklyn border", emoji: "🇵🇱", script: "Polski" },
  { name: "Nepali", community: "Woodside & Jackson Heights — a growing Nepali community", emoji: "🇳🇵", script: "नेपाली" },
  { name: "Haitian Creole", community: "Cambria Heights — a large Haitian community in southeastern Queens", emoji: "🇭🇹", script: "Kreyòl" },
];

export default function QueensTranslator() {
  const [tagline, setTagline] = useState("");
  const [language, setLanguage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tried, setTried] = useState(false);

  const pickRandomLanguage = () => {
    const idx = Math.floor(Math.random() * QUEENS_LANGUAGES.length);
    return QUEENS_LANGUAGES[idx];
  };

  const translate = async () => {
    if (!tagline.trim()) return;
    setLoading(true);
    setResult(null);
    const lang = pickRandomLanguage();
    setLanguage(lang);
    setTried(true);

    const response = await base44.integrations.Core.InvokeLLM({
      prompt: `You are a fun, enthusiastic translator for a marketing keynote event in Queens, NY — the most linguistically diverse place on Earth.

Translate this startup marketing tagline into ${lang.name}:
"${tagline}"

Return ONLY this JSON (no extra text):
{
  "translation": "the translated text",
  "pronunciation": "phonetic pronunciation guide for English speakers (romanized, easy to read)",
  "literal_meaning": "a fun note about what it literally means or any interesting nuance",
  "marketing_insight": "one sentence about how ${lang.name}-speaking communities in Queens might uniquely respond to this message — tie it to marketing"
}`,
      response_json_schema: {
        type: "object",
        properties: {
          translation: { type: "string" },
          pronunciation: { type: "string" },
          literal_meaning: { type: "string" },
          marketing_insight: { type: "string" },
        },
      },
    });

    setResult(response);
    setLoading(false);
  };

  const tryAnother = async () => {
    if (!tagline.trim()) return;
    await translate();
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-10 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-8 text-6xl">🌍</div>
        <div className="absolute top-8 right-12 text-5xl">🗽</div>
        <div className="absolute bottom-8 left-16 text-4xl">🌏</div>
        <div className="absolute bottom-4 right-8 text-5xl">🌎</div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            <Globe className="w-3.5 h-3.5" /> QUEENS EXCLUSIVE EXPERIENCE
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            The Queens Language Challenge 🗺️
          </h3>
          <p className="text-blue-200 text-sm max-w-xl mx-auto leading-relaxed">
            Queens is the most linguistically diverse place on Earth — <strong className="text-white">160+ languages</strong> spoken across 2.3 million people. 
            Type your startup tagline and discover how it sounds in a random Queens language.
          </p>
        </div>

        {/* Input */}
        <div className="max-w-xl mx-auto mb-6">
          <label className="block text-blue-200 text-sm font-semibold mb-2">Your startup tagline or marketing message:</label>
          <div className="flex gap-2">
            <input
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !loading && translate()}
              placeholder="e.g. The fastest way to find your first customers"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
            <button
              onClick={translate}
              disabled={loading || !tagline.trim()}
              className="px-5 py-3 bg-yellow-400 text-yellow-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-40 flex items-center gap-2 whitespace-nowrap text-sm"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <><Sparkles className="w-4 h-4" /> Translate!</>
              )}
            </button>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-8">
            <Globe className="w-10 h-10 text-yellow-400 mx-auto mb-3 animate-pulse" />
            <p className="text-blue-200 text-sm">Picking a random Queens language and translating…</p>
          </div>
        )}

        {/* Result */}
        <AnimatePresence>
          {result && language && !loading && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6">
                {/* Language header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/20">
                  <span className="text-4xl">{language.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xl font-bold text-white">{language.name}</h4>
                      <span className="text-white/50 text-sm">{language.script}</span>
                    </div>
                    <p className="text-blue-300 text-xs mt-0.5">📍 {language.community}</p>
                  </div>
                </div>

                {/* Translation */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-1">Your tagline in {language.name}:</p>
                  <p className="text-2xl font-bold text-white leading-relaxed">{result.translation}</p>
                </div>

                {/* Pronunciation */}
                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Volume2 className="w-3.5 h-3.5 text-blue-300" />
                    <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest">How to say it:</p>
                  </div>
                  <p className="text-white text-sm font-mono">{result.pronunciation}</p>
                </div>

                {/* Nuance + marketing insight */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {result.literal_meaning && (
                    <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-4">
                      <p className="text-xs font-semibold text-yellow-400 mb-1">🔤 Nuance:</p>
                      <p className="text-yellow-100 text-sm leading-relaxed">{result.literal_meaning}</p>
                    </div>
                  )}
                  {result.marketing_insight && (
                    <div className="bg-green-400/10 border border-green-400/20 rounded-xl p-4">
                      <p className="text-xs font-semibold text-green-400 mb-1">📈 Marketing insight:</p>
                      <p className="text-green-100 text-sm leading-relaxed">{result.marketing_insight}</p>
                    </div>
                  )}
                </div>

                {/* Try another */}
                <div className="mt-5 text-center">
                  <button
                    onClick={tryAnother}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <Shuffle className="w-4 h-4" /> Translate into a different Queens language
                  </button>
                </div>
              </div>

              <p className="text-center text-white/30 text-xs mt-3">
                This is one of {QUEENS_LANGUAGES.length} languages in this experience — Queens has 160+ total. Reach them all with the right marketing.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pre-interaction nudge */}
        {!tried && !loading && (
          <div className="text-center">
            <p className="text-white/40 text-xs">
              ↑ Try it — every translation is a surprise from a real Queens community
            </p>
          </div>
        )}
      </div>
    </div>
  );
}