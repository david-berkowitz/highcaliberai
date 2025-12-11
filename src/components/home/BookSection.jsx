import React from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function BookSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-gray-100 rounded-2xl transform rotate-3"></div>
              <img
                src="https://highcaliberai.com/wp-content/uploads/2025/10/i16ml40mrv0mpmzthwrw.avif"
                alt="The Non-Obvious Guide to Using AI for Marketing"
                className="relative rounded-lg shadow-xl w-full"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Non-Obvious Guide to Using AI for Marketing
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A practical, no-nonsense guide to implementing AI in your marketing strategy. Learn how to evaluate AI tools, avoid common pitfalls, and create effective AI-powered campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.amazon.com/Non-Obvious-Guide-AI-Marketing-Guides/dp/1646871863/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Buy on Amazon
              </a>
              <a
                href="https://www.highcaliberai.com/resources"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Free Resources
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}