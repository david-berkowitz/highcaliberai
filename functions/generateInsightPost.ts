import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    // Categories to rotate through
    const categories = ["AI Strategy", "Tools & Tech", "Industry Trends"];
    const category = categories[Math.floor(Math.random() * categories.length)];

    // Generate short insight post using AI
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `You are writing in the voice of David Berkowitz - pragmatic, no-nonsense AI marketing expert. Write a SHORT, focused insight post.

VOICE: Direct, skeptical, practical. "Here's what's actually working" not "exciting possibilities"

FORMAT: 500-700 words max. One clear point, backed by examples.

TOPIC IDEAS (${category}):
- AI Strategy: Quick wins, common mistakes, readiness gaps, tool adoption pitfalls
- Tools & Tech: New tool reviews, "is it worth it?" takes, integration tips, alternatives
- Industry Trends: AI search changes, what's overhyped, what's underrated, practitioner reports

STRUCTURE:
1. Hook: Start with the problem/question (2-3 sentences)
2. Insight: Your take based on what you're seeing (3-4 paragraphs)
3. Action: 2-3 bullet points readers can implement today

RULES:
- NO self-promotion or CTAs
- Reference "AI Marketers Guild" insights when relevant
- Be specific: Name tools, cite examples, give numbers
- Skip theory, focus on application
- End with actionable bullets, not "contact me"

Write a post with:
- Title: Specific, practical (not clickbait)
- Excerpt: The insight in 1-2 sentences
- Content: Short, scannable, useful
- Tags: 3-4 specific terms
- Read time: 3-5 minutes`,
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
            maxItems: 4
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
      message: "Insight post created successfully",
      post: blogPost
    });

  } catch (error) {
    return Response.json({ 
      success: false,
      error: error.message 
    }, { status: 500 });
  }
});