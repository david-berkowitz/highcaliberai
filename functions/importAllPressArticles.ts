import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const user = await base44.auth.me();
        
        if (!user || user.role !== 'admin') {
            return Response.json({ error: 'Unauthorized - Admin only' }, { status: 403 });
        }

        // Fetch the SerialMarketer press page
        const response = await fetch('https://serialmarketer.net/contact/press/');
        const html = await response.text();

        // Extract articles using LLM
        const extractionResult = await base44.asServiceRole.integrations.Core.InvokeLLM({
            prompt: `Extract ALL press articles from this HTML content. For each article, extract:
- publication: The source/publication name
- title: Article title
- date: Publication date (convert to YYYY-MM-DD format)
- url: Article URL (full URL)
- quote: The description text under the article
- context: Brief context if provided, or use the description

Important notes:
- Extract EVERY article from February 2020 through February 2026
- Dates are shown as headers (e.g., "February 2026", "December 2025") followed by articles
- Each article typically has: Publication name, title with link, date, and description
- Return as complete a list as possible

HTML content:
${html}`,
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

        const articles = extractionResult.articles || [];

        // Get existing articles to avoid duplicates
        const existingArticles = await base44.asServiceRole.entities.PressArticle.list();
        const existingUrls = new Set(existingArticles.map(a => a.url));

        // Filter out duplicates and format for database
        const newArticles = articles
            .filter(article => !existingUrls.has(article.url))
            .map(article => ({
                publication: article.publication,
                title: article.title,
                date: article.date,
                url: article.url,
                quote: article.quote || article.context || '',
                context: article.context || article.quote || '',
                featured: false
            }));

        // Bulk create new articles
        let created = [];
        if (newArticles.length > 0) {
            created = await base44.asServiceRole.entities.PressArticle.bulkCreate(newArticles);
        }

        return Response.json({
            success: true,
            totalExtracted: articles.length,
            newArticles: created.length,
            skippedDuplicates: articles.length - newArticles.length,
            message: `Successfully imported ${created.length} new press articles from 2020-2026`
        });

    } catch (error) {
        console.error('Error importing articles:', error);
        return Response.json({ 
            error: error.message,
            stack: error.stack 
        }, { status: 500 });
    }
});