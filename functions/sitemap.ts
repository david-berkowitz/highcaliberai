import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

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
  { loc: '/workshopshowcase', priority: '0.7', changefreq: 'monthly' },
  { loc: '/partners', priority: '0.6', changefreq: 'monthly' },
  { loc: '/zaiaudit', priority: '0.7', changefreq: 'monthly' },
];

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    // Fetch dynamic content
    const [blogPosts, aiNews] = await Promise.all([
      base44.asServiceRole.entities.BlogPost.filter({ published: true }, '-published_date', 100).catch(() => []),
      base44.asServiceRole.entities.AINewsDigest.filter({ published: true }, '-week_of', 50).catch(() => [])
    ]);

    // Build URL entries
    const urls = [];

    // Add static pages
    staticPages.forEach(page => {
      urls.push(`
  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
    });

    // Add blog posts
    blogPosts.forEach(post => {
      const lastmod = post.updated_date ? new Date(post.updated_date).toISOString().split('T')[0] : '';
      urls.push(`
  <url>
    <loc>${baseUrl}/blogpost?slug=${encodeURIComponent(post.slug)}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
    });

    // Add AI News digests
    aiNews.forEach(digest => {
      const weekDate = digest.week_of ? new Date(digest.week_of).toISOString().split('T')[0] : '';
      urls.push(`
  <url>
    <loc>${baseUrl}/ainews</loc>
    ${weekDate ? `<lastmod>${weekDate}</lastmod>` : ''}
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`);
    });

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (error) {
    return new Response(`Error generating sitemap: ${error.message}`, {
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
});