import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    // Fetch the SerialMarketer press page
    const response = await fetch('https://serialmarketer.net/contact/press/');
    const html = await response.text();
    
    // Use LLM to extract all press articles
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `Extract ALL press articles from this HTML page. For each article, extract:
- publication (publication name)
- title (article title) 
- date (in YYYY-MM-DD format, convert dates like "February 18, 2026" to "2026-02-18")
- url (article link)
- quote (David Berkowitz's quote or key excerpt from the article)
- context (brief context about the article, 1-2 sentences max)

Return a JSON array with ALL articles found on the page. Make sure to get every single article listed. The page has articles organized by month/year tabs going back to February 2020. Extract them all.

HTML content:
${html.substring(0, 200000)}`,
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
    
    // Get existing articles to avoid duplicates
    const existing = await base44.asServiceRole.entities.PressArticle.list();
    const existingUrls = new Set(existing.map(a => a.url));
    
    // Filter out duplicates
    const newArticles = result.articles
      .filter(article => !existingUrls.has(article.url))
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
      totalExtracted: result.articles.length,
      newArticles: newArticles.length,
      skippedDuplicates: result.articles.length - newArticles.length
    });
    
  } catch (error) {
    return Response.json({ 
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
});