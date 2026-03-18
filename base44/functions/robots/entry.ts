Deno.serve(async (req) => {
  const robotsTxt = `# High Caliber AI - Robots.txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

# AI Crawlers
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Crawl-delay
Crawl-delay: 1

# Sitemap
Sitemap: https://highcaliberai.com/api/sitemap`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400'
    }
  });
});