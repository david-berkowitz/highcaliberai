import React from "react";
import { X } from "lucide-react";

export default function AINewsEmailPreview({ digest, onClose }) {
  const categoryColors = {
    "Product Launch": "#3B82F6",
    "Industry Trend": "#8B5CF6",
    "Research": "#10B981",
    "Tool Update": "#F59E0B",
    "Strategy": "#EF4444",
  };

  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${digest.title}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#111827,#7f1d1d);padding:40px 40px 32px;text-align:center;">
            <p style="margin:0 0 8px;color:#f87171;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">High Caliber AI</p>
            <h1 style="margin:0 0 8px;color:#ffffff;font-size:26px;font-weight:800;line-height:1.2;">AI Marketing News</h1>
            <p style="margin:0;color:#d1d5db;font-size:14px;">${digest.week_of ? new Date(digest.week_of).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : ""}</p>
          </td>
        </tr>

        <!-- Intro -->
        ${digest.intro ? `
        <tr>
          <td style="padding:32px 40px 0;">
            <p style="margin:0;color:#374151;font-size:16px;line-height:1.7;">${digest.intro}</p>
          </td>
        </tr>` : ""}

        <!-- News Items -->
        ${(digest.news_items || []).map((item, idx) => `
        <tr>
          <td style="padding:${idx === 0 ? "32px" : "0"} 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="border-left:4px solid ${categoryColors[item.category] || "#EF4444"};padding-left:16px;">
                  ${item.category ? `<span style="display:inline-block;background:${categoryColors[item.category] || "#EF4444"}22;color:${categoryColors[item.category] || "#EF4444"};font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:2px 8px;border-radius:4px;margin-bottom:8px;">${item.category}</span>` : ""}
                  <h2 style="margin:0 0 10px;color:#111827;font-size:18px;font-weight:700;line-height:1.3;">${item.headline}</h2>
                  ${item.summary ? `<p style="margin:0 0 8px;color:#374151;font-size:15px;line-height:1.6;">${item.summary}</p>` : ""}
                  ${item.why_it_matters ? `<p style="margin:0 0 12px;color:#6b7280;font-size:14px;font-style:italic;line-height:1.5;">💡 ${item.why_it_matters}</p>` : ""}
                  ${item.source_url ? `<a href="${item.source_url}" style="color:#DC2626;font-size:13px;font-weight:600;text-decoration:none;">Read more →</a>` : ""}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr><td style="padding:24px 40px 0;"><hr style="border:none;border-top:1px solid #f3f4f6;margin:0;"></td></tr>
        `).join("")}

        <!-- Commentary -->
        ${digest.commentary ? `
        <tr>
          <td style="padding:32px 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#fef2f2;border-radius:8px;overflow:hidden;">
              <tr>
                <td style="padding:24px;">
                  <p style="margin:0 0 12px;color:#991b1b;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">David's Take</p>
                  <p style="margin:0;color:#1f2937;font-size:15px;line-height:1.7;white-space:pre-line;">${digest.commentary}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>` : ""}

        <!-- Footer -->
        <tr>
          <td style="padding:32px 40px;text-align:center;border-top:1px solid #f3f4f6;margin-top:32px;">
            <p style="margin:0 0 8px;color:#9ca3af;font-size:12px;">High Caliber AI · Applied AI for Marketing</p>
            <p style="margin:0;color:#9ca3af;font-size:11px;">
              <a href="https://highcaliberai.com" style="color:#DC2626;text-decoration:none;">highcaliberai.com</a>
              &nbsp;·&nbsp;
              <a href="https://highcaliberai.com/ainews" style="color:#9ca3af;text-decoration:none;">View online</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
  `;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900">Email Preview: {digest.title}</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                const blob = new Blob([emailHtml], { type: "text/html" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `ai-news-${digest.week_of || "draft"}.html`;
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="text-xs bg-red-600 text-white px-3 py-1.5 rounded-lg hover:bg-red-700 font-semibold">
              Download HTML
            </button>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4 bg-gray-100">
          <iframe
            srcDoc={emailHtml}
            title="Email Preview"
            className="w-full bg-white rounded-lg shadow"
            style={{ height: "600px", border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}