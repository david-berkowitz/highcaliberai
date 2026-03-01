import React, { useState } from "react";
import { ExternalLink, Mail, Copy, Check, Building2, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * tier: "smb" | "enterprise" | null
 * introEmail: { to, subject, body } — if set, shows an "Email Intro" button
 * referralUrl: if set, uses this URL (already has ref params baked in)
 * hasReferral: bool — shows a "Referral Link" badge
 */
export default function ResourceCard({ icon: Icon, title, description, href, featured, tier, introEmail, hasReferral }) {
  const [copied, setCopied] = useState(false);

  const handleCopyIntroNote = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(introEmail.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailIntro = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const subject = encodeURIComponent(introEmail.subject);
    const body = encodeURIComponent(introEmail.body);
    window.open(`mailto:${introEmail.to}?subject=${subject}&body=${body}`, "_blank");
  };

  const tierBadge = tier === "smb" ? (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-semibold">
      <Zap className="w-3 h-3" /> SMB
    </span>
  ) : tier === "enterprise" ? (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-semibold">
      <Building2 className="w-3 h-3" /> Enterprise
    </span>
  ) : null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <Card className={`bg-white border ${featured ? "border-red-600/50 shadow-lg" : "border-gray-200"} hover:border-red-600/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full`}>
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-start justify-between gap-2 mb-4">
            <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
              <Icon className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex flex-wrap gap-1 justify-end">
              {tierBadge}
{/* referral links are tracked silently — no badge shown */}
            </div>
          </div>

          <h3 className={`text-xl ${featured ? "font-bold" : "font-semibold"} text-gray-900 mb-2 group-hover:text-red-600 transition-colors`}>{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{description}</p>

          <div className="flex flex-wrap items-center gap-2 mt-auto">
            <div className="flex items-center gap-1.5 text-red-600 font-medium text-sm">
              Visit Site <ExternalLink className="w-3.5 h-3.5" />
            </div>

            {introEmail && (
              <>
                <button
                  onClick={handleEmailIntro}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  title="Send an intro email referencing High Caliber AI"
                >
                  <Mail className="w-3.5 h-3.5" /> Email Intro
                </button>
                <button
                  onClick={handleCopyIntroNote}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                  title="Copy intro note to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copied!" : "Copy Note"}
                </button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}