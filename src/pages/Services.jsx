import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import MetaTags from "@/components/SEO/MetaTags";
import FAQSchema from "@/components/SEO/FAQSchema";
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
  Zap,
  ChevronDown
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
    description: "Author of The Non-Obvious Guide to Using AI for Marketing (2025) and Chief Community Officer at Marketecture Media (AI Marketers Guild, Serial Marketers)",
  },
  {
    icon: Handshake,
    title: "The Operator",
    description: "Former executive at 360i and Publicis, translating enterprise rigor to growth-stage agility",
  },
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-4 bg-white rounded-lg border border-gray-200 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </motion.div>
  );
}

export default function Services() {
  return (
    <div>
      <MetaTags 
        title="AI Marketing Services - Fractional CMO & Team Training"
        description="Fractional GTM leadership, team activation, and managed AI pilots for B2B marketing teams. Bridge the gap between buying AI tools and getting results with proven strategies and hands-on training."
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/eebbb17c5_dbforbes.jpg"
        url="https://highcaliberai.com/services"
        canonical="https://highcaliberai.com/services"
      />
      <FAQSchema faqs={[
        { question: "What is Fractional GTM Leadership?", answer: "Fractional GTM (Go-to-Market) Leadership means embedding a senior marketing executive with your team on a part-time basis to lead strategy, tech stack decisions, and execution. Unlike traditional consulting, this is hands-on leadership that modernizes your marketing operations while building internal capabilities." },
        { question: "What is GEO (Generative Engine Optimization)?", answer: "GEO (Generative Engine Optimization) is the practice of optimizing your content and digital presence to appear in AI-generated search results from tools like ChatGPT, Perplexity, and Google's AI Overviews. As AI search replaces traditional search, GEO ensures your brand remains visible and authoritative." },
        { question: "How long does a typical engagement last?", answer: "Fractional CMO engagements typically run 6-12 months to allow for meaningful transformation. Training workshops can be one-time sessions or ongoing programs. Innovation pilots run 8-12 weeks. Each engagement is customized based on your needs and readiness level." },
        { question: "What is the AI Readiness Audit?", answer: "The AI Readiness Audit is a proprietary diagnostic that evaluates your current marketing tech stack, team capabilities, processes, and policies. It identifies high-impact opportunities, eliminates low-value shelfware, and creates a prioritized roadmap for AI adoption. This audit is the starting point for all fractional CMO engagements." },
        { question: "Do you work with agencies or just brands?", answer: "We work with both B2B tech companies and marketing agencies. For agencies, we help modernize service offerings, train teams on AI tools, and develop AI-powered capabilities that differentiate you from competitors. Our approach is tailored to whether you're an in-house team or agency partner." }
      ]} />
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
              I partner with B2B marketing leaders to bridge the gap between "buying tools" and "getting results": fractional leadership, applied training, and safe execution.
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
              Buying tools is easy. Adoption is hard. Your team is overwhelmed. You've bought the tech, but you're stuck in "experiment mode." Policies are non-existent, shelfware is piling up, and you're worried about losing search visibility. You don't need tech support. You need a <span className="font-semibold text-red-600">GTM partner who knows what actually works</span>.
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "Here is what we accomplished with the mentoring of our 'FOAF CMO' David Berkowitz: Finetuned our sales deck, optimized our pricing plans, launched a brand new Social Media strategy showing great results, found a PR agency, and prepared our company presentation for the National Sports Forum Trade Show."
              </blockquote>
              <p className="font-semibold text-gray-900">Riddle</p>
              <p className="text-gray-600 text-sm">FOAF Client</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "Serial Marketers has been a lifeline for my business. When the idea of a fraction-of-a-fraction came up, it was really exciting. We need certain skill sets for the next evolution of our business, but we're still in a very small, scrappy stage."
              </blockquote>
              <p className="font-semibold text-gray-900">Zachary Rozga</p>
              <p className="text-gray-600 text-sm">CEO, Thece</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "Thanks again for coming to share your thoughts on AI in marketing with my team. They found you approachable and relatable, and loved your advice on which tools to use."
              </blockquote>
              <p className="font-semibold text-gray-900">Aurelie Guerreri</p>
              <p className="text-gray-600 text-sm">CMO, DataDome</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "I had the pleasure of working with FOAF during a formative stage in the development of Instreamatic. Our FOAFer was an invaluable resource and on hand whenever needed, asking the tough questions we needed to hear."
              </blockquote>
              <p className="font-semibold text-gray-900">Simon Dunlop</p>
              <p className="text-gray-600 text-sm">CMO, Instreamatic</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "David Berkowitz blends technical expertise with accessible strategies, offering a roadmap for marketers looking to harness the power of AI."
              </blockquote>
              <p className="font-semibold text-gray-900">Marc Maleh</p>
              <p className="text-gray-600 text-sm">Global Chief Technology Officer, Huge</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "David's an innovative thinker and a true pleasure to work with. He's always ahead of the curve and tuned into what's next and what's new. He's pragmatic, sharp, and brings an energy every team wishes they had more of."
              </blockquote>
              <p className="font-semibold text-gray-900">Leo Morejon</p>
              <p className="text-gray-600 text-sm">Director of Social & Influencer, Hormel Foods</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "David Berkowitz's AI Marketers Guild has been impressive to watch and participate in. If you are a marketer or working in growth at a company, large or small, you should consider checking out his community."
              </blockquote>
              <p className="font-semibold text-gray-900">Darren Herman</p>
              <p className="text-gray-600 text-sm">Managing Director, Bain Capital</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-red-50 border border-red-100 rounded-full">
              <Circle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-600">Free Self-Assessment</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Not Ready for a Retainer?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the AI Readiness Assessment and get instant, personalized recommendations for your marketing team.
            </p>
            <Link
              to={createPageUrl("ZAIAudit")}
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl group"
            >
              Check Your AI Readiness
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </motion.div>

          <FAQItem 
            question="What is Fractional GTM Leadership?"
            answer="Fractional GTM (Go-to-Market) Leadership means embedding a senior marketing executive with your team on a part-time basis to lead strategy, tech stack decisions, and execution. Unlike traditional consulting, this is hands-on leadership that modernizes your marketing operations while building internal capabilities."
          />
          <FAQItem 
            question="What is GEO (Generative Engine Optimization)?"
            answer="GEO (Generative Engine Optimization) is the practice of optimizing your content and digital presence to appear in AI-generated search results from tools like ChatGPT, Perplexity, and Google's AI Overviews. As AI search replaces traditional search, GEO ensures your brand remains visible and authoritative."
          />
          <FAQItem 
            question="How long does a typical engagement last?"
            answer="Fractional CMO engagements typically run 6-12 months to allow for meaningful transformation. Training workshops can be one-time sessions or ongoing programs. Innovation pilots run 8-12 weeks. Each engagement is customized based on your needs and readiness level."
          />
          <FAQItem 
            question="What is the AI Readiness Audit?"
            answer="The AI Readiness Audit is a proprietary diagnostic that evaluates your current marketing tech stack, team capabilities, processes, and policies. It identifies high-impact opportunities, eliminates low-value shelfware, and creates a prioritized roadmap for AI adoption. This audit is the starting point for all fractional CMO engagements."
          />
          <FAQItem 
            question="Do you work with agencies or just brands?"
            answer="We work with both B2B tech companies and marketing agencies. For agencies, we help modernize service offerings, train teams on AI tools, and develop AI-powered capabilities that differentiate you from competitors. Our approach is tailored to whether you're an in-house team or agency partner."
          />
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