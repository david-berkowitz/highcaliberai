Deno.serve(async (req) => {
  const robotsTxt = `# High Caliber AI - Robots.txt
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://highcaliberai.com/sitemap.xml

# Crawl delay
Crawl-delay: 1

# Block base44 internal paths
Disallow: /.b44/preview/
Disallow: /.b44/admin/
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    },
  });
});