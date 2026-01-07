import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck } from "lucide-react";

export default function PreFooterCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-50 border border-red-100 rounded-full">
            <ClipboardCheck className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-600">Free Self-Assessment</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Not Ready for a Retainer?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the AI Readiness Assessment and get instant, personalized recommendations for your marketing team.
          </p>
          <Link
            to={createPageUrl("AIAudit")}
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl group"
          >
            Check Your AI Readiness
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}