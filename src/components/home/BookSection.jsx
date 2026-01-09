import React from "react";
import { ExternalLink, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function BookSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <img
                src="https://m.media-amazon.com/images/I/71O4GsMdBjL._SY522_.jpg"
                alt="The Non-Obvious Guide to Using AI for Marketing"
                className="rounded-lg shadow-xl w-full"
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
            <div className="inline-block px-4 py-1.5 border border-red-600 text-red-600 text-xs font-medium tracking-wider uppercase mb-8">
              Featured Book
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
              The Non-Obvious Guide to Using AI for Marketing
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
              The playbook for the modern CMO. A practical guide to evaluating tools, avoiding "vaporware," and building the operational muscle your team needs to survive 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.amazon.com/Non-Obvious-Guide-AI-Marketing-Guides/dp/1646871863/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Buy on Amazon
              </a>
              <a
                href="https://www.highcaliberai.com/resources"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-900 hover:text-white transition-all"
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