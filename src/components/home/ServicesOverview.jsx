import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { TrendingUp, BookOpen, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: TrendingUp,
    title: "Fractional CMO Retainers",
    description: "Go-to-market strategy, agency RFPs, and AI consulting for B2B tech companies.",
    features: ["Strategic Planning", "Market Analysis", "Growth Tactics"],
  },
  {
    icon: BookOpen,
    title: "AI Education & Training",
    description: "Keynotes, workshops, and custom consulting to upskill your marketing team.",
    features: ["Expert Keynotes", "Custom Workshops", "Team Training"],
  },
  {
    icon: FileText,
    title: "B2B Content Creation",
    description: "White papers, bylines, sales collateral, and thought leadership content.",
    features: ["White Papers", "Sales Collateral", "Thought Leadership"],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Accent elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-red-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-red-600 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI marketing solutions tailored for B2B tech companies and agencies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-red-600 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-red-600/50">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-red-400 transition-colors">{service.title}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-400 font-medium">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to={createPageUrl("Services")}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white text-lg font-bold rounded-xl hover:from-red-700 hover:to-red-800 transition-all shadow-lg shadow-red-600/50 hover:shadow-xl hover:shadow-red-600/60 hover:scale-105 group"
          >
            View All Services
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}