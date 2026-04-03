import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import MetaTags from "@/components/SEO/MetaTags";
import { motion } from "framer-motion";
import { Mic, Users, Star, Mail, ArrowRight } from "lucide-react";

export default function SpeakerCity() {
  const { city } = useParams();
  const cityName = city
    ? city.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Your City";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "David Berkowitz",
    "url": "https://highcaliberai.com",
    "jobTitle": "AI Marketing Strategist & Fractional CMO",
    "description": `David Berkowitz delivers AI marketing keynotes and workshops in ${cityName} and worldwide. Founder of AI Marketers Guild (7,000+ members). 400+ speaking engagements.`,
    "knowsAbout": ["AI Marketing Strategy", "Generative AI for Marketing", "Agentic AI", "B2B Marketing", "Fractional CMO"],
    "worksFor": { "@type": "Organization", "name": "High Caliber AI", "url": "https://highcaliberai.com" }
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MetaTags
        title={`AI Marketing Speaker in ${cityName} | David Berkowitz | High Caliber AI`}
        description={`${cityName} event planners: Book David Berkowitz for AI marketing keynotes and workshops. 400+ speaking engagements, founder of AI Marketers Guild (7,000+ members).`}
        url={`https://highcaliberai.com/Speaker/${city}`}
        canonical={`https://highcaliberai.com/Speaker/${city}`}
      />

      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-3">
              AI Marketing Speaker · {cityName}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Book David Berkowitz<br />for Your {cityName} Event
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              David Berkowitz delivers high-impact keynotes and workshops on AI marketing strategy for conferences, summits, and corporate events in {cityName} and worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                <Mail className="w-5 h-5" /> Book David for {cityName}
              </Link>
              <Link
                to={createPageUrl("Speaking")}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                See Past Engagements <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            {[
              { icon: Mic, stat: "400+", label: "Speaking Engagements" },
              { icon: Users, stat: "7,000+", label: "AI Marketers Guild Members" },
              { icon: Star, stat: "10+", label: "Years in AI & Marketing" },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Icon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat}</p>
                <p className="text-gray-500 text-sm">{label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">About David</h2>
            <p className="text-gray-600 leading-relaxed text-center mb-8">
              David Berkowitz is an AI marketing strategist, fractional CMO, and founder of AI Marketers Guild — one of the world's largest communities for marketers navigating AI. He is the author of <em>The Non-Obvious Guide to Using AI for Marketing</em> and has spoken at hundreds of conferences and corporate events globally.
            </p>
            <div className="text-center">
              <Link
                to={createPageUrl("About")}
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
              >
                Learn more about David <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-gradient-to-br from-red-600 to-red-700 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Book?</h2>
          <p className="text-red-100 mb-6">
            Reach out to discuss availability, topics, and formats for your {cityName} event.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Mail className="w-5 h-5" /> Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}