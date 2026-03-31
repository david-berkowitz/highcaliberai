import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  const staticPages = [
    { url: "https://highcaliberai.com/", priority: "1.0", changefreq: "daily" },
    { url: "https://highcaliberai.com/About", priority: "0.9", changefreq: "monthly" },
    { url: "https://highcaliberai.com/Services", priority: "0.9", changefreq: "monthly" },
    { url: "https://highcaliberai.com/Training", priority: "0.9", changefreq: "weekly" },
    { url: "https://highcaliberai.com/Speaking", priority: "0.9", changefreq: "weekly" },
    { url: "https://highcaliberai.com/Vibe", priority: "0.9", changefreq: "weekly" },
    { url: "https://highcaliberai.com/Blog", priority: "0.9", changefreq: "daily" },
    { url: "https://highcaliberai.com/Book", priority: "0.8", changefreq: "monthly" },
    { url: "https://highcaliberai.com/Contact", priority: "0.8", changefreq: "monthly" },
    { url: "https://highcaliberai.com/Partners", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/Press", priority: "0.7", changefreq: "weekly" },
    { url: "https://highcaliberai.com/Events", priority: "0.7", changefreq: "weekly" },
    { url: "https://highcaliberai.com/CaseStudies", priority: "0.8", changefreq: "monthly" },
    { url: "https://highcaliberai.com/Bylines", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/Resources", priority: "0.8", changefreq: "weekly" },
    { url: "https://highcaliberai.com/AINews", priority: "0.8", changefreq: "daily" },
    { url: "https://highcaliberai.com/AIMGFAQ", priority: "0.8", changefreq: "monthly" },
    { url: "https://highcaliberai.com/AIStrategyHub", priority: "0.8", changefreq: "weekly" },
    { url: "https://highcaliberai.com/AgenticAgency", priority: "0.8", changefreq: "monthly" },
    { url: "https://highcaliberai.com/AgenticAssessment", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/AgenticClientScorecard", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/AgenticROICalculator", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/AgenticUseCaseLibrary", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/CPG", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/Lux", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/Mensch", priority: "0.6", changefreq: "monthly" },
    { url: "https://highcaliberai.com/PartnerFAQ", priority: "0.6", changefreq: "monthly" },
    { url: "https://highcaliberai.com/QueensTech", priority: "0.6", changefreq: "monthly" },
    { url: "https://highcaliberai.com/WorkshopShowcase", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/SaaSFractionalCMO", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/SmallTeamTraining", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/EnterpriseWorkshop", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/Politics", priority: "0.6", changefreq: "monthly" },
    { url: "https://highcaliberai.com/WorkingWithDavid", priority: "0.7", changefreq: "monthly" },
    { url: "https://highcaliberai.com/GuestLectures", priority: "0.6", changefreq: "monthly" },
    { url: "https://highcaliberai.com/course", priority: "0.9", changefreq: "monthly" },
    { url: "https://highcaliberai.com/quiz", priority: "0.8", changefreq: "monthly" },
  ];

  const today = new Date().toISOString().split("T")[0];

  let blogUrls = [];
  try {
    const base44 = createClientFromRequest(req);
    const posts = await base44.asServiceRole.entities.BlogPost.filter({ published: true }, "-created_date", 500);
    blogUrls = posts
      .filter((p) => p.slug)
      .map((p) => ({
        url: `https://highcaliberai.com/BlogPost?slug=${encodeURIComponent(p.slug)}`,
        priority: "0.8",
        changefreq: "weekly",
      }));
  } catch (e) {
    console.error("Failed to fetch blog posts for sitemap:", e);
  }

  const allPages = [...staticPages, ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((p) => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
});