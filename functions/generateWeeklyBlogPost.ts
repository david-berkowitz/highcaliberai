import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    // Categories to rotate through
    const categories = ["AI Strategy", "Case Studies", "Tools & Tech", "Industry Trends", "How-To"];
    const category = categories[Math.floor(Math.random() * categories.length)];

    // Generate blog post content using AI
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `You are David Berkowitz, an AI marketing strategist and author of "The Non-Obvious Guide to Using AI for Marketing". You founded AI Marketers Guild and serve as a fractional CMO.

Create a blog post for the "${category}" category. Make it practical, actionable, and based on real-world experience. Topics to consider:
- AI Strategy: GTM strategies, team enablement, pilot programs
- Case Studies: Real client wins (anonymized), before/after results
- Tools & Tech: Tool evaluations, tech stack recommendations
- Industry Trends: What's actually working vs hype
- How-To: Step-by-step guides for implementation

Write a compelling, professional blog post (800-1200 words) with:
1. A catchy, SEO-friendly title
2. A 2-3 sentence excerpt/summary
3. Full article content with clear sections
4. 3-5 relevant tags
5. Estimated read time in minutes

Be specific, avoid buzzwords, focus on practical implementation.`,
      response_json_schema: {
        type: "object",
        properties: {
          title: { type: "string" },
          excerpt: { type: "string" },
          content: { type: "string" },
          tags: { 
            type: "array", 
            items: { type: "string" },
            minItems: 3,
            maxItems: 5
          },
          read_time: { type: "number" }
        },
        required: ["title", "excerpt", "content", "tags", "read_time"]
      }
    });

    // Create slug from title
    const slug = result.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    // Create the blog post
    const blogPost = await base44.asServiceRole.entities.BlogPost.create({
      title: result.title,
      slug: slug,
      excerpt: result.excerpt,
      content: result.content,
      category: category,
      tags: result.tags,
      published: true,
      published_date: new Date().toISOString().split('T')[0],
      read_time: result.read_time,
      featured_image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png"
    });

    return Response.json({ 
      success: true, 
      message: "Blog post created successfully",
      post: blogPost
    });

  } catch (error) {
    return Response.json({ 
      success: false,
      error: error.message 
    }, { status: 500 });
  }
});