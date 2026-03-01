import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { CheckCircle, Circle, Lightbulb, AlertCircle, Clock } from "lucide-react";

const done = [
  "Full site with nav, footer, all major pages",
  "Blog, AI News, Press, Speaking, About, Contact, Resources, Book, Mensch, Bylines, Hustle",
  "Agentic Agency hub + tools (Quick Start, Assessment, ROI Calculator, Scorecard, Use Case Library)",
  "Partner Marketplace: Stripe checkout ($49), discount codes, webhook, submit flow, FAQ",
  "Partner Finder AI agent (with escalation to David)",
  "ICE Training password-protected page",
  "Global search",
  "SEO meta tags + structured data",
  "Newsletter signup / email subscriber entity",
  "Contact form submissions entity",
  "Speaking engagements entity",
  "Press coverage import + admin page",
  "SOS Raffle page",
  "Sticky CTA component",
  "ZAI Audit page",
  "Jobs, Lux, FOAF, IC, BD, CPG, Politics pages",
];

const needsVerification = [
  "Stripe live webhook registered in Stripe dashboard → partnerWebhook function",
  "Partner Finder agent: test escalation path end-to-end",
  "Press coverage: review 'needs_review' entries in PressCoverage admin",
];

const todo = [
  {
    section: "Content",
    items: [
      "Add real blog posts",
      "Add speaking engagements to database",
      "Add real press/bylines content",
      "Add Mensch posts",
      "Add AI News digests",
      "Populate Resource Library",
    ],
  },
  {
    section: "Features",
    items: [
      "Email notification to David when a new PartnerListing is submitted (pending_review)",
      "Admin UI to approve/reject partner listings",
      "Individual partner profile/detail pages",
      "Partner renewal / re-listing flow",
      "Book page — confirm Amazon links and content are current",
      "AI Audit page — review form and flow end to end",
    ],
  },
  {
    section: "Design / UX",
    items: [
      "Mobile nav audit — test all dropdown submenus on mobile",
      "Homepage hero section copy refresh",
      "Add testimonials to Services, Training, Partners pages",
      "Customize 404 PageNotFound design",
    ],
  },
  {
    section: "SEO / Technical",
    items: [
      "Sitemap function — confirm all new pages are included",
      "robots.txt — confirm correct pages are indexed/excluded",
      "og:image tags on all major pages for social sharing",
      "Analytics: add event tracking to key CTAs (contact form, partner submit, book CTA)",
    ],
  },
];

const future = [
  "Partner directory with ratings/reviews",
  "Email newsletter integration (Mailchimp / ConvertKit)",
  "AI tool comparison pages (affiliate potential)",
  "Member login area for training materials",
  "Podcast / video embed page",
  "David's LinkedIn post auto-import pipeline",
];

export default function AdminRoadmap() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => setUser(null)).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>;

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-500">This page is for admins only.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Site Roadmap</h1>
      <p className="text-gray-500 mb-10">Admin-only. Last updated March 2026.</p>

      {/* Done */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-green-700 flex items-center gap-2 mb-4">
          <CheckCircle className="w-5 h-5" /> Completed
        </h2>
        <ul className="space-y-2">
          {done.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Needs Verification */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-amber-700 flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5" /> Needs Verification
        </h2>
        <ul className="space-y-2">
          {needsVerification.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* To Do */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5" /> To Do
        </h2>
        <div className="space-y-8">
          {todo.map((group) => (
            <div key={group.section}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">{group.section}</h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <Circle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Future Ideas */}
      <section>
        <h2 className="text-lg font-semibold text-purple-700 flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5" /> Future Ideas
        </h2>
        <ul className="space-y-2">
          {future.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <Lightbulb className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}