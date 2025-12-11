import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "David Berkowitz's AI Marketers Guild has been impressive to watch and participate in. If you are a marketer or working in growth at a company, large or small, you should consider checking out his community.",
    name: "Darren Herman",
    title: "Managing Director, Bain Capital",
  },
  {
    quote: "AIMG's networking events and its Slack group help me stay ahead of the curve in AI and marketing. Because things move so quickly, it's great to be able to connect with others and learn from their experiences.",
    name: "Debra Aho Williamson",
    title: "Chief Analyst, Sonata Insights",
  },
  {
    quote: "David Berkowitz blends technical expertise with accessible strategies, offering a roadmap for marketers looking to harness the power of AI.",
    name: "Marc Maleh",
    title: "Global Chief Technology Officer, Huge",
  },
  {
    quote: "Written by one of the best marketers I've known-- David Berkowitz -- with his signature wit, insight, and a refreshing dose of skepticism, it cuts through the hype to focus on what actually works.",
    name: "Nihal Mehta",
    title: "Co-Founder Eniac Ventures",
  },
  {
    quote: "A smart, practical, and refreshingly honest guide, full of real-world applications without the hype. Very on-brand for David Berkowitz, who always simplifies the complex.",
    name: "Sarah Hofstetter",
    title: "President, Profitero and Board Member, Campbell Soup Company",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What People Say
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center px-4"
              >
                <Quote className="w-12 h-12 text-red-100 mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[current].quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-gray-500">
                    {testimonials[current].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}