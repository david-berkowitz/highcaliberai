import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import MetaTags from "@/components/SEO/MetaTags";
import { CheckCircle2, Building2 } from "lucide-react";

export default function HotelAITraining() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await base44.entities.EmailSubscriber.create({
      email,
      source: "hotel_ai_training",
      segments: ["newsletter"],
      status: "active",
    });
    setSubmitted(true);
    setLoading(false);
  };

  const whatYoullBuild = [
    "An AI agent that generates blog posts and Google Business Profile updates on a set schedule",
    "Content tuned for AI-powered search (ChatGPT, Google, and whatever comes next)",
    "An article distribution system that pitches your local stories to regional outlets in your source markets",
    "A setup you actually understand and can manage yourself",
  ];

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title="AI Training for Independent Hotel Owners"
        description="Learn how to build an AI-powered content and marketing system for your small hotel — no agency required. Practical training from David Berkowitz, author of The Non-Obvious Guide to AI Marketing."
        url="https://highcaliberai.com/hotel-ai-training"
        canonical="https://highcaliberai.com/hotel-ai-training"
      />

      <div className="max-w-2xl mx-auto px-6 py-20 lg:py-28">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-red-50 border border-red-200">
            <Building2 className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-800">For Independent Hotels</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            AI for Independent Hotels: Build It Yourself
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            A practical training for small hotel owners who want to use AI to handle content and marketing — without hiring an agency or adding headcount.
          </p>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Most marketing tools are built for big hotel chains. This is for everyone else.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            If you run a small independent property, you already know AI could help — you just haven't had the time or the right entry point to figure out where. This training gives you both.
          </p>
          <p className="text-gray-700 leading-relaxed">
            You'll build a real, working AI system that creates content for your website, your Google Business Profile, and outreach to regional publications — all on autopilot, with you in control of how much it runs on its own.
          </p>
        </motion.div>

        {/* What You'll Build */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-14"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Build</h2>
          <ul className="space-y-4">
            {whatYoullBuild.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Who This Is For */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-14 bg-gray-50 rounded-xl p-8 border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Who This Is For</h2>
          <p className="text-gray-700 leading-relaxed">
            Independent hotel owners and operators running small to mid-size properties. You don't need a tech background. You need a use case — and this is one that pays off.
          </p>
        </motion.div>

        {/* Coming Soon / Email Capture */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-14 border-2 border-red-100 rounded-xl p-8 bg-gradient-to-br from-red-50 to-white"
        >
          <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wide">
            Coming Soon
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">This Training Is in Development</h2>
          <p className="text-gray-600 mb-6">
            If you want to be notified when it launches, drop your email below.
          </p>
          {submitted ? (
            <div className="flex items-center gap-3 text-green-700 bg-green-50 border border-green-200 rounded-lg px-5 py-4">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span className="font-medium">You're on the list — we'll reach out when it's ready.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {loading ? "Saving..." : "Notify Me"}
              </button>
            </form>
          )}
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-gray-200 pt-8"
        >
          <p className="text-sm text-gray-500 leading-relaxed">
            Led by <strong className="text-gray-700">David Berkowitz</strong>, founder of High Caliber AI and author of{" "}
            <em>The Non-Obvious Guide to AI Marketing</em> (Ideapress, 2025).
          </p>
        </motion.div>

      </div>
    </div>
  );
}