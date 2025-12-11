import React from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function BookSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600 rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-6 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl transform rotate-6 opacity-30 blur-xl"></div>
              <img
                src="https://highcaliberai.com/wp-content/uploads/2025/10/i16ml40mrv0mpmzthwrw.avif"
                alt="The Non-Obvious Guide to Using AI for Marketing"
                className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full mb-6">
              FEATURED BOOK
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              The Non-Obvious Guide to Using AI for Marketing
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              A practical, no-nonsense guide to implementing AI in your marketing strategy. Learn how to evaluate AI tools, avoid common pitfalls, and create effective AI-powered campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="https://www.amazon.com/Non-Obvious-Guide-AI-Marketing-Guides/dp/1646871863/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white text-lg font-bold rounded-xl hover:from-red-700 hover:to-red-800 transition-all shadow-lg shadow-red-600/50 hover:shadow-xl hover:scale-105"
              >
                <BookOpen className="w-6 h-6 mr-3" />
                Buy on Amazon
              </a>
              <a
                href="https://www.highcaliberai.com/resources"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-5 border-2 border-white text-white text-lg font-bold rounded-xl hover:bg-white hover:text-gray-900 transition-all hover:scale-105"
              >
                <ExternalLink className="w-6 h-6 mr-3" />
                Free Resources
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}