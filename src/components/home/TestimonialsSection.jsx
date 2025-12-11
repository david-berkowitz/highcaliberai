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
    <section className="py-24 lg:py-32 bg-gradient-to-br from-red-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
            What People Say
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="min-h-[350px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-white rounded-lg p-10 md:p-14 shadow-lg border border-gray-200">
                  <Quote className="w-12 h-12 text-red-200 mx-auto mb-8" />
                  <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed mb-10 font-light text-center">
                    "{testimonials[current].quote}"
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-lg mb-1">
                      {testimonials[current].name}
                    </p>
                    <p className="text-gray-600 font-light text-sm">
                      {testimonials[current].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white border-2 border-gray-200 hover:border-red-600 hover:bg-red-50 transition-all shadow-md hover:shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === current ? "bg-red-600 w-10" : "bg-gray-300 w-3 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white border-2 border-gray-200 hover:border-red-600 hover:bg-red-50 transition-all shadow-md hover:shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}