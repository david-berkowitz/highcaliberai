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
  Circle
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Fractional CMO Retainers",
    description: "Strategic marketing leadership for B2B tech companies seeking experienced guidance without full-time commitment.",
    features: [
      "Go-to-market strategy development",
      "Agency RFP management and selection",
      "AI implementation consulting",
      "Marketing team optimization",
      "Performance measurement frameworks",
      "Competitive analysis and positioning",
    ],
    benefits: [
      "Senior-level expertise at a fraction of the cost",
      "Flexible engagement based on your needs",
      "Immediate impact on marketing effectiveness",
      "Strategic perspective from industry veteran",
    ],
  },
  {
    icon: BookOpen,
    title: "AI Education & Training",
    description: "Comprehensive learning programs designed to upskill marketing teams and drive AI adoption across organizations.",
    features: [
      "Executive keynote presentations",
      "Custom workshop development",
      "Team training sessions",
      "AI strategy consulting",
      "Implementation roadmaps",
      "Best practices documentation",
    ],
    benefits: [
      "Practical, immediately actionable insights",
      "Customized content for your industry",
      "Proven training methodologies",
      "Ongoing support and guidance",
    ],
  },
  {
    icon: FileText,
    title: "B2B Content Creation",
    description: "High-quality content that positions your company as a thought leader while driving business results.",
    features: [
      "White papers and research reports",
      "Industry bylines and articles",
      "Sales collateral and case studies",
      "Thought leadership content",
      "Email marketing campaigns",
      "Social media strategy",
    ],
    benefits: [
      "Expert-level content quality",
      "Industry credibility and authority",
      "Lead generation focused approach",
      "Consistent brand messaging",
    ],
  },
  {
    icon: Handshake,
    title: "Business Development",
    description: "Strategic partnership development and networking to accelerate growth and market expansion.",
    features: [
      "Partnership strategy development",
      "Industry connection facilitation",
      "Business development consulting",
      "Market expansion planning",
      "Investor relations support",
      "Advisory board participation",
    ],
    benefits: [
      "Access to extensive industry network",
      "Accelerated business growth",
      "Strategic partnership opportunities",
      "Market insights and intelligence",
    ],
  },
];

const caseStudies = [
  {
    client: "AARP",
    challenge: "Needed strategic guidance for digital transformation initiative",
    solution: "Provided fractional CMO services and AI implementation strategy",
    result: "Successfully launched new digital marketing capabilities with measurable ROI improvements",
  },
  {
    client: "Education First",
    challenge: "Required team training on AI marketing applications",
    solution: "Delivered comprehensive AI workshop series for marketing team",
    result: "Enhanced team capabilities leading to improved campaign performance and efficiency",
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">Services</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI marketing solutions designed to drive real business results for B2B tech companies and agencies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={createPageUrl("Contact")}
                    className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}>
                  <h3 className="font-semibold text-gray-900 mb-6">Key Benefits:</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <Circle className="w-3 h-3 text-red-600 mr-3 mt-1.5 flex-shrink-0 fill-current" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real clients who have transformed their marketing with our help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{study.client}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Challenge:</span>
                    <p className="text-gray-600 mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Solution:</span>
                    <p className="text-gray-600 mt-1">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Result:</span>
                    <p className="text-gray-600 mt-1">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Let's discuss which services would be the best fit for your organization's goals and challenges.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}