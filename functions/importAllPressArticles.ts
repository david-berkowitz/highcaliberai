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

        // Split HTML into smaller chunks (by year roughly)
        const chunks = html.split(/(?=<h[23]>(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+202[0-6])/i);
        
        let allArticles = [];
        
        // Process each chunk separately to avoid timeout
        for (let i = 0; i < Math.min(chunks.length, 15); i++) {
            const chunk = chunks[i];
            if (chunk.trim().length < 100) continue; // Skip tiny chunks
            
            try {
                const extractionResult = await base44.asServiceRole.integrations.Core.InvokeLLM({
                    prompt: `Extract press articles from this HTML content. For each article, extract:
- publication: The source/publication name
- title: Article title  
- date: Publication date in YYYY-MM-DD format (month/year are in the section header)
- url: Article URL (full URL from href)
- quote: The description/excerpt text
- context: Same as quote if no separate context

HTML chunk:
${chunk.substring(0, 8000)}`,
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
                
                allArticles = allArticles.concat(extractionResult.articles || []);
            } catch (chunkError) {
                console.error(`Error processing chunk ${i}:`, chunkError.message);
            }
        }

        const articles = allArticles;

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