import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const user = await base44.auth.me();

        if (user?.role !== 'admin') {
            return Response.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
        }

        // Fetch the press page
        const response = await fetch('https://serialmarketer.net/contact/press/');
        const html = await response.text();

        // Simple regex parsing to extract article blocks
        // Each article follows pattern: Publication name, link with title, date, description
        const articleBlocks = [];
        
        // Split by horizontal rules or month headers
        const sections = html.split(/February 2026|December 2025|November 2025|October 2025|September 2025|August 2025|June 2025|May 2025|April 2025|February 2025|November 2024|September 2024|June 2024|May 2024|April 2024|March 2024|February 2024|January 2024|December 2023|November 2023|September 2023|August 2023|July 2023|June 2023|May 2023|April 2023|March 2023|January 2023|December 2022|November 2022|October 2022|September 2022|August 2022|July 2022|June 2022|May 2022|March 2022|February 2022|January 2022|December 2021|November 2021|October 2021|August 2021|July 2021|June 2021|March 2021|February 2021|January 2021|December 2020|August 2020|June 2020|May 2020|March 2020|February 2020/);
        
        const articles = [];
        
        // Use LLM to parse the HTML content into structured articles
        const result = await base44.asServiceRole.integrations.Core.InvokeLLM({
            prompt: `Parse this press page HTML and extract ALL press articles. For each article, extract:
- publication: The publication/outlet name
- title: Article title
- date: Publication date in YYYY-MM-DD format
- url: Article URL
- quote: The description/quote text

Return a JSON array of articles. Extract EVERY article on the page - there should be 50+ articles total.

HTML content:
${html.substring(0, 100000)}`,
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
                                quote: { type: "string" }
                            },
                            required: ["publication", "title", "date", "url", "quote"]
                        }
                    }
                },
                required: ["articles"]
            }
        });

        const extractedArticles = result.articles || [];

        // Get existing articles to avoid duplicates
        const existingArticles = await base44.asServiceRole.entities.PressArticle.list();
        const existingUrls = new Set(existingArticles.map(a => a.url));

        // Filter out duplicates
        const newArticles = extractedArticles
            .filter(article => !existingUrls.has(article.url))
            .map(article => ({
                publication: article.publication,
                title: article.title,
                date: article.date,
                url: article.url,
                quote: article.quote,
                context: "",
                featured: false
            }));

        // Bulk create new articles
        if (newArticles.length > 0) {
            await base44.asServiceRole.entities.PressArticle.bulkCreate(newArticles);
        }

        return Response.json({
            success: true,
            total_extracted: extractedArticles.length,
            new_articles: newArticles.length,
            duplicate_articles: extractedArticles.length - newArticles.length
        });

    } catch (error) {
        return Response.json({ 
            error: error.message,
            stack: error.stack 
        }, { status: 500 });
    }
});