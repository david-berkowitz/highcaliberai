import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Upload, Plus, X, ChevronRight, AlertCircle, Search, CheckCircle, Clock, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MetaTags from "@/components/SEO/MetaTags";

const COMPANY_TYPES = ["Agency", "Consultancy", "SaaS / Tool", "Freelancer", "Research / Analyst", "Media / Publisher", "Other"];
const SPECIALTY_CATEGORIES = [
  "Marketing Strategy", "Content & Creative", "Paid Media / Performance", "SEO & Organic",
  "Social Media", "Email & CRM", "Technical / Development", "Data & Analytics",
  "AI / Automation", "PR & Communications", "Design & Brand", "Other"
];
const VERTICALS_OPTIONS = ["B2B", "B2C", "E-commerce", "Healthcare", "Finance", "Tech", "CPG / Retail", "Media", "Education", "Hospitality", "Real Estate", "Non-Profit", "Government", "Other"];
const GEOGRAPHY_OPTIONS = ["United States", "Canada", "United Kingdom", "Europe", "Latin America", "Asia Pacific", "Middle East", "Africa", "Global / Remote"];
const DEFAULT_SERVICES = [
  "AI Strategy", "Content Marketing", "SEO", "Paid Search (SEM)", "Paid Social",
  "Email Marketing", "Marketing Automation", "Brand Strategy", "Social Media Management",
  "Data Analytics", "Web Development", "Creative / Design", "PR & Communications",
  "Influencer Marketing", "Video Production", "CRM Implementation", "Lead Generation",
  "Conversion Rate Optimization", "Market Research", "Training & Workshops"
];
const CLIENT_STAGES = ["Early-stage / Startup", "Growth / Mid-market", "Late-stage / Pre-IPO", "Enterprise", "Employer / Brand Owner"];
const ENGAGEMENT_MODELS = ["Retainer", "Project-based", "Hourly", "Mixed"];
const BUDGET_RANGES = ["Under $2K/month", "$2K–$5K/month", "$5K–$10K/month", "$10K–$20K/month", "$20K+/month", "Project-based (varies)"];

const STEPS = ["Company Info", "Founder & Reach", "Services", "Agreement & Payment"];

const AGREEMENT_TEXT = `PARTNER MARKETPLACE LISTING AGREEMENT

This agreement is between High Caliber AI ("HCA") and the submitting company ("Partner").

1. LISTING FEE. Partner agrees to pay a one-time, non-refundable listing fee of $49 (or applicable discounted amount) to submit a listing for review. Submission of payment does not guarantee listing approval. HCA reserves the right to reject any submission for any reason without refund.

2. REFERRAL FEE. If a client engagement originates from or is materially facilitated by a referral from HCA, Partner agrees to remit a referral fee equal to 5% of the total contract value of that engagement to High Caliber AI, payable monthly, for the first twelve (12) months from the date of first payment received for that engagement.

3. GOOD FAITH. Partner acknowledges this referral fee obligation and agrees to honor it in good faith. Partner will self-report any qualifying engagements within 30 days of deal close and remit fees monthly via invoice.

4. TERM. This agreement is effective upon payment and listing approval and continues for as long as the listing remains active.

5. ACCURACY. Partner represents that all information submitted is accurate and that they have authority to enter into this agreement on behalf of their company.

By checking the box below, you agree to these terms.`;

const DISCOUNT_CODES = { "HCAIVIP": 100, "HCAI50": 50 };

const STATUS_CONFIG = {
  pending_payment: { label: "Payment Pending", icon: Clock, color: "text-amber-600 bg-amber-50 border-amber-200" },
  pending_review: { label: "Under Review", icon: Clock, color: "text-blue-600 bg-blue-50 border-blue-200" },
  approved: { label: "Approved & Live", icon: CheckCircle, color: "text-green-600 bg-green-50 border-green-200" },
  rejected: { label: "Not Approved", icon: XCircle, color: "text-red-600 bg-red-50 border-red-200" },
};

export default function PartnerSubmit() {
  const [step, setStep] = useState(0);
  const [lookupEmail, setLookupEmail] = useState("");
  const [lookupResult, setLookupResult] = useState(null); // null | "searching" | listing obj | "none"
  const [showLookup, setShowLookup] = useState(false);
  const [form, setForm] = useState({
    company_name: "", tagline: "", company_type: "", specialty_category: "",
    website: "", linkedin_company_url: "", linkedin_founder_url: "", portfolio_url: "",
    logo_url: "", description: "",
    founder_bio: "", headquarters: "", founded_year: "",
    geographies_served: [], verticals: [], client_stages: [],
    engagement_model: "", budget_range: "",
    services: [], keywords: [],
    contact_name: "", contact_email: "",
  });
  const [serviceInput, setServiceInput] = useState("");
  const [keywordInput, setKeywordInput] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(null);
  const [discountError, setDiscountError] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [logoUploading, setLogoUploading] = useState(false);

  // On mount, check if returning from Stripe (stripe adds ?canceled=true or the listing id is in the URL)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const canceled = params.get("canceled");
    const listingId = params.get("listing_id");
    if (canceled === "true" || listingId) {
      setStep(3);
    }
  }, []);

  const handleLookup = async () => {
    if (!lookupEmail.trim()) return;
    setLookupResult("searching");
    const results = await base44.entities.PartnerListing.filter({ contact_email: lookupEmail.trim().toLowerCase() }, "-created_date", 5);
    setLookupResult(results.length > 0 ? results : "none");
  };

  const finalPrice = discountApplied !== null ? (49 * (1 - discountApplied / 100)).toFixed(2) : "49.00";

  const applyDiscount = () => {
    const code = discountCode.toUpperCase();
    if (DISCOUNT_CODES[code] !== undefined) {
      setDiscountApplied(DISCOUNT_CODES[code]);
      setDiscountError("");
    } else {
      setDiscountApplied(null);
      setDiscountError("Invalid discount code.");
    }
  };

  const addTag = (field, value, setter, max) => {
    const trimmed = value.trim();
    if (!trimmed || form[field].includes(trimmed) || form[field].length >= max) return;
    setForm(f => ({ ...f, [field]: [...f[field], trimmed] }));
    setter("");
  };

  const removeTag = (field, val) => setForm(f => ({ ...f, [field]: f[field].filter(v => v !== val) }));

  const toggleMulti = (field, val) => {
    setForm(f => ({
      ...f,
      [field]: f[field].includes(val) ? f[field].filter(x => x !== val) : [...f[field], val],
    }));
  };

  const toggleService = (s) => {
    if (form.services.includes(s)) {
      removeTag("services", s);
    } else if (form.services.length < 10) {
      setForm(f => ({ ...f, services: [...f.services, s] }));
    }
  };

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLogoUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setForm(f => ({ ...f, logo_url: file_url }));
    setLogoUploading(false);
  };

  const descLen = form.description.length;
  const taglineLen = form.tagline.length;

  const step0Valid = form.company_name && form.company_type && form.website && form.contact_name && form.contact_email && descLen >= 50 && descLen <= 2000 && taglineLen <= 150;
  const step1Valid = true; // founder & geo are optional
  const step2Valid = form.services.length > 0;
  const step3Valid = agreed;

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      base44.analytics.track({ eventName: "partner_submit_started", properties: { has_discount: discountApplied !== null, discount_percent: discountApplied || 0 } });

      const listing = await base44.entities.PartnerListing.create({
        ...form,
        status: "pending_payment",
        agreement_accepted: true,
        agreement_accepted_at: new Date().toISOString(),
        discount_code: discountApplied !== null ? discountCode.toUpperCase() : null,
      });

      if (window.self !== window.top) {
        alert("Checkout is only available from the published app, not in preview mode.");
        setSubmitting(false);
        return;
      }

      const res = await base44.functions.invoke("partnerCheckout", {
        listingId: listing.id,
        discountCode: discountApplied !== null ? discountCode.toUpperCase() : "",
        origin: window.location.origin,
        cancelUrl: `${window.location.origin}${window.location.pathname}?canceled=true`,
      });

      if (res.data.comped) {
        base44.analytics.track({ eventName: "partner_listing_submitted", properties: { amount: 0, comped: true } });
        window.location.href = res.data.redirect;
      } else if (res.data.url) {
        base44.analytics.track({ eventName: "partner_checkout_initiated", properties: { amount: parseFloat(finalPrice), discount_percent: discountApplied || 0 } });
        window.location.href = res.data.url;
      } else {
        setError(res.data.error || "Something went wrong.");
      }
    } catch (e) {
      setError(e.message);
    }
    setSubmitting(false);
  };

  const inputCls = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <MetaTags
        title="Submit Your Listing - High Caliber AI Partner Marketplace"
        description="List your AI marketing services in the High Caliber AI Partner Marketplace."
        url="https://highcaliberai.com/partner-submit"
      />

      <div className="max-w-2xl mx-auto px-4 pt-28 pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">Submit Your Listing</h1>
          <p className="text-gray-500 text-center mb-4">Join the High Caliber AI Partner Marketplace — $49 lifetime</p>

          {/* Check existing listing */}
          <div className="text-center mb-6">
            <button onClick={() => setShowLookup(!showLookup)} className="text-sm text-red-600 hover:text-red-700 underline font-medium">
              {showLookup ? "Hide" : "Already submitted? Check your listing status →"}
            </button>
          </div>

          {showLookup && (
            <div className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-1 text-sm">Look Up Your Listing</h3>
              <p className="text-xs text-gray-500 mb-3">Enter the email you used when submitting.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="your@email.com"
                  value={lookupEmail}
                  onChange={e => { setLookupEmail(e.target.value); setLookupResult(null); }}
                  onKeyDown={e => e.key === "Enter" && handleLookup()}
                />
                <button onClick={handleLookup} disabled={lookupResult === "searching"}
                  className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 flex items-center gap-1.5 disabled:opacity-50">
                  <Search className="w-3.5 h-3.5" /> Look Up
                </button>
              </div>
              {lookupResult === "searching" && <p className="text-sm text-gray-500 mt-3">Searching...</p>}
              {lookupResult === "none" && <p className="text-sm text-gray-500 mt-3">No listings found for that email.</p>}
              {Array.isArray(lookupResult) && (
                <div className="mt-3 space-y-3">
                  {lookupResult.map(listing => {
                    const cfg = STATUS_CONFIG[listing.status] || STATUS_CONFIG.pending_review;
                    const StatusIcon = cfg.icon;
                    return (
                      <div key={listing.id} className={`flex items-center justify-between p-3 rounded-lg border ${cfg.color}`}>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{listing.company_name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">{listing.contact_email} · Submitted {new Date(listing.created_date).toLocaleDateString()}</p>
                        </div>
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full border ${cfg.color}`}>
                          <StatusIcon className="w-3 h-3" /> {cfg.label}
                        </span>
                      </div>
                    );
                  })}
                  <p className="text-xs text-gray-400 mt-1">Need to make changes? Email <a href="mailto:david@highcaliberai.com" className="underline">david@highcaliberai.com</a> with your company name.</p>
                </div>
              )}
            </div>
          )}


          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-1 mb-10">
            {STEPS.map((s, i) => (
              <React.Fragment key={s}>
                <div className={`flex items-center gap-1.5 text-xs font-medium ${i === step ? "text-red-600" : i < step ? "text-green-600" : "text-gray-400"}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i === step ? "bg-red-600 text-white" : i < step ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className="hidden sm:block">{s}</span>
                </div>
                {i < STEPS.length - 1 && <div className="w-6 h-px bg-gray-300 mx-1" />}
              </React.Fragment>
            ))}
          </div>

          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-8">

              {/* STEP 0: Company Info */}
              {step === 0 && (
                <div className="space-y-5">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Company Information</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                      <input className={inputCls} value={form.company_name} onChange={e => setForm(f => ({ ...f, company_name: e.target.value }))} />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tagline <span className="text-gray-400 font-normal">(max 150 chars)</span>
                      </label>
                      <input className={inputCls} maxLength={150} placeholder="e.g. AI-powered marketing for mid-market brands"
                        value={form.tagline} onChange={e => setForm(f => ({ ...f, tagline: e.target.value }))} />
                      <p className={`text-xs mt-1 ${taglineLen > 140 ? "text-amber-500" : "text-gray-400"}`}>{taglineLen}/150</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Type *</label>
                      <select className={inputCls} value={form.company_type} onChange={e => setForm(f => ({ ...f, company_type: e.target.value }))}>
                        <option value="">Select...</option>
                        {COMPANY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Specialty Category</label>
                      <select className={inputCls} value={form.specialty_category} onChange={e => setForm(f => ({ ...f, specialty_category: e.target.value }))}>
                        <option value="">Select...</option>
                        {SPECIALTY_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Website *</label>
                      <input className={inputCls} placeholder="https://" value={form.website} onChange={e => setForm(f => ({ ...f, website: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company LinkedIn <span className="text-gray-400 font-normal">(optional)</span></label>
                      <input className={inputCls} placeholder="https://linkedin.com/company/..." value={form.linkedin_company_url} onChange={e => setForm(f => ({ ...f, linkedin_company_url: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio / Case Studies <span className="text-gray-400 font-normal">(optional)</span></label>
                      <input className={inputCls} placeholder="https://" value={form.portfolio_url} onChange={e => setForm(f => ({ ...f, portfolio_url: e.target.value }))} />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description * <span className="text-gray-400 font-normal">(50–2,000 chars)</span>
                      </label>
                      <textarea rows={5} className={`${inputCls} resize-none`}
                        placeholder="What you do, who you serve, what makes you different..."
                        value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
                      <p className={`text-xs mt-1 ${descLen > 0 && descLen < 50 ? "text-red-500" : descLen > 1900 ? "text-amber-500" : "text-gray-400"}`}>
                        {descLen}/2000 {descLen > 0 && descLen < 50 && `— need ${50 - descLen} more chars`}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                      <input className={inputCls} value={form.contact_name} onChange={e => setForm(f => ({ ...f, contact_name: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email *</label>
                      <input type="email" className={inputCls} value={form.contact_email} onChange={e => setForm(f => ({ ...f, contact_email: e.target.value }))} />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
                      <div className="flex items-center gap-4">
                        {form.logo_url && <img src={form.logo_url} className="h-12 rounded border border-gray-200 object-contain" alt="logo" />}
                        <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                          <Upload className="w-4 h-4" />
                          {logoUploading ? "Uploading..." : "Upload Logo"}
                          <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end pt-2">
                    <button disabled={!step0Valid} onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white rounded-lg font-medium text-sm disabled:opacity-40 hover:bg-red-700 transition-colors">
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 1: Founder & Reach */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Founder & Geographic Reach</h2>
                  <p className="text-sm text-gray-500 mb-4">All fields optional but help buyers find the right fit.</p>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Founder / Key Leader Bio</label>
                    <textarea rows={4} className={`${inputCls} resize-none`}
                      placeholder="Brief bio of the founder or primary contact — background, expertise, notable experience..."
                      value={form.founder_bio} onChange={e => setForm(f => ({ ...f, founder_bio: e.target.value }))} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Founder LinkedIn <span className="text-gray-400 font-normal">(optional)</span></label>
                    <input className={inputCls} placeholder="https://linkedin.com/in/..." value={form.linkedin_founder_url} onChange={e => setForm(f => ({ ...f, linkedin_founder_url: e.target.value }))} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Headquarters <span className="text-gray-400 font-normal">(city, state/country)</span></label>
                      <input className={inputCls} placeholder="e.g. New York, NY" value={form.headquarters} onChange={e => setForm(f => ({ ...f, headquarters: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Founded Year <span className="text-gray-400 font-normal">(optional)</span></label>
                      <input className={inputCls} type="number" placeholder="e.g. 2018" min="1980" max={new Date().getFullYear()}
                        value={form.founded_year} onChange={e => setForm(f => ({ ...f, founded_year: e.target.value }))} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Geographies Served</label>
                    <div className="flex flex-wrap gap-2">
                      {GEOGRAPHY_OPTIONS.map(g => (
                        <button key={g} type="button" onClick={() => toggleMulti("geographies_served", g)}
                          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${form.geographies_served.includes(g) ? "bg-red-600 text-white border-red-600" : "bg-white text-gray-600 border-gray-300 hover:border-red-400"}`}>
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Industry Verticals</label>
                    <div className="flex flex-wrap gap-2">
                      {VERTICALS_OPTIONS.map(v => (
                        <button key={v} type="button" onClick={() => toggleMulti("verticals", v)}
                          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${form.verticals.includes(v) ? "bg-red-600 text-white border-red-600" : "bg-white text-gray-600 border-gray-300 hover:border-red-400"}`}>
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button onClick={() => setStep(0)} className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-50">Back</button>
                    <button onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white rounded-lg font-medium text-sm hover:bg-red-700 transition-colors">
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Services & Keywords */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Services & Keywords</h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Services Offered * <span className="text-gray-400 font-normal">({form.services.length}/10 selected)</span>
                    </label>
                    <p className="text-xs text-gray-400 mb-3">Click to select from common services, or type your own below.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {DEFAULT_SERVICES.map(s => (
                        <button key={s} type="button" onClick={() => toggleService(s)}
                          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${form.services.includes(s) ? "bg-red-600 text-white border-red-600" : form.services.length >= 10 ? "bg-white text-gray-400 border-gray-200 cursor-not-allowed" : "bg-white text-gray-600 border-gray-300 hover:border-red-400"}`}>
                          {s}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2 mb-2">
                      <input className={inputCls} placeholder="Add custom service..."
                        value={serviceInput} onChange={e => setServiceInput(e.target.value)}
                        onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addTag("services", serviceInput, setServiceInput, 10); } }} />
                      <button type="button" onClick={() => addTag("services", serviceInput, setServiceInput, 10)}
                        className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    {form.services.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-1">
                        {form.services.map(s => (
                          <span key={s} className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-700 border border-red-200 rounded-full text-xs font-medium">
                            {s} <button onClick={() => removeTag("services", s)}><X className="w-3 h-3" /></button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Keywords <span className="text-gray-400 font-normal">(up to 10, for search)</span></label>
                    <div className="flex gap-2 mb-2">
                      <input className={inputCls} placeholder="e.g. AI, automation, lead gen..."
                        value={keywordInput} onChange={e => setKeywordInput(e.target.value)}
                        onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addTag("keywords", keywordInput, setKeywordInput, 10); } }} />
                      <button type="button" onClick={() => addTag("keywords", keywordInput, setKeywordInput, 10)}
                        className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {form.keywords.map(k => (
                        <span key={k} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {k} <button onClick={() => removeTag("keywords", k)}><X className="w-3 h-3" /></button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button onClick={() => setStep(1)} className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-50">Back</button>
                    <button disabled={!step2Valid} onClick={() => setStep(3)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white rounded-lg font-medium text-sm disabled:opacity-40 hover:bg-red-700 transition-colors">
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Agreement & Payment */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Agreement & Payment</h2>

                  <div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-48 overflow-y-auto text-xs text-gray-600 font-mono leading-relaxed whitespace-pre-wrap">
                      {AGREEMENT_TEXT}
                    </div>
                    <label className="flex items-start gap-3 mt-3 cursor-pointer">
                      <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-0.5 w-4 h-4 accent-red-600" />
                      <span className="text-sm text-gray-700">I have read and agree to the Partner Marketplace Listing Agreement, including the 5% referral fee obligation for the first 12 months from first client payment on any referred engagement.</span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Discount Code <span className="text-gray-400 font-normal">(optional)</span></label>
                    <div className="flex gap-2">
                      <input className={`${inputCls} uppercase`} placeholder="Enter code"
                        value={discountCode} onChange={e => { setDiscountCode(e.target.value); setDiscountApplied(null); setDiscountError(""); }} />
                      <button type="button" onClick={applyDiscount}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">Apply</button>
                    </div>
                    {discountApplied !== null && (
                      <p className="text-green-600 text-xs mt-1 font-medium">✓ {discountApplied === 100 ? "Complimentary listing applied!" : `${discountApplied}% discount applied!`}</p>
                    )}
                    {discountError && <p className="text-red-500 text-xs mt-1">{discountError}</p>}
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Listing Fee (Lifetime)</span><span>$49.00</span>
                    </div>
                    {discountApplied !== null && (
                      <div className="flex justify-between text-sm text-green-600 mb-1">
                        <span>Discount ({discountApplied}%)</span>
                        <span>-${(49 * discountApplied / 100).toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-gray-900 text-base border-t border-gray-200 pt-2 mt-2">
                      <span>Total Due</span><span>${finalPrice}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Submission fee is non-refundable. Approval is not guaranteed.</p>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />{error}
                    </div>
                  )}

                  <div className="flex justify-between pt-2">
                    <button onClick={() => setStep(2)} className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-50">Back</button>
                    <button disabled={!step3Valid || submitting} onClick={handleSubmit}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white rounded-lg font-medium text-sm disabled:opacity-40 hover:bg-red-700 transition-colors">
                      {submitting ? "Processing..." : discountApplied === 100 ? "Submit Listing (Free)" : `Pay $${finalPrice} & Submit`}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}