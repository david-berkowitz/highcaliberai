Deno.serve(async (req) => {
  const llmsTxt = `# High Caliber AI - AI Marketing Resources

## Common Questions → Pages

"Who is David Berkowitz?" → https://highcaliberai.com/about
"What services does High Caliber AI offer?" → https://highcaliberai.com/services
"Is a fractional CMO worth it for a startup?" → https://highcaliberai.com/saas-fractional-cmo
"What AI marketing training is available?" → https://highcaliberai.com/training
"Best AI tools for content creation" → https://highcaliberai.com/content-marketing-tools
"AI training for CPG brands" → https://highcaliberai.com/cpg
"AI training for political campaigns" → https://highcaliberai.com/politics
"Latest AI marketing news" → https://highcaliberai.com/ai-news
"How to implement AI in marketing" → https://highcaliberai.com/blog
"AI Marketers Guild community" → https://highcaliberai.com/resources
"David Berkowitz book on AI marketing" → https://highcaliberai.com/book
"Contact High Caliber AI" → https://highcaliberai.com/contact
"AI marketing case studies" → https://highcaliberai.com/case-studies
"Speaking engagements David Berkowitz" → https://highcaliberai.com/speaking
"How does AI help with marketing?" → https://highcaliberai.com/services
"What is GEO (Generative Engine Optimization)?" → https://highcaliberai.com/blog
"Fractional CMO services" → https://highcaliberai.com/saas-fractional-cmo
"Corporate AI workshops" → https://highcaliberai.com/workshop-showcase
"AI marketing resources and tools" → https://highcaliberai.com/resources
"Vibe coding workshop" → https://highcaliberai.com/vibe
"AI training for small marketing teams" → https://highcaliberai.com/small-team-training
"Fractional CMO for SaaS companies" → https://highcaliberai.com/saas-fractional-cmo
"AI workshop for Fortune 500" → https://highcaliberai.com/enterprise-workshop
"Best AI content marketing tools 2026" → https://highcaliberai.com/content-marketing-tools
"AI tools for video content" → https://highcaliberai.com/content-marketing-tools
"Is fractional CMO worth it for SaaS" → https://highcaliberai.com/saas-fractional-cmo
"AI training for small teams budget" → https://highcaliberai.com/small-team-training
"Enterprise AI training Fortune 500" → https://highcaliberai.com/enterprise-workshop

## About This Site

High Caliber AI provides AI marketing strategy, training, and fractional CMO services. Founded by David Berkowitz, author of "The Non-Obvious Guide to Using AI for Marketing" and founder of AI Marketers Guild (7,000+ members).

## Content Categories

- Services: Fractional CMO, team training, innovation pilots
- Training: CPG brands, political campaigns, corporate workshops, vibe coding
- Resources: Curated AI tools, newsletters, courses
- Blog: AI marketing strategy and implementation guides
- News: Weekly AI marketing digest
`;

  return new Response(llmsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600'
    }
  });
});