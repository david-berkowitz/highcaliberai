import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const user = await base44.auth.me();
        if (user?.role !== 'admin') {
            return Response.json({ error: 'Forbidden' }, { status: 403 });
        }

        const body = await req.json().catch(() => ({}));
        const mode = body.mode || 'migrate_and_import'; // 'migrate_only', 'import_only', 'migrate_and_import'

        let migrated = 0, deduped = 0, imported = 0;
        const errors = [];

        // ---- STEP 1: MIGRATE PressCoverage -> PressArticle ----
        if (mode !== 'import_only') {
            const pressCoverage = await base44.asServiceRole.entities.PressCoverage.list();
            const existingArticles = await base44.asServiceRole.entities.PressArticle.list();

            // Build dedup set from existing PressArticles
            const existingUrls = new Set(existingArticles.map(a => a.url).filter(Boolean));
            const existingTitles = new Set(existingArticles.map(a => `${a.publication}|${a.title}`));

            const toCreate = [];
            for (const cov of pressCoverage) {
                const url = cov.article_url;
                const titleKey = `${cov.outlet_name}|${cov.article_title}`;

                // Check for duplicates
                if (url && existingUrls.has(url)) { deduped++; continue; }
                if (!url && existingTitles.has(titleKey)) { deduped++; continue; }

                toCreate.push({
                    publication: cov.outlet_name,
                    title: cov.article_title,
                    url: cov.article_url || '',
                    date: cov.coverage_date || null,
                    quote: cov.notes || '',
                    context: '',
                    featured: false,
                });

                // Track for dedup within this batch
                if (url) existingUrls.add(url);
                else existingTitles.add(titleKey);
            }

            if (toCreate.length > 0) {
                await base44.asServiceRole.entities.PressArticle.bulkCreate(toCreate);
                migrated = toCreate.length;
            }

            console.log(`Migration: migrated=${migrated}, deduped=${deduped}`);
        }

        // ---- STEP 2: IMPORT all remaining from Serial Marketer ----
        if (mode !== 'migrate_only') {
            const wpApiUrl = 'https://serialmarketer.net/wp-json/wp/v2/pages/13514';
            const response = await fetch(wpApiUrl);
            const data = await response.json();
            const htmlContent = data.content?.rendered || '';

            if (!htmlContent) {
                return Response.json({ error: 'No content from Serial Marketer' }, { status: 404 });
            }

            // Use LLM to extract ALL articles from the full page
            const result = await base44.asServiceRole.integrations.Core.InvokeLLM({
                prompt: `Parse this press coverage HTML page and extract EVERY single article/coverage entry listed.

The page has tabs (Recent: Feb 2026, Dec 2025, Nov 2025, Oct 2025, Sep 2025, Aug 2025, Jun 2025, May 2025, Apr 2025, Mar 2025, Feb 2025, Jan 2025 — and a Past Years tab with older coverage). Extract ALL entries from ALL tabs.

For each entry extract:
- outlet_name: Publication/outlet name
- article_title: Article or coverage title
- article_url: The direct article link (NOT social sharing links like LinkedIn share, Twitter share, Facebook share)
- coverage_date: YYYY-MM-DD format if parseable, otherwise null
- coverage_date_text: Raw date text as displayed

Return every article — expect 80-150+ entries total across all years/months.

HTML:
${htmlContent.substring(0, 200000)}`,
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
                                },
                                required: ["outlet_name", "article_title"]
                            }
                        }
                    },
                    required: ["articles"]
                }
            });

            const extractedArticles = result.articles || [];
            console.log(`LLM extracted ${extractedArticles.length} articles from Serial Marketer`);

            // Get current PressArticles for dedup
            const currentArticles = await base44.asServiceRole.entities.PressArticle.list();
            const existingUrls = new Set(currentArticles.map(a => a.url).filter(Boolean));
            const existingTitles = new Set(currentArticles.map(a => `${a.publication}|${a.title}`));

            const toCreate = [];
            for (const art of extractedArticles) {
                const url = art.article_url;
                const titleKey = `${art.outlet_name}|${art.article_title}`;

                if (url && existingUrls.has(url)) { deduped++; continue; }
                if (!url && existingTitles.has(titleKey)) { deduped++; continue; }

                toCreate.push({
                    publication: art.outlet_name,
                    title: art.article_title,
                    url: art.article_url || '',
                    date: art.coverage_date || null,
                    quote: '',
                    context: '',
                    featured: false,
                });

                if (url) existingUrls.add(url);
                else existingTitles.add(titleKey);
            }

            if (toCreate.length > 0) {
                await base44.asServiceRole.entities.PressArticle.bulkCreate(toCreate);
                imported = toCreate.length;
            }

            console.log(`Import: imported=${imported}, additional_deduped=${deduped - (mode === 'migrate_and_import' ? deduped - imported : 0)}`);
        }

        const finalCount = await base44.asServiceRole.entities.PressArticle.list();

        return Response.json({
            success: true,
            migrated_from_presscoverage: migrated,
            imported_from_serialmarketer: imported,
            duplicates_skipped: deduped,
            total_press_articles_now: finalCount.length,
        });

    } catch (error) {
        console.error('migrateAndImportAllPress error:', error);
        return Response.json({ error: error.message, stack: error.stack }, { status: 500 });
    }
});