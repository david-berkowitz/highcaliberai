import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/book", priority: "0.9", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "daily" },
  { path: "/ainews", priority: "0.8", changefreq: "weekly" },
  { path: "/aistrategyhub", priority: "0.8", changefreq: "weekly" },
  { path: "/aimgfaq", priority: "0.7", changefreq: "monthly" },
  { path: "/agenticroicalculator", priority: "0.7", changefreq: "monthly" },
  { path: "/agenticusecaselibrary", priority: "0.7", changefreq: "weekly" },
  { path: "/agenticagency", priority: "0.7", changefreq: "monthly" },
  { path: "/agenticassessment", priority: "0.7", changefreq: "monthly" },
  { path: "/agenticclientscorecard", priority: "0.6", changefreq: "monthly" },
  { path: "/agenticquickstart", priority: "0.6", changefreq: "monthly" },
  { path: "/aiaudit", priority: "0.7", changefreq: "monthly" },
  { path: "/partners", priority: "0.7", changefreq: "weekly" },
  { path: "/speakingengagements", priority: "0.8", changefreq: "monthly" },
  { path: "/press", priority: "0.7", changefreq: "monthly" },
  { path: "/bylines", priority: "0.7", changefreq: "weekly" },
  { path: "/foaf", priority: "0.6", changefreq: "monthly" },
];

const SPEAKER_CITIES = [
  "new-york", "los-angeles", "chicago", "san-francisco", "boston",
  "austin", "seattle", "denver", "atlanta", "miami",
  "washington-dc", "dallas", "houston", "phoenix", "philadelphia",
  "san-diego", "portland", "nashville", "minneapolis", "detroit",
  "london", "toronto", "sydney", "singapore", "amsterdam",
  "berlin", "paris", "dubai", "tokyo", "mexico-city",
];

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    const blogPosts = await base44.asServiceRole.entities.BlogPost.filter({ published: true }, '-published_date', 500);

    const baseUrl = "https://highcaliberai.com";
    const today = new Date().toISOString().split("T")[0];

    let urls = [];

    for (const route of STATIC_ROUTES) {
      urls.push(`
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <lastmod>${today}</lastmod>
  </url>`);
    }

    for (const post of blogPosts) {
      if (post.slug) {
        const lastmod = post.published_date ? post.published_date.split("T")[0] : today;
        urls.push(`
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <lastmod>${lastmod}</lastmod>
  </url>`);
      }
    }

    for (const city of SPEAKER_CITIES) {
      urls.push(`
  <url>
    <loc>${baseUrl}/speaker/${city}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    <lastmod>${today}</lastmod>
  </url>`);
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (err) {
    console.error("Sitemap error:", err);
    return new Response("Error generating sitemap", { status: 500 });
  }
});