import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Zap, Users, BookOpen, Target, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";

const resources = [
  {
    title: "Content Production Checklist",
    desc: "Complete checklist for AI content production covering ownership, effectiveness, and brand safety",
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/c3e6c1fd9_NOGAIMarketingResource--ContentProductionChecklist.pdf"
  },
  {
    title: "Legal & Ethical Risk",
    desc: "Comprehensive checklist ensuring AI implementations align with legal, ethical, and brand safety",
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/ec0f9bb1e_NOGAIMarketingResource--LegalEthicalRisk.pdf"
  },
  {
    title: "Process Optimization",
    desc: "Worksheet to assess marketing processes and identify AI optimization opportunities",
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/3115f5158_NOGAIMarketingResource--ProcessOptimization.pdf"
  },
  {
    title: "ROI & Performance Tracking",
    desc: "Measure effectiveness of AI implementation and assess return on investment over time",
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/bb331f866_NOGAIMarketingResource--ROIandPerformanceTracking.pdf"
  },
  {
    title: "Tech Recommendations",
    desc: "Curated list of recommended AI tools across categories from AI engines to SEO and writing",
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/93edc06d2_NOGAIMarketingResource--TechRecommendations.pdf"
  },
  {
    title: "Tool Selection Worksheet",
    desc: "Evaluate and compare AI tools based on functionality, usability, cost, and business alignment",
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/1069e9a5b_NOGAIMarketingResource--ToolSelection.pdf"
  }
];

const toolCategories = [
  {
    name: "Research & Insights",
    tools: [
      { name: "SparkToro", desc: "Audience research and intelligence platform", url: "https://sparktoro.com/" },
      { name: "Otterly AI", desc: "AI engine monitoring and brand tracking", url: "https://otterly.ai/?via=david" },
      { name: "NotebookLM", desc: "Google's AI-powered research and note-taking assistant", url: "https://notebooklm.google/" },
      { name: "Passionfruit", desc: "AI-powered content optimization and recommendations", url: "https://www.getpassionfruit.com/" },
      { name: "AI Search Playbook", desc: "AirOps guide for marketers navigating AI-powered search", url: "https://www.airops.com/report/ai-search-playbook-marketers" },
      { name: "Rally", desc: "AI-powered research and consumer insights platform", url: "https://askrally.com/" }
    ]
  },
  {
    name: "Content Creation",
    tools: [
      { name: "Opus Pro", desc: "AI video clipping and repurposing for social media", url: "https://www.opus.pro/?via=a4312b" },
      { name: "ElevenLabs", desc: "AI voice generation and text-to-speech platform", url: "https://elevenlabs.io/" },
      { name: "AdGreetz", desc: "AI-powered personalized video ad creation at scale", url: "https://www.adgreetz.com/" },
      { name: "Ideogram", desc: "Rapid AI image generation with excellent text rendering", url: "https://ideogram.ai/" },
      { name: "Napkin", desc: "AI-powered visual storytelling and infographic creation", url: "https://www.napkin.ai/" },
      { name: "Jingle My Brand", desc: "AI-powered jingle and brand music creation", url: "https://jinglemybrand.com/" },
      { name: "LiveAvatar", desc: "Live video avatars by HeyGen for real-time presentations", url: "https://liveavatar.com/" }
    ]
  },
  {
    name: "Automation & Workflow",
    tools: [
      { name: "n8n", desc: "Workflow automation for technical teams", url: "https://n8n.io/" },
      { name: "Happenstance AI", desc: "Intelligent marketing automation and workflow optimization", url: "https://happenstance.ai/invite/friend/kG7j1tmEVzwEe0tzIT8im6pw7m2" }
    ]
  },
  {
    name: "App Building",
    tools: [
      { name: "Base44", desc: "Build AI-powered apps without code", url: "https://base44.pxf.io/c/5604633/2049275/25619?trafcat=base" },
      { name: "Lovable", desc: "AI-powered app development platform", url: "https://lovable.dev/?via=david-berkowitz" }
    ]
  }
];

const communities = [
  { name: "AI Marketers Guild", desc: "Join a community of AI-forward marketers sharing insights, tools, and best practices", url: "https://bit.ly/AIMGinvite", cta: "Join Community" },
  { name: "Serial Marketers", desc: "Connect with experienced marketers and learn from real-world case studies", url: "https://bit.ly/SMINVITE", cta: "Join Community" },
  { name: "AI Insiders Recordings", desc: "Watch past sessions and learn from AI marketing experts and practitioners", url: "https://www.youtube.com/@aimarketersguild", cta: "Watch Videos" },
  { name: "AI Marketing Resource Guide", desc: "Comprehensive guide with tools, prompts, and strategies for AI-powered marketing", url: "https://serialmarketers.notion.site/AI-Marketing-Resource-Guide-ab2dd847daf446618f14d1df8e16c6df", cta: "View Guide" }
];

const stats = [
  { icon: <Zap className="w-6 h-6" />, label: "AI-Powered Strategies" },
  { icon: <Target className="w-6 h-6" />, label: "Hands-On Exercises" },
  { icon: <BookOpen className="w-6 h-6" />, label: "100% Actionable" },
  { icon: <Users className="w-6 h-6" />, label: "Real-World Tools" }
];

// Action Plan mini-wizard
const roles = ["CMO / Marketing Leader", "Marketing Manager", "Content Marketer", "Performance Marketer", "Agency Owner", "Consultant", "Founder / Entrepreneur", "Other"];

export default function Progress() {
  const [planStep, setPlanStep] = useState(1);
  const [planName, setPlanName] = useState("");
  const [planRole, setPlanRole] = useState("");
  const [planGoal, setPlanGoal] = useState("");
  const [plan, setPlan] = useState(null);
  const [planLoading, setPlanLoading] = useState(false);

  const generatePlan = async () => {
    if (!planName || !planRole || !planGoal) return;
    setPlanLoading(true);
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `Create a personalized 30-day AI marketing action plan for ${planName}, who is a ${planRole}. Their main goal is: "${planGoal}". 
      
      Structure the plan as 4 weekly focus areas with 3-4 specific, actionable tasks each. Keep it practical and immediately implementable. Format as JSON with structure: { weeks: [ { week: 1, focus: "string", tasks: ["task1","task2","task3"] } ] }`,
      response_json_schema: {
        type: "object",
        properties: {
          weeks: {
            type: "array",
            items: {
              type: "object",
              properties: {
                week: { type: "number" },
                focus: { type: "string" },
                tasks: { type: "array", items: { type: "string" } }
              }
            }
          }
        }
      }
    });
    setPlan(result);
    setPlanLoading(false);
    setPlanStep(4);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6fbda0a2f6be073e07a4f/progress-logo.png" alt="Progress Partners" className="h-8" onError={(e) => e.target.style.display = 'none'} />
            <span className="text-sm font-semibold text-blue-300 tracking-widest uppercase">Progress Partners</span>
          </div>
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> AI Marketing Excellence · Live
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master AI for<br /><span className="text-blue-300">Modern Marketing</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Transform your marketing workflow with practical AI strategies. From content creation to automation, learn tools you can implement immediately.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <a href="#resources" className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              <Download className="w-5 h-5" /> View Resources
            </a>
            <a href="#tools" className="border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              <Zap className="w-5 h-5" /> Explore Tools
            </a>
          </div>
          <div className="border border-white/20 bg-white/10 rounded-xl p-6 max-w-lg mx-auto">
            <p className="text-sm text-blue-200 font-semibold mb-4">DOWNLOAD THE 12/12/2025 SESSION PRESENTATION</p>
            <div className="flex gap-3 justify-center">
              <a href="https://drive.google.com/file/d/1XkCjPVPUqoLFPVYVFcYwVuZr9jfT9eg8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                <Download className="w-4 h-4" /> PDF Version
              </a>
              <a href="https://docs.google.com/presentation/d/1SzF87-vAdgFAhntnE8W9ib16mK9f4VOl/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                <ExternalLink className="w-4 h-4" /> PowerPoint Version
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-50 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(({ icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-blue-700">
              {icon}
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Meet David Berkowitz</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="shrink-0">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6fbda0a2f6be073e07a4f/95941ebb5_DBheadshot-square.png"
              alt="David Berkowitz"
              className="w-48 h-48 rounded-2xl object-cover shadow-lg"
            />
            <a href="https://www.linkedin.com/in/dberkowitz" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
              <ExternalLink className="w-4 h-4" /> Connect on LinkedIn
            </a>
          </div>
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              David Berkowitz is the founder of High Caliber AI and AI Marketers Guild, and he's the author of <em>The Non-Obvious Guide to Using AI for Marketing</em> (Ideapress, 2025). A longtime marketing strategist, David has led marketing and innovation for companies including Mediaocean, Storyhunter, Sysomos, MRY (Publicis), and 360i (Dentsu). He has contributed 600+ columns to outlets like Advertising Age, MediaPost, and VentureBeat, and spoken at 400+ events worldwide.
            </p>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-700">600+</p>
                <p className="text-sm text-gray-500">Published Articles</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-700">400+</p>
                <p className="text-sm text-gray-500">Speaking Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Training Resources</h2>
          <p className="text-center text-gray-500 mb-12">Everything you need to get the most out of this training</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((r) => (
              <a
                key={r.title}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{r.title}</h3>
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-600 shrink-0 ml-2" />
                </div>
                <p className="text-gray-500 text-sm">{r.desc}</p>
                <span className="mt-4 inline-block text-blue-600 text-sm font-medium">Download PDF →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Community & Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {communities.map((c) => (
            <div key={c.name} className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">{c.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{c.desc}</p>
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:text-blue-700">
                {c.cta} →
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center border border-gray-200 rounded-xl p-8">
          <h3 className="font-bold text-lg mb-2">Need Help or Have Questions?</h3>
          <p className="text-gray-500 mb-4">Our team is here to support you before, during, and after the training.</p>
          <a href="mailto:david@highcaliberai.com" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Support
          </a>
        </div>
      </section>

      {/* AI Tools */}
      <section id="tools" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">AI Tools Referenced</h2>
          <p className="text-center text-gray-500 mb-12">Powerful platforms that enhance your AI marketing workflow</p>
          {toolCategories.map((cat) => (
            <div key={cat.name} className="mb-12">
              <h3 className="text-xl font-bold mb-6 text-gray-700">{cat.name}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-sm transition-all group"
                  >
                    <h4 className="font-bold text-gray-900 group-hover:text-blue-700 mb-1">{tool.name}</h4>
                    <p className="text-gray-500 text-sm">{tool.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action Plan Builder */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Your Action Plan</h2>
          <p className="text-center text-blue-200 mb-12">Get a personalized 30-day AI implementation plan tailored to your role and goals</p>

          {planStep < 4 && !plan && (
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-6">Build Your AI Action Plan</h3>
              <div className="flex gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`flex-1 h-2 rounded-full ${s <= planStep ? "bg-blue-400" : "bg-white/20"}`} />
                ))}
              </div>

              {planStep === 1 && (
                <div>
                  <label className="block text-sm font-medium mb-3">What's your name?</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 mb-6 focus:outline-none focus:border-blue-400"
                  />
                  <Button onClick={() => planName && setPlanStep(2)} disabled={!planName} className="w-full bg-blue-500 hover:bg-blue-600">
                    Continue
                  </Button>
                </div>
              )}
              {planStep === 2 && (
                <div>
                  <label className="block text-sm font-medium mb-3">What's your role?</label>
                  <select
                    value={planRole}
                    onChange={(e) => setPlanRole(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white mb-6 focus:outline-none focus:border-blue-400"
                  >
                    <option value="">Select your role</option>
                    {roles.map(r => <option key={r} value={r} className="text-black">{r}</option>)}
                  </select>
                  <Button onClick={() => planRole && setPlanStep(3)} disabled={!planRole} className="w-full bg-blue-500 hover:bg-blue-600">
                    Continue
                  </Button>
                </div>
              )}
              {planStep === 3 && (
                <div>
                  <label className="block text-sm font-medium mb-3">What's your #1 AI marketing goal?</label>
                  <textarea
                    placeholder="e.g. Create more content faster, automate lead generation, improve ad ROI..."
                    value={planGoal}
                    onChange={(e) => setPlanGoal(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 mb-6 h-28 focus:outline-none focus:border-blue-400 resize-none"
                  />
                  <Button onClick={generatePlan} disabled={!planGoal || planLoading} className="w-full bg-blue-500 hover:bg-blue-600">
                    {planLoading ? "Generating your plan..." : "Generate My 30-Day Plan"}
                  </Button>
                </div>
              )}
            </div>
          )}

          {plan && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <h3 className="text-xl font-bold text-center mb-6">Your 30-Day Plan, {planName} 🎯</h3>
              {plan.weeks?.map((week) => (
                <div key={week.week} className="bg-white/10 border border-white/20 rounded-xl p-6">
                  <h4 className="font-bold text-blue-300 mb-1">Week {week.week}</h4>
                  <p className="font-semibold mb-4">{week.focus}</p>
                  <ul className="space-y-2">
                    {week.tasks?.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-blue-100">
                        <span className="text-blue-400 mt-0.5">→</span> {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Button onClick={() => { setPlan(null); setPlanStep(1); setPlanName(""); setPlanRole(""); setPlanGoal(""); }} variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                Build Another Plan
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}