import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const user = await base44.auth.me();

        if (user?.role !== 'admin') {
            return Response.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
        }

        // Fetch WordPress API content
        const wpApiUrl = 'https://serialmarketer.net/wp-json/wp/v2/pages/13514';
        const response = await fetch(wpApiUrl);
        const data = await response.json();
        const htmlContent = data.content?.rendered || '';

        if (!htmlContent) {
            return Response.json({ error: 'No content found in WordPress API' }, { status: 404 });
        }

        // Use LLM to parse the HTML content
        const result = await base44.asServiceRole.integrations.Core.InvokeLLM({
            prompt: `Parse this press coverage HTML and extract metadata for EVERY article mentioned.

For each article/coverage entry, extract:
- outlet_name: The publication/outlet name
- article_title: Article title
- article_url: Primary article link (ignore social share links like LinkedIn share, Twitter share, Facebook share, mailto)
- coverage_date_text: Raw date text as it appears
- coverage_date: Normalized date in YYYY-MM-DD format (if parseable, otherwise null)
- notes: Any additional info like alternative links (YouTube, Spotify, Apple podcasts)
- raw_snippet: First 200 chars of the HTML block
- import_status: "parsed" if confident, "needs_review" if uncertain

Important:
- Ignore social sharing links (LinkedIn share, Twitter, Facebook, mailto)
- For multi-platform content (YouTube/Spotify/Apple), use the first primary link as article_url and mention others in notes
- Extract ALL articles from the page (should be 50+ articles)
- If title/outlet is unclear, mark as needs_review and include raw_snippet

HTML content:
${htmlContent.substring(0, 150000)}`,
            response_json_schema: {
                type: "object",
                properties: {
                    articles: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                outlet_name: { type: "string" },
                                article_title: { type: "string" },
                                article_url: { type: ["string", "null"] },
                                coverage_date: { type: ["string", "null"] },
                                coverage_date_text: { type: ["string", "null"] },
                                notes: { type: ["string", "null"] },
                                raw_snippet: { type: ["string", "null"] },
                                import_status: { type: "string" }
                            },
                            required: ["outlet_name", "article_title", "import_status"]
                        }
                    }
                },
                required: ["articles"]
            }
        });

        const extractedArticles = result.articles || [];

        // Get existing coverage to dedupe
        const existingCoverage = await base44.asServiceRole.entities.PressCoverage.list();
        const existingKeys = new Set();
        
        // Build dedupe keys
        existingCoverage.forEach(item => {
            if (item.article_url) {
                existingKeys.add(`url:${item.article_url}`);
            } else {
                const key = `meta:${item.outlet_name}|${item.article_title}|${item.coverage_date_text || ''}`;
                existingKeys.add(key);
            }
        });

        // Filter and prepare new articles
        const newArticles = [];
        let duplicates = 0;
        let sortOrder = existingCoverage.length;

        for (const article of extractedArticles) {
            // Generate dedupe key
            let dedupeKey;
            if (article.article_url) {
                dedupeKey = `url:${article.article_url}`;
            } else {
                dedupeKey = `meta:${article.outlet_name}|${article.article_title}|${article.coverage_date_text || ''}`;
            }

            // Skip if duplicate
            if (existingKeys.has(dedupeKey)) {
                duplicates++;
                continue;
            }

            newArticles.push({
                outlet_name: article.outlet_name,
                article_title: article.article_title,
                article_url: article.article_url || null,
                coverage_date: article.coverage_date || null,
                coverage_date_text: article.coverage_date_text || null,
                notes: article.notes || null,
                source_page_url: wpApiUrl,
                sort_order: sortOrder++,
                import_status: article.import_status || 'parsed',
                raw_snippet: article.raw_snippet || null
            });

            existingKeys.add(dedupeKey);
        }

        // Bulk create new coverage
        if (newArticles.length > 0) {
            await base44.asServiceRole.entities.PressCoverage.bulkCreate(newArticles);
        }

        const needsReview = newArticles.filter(a => a.import_status === 'needs_review').length;

        return Response.json({
            success: true,
            total_blocks_scanned: extractedArticles.length,
            parsed_rows: newArticles.length,
            needs_review_rows: needsReview,
            duplicates_skipped: duplicates
        });

    } catch (error) {
        return Response.json({ 
            error: error.message,
            stack: error.stack 
        }, { status: 500 });
    }
});