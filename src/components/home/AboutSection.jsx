import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-red-100 text-red-700 text-sm font-bold rounded-full mb-6">
              MEET THE FOUNDER
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              David Berkowitz
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                The force behind High Caliber AI, David brings extensive experience as a thought leader in AI marketing.
              </p>
              <div className="flex items-center gap-8 py-6 border-y border-gray-200">
                <div>
                  <div className="text-4xl font-black text-red-600">1000+</div>
                  <div className="text-sm text-gray-600 font-semibold">Bylines</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-red-600">400+</div>
                  <div className="text-sm text-gray-600 font-semibold">Speeches</div>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founder of AI Marketers Guild and Serial Marketers, with experience at top agencies like 360i, MRY, and WITHIN, plus tech companies including Sysomos, Mediaocean, and Storyhunter.
              </p>
            </div>
            <Link
              to={createPageUrl("About")}
              className="inline-flex items-center mt-8 px-8 py-4 bg-gray-900 text-white text-lg font-bold rounded-xl hover:bg-gray-800 transition-all hover:scale-105 group"
            >
              Learn More About David
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl rotate-3 opacity-20"></div>
              <img
                src="https://highcaliberai.com/wp-content/uploads/2025/10/l32o7gz1zoqjdnzz1nfq.avif"
                alt="David Berkowitz"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}