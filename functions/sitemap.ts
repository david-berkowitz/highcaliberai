const baseUrl = 'https://highcaliberai.com';

const staticPages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/about', priority: '0.9', changefreq: 'monthly' },
  { loc: '/services', priority: '0.9', changefreq: 'monthly' },
  { loc: '/contact', priority: '0.8', changefreq: 'monthly' },
  { loc: '/blog', priority: '0.9', changefreq: 'weekly' },
  { loc: '/resources', priority: '0.8', changefreq: 'weekly' },
  { loc: '/ainews', priority: '0.8', changefreq: 'weekly' },
  { loc: '/book', priority: '0.7', changefreq: 'monthly' },
  { loc: '/speaking', priority: '0.7', changefreq: 'monthly' },
  { loc: '/casestudies', priority: '0.7', changefreq: 'monthly' },
  { loc: '/training', priority: '0.8', changefreq: 'monthly' },
  { loc: '/cpg', priority: '0.7', changefreq: 'monthly' },
  { loc: '/politics', priority: '0.7', changefreq: 'monthly' },
  { loc: '/workshopshowcase', priority: '0.7', changefreq: 'monthly' },
  { loc: '/small-team-training', priority: '0.8', changefreq: 'monthly' },
  { loc: '/saas-fractional-cmo', priority: '0.8', changefreq: 'monthly' },
  { loc: '/enterprise-workshop', priority: '0.8', changefreq: 'monthly' },
  { loc: '/content-marketing-tools', priority: '0.8', changefreq: 'monthly' },
  { loc: '/partners', priority: '0.6', changefreq: 'monthly' },
  { loc: '/zaiaudit', priority: '0.7', changefreq: 'monthly' },
  { loc: '/ic', priority: '0.6', changefreq: 'monthly' },
  { loc: '/jobs', priority: '0.6', changefreq: 'monthly' },
  { loc: '/lux', priority: '0.6', changefreq: 'monthly' },
  { loc: '/foaf', priority: '0.6', changefreq: 'monthly' },
  { loc: '/hustle', priority: '0.6', changefreq: 'monthly' },
  { loc: '/sos', priority: '0.7', changefreq: 'weekly' },
  { loc: '/mensch', priority: '0.7', changefreq: 'weekly' },
  { loc: '/press', priority: '0.7', changefreq: 'monthly' },
  { loc: '/bylines', priority: '0.8', changefreq: 'weekly' },
  { loc: '/bd', priority: '0.8', changefreq: 'monthly' },
];

Deno.serve(async () => {
  const urls = staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.loc}</loc>
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