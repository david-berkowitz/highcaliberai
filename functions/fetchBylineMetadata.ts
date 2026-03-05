import { createClientFromRequest } from 'npm:@base44/sdk@0.8.20';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (user?.role !== 'admin') {
      return Response.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { url } = await req.json();
    if (!url) return Response.json({ error: 'URL required' }, { status: 400 });

    const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await response.text();

    // Extract title
    const ogTitle = html.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i)?.[1];
    const twitterTitle = html.match(/<meta[^>]+name="twitter:title"[^>]+content="([^"]+)"/i)?.[1];
    const pageTitle = html.match(/<title>([^<]+)<\/title>/i)?.[1];
    const title = (ogTitle || twitterTitle || pageTitle || '').replace(/ \| AI Brief Newsletter$/, '').trim();

    // Extract description
    const ogDesc = html.match(/<meta[^>]+property="og:description"[^>]+content="([^"]+)"/i)?.[1];
    const metaDesc = html.match(/<meta[^>]+name="description"[^>]+content="([^"]+)"/i)?.[1];
    const excerpt = (ogDesc || metaDesc || '').trim();

    // Extract date
    const publishedTime = html.match(/<meta[^>]+property="article:published_time"[^>]+content="([^"]+)"/i)?.[1];
    const dateStr = publishedTime ? new Date(publishedTime).toISOString().split('T')[0] : '';

    // Determine publication from URL
    let publication = 'Article';
    if (url.includes('aibriefnewsletter.com')) publication = 'AI Brief Newsletter';
    else if (url.includes('linkedin.com')) publication = 'LinkedIn';
    else {
      const domain = new URL(url).hostname.replace('www.', '');
      publication = domain;
    }

    return Response.json({ title, excerpt, publication_date: dateStr, publication, source_url: url });
  } catch (error) {
    console.error('fetchBylineMetadata error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});