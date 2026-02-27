import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Search, Filter, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MetaTags from "@/components/SEO/MetaTags";

// Curated featured partners (always shown at top)
const FEATURED_PARTNERS = [
  {
    name: "Morgan Digital Ventures",
    url: "https://www.morgandv.com/",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/848660c7d_image.png",
    description: "Strategic consulting firm helping business leaders turn AI experimentation into measurable economic value, validate product-market fit, and drive revenue growth.",
    services: ["AI Implementation", "GTM Strategy", "Business Development", "Market Validation"],
    featured: true,
  },
  {
    name: "Social Lollipop",
    url: "https://sociallollipop.com/",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/a4e97ed2b_image.png",
    description: "Social media tools offering competitive intelligence, content preview optimization, and trend monitoring for brands and creators seeking tactical advantages.",
    services: ["Social Media Tools", "Competitive Analysis", "Content Optimization", "Trend Monitoring"],
    featured: true,
  },
];

const COMPANY_TYPE_COLORS = {
  "Agency": "bg-blue-100 text-blue-700",
  "Consultancy": "bg-purple-100 text-purple-700",
  "SaaS / Tool": "bg-green-100 text-green-700",
  "Freelancer": "bg-amber-100 text-amber-700",
  "Research / Analyst": "bg-teal-100 text-teal-700",
  "Media / Publisher": "bg-pink-100 text-pink-700",
  "Other": "bg-gray-100 text-gray-700",
};

export default function Partners() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const { data: listings = [] } = useQuery({
    queryKey: ["partner-listings"],
    queryFn: () => base44.entities.PartnerListing.filter({ status: "approved" }, "-created_date"),
    initialData: [],
  });

  const companyTypes = ["all", ...new Set(listings.map(l => l.company_type).filter(Boolean))];

  const filtered = listings.filter(l => {
    const matchesType = filterType === "all" || l.company_type === filterType;
    const q = search.toLowerCase();
    const matchesSearch = !q ||
      l.company_name?.toLowerCase().includes(q) ||
      l.description?.toLowerCase().includes(q) ||
      l.services?.some(s => s.toLowerCase().includes(q)) ||
      l.keywords?.some(k => k.toLowerCase().includes(q)) ||
      l.verticals?.some(v => v.toLowerCase().includes(q));
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title="Partner Marketplace - High Caliber AI"
        description="Find vetted AI marketing service providers in the High Caliber AI Partner Marketplace."
        url="https://highcaliberai.com/partners"
      />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Partner <span className="text-red-600">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Vetted AI marketing service providers — agencies, tools, consultants, and specialists curated by David Berkowitz.
            </p>
            <Link
              to={createPageUrl("PartnerSubmit")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-md"
            >
              <Plus className="w-4 h-4" />
              Submit Your Listing — $49 Lifetime
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Featured Partners</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURED_PARTNERS.map((p) => (
              <div key={p.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <img src={p.logo} alt={p.name} className="h-10 object-contain" loading="lazy" />
                  <span className="text-xs font-bold px-2 py-1 bg-red-100 text-red-700 rounded-full">Featured</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.services.map(s => <span key={s} className="px-2 py-1 bg-white text-gray-600 text-xs rounded-full border border-gray-200">{s}</span>)}
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm gap-1">
                  Visit Website <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Search by service, keyword, industry..."
                value={search} onChange={e => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {companyTypes.map(t => (
                <button key={t} onClick={() => setFilterType(t)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filterType === t ? "bg-red-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                  {t === "all" ? "All Types" : t}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 && listings.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketplace Launching Soon</h3>
              <p className="text-gray-500 mb-6">Be among the first vetted partners listed here.</p>
              <Link to={createPageUrl("PartnerSubmit")} className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                <Plus className="w-4 h-4" /> Submit Your Listing
              </Link>
            </div>
          )}

          {filtered.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((listing, i) => (
                <motion.div key={listing.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <Card className="h-full border border-gray-200 hover:border-red-200 hover:shadow-md transition-all duration-300 flex flex-col">
                    <CardContent className="p-6 flex flex-col gap-3 h-full">
                      <div className="flex items-start justify-between gap-3">
                        {listing.logo_url
                          ? <img src={listing.logo_url} alt={listing.company_name} className="h-8 object-contain" />
                          : <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 font-bold text-sm">{listing.company_name[0]}</div>
                        }
                        {listing.company_type && (
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${COMPANY_TYPE_COLORS[listing.company_type] || "bg-gray-100 text-gray-700"}`}>
                            {listing.company_type}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{listing.company_name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">{listing.description}</p>
                      {listing.services?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {listing.services.slice(0, 4).map(s => (
                            <span key={s} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">{s}</span>
                          ))}
                          {listing.services.length > 4 && <span className="px-2 py-1 text-gray-400 text-xs">+{listing.services.length - 4} more</span>}
                        </div>
                      )}
                      {listing.website && (
                        <a href={listing.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold text-sm gap-1 mt-auto">
                          Visit Website <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {filtered.length === 0 && listings.length > 0 && (
            <div className="text-center py-16 text-gray-500">No partners match your search.</div>
          )}
        </div>
      </section>

      {/* Submit CTA */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">List Your Services Here</h2>
          <p className="text-red-100 mb-2 text-lg">$49 lifetime listing fee. Reviewed and approved by David Berkowitz.</p>
          <p className="text-red-200 text-sm mb-8">Submission fee is non-refundable. A 5% referral fee applies to any engagements sourced through HCA for the first year.</p>
          <Link to={createPageUrl("PartnerSubmit")} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            <Plus className="w-4 h-4" /> Submit Your Listing
          </Link>
        </div>
      </section>
    </div>
  );
}