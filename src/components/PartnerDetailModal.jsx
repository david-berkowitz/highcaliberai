import React, { useState } from "react";
import { X, ExternalLink, Mail, Send, Loader2 } from "lucide-react";
import { withReferral } from "@/utils/urls";

function ContactForm({ partner, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/functions/sendPartnerIntro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          partner_id: partner.id,
          sender_name: form.name,
          sender_email: form.email,
          sender_company: form.company,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Intro sent!</h3>
        <p className="text-gray-500 text-sm">Your message has been forwarded to {partner.company_name}. Check your inbox for a confirmation.</p>
        <button onClick={onClose} className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800">Done</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h4 className="text-lg font-bold text-gray-900">Send a Message</h4>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
          <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Jane Smith" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Company</label>
          <input value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Acme Co" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Your Email *</label>
        <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="jane@acme.com" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Message *</label>
        <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
          placeholder={`Hi, I found ${partner.company_name} through the High Caliber AI Partner Marketplace...`} />
      </div>
      {status === "error" && (
        <p className="text-red-600 text-xs">Something went wrong. Please try again or email david@highcaliberai.com.</p>
      )}
      <button type="submit" disabled={status === "sending"}
        className="w-full px-4 py-2.5 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 disabled:opacity-60 flex items-center justify-center gap-2">
        {status === "sending" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Message</>}
      </button>
    </form>
  );
}

const COMPANY_TYPE_COLORS = {
  "Agency": "bg-blue-100 text-blue-700",
  "Consultancy": "bg-purple-100 text-purple-700",
  "SaaS / Tool": "bg-green-100 text-green-700",
  "Freelancer": "bg-amber-100 text-amber-700",
  "Research / Analyst": "bg-teal-100 text-teal-700",
  "Media / Publisher": "bg-pink-100 text-pink-700",
  "Other": "bg-gray-100 text-gray-700",
};

export default function PartnerDetailModal({ partner, onClose }) {
  if (!partner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/50 overflow-y-auto" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8 relative"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10">
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            {partner.logo_url
              ? <img src={partner.logo_url} alt={partner.company_name} className="h-14 object-contain flex-shrink-0" />
              : <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 font-bold text-xl flex-shrink-0">{partner.company_name[0]}</div>
            }
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-gray-900">{partner.company_name}</h2>
              {partner.tagline && <p className="text-gray-500 text-sm italic mt-0.5">{partner.tagline}</p>}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {partner.company_type && (
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${COMPANY_TYPE_COLORS[partner.company_type] || "bg-gray-100 text-gray-700"}`}>
                    {partner.company_type}
                  </span>
                )}
                {partner.specialty_category && (
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                    {partner.specialty_category}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 mb-5">
            {partner.headquarters && <span>📍 {partner.headquarters}</span>}
            {partner.budget_range && <span>💰 {partner.budget_range}</span>}
            {partner.engagement_model && <span>🤝 {partner.engagement_model}</span>}
            {partner.founded_year && <span>🗓 Founded {partner.founded_year}</span>}
          </div>

          {/* Description */}
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-1">About</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
          </div>

          {/* Founder bio */}
          {partner.founder_bio && (
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-1">Founder / Key Leader</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{partner.founder_bio}</p>
            </div>
          )}

          {/* Services */}
          {partner.services?.length > 0 && (
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Services</h3>
              <div className="flex flex-wrap gap-2">
                {partner.services.map(s => (
                  <span key={s} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-200">{s}</span>
                ))}
              </div>
            </div>
          )}

          {/* Geo & Verticals */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            {partner.geographies_served?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Geographies</h3>
                <p className="text-sm text-gray-600">{partner.geographies_served.join(", ")}</p>
              </div>
            )}
            {partner.verticals?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Industries</h3>
                <p className="text-sm text-gray-600">{partner.verticals.join(", ")}</p>
              </div>
            )}
            {partner.client_stages?.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Client Stages</h3>
                <p className="text-sm text-gray-600">{partner.client_stages.join(", ")}</p>
              </div>
            )}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mb-6 pb-6 border-b border-gray-100">
            {partner.website && (
              <a href={withReferral(partner.website)}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 font-medium">
                <ExternalLink className="w-4 h-4" /> Website
              </a>
            )}
            {partner.linkedin_company_url && (
              <a href={partner.linkedin_company_url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 font-medium">
                <ExternalLink className="w-4 h-4" /> LinkedIn
              </a>
            )}
            {partner.portfolio_url && (
              <a href={partner.portfolio_url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 font-medium">
                <ExternalLink className="w-4 h-4" /> Portfolio
              </a>
            )}
          </div>

          {/* Contact form */}
          <ContactForm partner={partner} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}