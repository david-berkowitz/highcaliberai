import React, { useState } from "react";
import { motion } from "framer-motion";
import MetaTags from "@/components/SEO/MetaTags";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { 
  TrendingUp, 
  Users, 
  FileText, 
  Mic, 
  Award,
  ArrowRight,
  CheckCircle2,
  Target,
  Sparkles
} from "lucide-react";

const caseStudies = [
  {
    id: "storyhunter",
    client: "Storyhunter",
    industry: "Video Production Marketplace",
    icon: TrendingUp,
    challenge: "The video production marketplace needed a complete marketing overhaul to reach the right enterprise prospects and convert them efficiently.",
    solution: [
      "Defined MQLs vs. SQLs for precise attribution and targeting",
      "Shifted content marketing to focus on buyer needs, achieving first-page Google rankings for 'video production costs'",
      "Rebranded with professional logo and customer experience for enterprise clients",
      "Led hands-on business development securing meetings with Bloomberg, Chick-Fil-A, T-Mobile"
    ],
    results: [
      { metric: "200%", label: "Increase in MQLs (Q2 vs Q1)" },
      { metric: "57%", label: "Revenue Growth" },
      { metric: "Lower", label: "Budget & Staff than Expected" }
    ],
    color: "red"
  },
  {
    id: "360i",
    client: "360i (Dentsu)",
    industry: "Digital Marketing Agency",
    icon: FileText,
    challenge: "360i, initially known as a search engine marketing agency, needed to establish category leadership as it entered new service areas.",
    solution: [
      "Served as lead editor for 360i's Social Marketing Playbook",
      "Wrote and edited Mobile Marketing Playbook and Social Commerce Playbook",
      "Created thought leadership content that defined new categories before competitors entered"
    ],
    results: [
      { metric: "Category", label: "Leadership Established" },
      { metric: "Dentsu", label: "Acquisition (offerings remain core)" },
      { metric: "Industry", label: "Standard-Setting Playbooks" }
    ],
    color: "blue"
  },
  {
    id: "sysomos",
    client: "Sysomos",
    industry: "Social Listening Platform",
    icon: Award,
    challenge: "Sysomos struggled to differentiate in the crowded social listening market, despite having strong AI capabilities from an acquisition.",
    solution: [
      "Identified AI as a differentiation opportunity in 2017 (ahead of the curve)",
      "Partnered with The Drum to create custom research report on ad industry's AI perceptions",
      "Developed product applications showcasing AI capabilities"
    ],
    results: [
      { metric: "Major", label: "Source of New Leads" },
      { metric: "Pioneering", label: "Industry Research (2017)" },
      { metric: "Clear", label: "Market Differentiation" }
    ],
    color: "purple"
  },
  {
    id: "mry-pr",
    client: "MRY (Publicis)",
    industry: "Digital Marketing Agency",
    icon: Users,
    challenge: "As CMO, needed to build brand reputation and showcase the breadth of talent across the agency.",
    solution: [
      "Launched 'Everyone Contributes' internal mantra",
      "Trained team members to serve as subject matter experts for press",
      "Democratized thought leadership across all levels of the organization"
    ],
    results: [
      { metric: "20", label: "Different Team Members Quoted in Press" },
      { metric: "Year 1", label: "Achieved in First Full Year" },
      { metric: "Team-Wide", label: "Brand Building Culture" }
    ],
    color: "green"
  },
  {
    id: "mediaocean",
    client: "Mediaocean",
    industry: "Omnichannel Ad Tech Platform",
    icon: Mic,
    challenge: "Needed a consistent content marketing program to generate MQLs and provide value to existing clients.",
    solution: [
      "Led monthly 'Current' webinar series with keynote speakers and internal experts",
      "Built programming for 2022 Cannes and 2023 CES tent pole events",
      "Assembled panels of innovators and secured high-profile keynotes"
    ],
    results: [
      { metric: "100-250", label: "Live Viewers per Webinar" },
      { metric: "500-1,000", label: "Registrants per Event" },
      { metric: "Consistent", label: "MQL Pipeline Source" }
    ],
    color: "indigo"
  },
  {
    id: "athena",
    client: "Athena Solutions",
    industry: "Data & Analytics Consulting",
    icon: Sparkles,
    challenge: "20-year brand needed comprehensive marketing overhaul during leadership transition under new CEO.",
    solution: [
      "Conducted deep brand audit with stakeholders to realign strategy",
      "Served as CMO directing content marketing, events, video interviews, newsletters",
      "Spearheaded launch of new AI Starter Kit product",
      "Led website overhaul and new SEO push"
    ],
    results: [
      { metric: "New", label: "Customer Acquisition" },
      { metric: "Pipeline", label: "Built for Sales Team" },
      { metric: "Modern", label: "Professional Brand Presence" }
    ],
    color: "amber"
  },
  {
    id: "fivetier",
    client: "Five Tier",
    industry: "Ad Tech Network",
    icon: Target,
    challenge: "Ad-tech firm needed strong positioning and differentiation in a competitive market.",
    solution: [
      "Identified 'Connected Media' and 'Connected Marketing' as powerful, ownable terms",
      "Guided company to file trademarks for these terms",
      "Crafted comprehensive campaign around Connected Media positioning"
    ],
    results: [
      { metric: "Trademarked", label: "Proprietary Terms" },
      { metric: "Centerpiece", label: "Marketing Campaign" },
      { metric: "Clear", label: "Market Differentiation" }
    ],
    color: "red"
  },
  {
    id: "madtech",
    client: "MADTECH.AI",
    industry: "Marketing Technology",
    icon: TrendingUp,
    challenge: "Fast-growing martech company needed a fractional CMO to establish go-to-market strategy, build brand authority, and drive pipeline in a competitive space.",
    solution: [
      "Served as Fractional Chief Marketing Officer overseeing full GTM strategy",
      "Developed positioning and messaging to differentiate in the crowded martech landscape",
      "Built content marketing engine and AI-driven pipeline programs"
    ],
    results: [
      { metric: "Fractional", label: "CMO Embedded 2025" },
      { metric: "Clear", label: "GTM Strategy & Positioning" },
      { metric: "AI-Driven", label: "Pipeline Programs" }
    ],
    color: "red"
  },
  {
    id: "islaa",
    client: "ISLAA",
    industry: "Non-Profit Arts Organization",
    icon: Users,
    challenge: "Non-profit needed to equip their marketing team with practical AI skills and establish the right technology stack and workflows for sustainable adoption.",
    solution: [
      "Trained entire marketing team on applied AI tools and best practices",
      "Audited and recommended tailored AI tech stack for non-profit constraints",
      "Developed repeatable AI-enhanced content and workflow processes"
    ],
    results: [
      { metric: "Full", label: "Team AI Training" },
      { metric: "Custom", label: "Tech Stack Recommendations" },
      { metric: "Ongoing", label: "Workflow Improvements" }
    ],
    color: "green"
  },
  {
    id: "russo",
    client: "Russo Partners",
    industry: "Public Relations",
    icon: Shield,
    challenge: "Leading PR firm needed a comprehensive internal and external AI policy framework and a vetted tech stack to guide responsible AI adoption across the team.",
    solution: [
      "Developed internal AI usage policy covering ethics, data privacy, and brand safety",
      "Created external AI policy for client-facing communications",
      "Evaluated and recommended AI tools tailored to PR workflows"
    ],
    results: [
      { metric: "Internal", label: "AI Policy Developed" },
      { metric: "External", label: "Client AI Policy" },
      { metric: "Vetted", label: "PR-Specific Tech Stack" }
    ],
    color: "purple"
  },
  {
    id: "merck",
    client: "F500 Pharma Co",
    industry: "Pharmaceutical",
    icon: FileText,
    challenge: "Global pharmaceutical company needed comprehensive marketing competency framework for thousands of marketers worldwide.",
    solution: [
      "Led development of Global Marketing Leadership Framework with Econsultancy",
      "Defined five experience levels for marketing professionals",
      "Aligned 17 marketing skills with company competencies",
      "Created 170 detailed plans (85 learning objectives + 85 curriculum plans)"
    ],
    results: [
      { metric: "Global", label: "Marketing Framework" },
      { metric: "17", label: "Skill Competencies Aligned" },
      { metric: "170", label: "Detailed Learning Plans" }
    ],
    color: "teal"
  }
];

const filters = ["All", "Growth Marketing", "Thought Leadership", "Brand Strategy", "Event Marketing"];

export default function CaseStudies() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const colorClasses = {
    red: "from-red-600 to-red-700",
    blue: "from-blue-600 to-blue-700",
    purple: "from-purple-600 to-purple-700",
    green: "from-green-600 to-green-700",
    indigo: "from-indigo-600 to-indigo-700",
    amber: "from-amber-600 to-amber-700",
    teal: "from-teal-600 to-teal-700"
  };

  const borderColors = {
    red: "border-red-200 hover:border-red-400",
    blue: "border-blue-200 hover:border-blue-400",
    purple: "border-purple-200 hover:border-purple-400",
    green: "border-green-200 hover:border-green-400",
    indigo: "border-indigo-200 hover:border-indigo-400",
    amber: "border-amber-200 hover:border-amber-400",
    teal: "border-teal-200 hover:border-teal-400"
  };

  return (
    <div>
      <MetaTags 
        title="Case Studies - Proven AI Marketing Results"
        description="Real client results from David Berkowitz's fractional CMO and AI marketing consulting work. See how companies achieved 200% MQL growth, category leadership, and market differentiation."
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/eebbb17c5_dbforbes.jpg"
        url="https://highcaliberai.com/case-studies"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600/30 rounded-full text-red-400 text-sm font-semibold mb-8">
              <CheckCircle2 className="w-4 h-4" />
              Proven Results
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from fractional CMO engagements, brand transformations, and strategic marketing initiatives across B2B tech, agencies, and enterprise clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl border-2 ${borderColors[study.color]} p-8 hover:shadow-xl transition-all`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{study.client}</h3>
                    <p className="text-sm text-gray-500">{study.industry}</p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[study.color]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <study.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Challenge</h4>
                  <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">Solution</h4>
                  <ul className="space-y-2">
                    {study.solution.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-br ${colorClasses[study.color]} bg-clip-text text-transparent mb-1`}>
                          {result.metric}
                        </div>
                        <div className="text-xs text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Similar Results?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how fractional CMO services and strategic marketing can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to={createPageUrl("Services")}
                className="inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-400 transition-colors"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}