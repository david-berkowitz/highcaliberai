import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Target, Zap, BookOpen, Map, CheckCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: <Target className="w-8 h-8 text-purple-400" />,
    step: "Step 1",
    title: "Assess Your Current State",
    time: "10 minutes",
    description: "Take our 5-pillar readiness assessment to understand where your agency stands today.",
    cta: "Start Assessment",
    page: "AgenticAssessment"
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-400" />,
    step: "Step 2",
    title: "Calculate Your ROI Potential",
    time: "5 minutes",
    description: "Use our calculator to project time and cost savings from AI implementation.",
    cta: "Calculate ROI",
    page: "AgenticROICalculator"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-purple-400" />,
    step: "Step 3",
    title: "Explore Use Cases",
    time: "15 minutes",
    description: "Browse 126+ real-world AI agent examples tailored to your industry and company size.",
    cta: "Browse Library",
    page: "AgenticUseCaseLibrary"
  },
  {
    icon: <Map className="w-8 h-8 text-purple-400" />,
    step: "Step 4",
    title: "Get Your Roadmap",
    time: "After assessment",
    description: "Receive a personalized 90-day implementation plan based on your assessment results.",
    cta: "View Results",
    page: "AgenticAssessment"
  }
];

const quickWins = [
  "Start with one simple automation (email scheduling, lead scoring)",
  "Pick a 'Beginner' difficulty use case from our library",
  "Focus on your lowest-scoring assessment pillar first",
  "Join the AI Marketers Guild community for ongoing support",
  "Test one AI tool for 30 days before expanding"
];

const helpItems = [
  { label: "Join the AI Marketers Guild community", url: "https://www.aimarketersguild.com" },
  { label: 'Read "The Non-Obvious Guide to Using AI for Marketing"', url: "https://www.amazon.com/Non-Obvious-Guide-AI-Marketing-Guides/dp/1646871863/" },
  { label: "Book a 1:1 strategy consultation", url: createPageUrl("Contact") }
];

export default function AgenticQuickStart() {
  return (
    <div className="min-h-screen bg-[#0d0b1f] text-white">
      <section className="pt-24 pb-16 px-4 text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Quick Start Guide</h1>
          <p className="text-xl text-gray-300">
            New to AI for agencies? Follow this step-by-step path to go from zero to agentic in 30 days.
          </p>
        </motion.div>
      </section>

      {/* Steps */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border border-purple-800/40 bg-[#1a1535] rounded-xl p-6 flex flex-col"
            >
              <span className="text-xs font-semibold text-purple-400 mb-3">{step.step}</span>
              <div className="mb-3">{step.icon}</div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm mb-1">⏱ {step.time}</p>
              <p className="text-gray-300 text-sm mb-6 flex-1">{step.description}</p>
              <Link to={createPageUrl(step.page)}>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-sm">
                  {step.cta} →
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Wins + Help */}
      <section className="px-4 pb-24 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="border border-purple-800/40 bg-[#1a1535] rounded-xl p-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-400" /> Quick Wins for Week 1
          </h2>
          <ul className="space-y-3">
            {quickWins.map((win) => (
              <li key={win} className="flex items-start gap-3 text-gray-300">
                <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" />
                {win}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-gray-700 bg-[#13112a] rounded-xl p-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-purple-400" /> Need Help?
          </h2>
          <ul className="space-y-4">
            {helpItems.map((item) => (
              <li key={item.label}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-100 transition-colors">
                  → {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}