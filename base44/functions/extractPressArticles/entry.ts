import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    // Fetch the SerialMarketer press page
    const response = await fetch('https://serialmarketer.net/contact/press/');
    const html = await response.text();
    
    // The HTML is too large, so process it in chunks
    const maxChunkSize = 150000;
    const totalLength = html.length;
    let allArticles = [];
    
    // Process the HTML in overlapping chunks to catch all articles
    for (let i = 0; i < totalLength; i += maxChunkSize) {
      const chunk = html.substring(i, Math.min(i + maxChunkSize + 10000, totalLength));
      
      // Skip if chunk is too small
      if (chunk.length < 1000) continue;
      
      const result = await base44.integrations.Core.InvokeLLM({
        prompt: `Extract ALL press articles from this HTML snippet. For each article, extract:
- publication (publication name)
- title (article title) 
- date (in YYYY-MM-DD format, convert dates like "February 18, 2026" to "2026-02-18", "Aug 27, 2025" to "2025-08-27", etc.)
- url (full article link)
- quote (David Berkowitz's quote or key excerpt from the article)
- context (brief context about the article, 1-2 sentences max describing what it's about)

Look for article entries with publication names, titles, dates, and URLs. Return all you find as a JSON array.

HTML content:
${chunk}`,
        response_json_schema: {
          type: "object",
          properties: {
            articles: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  publication: { type: "string" },
                  title: { type: "string" },
                  date: { type: "string" },
                  url: { type: "string" },
                  quote: { type: "string" },
                  context: { type: "string" }
                },
                required: ["publication", "title", "date", "url", "quote"]
              }
            }
          },
          required: ["articles"]
        }
      });
      
      if (result.articles && result.articles.length > 0) {
        allArticles = allArticles.concat(result.articles);
      }
    }
    
    // Remove duplicates based on URL
    const uniqueArticles = Array.from(
      new Map(allArticles.map(a => [a.url, a])).values()
    );
    
    // Get existing articles to avoid duplicates
    const existing = await base44.asServiceRole.entities.PressArticle.list();
    const existingUrls = new Set(existing.map(a => a.url));
    
    // Filter out duplicates
    const newArticles = uniqueArticles
      .filter(article => article.url && !existingUrls.has(article.url))
      .map(article => ({
        publication: article.publication,
        title: article.title,
        date: article.date,
        url: article.url,
        quote: article.quote,
        context: article.context || "",
        featured: false
      }));
    
    // Bulk create the articles
    if (newArticles.length > 0) {
      await base44.asServiceRole.entities.PressArticle.bulkCreate(newArticles);
    }
    
    return Response.json({
      success: true,
      totalExtracted: uniqueArticles.length,
      newArticles: newArticles.length,
      skippedDuplicates: uniqueArticles.length - newArticles.length
    });
    
  } catch (error) {
    return Response.json({ 
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
});