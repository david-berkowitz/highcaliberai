import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Newspaper, ExternalLink, Calendar, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MetaTags from "@/components/SEO/MetaTags";

// Major outlets to highlight — order matters (most prestigious first)
const NOTABLE_OUTLETS = [
  "The New York Times",
  "The Wall Street Journal",
  "CNN",
  "Ad Age",
  "MarketWatch",
  "eMarketer",
  "Mashable",
  "Forbes",
  "Fast Company",
  "Adweek",
  "Digiday",
  "TechCrunch",
  "Wired",
];

// Normalize a PressArticle record to a common shape
function normalizePressArticle(a) {
  return {
    id: `pa-${a.id}`,
    title: a.title,
    outlet: a.publication,
    date: a.date,
    year: a.date ? new Date(a.date).getFullYear() : null,
    url: a.url || null,
    quote: a.quote || null,
    context: a.context || null,
    featured: !!a.featured,
    source: "article",
  };
}

// Normalize a PressCoverage record to a common shape
function normalizePressCoverage(c) {
  const year = c.coverage_date
    ? new Date(c.coverage_date).getFullYear()
    : c.coverage_date_text
    ? parseInt(c.coverage_date_text.match(/\d{4}/)?.[0])
    : null;
  // Extract quote from notes if available
  let quote = null;
  if (c.notes) {
    const qMatch = c.notes.match(/[Qq]uote:\s*"([^"]+)"/);
    if (qMatch) quote = qMatch[1];
  }
  return {
    id: `pc-${c.id}`,
    title: c.article_title,
    outlet: c.outlet_name,
    date: c.coverage_date || null,
    year,
    url: c.article_url || null,
    quote,
    context: c.notes && !quote ? c.notes : null,
    featured: false,
    source: "coverage",
  };
}

export default function Press() {
  const { data: articles = [], isLoading: loadingArticles } = useQuery({
    queryKey: ["press-articles"],
    queryFn: () => base44.entities.PressArticle.list("-date"),
    initialData: [],
  });

  const { data: coverage = [], isLoading: loadingCoverage } = useQuery({
    queryKey: ["press-coverage"],
    queryFn: () => base44.entities.PressCoverage.list("-coverage_date"),
    initialData: [],
  });

  const isLoading = loadingArticles || loadingCoverage;

  // Combine + deduplicate by title
  const allItems = useMemo(() => {
    const normalized = [
      ...articles.map(normalizePressArticle),
      ...coverage.map(normalizePressCoverage),
    ];
    // Deduplicate: if same title appears in both, prefer PressArticle (richer data)
    const seen = new Set();
    const deduped = [];
    for (const item of normalized) {
      const key = item.title?.toLowerCase().trim();
      if (!key || !seen.has(key)) {
        if (key) seen.add(key);
        deduped.push(item);
      }
    }
    // Sort by date descending (nulls last)
    return deduped.sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date) - new Date(a.date);
    });
  }, [articles, coverage]);

  const years = useMemo(() => {
    const ys = [...new Set(allItems.map((i) => i.year).filter(Boolean))].sort(
      (a, b) => b - a
    );
    return ys;
  }, [allItems]);

  // Which notable outlets actually appear in the data
  const presentNotables = useMemo(() => {
    const outletSet = new Set(allItems.map((i) => i.outlet?.toLowerCase()));
    return NOTABLE_OUTLETS.filter((o) => outletSet.has(o.toLowerCase()));
  }, [allItems]);

  const [selectedYear, setSelectedYear] = useState("all");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const featuredItems = allItems.filter((i) => i.featured);
  const filtered = selectedYear === "all"
    ? allItems.filter((i) => !i.featured)
    : allItems.filter((i) => !i.featured && i.year === parseInt(selectedYear));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      await base44.entities.ContactSubmission.create(formData);
      await base44.integrations.Core.SendEmail({
        to: "dberkowitz@gmail.com",
        subject: `New Press Inquiry from ${formData.name}`,
        body: `New press inquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\n\nMessage:\n${formData.message}`,
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Press & Media Coverage - David Berkowitz",
    description: "David Berkowitz's media appearances and press coverage spanning The New York Times, CNN, Ad Age, eMarketer, Mashable, and more.",
    url: "https://highcaliberai.com/Press",
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <MetaTags
        title="Press & Media - David Berkowitz in the News"
        description="David Berkowitz's media appearances and press coverage on AI marketing, digital strategy, and marketing innovation. Featured in The New York Times, CNN, Ad Age, eMarketer, and more."
        url="https://highcaliberai.com/Press"
        canonical="https://highcaliberai.com/Press"
      />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-red-100 border border-red-200">
              <Newspaper className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-900 tracking-wide">Media Coverage</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Press & <span className="text-red-600">Media</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              David Berkowitz's insights featured across hundreds of publications — from the earliest days of social media to today's AI era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notable Outlets */}
      {presentNotables.length > 0 && (
        <section className="py-10 bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
              Featured In
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {presentNotables.map((outlet) => (
                <span
                  key={outlet}
                  className="px-4 py-2 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-full"
                >
                  {outlet}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Articles */}
      {featuredItems.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Coverage</h2>
            <div className="space-y-6">
              {featuredItems.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="block group">
                    <Card className="border-2 border-red-200 hover:border-red-400 hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-3">
                          <Badge className="bg-red-600 text-white flex-shrink-0">Featured</Badge>
                          {item.date && (
                            <div className="flex items-center text-sm text-gray-500 gap-2">
                              <Calendar className="w-4 h-4" />
                              {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                            </div>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{item.title}</h3>
                        <p className="text-red-600 font-semibold flex items-center gap-2 mb-3">
                          {item.outlet} <ExternalLink className="w-4 h-4" />
                        </p>
                        {item.context && <p className="text-gray-600 mb-4 leading-relaxed italic">{item.context}</p>}
                        {item.quote && (
                          <blockquote className="border-l-4 border-red-600 pl-4 py-2 bg-gray-50 rounded-r-lg">
                            <p className="text-gray-800 leading-relaxed">"{item.quote}"</p>
                          </blockquote>
                        )}
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Coverage with Year Filter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              All Coverage
              <span className="text-gray-400 text-xl font-normal ml-3">({allItems.length - featuredItems.length} items)</span>
            </h2>
            {/* Year Selector */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedYear("all")}
                className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${selectedYear === "all" ? "bg-red-600 text-white" : "bg-white border border-gray-300 text-gray-600 hover:border-red-400"}`}
              >
                All Years
              </button>
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setSelectedYear(y === selectedYear ? "all" : y)}
                  className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${selectedYear === y ? "bg-red-600 text-white" : "bg-white border border-gray-300 text-gray-600 hover:border-red-400"}`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-20"><p className="text-gray-500">Loading press coverage...</p></div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20"><p className="text-gray-500">No coverage for this year.</p></div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {filtered.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: Math.min(index * 0.04, 0.3) }}>
                  <Card className="h-full hover:shadow-lg hover:border-red-200 transition-all duration-300">
                    <CardContent className="p-5 h-full flex flex-col">
                      {item.date && (
                        <div className="flex items-center text-xs text-gray-400 gap-1.5 mb-2">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                        </div>
                      )}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-base font-bold text-gray-900 leading-snug flex-1">
                          {item.url ? (
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
                              {item.title}
                            </a>
                          ) : (
                            item.title
                          )}
                        </h3>
                        {item.url && (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 flex-shrink-0 mt-0.5">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-red-600 mb-2">{item.outlet}</p>
                      {item.quote && (
                        <p className="text-sm text-gray-600 italic border-l-2 border-gray-300 pl-3 mt-auto">
                          "{item.quote.length > 160 ? item.quote.substring(0, 160) + "…" : item.quote}"
                        </p>
                      )}
                      {!item.quote && item.context && (
                        <p className="text-sm text-gray-500 leading-relaxed mt-auto line-clamp-2">{item.context}</p>
                      )}
                      {!item.url && (
                        <span className="text-xs text-gray-400 mt-2 italic">No link available</span>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Press Inquiries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Press Inquiries</h2>
            <p className="text-xl text-gray-600">Interested in featuring David or need expert commentary? Get in touch.</p>
          </div>
          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Your message has been sent. We'll get back to you soon.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <Input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Publication / Company</label>
                    <Input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Your publication" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <Textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your story or inquiry..." rows={5} />
                  </div>
                  {error && <p className="text-red-600 text-sm">{error}</p>}
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}