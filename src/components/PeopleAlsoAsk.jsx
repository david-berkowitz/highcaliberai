import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PeopleAlsoAsk({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!questions || questions.length === 0) return null;

  return (
    <div className="my-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">People Also Ask</h3>
      <div className="space-y-3">
        {questions.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
              <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}