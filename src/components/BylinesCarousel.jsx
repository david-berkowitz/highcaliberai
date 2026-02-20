import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  }
];

export default function BylinesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, bylines.length - itemsPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    } else {
      setDirection(1);
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    } else {
      setDirection(-1);
      setCurrentIndex(maxIndex);
    }
  };

  const visibleArticles = bylines.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleArticles.map((article) => (
              <div
                key={article.url}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
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
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-red-600' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}