import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight, Users, BookOpen, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-8 lg:py-12">
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
          {/* Logo Mark */}
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png"
              alt="High Caliber AI"
              className="h-24 w-auto"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-3 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Your team bought the tools.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-red-600 leading-[1.15] tracking-tight">
              Now let's make them work.
            </h2>
          </motion.div>

          {/* Subheadline */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            David Berkowitz helps B2B marketing teams cut through AI hype, build skills that stick, and move from "we should be doing more with AI" to actually doing it. — not just demos you can screenshot.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to={createPageUrl("Services")}
              className="inline-flex items-center px-10 py-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all group"
            >
              See How It Works
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center px-10 py-4 border border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-900 hover:text-white transition-all"
            >
              Book a Conversation
            </Link>
          </motion.div>

          {/* High-value highlights bar */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <Link to={createPageUrl("Partners")} className="group flex items-center gap-3 px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-red-300 hover:bg-red-50 transition-all text-left">
              <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                <Users className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Partner Marketplace</div>
                <div className="text-xs text-gray-500">Browse 50+ vetted AI vendors</div>
              </div>
            </Link>
            <Link to={createPageUrl("Training")} className="group flex items-center gap-3 px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-red-300 hover:bg-red-50 transition-all text-left">
              <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                <Zap className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">AI Training Programs</div>
                <div className="text-xs text-gray-500">Build real AI skills in a day</div>
              </div>
            </Link>
            <Link to={createPageUrl("Book")} className="group flex items-center gap-3 px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-red-300 hover:bg-red-50 transition-all text-left">
              <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-200 transition-colors">
                <BookOpen className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">The AI Marketing Book</div>
                <div className="text-xs text-gray-500">The no-hype guide for marketers</div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}