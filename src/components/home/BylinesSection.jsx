import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const bylines = [
  {
    title: "When the Fire Horse Comes for AI",
    publication: "AI Brief Newsletter",
    date: "Feb 19, 2026",
    url: "https://www.aibriefnewsletter.com/p/when-the-fire-horse-comes-for-ai",
    excerpt: "What does Chinese astrology tell us about how to prepare for the year ahead?"
  },
  // Add more bylines here
];

export default function BylinesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Published <span className="text-red-600">Bylines</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Featured articles and thought leadership across leading publications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bylines.map((byline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 border-gray-200 group">
                <a
                  href={byline.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                        {byline.publication}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      {byline.title}
                    </h3>

                    <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                      {byline.excerpt}
                    </p>

                    <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <Calendar className="w-4 h-4 mr-2" />
                      {byline.date}
                    </div>
                  </div>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}