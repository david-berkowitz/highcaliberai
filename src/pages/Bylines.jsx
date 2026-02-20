import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import MetaTags from '@/components/SEO/MetaTags';

const bylines = [
  {
    url: "https://www.aibriefnewsletter.com/p/when-the-fire-horse-comes-for-ai",
    publication: "AI Brief Newsletter",
    title: "When the Fire Horse Comes for AI",
    description: "What does Chinese astrology tell us about how to prepare for the year ahead?",
    date: "Feb 19, 2026"
  },
  {
    url: "https://www.aibriefnewsletter.com/p/don-t-be-my-ai-valentine",
    publication: "AI Brief Newsletter",
    title: "Don't Be My AI Valentine",
    description: "What can go wrong when going on a date with an AI girlfriend at a real NYC wine bar?",
    date: "Feb 12, 2026"
  },
  {
    url: "https://www.aibriefnewsletter.com/p/the-emperor-s-new-clawds-a-claw-tionary-tale",
    publication: "AI Brief Newsletter",
    title: "The Emperor's New Clawds: A Claw-tionary Tale",
    description: "Your 5-step plan for not getting worked up over agents that created their own religion",
    date: "Feb 5, 2026"
  },
  {
    url: "https://www.aibriefnewsletter.com/p/ai-brief-vibe-coding-for-good",
    publication: "AI Brief Newsletter",
    title: "AI Brief: Vibe Coding for Good",
    description: "When it feels like the world's gone completely mad, could AI be a part of the solution?",
    date: "Jan 29, 2026"
  },
  {
    url: "https://www.aibriefnewsletter.com/p/ai-brief-claude-1-vibe-coder-0",
    publication: "AI Brief Newsletter",
    title: "AI Brief: Claude 1, Vibe Coder 0",
    description: "Claude Code won this round, but intrepid vibe coders must live to see another day",
    date: "Jan 22, 2026"
  },
  {
    url: "https://www.aibriefnewsletter.com/p/ai-brief-talking-and-talking-and-talking-shop",
    publication: "AI Brief Newsletter",
    title: "AI Brief: Talking and Talking and Talking Shop",
    description: "The barriers preventing AI-powered shopping are melting away",
    date: "Jan 15, 2026"
  },
  {
    url: "https://www.aibriefnewsletter.com/p/ai-brief-the-yet-another-year-of-ai-at-ces",
    publication: "AI Brief Newsletter",
    title: "AI Brief: The (Yet Another) Year of AI at CES",
    description: "What does CES 2026 tell us about where AI is headed this year?",
    date: "Jan 8, 2026"
  },
  {
    url: "https://www.aibriefnewsletter.com/p/ai-brief-what-feels-like-magic",
    publication: "AI Brief Newsletter",
    title: "AI Brief: What Feels Like Magic?",
    description: "Let's savor this moment where AI can still deliver a sense of wonder",
    date: "Dec 18, 2025"
  },
  {
    url: "https://www.aibriefnewsletter.com/p/ai-brief-yet-another-ai-newsletter",
    publication: "AI Brief Newsletter",
    title: "AI Brief: Yet Another AI Newsletter?",
    description: "No, this one's by marketers, for marketers. And you'll actually want to read it.",
    date: "Dec 11, 2025"
  }
];

export default function Bylines() {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="Published Bylines - David Berkowitz's Articles"
        description="Featured articles and thought leadership by David Berkowitz across leading publications including AI Brief Newsletter and more."
        url="https://highcaliberai.com/bylines"
        canonical="https://highcaliberai.com/bylines"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Published <span className="text-red-600">Bylines</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Featured articles and thought leadership across leading publications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bylines.map((article, index) => (
              <motion.div
                key={article.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                        {article.publication}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                      {article.description}
                    </p>

                    <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <span>{article.date}</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}