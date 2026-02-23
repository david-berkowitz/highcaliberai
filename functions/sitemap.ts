const baseUrl = 'https://highcaliberai.com';

const staticPages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-02-23' },
  { loc: '/about', priority: '0.9', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/services', priority: '0.9', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/contact', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-23' },
  { loc: '/blog', priority: '0.9', changefreq: 'weekly', lastmod: '2026-02-23' },
  { loc: '/resources', priority: '0.8', changefreq: 'weekly', lastmod: '2026-02-20' },
  { loc: '/ainews', priority: '0.8', changefreq: 'weekly', lastmod: '2026-02-23' },
  { loc: '/book', priority: '0.7', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/speaking', priority: '0.7', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/casestudies', priority: '0.7', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/training', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/cpg', priority: '0.7', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/politics', priority: '0.7', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/workshopshowcase', priority: '0.7', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/small-team-training', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/saas-fractional-cmo', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/enterprise-workshop', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/content-marketing-tools', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/partners', priority: '0.6', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/zaiaudit', priority: '0.7', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/ic', priority: '0.6', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/jobs', priority: '0.6', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/lux', priority: '0.6', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/foaf', priority: '0.6', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/hustle', priority: '0.6', changefreq: 'monthly', lastmod: '2026-02-20' },
  { loc: '/sos', priority: '0.7', changefreq: 'weekly', lastmod: '2026-02-23' },
  { loc: '/mensch', priority: '0.7', changefreq: 'weekly', lastmod: '2026-02-23' },
  { loc: '/press', priority: '0.7', changefreq: 'monthly', lastmod: '2026-02-23' },
  { loc: '/bylines', priority: '0.8', changefreq: 'weekly', lastmod: '2026-02-23' },
  { loc: '/bd', priority: '0.8', changefreq: 'monthly', lastmod: '2026-02-23' },
];

Deno.serve(async () => {
  const urls = staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*'
    }
  });
});