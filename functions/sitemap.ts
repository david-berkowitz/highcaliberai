const baseUrl = 'https://highcaliberai.com';

const staticPages = [
  { loc: '/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-03-05' },
  { loc: '/about', priority: '0.9', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/services', priority: '0.9', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/contact', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/blog', priority: '0.9', changefreq: 'weekly', lastmod: '2026-03-05' },
  { loc: '/resources', priority: '0.8', changefreq: 'weekly', lastmod: '2026-03-05' },
  { loc: '/ainews', priority: '0.8', changefreq: 'weekly', lastmod: '2026-03-05' },
  { loc: '/book', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/speaking', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/casestudies', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/training', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/coursehome', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/cpg', priority: '0.7', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/politics', priority: '0.7', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/workshopshowcase', priority: '0.7', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/smallteamtraining', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/saas-fractional-cmo', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/enterprise-workshop', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/content-marketing-tools', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/partners', priority: '0.7', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/partnersubmit', priority: '0.6', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/partnerfaq', priority: '0.6', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/resourcesubmit', priority: '0.6', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/zaiaudit', priority: '0.7', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/ic', priority: '0.6', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/jobs', priority: '0.6', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/lux', priority: '0.6', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/foaf', priority: '0.6', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/hustle', priority: '0.6', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/sos', priority: '0.7', changefreq: 'weekly', lastmod: '2026-03-05' },
  { loc: '/mensch', priority: '0.7', changefreq: 'weekly', lastmod: '2026-03-05' },
  { loc: '/press', priority: '0.7', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/bylines', priority: '0.8', changefreq: 'weekly', lastmod: '2026-03-05' },
  { loc: '/bd', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/agenticagency', priority: '0.8', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/agenticquickstart', priority: '0.7', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/agenticassessment', priority: '0.7', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/agenticroicalculator', priority: '0.7', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/agenticclientscorecard', priority: '0.6', changefreq: 'monthly', lastmod: '2026-03-05' },
  { loc: '/agenticusecaselibrary', priority: '0.7', changefreq: 'weekly', lastmod: '2026-03-05' },
  { loc: '/baruch', priority: '0.4', changefreq: 'monthly', lastmod: '2026-03-05' },
];

import { createClientFromRequest } from 'npm:@base44/sdk@0.8.20';

Deno.serve(async (req) => {
  const today = new Date().toISOString().split('T')[0];

  const base44 = createClientFromRequest(req);
  let blogPosts = [];
  let aiDigests = [];
  try {
    const [posts, digests] = await Promise.all([
      base44.asServiceRole.entities.BlogPost.filter({ published: true }),
      base44.asServiceRole.entities.AINewsDigest.filter({ published: true }),
    ]);
    blogPosts = posts.filter(p => !p.published_date || p.published_date <= today);
    aiDigests = digests;
  } catch (e) {
    console.error('Failed to fetch dynamic pages for sitemap:', e.message);
  }

  const staticUrls = staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

  const blogUrls = blogPosts.map(post => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.published_date || post.updated_date?.split('T')[0] || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticUrls}${blogUrls}
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