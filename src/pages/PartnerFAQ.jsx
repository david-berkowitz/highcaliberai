import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Plus, ShieldCheck } from "lucide-react";
import MetaTags from "@/components/SEO/MetaTags";

const PARTNER_FAQS = [
  {
    category: "For Partners",
    items: [
      {
        q: "What does the $49 listing fee cover?",
        a: "The $49 one-time fee covers a lifetime listing in the High Caliber AI Partner Marketplace — as long as your listing remains active and in good standing. There are no annual renewal fees."
      },
      {
        q: "Is the listing fee refundable?",
        a: "No. The listing fee is non-refundable regardless of whether your submission is approved. This fee reflects the time and effort David invests in reviewing every application."
      },
      {
        q: "How does the review process work?",
        a: "After payment, your submission goes into a review queue. David personally evaluates each listing for quality, legitimacy, and fit. Expect a response within a few business days. You'll receive an email either confirming approval or explaining why your listing wasn't accepted."
      },
      {
        q: "Do I have to be an AI marketer to be listed?",
        a: "Absolutely not. This marketplace is for anyone whose work touches the intersection of AI and marketing — broadly defined. We actively welcome finance and ops consultants helping teams measure AI ROI, web developers building AI-powered sites and tools, SEO and GEO specialists optimizing for AI-driven search, data analysts turning AI outputs into business decisions, legal and compliance advisors navigating AI policy, HR and change management consultants supporting AI adoption, and more. If your services help a marketing-adjacent team work smarter with AI, you belong here."
      },
      {
        q: "What are the grounds for rejection?",
        a: "Common reasons include: misleading or inaccurate information, lack of a credible web presence, or content that doesn't meet our quality bar. We won't list every vendor — quality control is part of the value. Note: we do NOT require you to be a pure 'AI marketer' — we welcome any discipline that supports AI-enabled marketing and business operations."
      },
      {
        q: "What is the referral fee and how does it work?",
        a: "If a client engagement originates from or is materially facilitated by a referral from HCA, you agree to remit 5% of the total contract value of that engagement to High Caliber AI, payable monthly, for the first 12 months from the date of first payment received for that engagement. This is an honor-system arrangement — you self-report qualifying engagements within 30 days of deal close."
      },
      {
        q: "How do I know if an engagement qualifies?",
        a: "An engagement qualifies if the client found or was introduced to you through the HCA Partner Marketplace or a direct referral from David Berkowitz. If you're uncertain, reach out to david@highcaliberai.com."
      },
      {
        q: "Can I update my listing after it's approved?",
        a: "Yes. Contact us at david@highcaliberai.com with any updates to your listing details. Major changes (like a complete rebrand) may require re-review."
      },
      {
        q: "Can my listing be removed after approval?",
        a: "Yes. HCA reserves the right to remove listings at any time for violations of the agreement, quality concerns, or at our sole discretion. If your listing is removed due to a violation, the fee is forfeited."
      },
      {
        q: "What if I use a discount code?",
        a: "Discount codes reduce your listing fee proportionally. All other terms — including review, approval, and referral fee obligations — remain the same."
      },
    ]
  },
  {
    category: "For Buyers",
    items: [
      {
        q: "Does it cost anything to find or contact a partner?",
        a: "No — zero cost, ever. The marketplace is completely free for anyone looking for a service provider. You can browse, search, and reach out to any listed partner without any fees or obligations."
      },
      {
        q: "How are these partners vetted?",
        a: "Every listing is personally reviewed by David Berkowitz — author of The Non-Obvious Guide to Using AI for Marketing, founder of the AI Marketers Guild, and a longtime marketing strategist. Partners must pass review before being listed."
      },
      {
        q: "Are these partners affiliated with or endorsed by David?",
        a: "Partners are vetted and approved by David, but they are independent businesses. Approval means they've passed our quality bar — not that David has personally worked with all of them or guarantees specific outcomes."
      },
      {
        q: "What if I have a bad experience with a partner?",
        a: "Reach out to david@highcaliberai.com. We take the quality of this marketplace seriously and will investigate concerns. Listings can be removed if warranted."
      },
      {
        q: "How do I contact a partner?",
        a: "Click through to their website on their listing card. All contact is direct with the partner — we don't broker introductions or share your info without permission."
      },
    ]
  }
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors" onClick={() => setOpen(!open)}>
        <span className="font-semibold text-gray-900 text-sm pr-4">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed bg-white">{a}</div>}
    </div>
  );
}

export default function PartnerFAQ() {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags
        title="Partner Marketplace FAQ - High Caliber AI"
        description="Frequently asked questions about the High Caliber AI Partner Marketplace — for both service providers and buyers."
        url="https://highcaliberai.com/partner-faq"
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-bold text-red-600 uppercase tracking-widest">Partner Marketplace</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-8">Everything you need to know — whether you're a service provider or looking for one.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to={createPageUrl("Partners")} className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 text-sm">
                ← Back to Marketplace
              </Link>
              <Link to={createPageUrl("PartnerSubmit")} className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 text-sm">
                <Plus className="w-4 h-4" /> Submit Your Listing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Buyer trust callout */}
      <section className="py-6 bg-green-50 border-y border-green-100">
        <div className="max-w-3xl mx-auto px-4 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-sm text-green-800 font-medium">Reminder for buyers: browsing and contacting any partner is <strong>100% free</strong>. No account, no fee, no catch.</p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-14">
          {PARTNER_FAQS.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-bold text-gray-900 mb-5 pb-3 border-b border-gray-200">{section.category}</h2>
              <div className="space-y-3">
                {section.items.map((item, i) => (
                  <FAQItem key={i} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* More questions CTA */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h2>
          <p className="text-gray-600 mb-5">Reach out directly and we'll get back to you.</p>
          <a href="mailto:david@highcaliberai.com" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
            Email david@highcaliberai.com
          </a>
        </div>
      </section>
    </div>
  );
}