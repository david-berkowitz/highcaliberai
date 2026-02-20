import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    // Fetch the AI Brief Newsletter homepage
    const response = await fetch('http://aibriefnewsletter.com/');
    const html = await response.text();
    
    // Extract article URLs and metadata using regex
    const articlePattern = /https:\/\/www\.aibriefnewsletter\.com\/p\/[^"]+/g;
    const urls = [...new Set(html.match(articlePattern) || [])];
    
    let newArticles = 0;
    let skippedArticles = 0;
    
    for (const url of urls.slice(0, 5)) { // Check latest 5 articles
      // Fetch article page to get full details
      const articleResponse = await fetch(url);
      const articleHtml = await articleResponse.text();
      
      // Extract title
      const titleMatch = articleHtml.match(/<title>([^<]+)<\/title>/);
      const title = titleMatch ? titleMatch[1].replace(' | AI Brief Newsletter', '').trim() : '';
      
      // Extract date (look for publication date in meta tags)
      const dateMatch = articleHtml.match(/<meta property="article:published_time" content="([^"]+)"/);
      const date = dateMatch ? new Date(dateMatch[1]).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }) : '';
      
      // Extract description
      const descMatch = articleHtml.match(/<meta name="description" content="([^"]+)"/);
      const description = descMatch ? descMatch[1] : '';
      
      if (title && date) {
        console.log(`Found article: ${title} (${date})`);
        console.log(`URL: ${url}`);
        console.log(`Description: ${description}`);
        console.log('---');
        newArticles++;
      } else {
        skippedArticles++;
      }
    }
    
    return Response.json({
      success: true,
      message: `Checked AI Brief Newsletter - Found ${newArticles} articles, skipped ${skippedArticles}`,
      note: "This is a test run. To automatically add articles, update the Bylines page and BylinesCarousel component data."
    });
    
  } catch (error) {
    console.error('Error checking newsletter:', error);
    return Response.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
});