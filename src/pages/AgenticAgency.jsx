import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Zap, BarChart2, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    icon: <CheckCircle className="w-8 h-8 text-purple-400" />,
    title: "Readiness Assessment",
    description: "Score your agency against the 5 Pillars of Agentic AI and get a personalized action plan.",
    cta: "Start Assessment",
    page: "AgenticAssessment"
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-purple-400" />,
    title: "Agent ROI Calculator",
    description: "Project time and cost savings by implementing AI agents into your workflows.",
    cta: "Launch Calculator",
    page: "AgenticROICalculator"
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: "Client Readiness Scorecard",
    description: "Evaluate a client's readiness for AI and identify opportunities for your agency.",
    cta: "Start Scorecard",
    page: "AgenticClientScorecard"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-purple-400" />,
    title: "Use Case Library",
    description: "Explore a curated library of 126+ real-world AI agent examples to inspire your next project.",
    cta: "Explore Library",
    page: "AgenticUseCaseLibrary"
  }
];

const testimonials = [
  {
    quote: "David Berkowitz blends technical expertise with accessible strategies, offering a roadmap for marketers looking to harness the power of AI.",
    name: "Marc Maleh",
    title: "Global Chief Technology Officer, Huge"
  },
  {
    quote: "A smart, practical, and refreshingly honest guide, full of real-world applications without the hype. Very on-brand for David Berkowitz, who always simplifies the complex.",
    name: "Sarah Hofstetter",
    title: "President, Profitero and Board Member, Campbell Soup Company"
  },
  {
    quote: "David Berkowitz's AI Marketers Guild has been impressive to watch and participate in. If you are a marketer or working in growth at a company, large or small, you should consider checking out his community.",
    name: "Darren Herman",
    title: "Managing Director, Bain Capital"
  }
];

const recommendedTools = [
  { name: "Otterly AI", desc: "AI-powered social media monitoring and brand tracking", url: "https://otterly.ai/?via=david" },
  { name: "Happenstance AI", desc: "Intelligent marketing automation and workflow optimization", url: "https://happenstance.ai/invite/friend/yuqdbLCl7N5lUWLNDncIC2T5qC3" },
  { name: "Opus Pro", desc: "AI video clipping and repurposing for social media", url: "https://www.opus.pro/?via=a4312b" },
  { name: "Base44", desc: "Build AI-powered apps without code", url: "https://base44.pxf.io/c/5604633/2049275/25619?trafcat=base" },
  { name: "Lovable", desc: "AI-powered app development platform", url: "https://lovable.dev/?via=david-berkowitz" },
  { name: "AI Marketing Resource Guide", desc: "Comprehensive guide with tools, prompts, and strategies", url: "https://serialmarketers.notion.site/AI-Marketing-Resource-Guide-ab2dd847daf446618f14d1df8e16c6df" }
];

export default function AgenticAgency() {
  return (
    <div className="min-h-screen bg-[#0d0b1f] text-white">
      {/* Hero */}
      <section className="pt-24 pb-20 px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Future is <span className="text-purple-400">Agentic.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Your presentation shared the vision. This toolkit makes it reality. Assess your readiness, calculate ROI, and build your agentic agency, starting now.
          </p>
          <Link to={createPageUrl("AgenticQuickStart")}>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-lg font-semibold gap-2">
              <Zap className="w-5 h-5" /> Quick Start Guide
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Tools Grid */}
      <section className="px-4 pb-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-purple-800/40 bg-[#1a1535] rounded-xl p-6"
            >
              <div className="mb-4 p-3 bg-purple-900/30 rounded-lg w-fit">{tool.icon}</div>
              <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
              <p className="text-gray-400 mb-6">{tool.description}</p>
              <Link to={createPageUrl(tool.page)}>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 gap-2">
                  {tool.cta} <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 pb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Industry Leaders</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-gray-700 bg-[#13112a] rounded-xl p-6">
              <p className="text-gray-300 italic mb-6">"{t.quote}"</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-gray-400 text-sm">{t.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Tools */}
      <section className="px-4 pb-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Recommended AI Tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 bg-[#13112a] rounded-xl p-5 hover:border-purple-500 transition-colors"
            >
              <h4 className="font-bold mb-2 text-purple-300">{tool.name}</h4>
              <p className="text-gray-400 text-sm">{tool.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}