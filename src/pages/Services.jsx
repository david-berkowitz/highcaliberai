import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  BookOpen, 
  FileText, 
  Handshake,
  Check,
  ArrowRight,
  Circle,
  Target,
  Users,
  Shield,
  Zap
} from "lucide-react";

const pillars = [
  {
    icon: Target,
    number: "01",
    title: "Strategy",
    subtitle: "Fractional GTM Leadership",
    description: "Don't just get a plan; get a partner. I embed with your team to fix the \"messy middle\" of AI adoption—overseeing your tech stack, talent alignment, and execution strategy.",
    deliverable: "A partner who leads the charge, starting with a proprietary AI Readiness Audit to prioritize high-impact wins and cut low-value noise.",
    outcome: "Stop wasting budget on \"vaporware.\" Build a defensible GTM engine rooted in market reality.",
    example: "Includes the specific roadmap approach used for Athena Solutions",
  },
  {
    icon: Users,
    number: "02",
    title: "Enablement",
    subtitle: "Team Activation & Training",
    description: "Strategy fails without skills. I run Applied Workshops that force your team to use AI on live campaigns—building muscle memory and immediate output, not just theory.",
    deliverable: "Custom \"Dot-Connecting\" workshops and mentorship that turn your writers, designers, and strategists into AI-augmented creators.",
    outcome: "Your existing team becomes your scaled team. No headcount added.",
    example: "Based on the applied training delivered for ISLAA",
  },
  {
    icon: Shield,
    number: "03",
    title: "Governance",
    subtitle: "Managed Innovation Pilots",
    description: "Move fast without breaking things. I oversee high-impact pilots—like AI Search Visibility (GEO) and Content Scaling—bringing in my technical partners to handle the wiring while I ensure it hits your KPIs.",
    deliverable: "A \"Safety First, Speed Second\" framework. I set up simple rules of the road so you can innovate without needing legal to sign off on every prompt.",
    outcome: "Launch pilots in weeks, not months, without risking your reputation or data.",
    example: "Leveraging the policy frameworks built for Russo Partners",
  },
];

const additionalServices = [
  {
    icon: BookOpen,
    title: "Keynotes Without the Hype",
    description: "Executive presentations and training programs grounded in what 7,000+ marketers are actually doing—not what futurists are predicting.",
    features: [
      "\"State of the Market\" Executive Briefings",
      "Custom Workshop Development",
      "Industry Conference Keynotes",
    ],
  },
  {
    icon: FileText,
    title: "Strategic Content & POV",
    description: "Position your company as an authority. I help you craft white papers and bylines that cut through the AI noise with a sharp, community-tested point of view.",
    features: [
      "White Papers & Research Reports",
      "Industry Bylines & Op-Eds",
      "Case Studies & Success Stories",
    ],
  },
];

const credentials = [
  {
    icon: TrendingUp,
    title: "The Strategist",
    description: "Fractional CMO for AI-forward companies like MADTECH.AI",
  },
  {
    icon: BookOpen,
    title: "The Authority",
    description: "Author of The Non-Obvious Guide to Using AI for Marketing (2025) and founder of AI Marketers Guild",
  },
  {
    icon: Handshake,
    title: "The Operator",
    description: "Former executive at 360i and Publicis, translating enterprise rigor to growth-stage agility",
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-sm font-semibold mb-8">
              <Zap className="w-4 h-4" />
              AI-Transition Fractional CMO
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Real-World AI Strategy.
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-red-400 mb-8">
              No Science Fiction.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              I partner with B2B marketing leaders to bridge the gap between "buying tools" and "getting results"—combining fractional leadership, applied training, and safe execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The Challenge
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Buying tools is easy. Adoption is hard. Your team is overwhelmed. You've bought the tech, but you're stuck in "experiment mode." Policies are non-existent, shelfware is piling up, and you're worried about losing search visibility. You don't need tech support—you need a <span className="font-semibold text-red-600">GTM partner who knows what actually works</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3-Pillar Solution */}
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
              The Modern Marketing Operating System
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A complete framework across three strategic pillars
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  {/* Accent bar */}
                  <div className="h-2 bg-gradient-to-r from-red-600 to-red-500"></div>
                  
                  <div className="p-8">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <pillar.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                    <p className="text-red-600 font-semibold text-sm mb-4">{pillar.subtitle}</p>
                    
                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    {/* Deliverable */}
                    <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-gray-900 block text-sm mb-1">Deliverable</span>
                          <span className="text-gray-700 text-sm">{pillar.deliverable}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Outcome */}
                    <div className="mb-4 p-4 bg-gray-900 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Zap className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-white block text-sm mb-1">The Win</span>
                          <span className="text-gray-300 text-sm">{pillar.outcome}</span>
                        </div>
                      </div>
                    </div>

                    {/* Example */}
                    <p className="text-xs text-gray-500 italic border-t border-gray-200 pt-4">{pillar.example}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Modernize Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-10 font-light">
              Let's discuss how to transform your team, processes, and results for the AI era.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center px-10 py-5 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-2xl group"
            >
              Schedule Consultation
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}