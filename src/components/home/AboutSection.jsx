import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet David Berkowitz
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The force behind High Caliber AI, David brings extensive experience as a thought leader in AI marketing. With over 1,000 bylines and 400+ speaking engagements, he's positioned at the forefront of applied AI for marketing.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founder of AI Marketers Guild and Serial Marketers, with experience at top agencies like 360i, MRY, and WITHIN, plus tech companies including Sysomos, Mediaocean, and Storyhunter.
            </p>
            <Link
              to={createPageUrl("About")}
              className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors group"
            >
              Learn More About David
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full transform translate-x-4 translate-y-4"></div>
              <img
                src="https://highcaliberai.com/wp-content/uploads/2025/10/l32o7gz1zoqjdnzz1nfq.avif"
                alt="David Berkowitz"
                className="relative w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}