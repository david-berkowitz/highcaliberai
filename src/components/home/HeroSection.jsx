import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-40">
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Hero Visual */}
          <motion.div 
            className="flex justify-center mb-16"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-full blur-2xl"></div>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/eebbb17c5_dbforbes.jpg"
                alt="David Berkowitz"
                className="relative w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Real-World AI Strategy.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-red-600 leading-[1.15] tracking-tight">
              No Science Fiction.
            </h2>
          </motion.div>

          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-14 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I partner with B2B marketing leaders to bridge the gap between "buying tools" and "getting results"—combining fractional leadership, applied training, and safe execution.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to={createPageUrl("Services")}
              className="inline-flex items-center px-10 py-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all group"
            >
              View Capabilities
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={createPageUrl("About")}
              className="inline-flex items-center px-10 py-4 border border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-900 hover:text-white transition-all"
            >
              Meet David
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}