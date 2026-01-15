import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { BookOpen, Mic, Users, Award, ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import { PersonStructuredData, FAQStructuredData } from "@/components/SEO/StructuredData";
import MetaTags from "@/components/SEO/MetaTags";

const stats = [
  { icon: BookOpen, number: "1000+", label: "Published Bylines" },
  { icon: Mic, number: "400+", label: "Speaking Engagements" },
  { icon: Users, number: "15+", label: "Years Experience" },
  { icon: Award, number: "Multiple", label: "Industry Awards" },
];

const experiences = [
  {
    title: "Community Leadership",
    company: "Marketecture Media (Chief Community Officer)",
    description: "Leading community strategy following the acquisition of Serial Marketers and AI Marketers Guild, running Slack groups, weekly webinars, and events focused on peer learning.",
  },
  {
    title: "Fractional CMO & Advisor",
    company: "MADTECH.AI, Athena Solutions, Thece, Progress Partners",
    description: "Providing strategic marketing leadership and AI readiness guidance to growth-stage B2B tech companies as Executive in Residence and fractional executive.",
  },
  {
    title: "Senior Agency & Tech Roles",
    company: "Mediaocean (SVP), MRY (CMO), 360i (VP), Sysomos (CSO)",
    description: "Held senior positions across top agencies and marketing technology companies, leading brand, product marketing, and go-to-market strategy.",
  },
];

function RecentSpeaking() {
  const { data: engagements = [] } = useQuery({
    queryKey: ['recent-speaking'],
    queryFn: () => base44.entities.SpeakingEngagement.list('-date', 6),
    initialData: [],
  });

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Speaking Engagements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            David regularly speaks at industry events, universities, and executive forums on AI marketing strategy and implementation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagements.map((eng, index) => (
            <motion.div
              key={eng.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              {eng.url ? (
                <a 
                  href={eng.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full bg-white rounded-lg border border-gray-200 p-6 hover:border-red-600 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="text-sm text-red-600 font-semibold mb-2">
                    {new Date(eng.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="font-bold text-gray-900 mb-2">{eng.event_name}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{eng.title}</div>
                </a>
              ) : (
                <div className="block h-full bg-white rounded-lg border border-gray-200 p-6">
                  <div className="text-sm text-red-600 font-semibold mb-2">
                    {new Date(eng.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="font-bold text-gray-900 mb-2">{eng.event_name}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{eng.title}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to={createPageUrl("Speaking")}
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
          >
            View Complete Speaking History
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

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

export default function About() {
  const faqs = [
    {
      question: "What is David Berkowitz's background in AI marketing?",
      answer: "David Berkowitz is the founder of AI Marketers Guild (7,000+ members) and author of The Non-Obvious Guide to Using AI for Marketing. He serves as fractional CMO for AI-forward companies and Executive in Residence at Progress Partners. With over 15 years of experience and former roles at 360i, MRY, Mediaocean, and Sysomos, he combines agency expertise with technical knowledge."
    },
    {
      question: "Who is the ideal client for High Caliber AI?",
      answer: "We work primarily with B2B tech companies, agencies, and growth-stage firms that have already bought AI tools but struggle with adoption. Our clients are typically CMOs, VPs of Marketing, or agency leaders who need strategic leadership to bridge the gap between purchasing technology and achieving measurable results."
    },
    {
      question: "What is a Fractional CMO?",
      answer: "A fractional CMO is an experienced marketing executive who works with your company on a part-time or project basis. Unlike a full-time CMO, you get senior-level strategic leadership without the commitment of a full-time hire. David embeds with your team to modernize your GTM strategy, tech stack, and team capabilities."
    },
    {
      question: "How does the AI Marketers Guild inform David's consulting work?",
      answer: "David founded AI Marketers Guild and Serial Marketers, which he sold to Marketecture Media in 2025. He continues to run both communities as Chief Community Officer. The AI Marketers Guild community of 7,000+ marketing professionals provides real-time intelligence on what's actually working in AI marketing. This community feedback allows David to distinguish between AI hype and proven tactics, ensuring recommendations are grounded in real-world results rather than vendor promises."
    }
  ];

  return (
    <div>
      <MetaTags 
        title="About David Berkowitz - AI Marketing Strategist & Author"
        description="David Berkowitz is founder of AI Marketers Guild (7,000+ members), author of The Non-Obvious Guide to Using AI for Marketing, and Chief Community Officer at Marketecture Media. 400+ speaking engagements, 15+ years experience."
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/7cdf61db4_introstars2copy.png"
        url="https://highcaliberai.com/about"
      />
      <PersonStructuredData />
      <FAQStructuredData faqs={faqs} />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="text-red-600">Meet</span> David Berkowitz
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                AI marketing strategist, community builder, and author. David founded Serial Marketers and AI Marketers Guild, which he sold to Marketecture Media in 2025. He continues as Chief Community Officer, serves as fractional CMO for AI-forward companies, and is Executive in Residence at Progress Partners.
              </p>
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors group"
              >
                Work with David
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/7cdf61db4_introstars2copy.png"
                alt="David Berkowitz - AI marketing strategist, author, and founder of AI Marketers Guild"
                className="w-full max-w-md mx-auto rounded-full shadow-xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A proven track record of success across agencies, technology companies, and entrepreneurial ventures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
              >
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-red-400 font-medium mb-4">{exp.company}</p>
                <p className="text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <RecentSpeaking />

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At High Caliber AI, we're committed to demystifying artificial intelligence for marketers and driving real business results. We believe that AI should be accessible, practical, and immediately actionable for marketing teams of all sizes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Our approach combines deep technical understanding with practical marketing experience to deliver solutions that actually work in the real world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where every marketing team has the knowledge, tools, and confidence to leverage AI effectively. Through education, strategic consulting, and hands-on training, we're building that future today.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                By focusing on practical applications and measurable outcomes, we help organizations transform their marketing capabilities and achieve sustainable competitive advantages.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <FAQItem 
            question="What is David Berkowitz's background in AI marketing?"
            answer="David Berkowitz is the founder of AI Marketers Guild (7,000+ members) and author of The Non-Obvious Guide to Using AI for Marketing. He serves as fractional CMO for AI-forward companies and Executive in Residence at Progress Partners. With over 15 years of experience and former roles at 360i, MRY, Mediaocean, and Sysomos, he combines agency expertise with technical knowledge."
          />
          <FAQItem 
            question="Who is the ideal client for High Caliber AI?"
            answer="We work primarily with B2B tech companies, agencies, and growth-stage firms that have already bought AI tools but struggle with adoption. Our clients are typically CMOs, VPs of Marketing, or agency leaders who need strategic leadership to bridge the gap between purchasing technology and achieving measurable results."
          />
          <FAQItem 
            question="What is a Fractional CMO?"
            answer="A fractional CMO is an experienced marketing executive who works with your company on a part-time or project basis. Unlike a full-time CMO, you get senior-level strategic leadership without the commitment of a full-time hire. David embeds with your team to modernize your GTM strategy, tech stack, and team capabilities."
          />
          <FAQItem 
            question="How does the AI Marketers Guild inform David's consulting work?"
            answer="David founded AI Marketers Guild and Serial Marketers, which he sold to Marketecture Media in 2025. He continues to run both communities as Chief Community Officer. The AI Marketers Guild community of 7,000+ marketing professionals provides real-time intelligence on what's actually working in AI marketing. This community feedback allows David to distinguish between AI hype and proven tactics, ensuring recommendations are grounded in real-world results rather than vendor promises."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-lg text-red-100 mb-8">
              Let's discuss how High Caliber AI can help your organization harness the power of artificial intelligence.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start the Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}