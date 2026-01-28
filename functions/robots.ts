Deno.serve(async (req) => {
  const robotsTxt = `# High Caliber AI - Robots.txt
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://highcaliberai.com/sitemap.xml

# Crawl delay (optional, adjust as needed)
Crawl-delay: 1

# Block specific paths if needed
# Disallow: /admin
# Disallow: /api/
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
});