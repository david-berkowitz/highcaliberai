import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { TrendingUp, BookOpen, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: TrendingUp,
    title: "Fractional GTM Leadership",
    description: "Don't just get a plan; get a partner. I embed with your team to modernize your GTM strategy, overseeing the tech stack, talent alignment, and execution. (Includes my proprietary AI Readiness Audit as the diagnostic starting point).",
    features: ["Tech Stack Audit", "Talent Alignment", "GTM Strategy"],
  },
  {
    icon: BookOpen,
    title: "Team Activation & Training",
    description: "Strategy fails without skills. I run Applied Workshops that force your team to use AI on live campaigns—building muscle memory and immediate output, not just theory.",
    features: ["Applied Workshops", "Live Campaign Work", "Skill Building"],
  },
  {
    icon: FileText,
    title: "Managed Innovation Pilots",
    description: "Move fast without breaking things. I oversee high-impact pilots like AI Search Visibility (GEO) and Content Scaling, bringing in my technical partners to handle the wiring while I ensure it hits your KPIs.",
    features: ["AI Search Visibility", "Content Scaling", "KPI Tracking"],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Our <span className="font-semibold text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
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
              className="group bg-white rounded-lg p-10 border border-gray-200 hover:border-red-600 transition-all hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-red-600 flex items-center justify-center mb-8">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-500 font-light">
                    <span className="w-1.5 h-1.5 bg-red-600 mr-3"></span>
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
            className="inline-flex items-center px-10 py-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all group"
          >
            View All Capabilities
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}