import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import MetaTags from "@/components/SEO/MetaTags";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, Brain, Sparkles, Users, Target, Lightbulb,
  Book, ExternalLink, Mail, ArrowRight, Award, Rocket,
  Briefcase, Newspaper, Zap, CheckCircle, FileText, Video
} from "lucide-react";
import ShareButtons from "@/components/ShareButtons";
import NewsletterSignup from "@/components/NewsletterSignup";

const FREE_TOOLS = [
  {
    category: "Research & Insights",
    emoji: "🔍",
    items: [
      { name: "SparkToro", desc: "Find where your audience hangs out online — invaluable for startup targeting", href: "https://sparktoro.com/", badge: "Free tier" },
      { name: "NotebookLM", desc: "Google's AI research assistant — upload docs, get instant summaries and Q&A", href: "https://notebooklm.google/", badge: "Free" },
      { name: "Otterly AI", desc: "Track how your brand shows up in AI search results (ChatGPT, Perplexity, etc.)", href: "https://otterly.ai/?via=david", badge: "Free trial" },
      { name: "PanelSynth", desc: "AI-powered synthetic focus groups — get consumer insights fast without recruiting real participants", href: "https://panelsynth.com", badge: "Beta", mine: true },
    ],
  },
  {
    category: "Content Creation",
    emoji: "✨",
    items: [
      { name: "Ideogram", desc: "AI image generation with great text rendering — perfect for fast ad creative", href: "https://ideogram.ai/", badge: "Free tier" },
      { name: "Opus Pro", desc: "Turn long videos into short social clips automatically", href: "https://www.opus.pro/?via=a4312b", badge: "Free trial" },
      { name: "Napkin", desc: "Turn text into infographics and visual slides instantly", href: "https://www.napkin.ai/", badge: "Free tier" },
      { name: "ElevenLabs", desc: "AI voice generation — narrate your content without a studio", href: "https://elevenlabs.io/", badge: "Free tier" },
      { name: "Google Labs", desc: "Experimental AI content tools from Google, mostly free to try", href: "https://labs.google/experiments", badge: "Free" },
      { name: "HeyGen", desc: "AI avatar video generation — create spokesperson videos fast", href: "https://www.heygen.com/", badge: "Free tier" },
    ],
  },
  {
    category: "Automation & Building",
    emoji: "⚡",
    items: [
      { name: "Base44", desc: "Build AI-powered apps and tools without code — fast and surprisingly powerful", href: "https://base44.pxf.io/c/5604633/2049275/25619?trafcat=base", badge: "Free tier" },
      { name: "Lovable", desc: "AI-powered app development — describe what you want, get a working product", href: "https://lovable.dev/?via=david-berkowitz", badge: "Free tier" },
      { name: "n8n", desc: "Workflow automation that connects your tools without code", href: "https://n8n.io/", badge: "Free tier" },
      { name: "Manus", desc: "AI agent that does research, analysis, and complex tasks end-to-end", href: "https://manus.im/invitation/AX6DKLYSICEZZL?utm_source=invitation&utm_medium=social&utm_campaign=copy_link", badge: "Free trial" },
    ],
  },
  {
    category: "AI Directories & Prompts",
    emoji: "📂",
    items: [
      { name: "There's an AI for That", desc: "Comprehensive database to find the right AI tool for any task", href: "https://www.theresanaiforthat.com/", badge: "Free" },
      { name: "Supertools by The Rundown", desc: "Curated, searchable directory of the best AI tools", href: "https://www.supertools.com/", badge: "Free" },
      { name: "Anthropic's Prompt Library", desc: "Ready-to-use Claude prompts for marketing, writing, analysis", href: "https://docs.anthropic.com/en/prompt-library/library", badge: "Free" },
      { name: "1000+ ChatGPT Prompts", desc: "Massive prompt library to jumpstart your AI marketing workflows", href: "https://www.notion.so/3c26e97a23a948d499e9f1882dd2f542?pvs=21", badge: "Free" },
    ],
  },
  {
    category: "Learn & Stay Sharp",
    emoji: "📚",
    items: [
      { name: "AIMG YouTube Channel", desc: "Dozens of expert interviews on AI marketing — free to watch anytime", href: "https://www.youtube.com/@aimarketersguild", badge: "Free" },
      { name: "The Neuron Daily", desc: "The best daily AI newsletter — curated news + practical tips", href: "https://www.theneurondaily.com/", badge: "Free" },
      { name: "Wonder Tools", desc: "Weekly AI tool roundups by Jeremy Caplan — concise and useful", href: "https://wondertools.substack.com/", badge: "Free" },
      { name: "One Useful Thing", desc: "Ethan Mollick's newsletter on how to actually use AI — must-read", href: "https://www.oneusefulthing.org/", badge: "Free" },
    ],
  },
];

export default function QueensTech() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <MetaTags 
        title="AI-Powered Startup Marketing Resources — Queens Tech + Innovation Challenge"
        description="Free and low-cost AI marketing tools and resources from David Berkowitz's keynote at the Queens Tech + Innovation Challenge, March 31, 2026."
        url="https://highcaliberai.com/queenstech"
        canonical="https://highcaliberai.com/queenstech"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/49ad330a9_image.png"
                alt="Queens Tech + Innovation Challenge"
                className="h-16 mx-auto mb-4"
              />
            </div>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Queens Tech + Innovation Challenge · March 31, 2026</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              AI-Powered Marketing<br />on a <span className="text-blue-600">Bootstrap Budget</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              The tools, tactics, and resources from David Berkowitz's keynote — curated for founders and early-stage entrepreneurs who need to market smarter without a big team or big budget.
            </p>

            <div className="flex justify-center mb-8">
              <ShareButtons 
                url="https://highcaliberai.com/queenstech"
                title="AI-Powered Startup Marketing on a Bootstrap Budget"
                description="Free AI marketing tools and resources from David Berkowitz's keynote at Queens Tech + Innovation Challenge"
              />
            </div>

            {/* What you'll learn */}
            <div className="max-w-2xl mx-auto bg-blue-600 rounded-2xl p-7 shadow-xl text-left mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-6 h-6 text-white" />
                <h2 className="text-lg font-bold text-white">What the keynote covers</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Identify the right AI tools for your stage and budget",
                  "Build a lean content engine with AI-assisted workflows",
                  "Use AI to compete with bigger players on organic and paid",
                  "Avoid the most common AI marketing mistakes startups make",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-200 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-blue-500 pt-5">
                <p className="text-white font-semibold text-sm mb-2">📊 Keynote Slides</p>
                <p className="text-blue-200 text-xs italic">Slides will be posted here after the event on March 31. Check back soon!</p>
              </div>
            </div>

            {/* Bio */}
            <div className="max-w-xl mx-auto bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex items-start gap-4 text-left">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/7cdf61db4_introstars2copy.png"
                alt="David Berkowitz"
                className="w-16 h-16 rounded-full flex-shrink-0"
                loading="lazy"
              />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">David Berkowitz</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AI marketing strategist, founder of AI Marketers Guild (7,000+ members), and author of <em>The Non-Obvious Guide to Using AI for Marketing</em>. Fractional CMO for AI-forward companies. 400+ speaking engagements worldwide.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RSVP strip */}
      <div className="bg-blue-700 py-4 px-6 text-center">
        <a 
          href="https://www.eventbrite.com/e/queens-tech-innovation-challenge-networking-finalists-announcement-tickets-1984475968041"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-200 transition-colors"
        >
          <Award className="w-4 h-4" />
          Attending the event? RSVP on Eventbrite →
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Free & Low-Cost Resources */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">From the keynote</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Free & Low-Cost AI Tools for Startups</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every tool here has a free tier or costs less than $30/month. No enterprise budget required.
            </p>
          </div>

          <div className="space-y-12">
            {FREE_TOOLS.map((section) => (
              <div key={section.category}>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>{section.emoji}</span> {section.category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((tool) => (
                    <a
                      key={tool.name}
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{tool.name}</h4>
                          {tool.mine && <span className="text-xs font-bold px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded">David's</span>}
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${tool.badge === 'Beta' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>{tool.badge}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{tool.desc}</p>
                      <div className="flex items-center gap-1 mt-3 text-blue-600 text-xs font-medium">
                        Try it <ExternalLink className="w-3 h-3" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cross-link to full library */}
          <div className="mt-12 bg-gray-900 rounded-2xl p-8 text-center">
            <Sparkles className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Want the full list?</h3>
            <p className="text-gray-400 text-sm mb-5 max-w-md mx-auto">
              The complete High Caliber AI resource library has 50+ tools across research, social, automation, newsletters, communities, and more — all personally curated.
            </p>
            <Link to={createPageUrl("Resources")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Browse the Full Resource Library <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* More from David */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">More from High Caliber AI</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <Link to={createPageUrl("Hustle")} className="group">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all h-full">
                <Newspaper className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">The Marketing Hustle</h3>
                <p className="text-gray-500 text-sm mb-3">Practical marketing strategies built for founders and small teams who hustle.</p>
                <span className="text-blue-600 text-sm font-medium flex items-center gap-1">Read it <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
            <Link to={createPageUrl("Jobs")} className="group">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all h-full">
                <Briefcase className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">Job Resources</h3>
                <p className="text-gray-500 text-sm mb-3">Hiring for your startup or exploring your next role? Tools and tips for the AI-era job market.</p>
                <span className="text-blue-600 text-sm font-medium flex items-center gap-1">Explore <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
            <a href="https://www.amazon.com/Non-Obvious-Guide-AI-Marketing-Guides/dp/1646871863/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all h-full">
                <Book className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">The Book</h3>
                <p className="text-gray-500 text-sm mb-3"><em>The Non-Obvious Guide to Using AI for Marketing</em> — the companion to everything in this keynote.</p>
                <span className="text-blue-600 text-sm font-medium flex items-center gap-1">Get it on Amazon <ExternalLink className="w-4 h-4" /></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <Mail className="w-10 h-10 mx-auto mb-3 text-white" />
            <h3 className="text-2xl font-bold text-white mb-2">Get the slides + more resources</h3>
            <p className="text-blue-100 text-sm">
              Sign up and I'll send the keynote slides when they're ready, plus monthly AI marketing insights for startup marketers.
            </p>
          </div>
          <NewsletterSignup source="queenstech" />
        </div>
      </section>
    </div>
  );
}