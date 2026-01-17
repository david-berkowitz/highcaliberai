import React from "react";
import { motion } from "framer-motion";
import MetaTags from "@/components/SEO/MetaTags";
import { ExternalLink, ArrowRight } from "lucide-react";

const partners = [
  {
    name: "Morgan Digital Ventures",
    url: "https://www.morgandv.com/",
    description: "Strategic consulting firm helping business leaders turn AI experimentation into measurable economic value, validate product-market fit, and drive revenue growth. Led by David Morgan, former chief revenue officer and industry veteran.",
    expertise: ["AI Implementation", "GTM Strategy", "Business Development", "Market Validation"],
    color: "blue"
  },
  {
    name: "Social Lollipop",
    url: "https://sociallollipop.com/",
    description: "Social media tools built by marketer Leo Morejon, offering competitive intelligence, content preview optimization, and trend monitoring for brands and creators seeking tactical advantages in social platforms.",
    expertise: ["Social Media Tools", "Competitive Analysis", "Content Optimization", "Trend Monitoring"],
    color: "pink"
  }
];

export default function Partners() {
  return (
    <div>
      <MetaTags 
        title="Strategic Partners & Collaborators"
        description="Organizations and practitioners we collaborate with to deliver comprehensive AI marketing solutions. Trusted partners in strategy, implementation, and social media excellence."
        url="https://highcaliberai.com/partners"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic <span className="text-red-600">Partners</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Organizations and practitioners we collaborate with to deliver comprehensive solutions beyond our core capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-red-600 transition-all h-full flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {partner.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {partner.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Areas of Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {partner.expertise.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors group"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Partnership Approach
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We collaborate with specialists who complement our AI marketing expertise. These partnerships enable comprehensive client solutions spanning strategy development, technical implementation, and platform-specific execution.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Partner selection prioritizes proven track records, complementary capabilities, and shared commitment to measurable client outcomes rather than theoretical frameworks.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}