import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Upload, Plus, X, ChevronRight, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MetaTags from "@/components/SEO/MetaTags";

const COMPANY_TYPES = ["Agency", "Consultancy", "SaaS / Tool", "Freelancer", "Research / Analyst", "Media / Publisher", "Other"];
const VERTICALS_OPTIONS = ["B2B", "B2C", "E-commerce", "Healthcare", "Finance", "Tech", "CPG / Retail", "Media", "Education", "Hospitality", "Real Estate", "Non-Profit", "Government", "Other"];
const STEPS = ["Your Info", "Services", "Agreement & Payment"];

const AGREEMENT_TEXT = `PARTNER MARKETPLACE LISTING AGREEMENT

This agreement is between High Caliber AI ("HCA") and the submitting company ("Partner").

1. LISTING FEE. Partner agrees to pay a one-time, non-refundable listing fee of $49 (or applicable discounted amount) to submit a listing for review. Submission of payment does not guarantee listing approval. HCA reserves the right to reject any submission for any reason without refund.

2. REFERRAL FEE. If a client engagement originates from or is materially facilitated by a referral from HCA, Partner agrees to remit a referral fee equal to 5% of the total contract value of that engagement to High Caliber AI, payable monthly, for the first twelve (12) months of that engagement.

3. GOOD FAITH. Partner acknowledges this referral fee obligation and agrees to honor it in good faith. Partner will self-report any qualifying engagements within 30 days of deal close and remit fees monthly via invoice.

4. TERM. This agreement is effective upon payment and listing approval and continues for as long as the listing remains active.

5. ACCURACY. Partner represents that all information submitted is accurate and that they have authority to enter into this agreement on behalf of their company.

By checking the box below, you agree to these terms.`;

export default function PartnerSubmit() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    company_name: "",
    company_type: "",
    website: "",
    logo_url: "",
    description: "",
    verticals: [],
    services: [],
    keywords: [],
    contact_name: "",
    contact_email: "",
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

  const DISCOUNT_CODES = {
    "HCAIVIP": 100,
    "HCAI50": 50,
  };

  const finalPrice = discountApplied !== null
    ? (49 * (1 - discountApplied / 100)).toFixed(2)
    : "49.00";

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

  const removeTag = (field, val) => {
    setForm(f => ({ ...f, [field]: f[field].filter(v => v !== val) }));
  };

  const toggleVertical = (v) => {
    setForm(f => ({
      ...f,
      verticals: f.verticals.includes(v) ? f.verticals.filter(x => x !== v) : [...f.verticals, v],
    }));
  };

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLogoUploading(true);
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    setForm(f => ({ ...f, logo_url: file_url }));
    setLogoUploading(false);
  };

  const step0Valid = form.company_name && form.company_type && form.website && form.contact_name && form.contact_email && form.description;
  const step1Valid = form.services.length > 0;
  const step2Valid = agreed;

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      // Create the listing record first
      const listing = await base44.asServiceRole.entities.PartnerListing.create({
        ...form,
        status: "pending_payment",
        agreement_accepted: true,
        agreement_accepted_at: new Date().toISOString(),
        discount_code: discountApplied !== null ? discountCode.toUpperCase() : null,
      });

      // Check if running in iframe (preview)
      if (window.self !== window.top) {
        alert("Checkout is only available from the published app, not in preview mode.");
        setSubmitting(false);
        return;
      }

      const res = await base44.functions.invoke("partnerCheckout", {
        listingId: listing.id,
        discountCode: discountApplied !== null ? discountCode.toUpperCase() : "",
        origin: window.location.origin,
      });

      if (res.data.comped) {
        window.location.href = res.data.redirect;
      } else if (res.data.url) {
        window.location.href = res.data.url;
      } else {
        setError(res.data.error || "Something went wrong.");
      }
    } catch (e) {
      setError(e.message);
    }
    setSubmitting(false);
  };

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
          <p className="text-gray-500 text-center mb-8">Join the High Caliber AI Partner Marketplace</p>

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {STEPS.map((s, i) => (
              <React.Fragment key={s}>
                <div className={`flex items-center gap-2 text-sm font-medium ${i === step ? "text-red-600" : i < step ? "text-green-600" : "text-gray-400"}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i === step ? "bg-red-600 text-white" : i < step ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span className="hidden sm:block">{s}</span>
                </div>
                {i < STEPS.length - 1 && <div className="w-8 h-px bg-gray-300" />}
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
                      <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={form.company_name} onChange={e => setForm(f => ({ ...f, company_name: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Type *</label>
                      <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={form.company_type} onChange={e => setForm(f => ({ ...f, company_type: e.target.value }))}>
                        <option value="">Select...</option>
                        {COMPANY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Website *</label>
                      <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="https://" value={form.website} onChange={e => setForm(f => ({ ...f, website: e.target.value }))} />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description * <span className="text-gray-400 font-normal">(what you do, who you serve)</span></label>
                      <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                        value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                      <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={form.contact_name} onChange={e => setForm(f => ({ ...f, contact_name: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email *</label>
                      <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={form.contact_email} onChange={e => setForm(f => ({ ...f, contact_email: e.target.value }))} />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Logo</label>
                      <div className="flex items-center gap-4">
                        {form.logo_url && <img src={form.logo_url} className="h-12 rounded border border-gray-200 object-contain" />}
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

              {/* STEP 1: Services & Tags */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Services & Keywords</h2>

                  {/* Verticals */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Verticals / Industries Served</label>
                    <div className="flex flex-wrap gap-2">
                      {VERTICALS_OPTIONS.map(v => (
                        <button key={v} type="button" onClick={() => toggleVertical(v)}
                          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${form.verticals.includes(v) ? "bg-red-600 text-white border-red-600" : "bg-white text-gray-600 border-gray-300 hover:border-red-400"}`}>
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Services Offered * <span className="text-gray-400 font-normal">(up to 10)</span></label>
                    <div className="flex gap-2 mb-2">
                      <input className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="e.g. AI Strategy, Content Marketing..."
                        value={serviceInput} onChange={e => setServiceInput(e.target.value)}
                        onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addTag("services", serviceInput, setServiceInput, 10); } }} />
                      <button type="button" onClick={() => addTag("services", serviceInput, setServiceInput, 10)}
                        className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm font-medium">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {form.services.map(s => (
                        <span key={s} className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-700 border border-red-200 rounded-full text-xs font-medium">
                          {s} <button onClick={() => removeTag("services", s)}><X className="w-3 h-3" /></button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Keywords */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Keywords <span className="text-gray-400 font-normal">(up to 10, for search)</span></label>
                    <div className="flex gap-2 mb-2">
                      <input className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="e.g. AI, automation, lead gen..."
                        value={keywordInput} onChange={e => setKeywordInput(e.target.value)}
                        onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addTag("keywords", keywordInput, setKeywordInput, 10); } }} />
                      <button type="button" onClick={() => addTag("keywords", keywordInput, setKeywordInput, 10)}
                        className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm font-medium">
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
                    <button onClick={() => setStep(0)} className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-50">Back</button>
                    <button disabled={!step1Valid} onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white rounded-lg font-medium text-sm disabled:opacity-40 hover:bg-red-700 transition-colors">
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Agreement & Payment */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">Agreement & Payment</h2>

                  {/* Agreement */}
                  <div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-48 overflow-y-auto text-xs text-gray-600 font-mono leading-relaxed whitespace-pre-wrap">
                      {AGREEMENT_TEXT}
                    </div>
                    <label className="flex items-start gap-3 mt-3 cursor-pointer">
                      <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-0.5 w-4 h-4 accent-red-600" />
                      <span className="text-sm text-gray-700">I have read and agree to the Partner Marketplace Listing Agreement, including the 5% referral fee obligation for the first year of any referred engagements.</span>
                    </label>
                  </div>

                  {/* Discount Code */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Discount Code <span className="text-gray-400 font-normal">(optional)</span></label>
                    <div className="flex gap-2">
                      <input className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 uppercase"
                        placeholder="Enter code" value={discountCode} onChange={e => { setDiscountCode(e.target.value); setDiscountApplied(null); setDiscountError(""); }} />
                      <button type="button" onClick={applyDiscount}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">Apply</button>
                    </div>
                    {discountApplied !== null && (
                      <p className="text-green-600 text-xs mt-1 font-medium">✓ {discountApplied === 100 ? "Complimentary listing applied!" : `${discountApplied}% discount applied!`}</p>
                    )}
                    {discountError && <p className="text-red-500 text-xs mt-1">{discountError}</p>}
                  </div>

                  {/* Price Summary */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Listing Fee (Lifetime)</span>
                      <span>$49.00</span>
                    </div>
                    {discountApplied !== null && (
                      <div className="flex justify-between text-sm text-green-600 mb-1">
                        <span>Discount ({discountApplied}%)</span>
                        <span>-${(49 * discountApplied / 100).toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-gray-900 text-base border-t border-gray-200 pt-2 mt-2">
                      <span>Total Due</span>
                      <span>${finalPrice}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Submission fee is non-refundable. Approval is not guaranteed.</p>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <div className="flex justify-between pt-2">
                    <button onClick={() => setStep(1)} className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg font-medium text-sm hover:bg-gray-50">Back</button>
                    <button disabled={!step2Valid || submitting} onClick={handleSubmit}
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