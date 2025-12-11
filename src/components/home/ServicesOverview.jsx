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
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></span>
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
          className="text-center mt-12"
        >
          <Link
            to={createPageUrl("Services")}
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors group"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}