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
            <div className="inline-block px-4 py-1.5 border border-red-600 text-red-600 text-xs font-medium tracking-wider uppercase mb-8">
              Community-Tested. Agency-Vetted.
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-10 leading-tight tracking-tight">
              David Berkowitz
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                David Berkowitz doesn't just "consult" on AI; he uses it to drive GTM strategy. As the founder of the AI Marketers Guild, he tracks what's actually working for 7,000+ peers. He combines that community intelligence with decades of executive experience (360i, Sysomos, MADTECH.AI) to help you skip the "hype cycle" and move straight to revenue.
              </p>
              <div className="flex flex-col gap-4 py-6 border-y border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2.5 flex-shrink-0"></div>
                  <div>
                    <span className="font-bold text-gray-900">The Leader:</span>
                    <span className="text-gray-700"> Fractional CMO for AI-forward firms.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2.5 flex-shrink-0"></div>
                  <div>
                    <span className="font-bold text-gray-900">The Pragmatist:</span>
                    <span className="text-gray-700"> Author of The Non-Obvious Guide to Using AI for Marketing.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2.5 flex-shrink-0"></div>
                  <div>
                    <span className="font-bold text-gray-900">The Connector:</span>
                    <span className="text-gray-700"> Founder of AIMG & Serial Marketers.</span>
                  </div>
                </div>
              </div>

            </div>
            <Link
              to={createPageUrl("About")}
              className="inline-flex items-center mt-8 px-8 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-all group"
            >
              Learn More About David
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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