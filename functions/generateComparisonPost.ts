import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    // Tool comparison pairs to rotate through
    const comparisons = [
      { toolA: "ChatGPT", toolB: "Claude", category: "Content Creation" },
      { toolA: "Jasper", toolB: "Copy.ai", category: "Copywriting" },
      { toolA: "Perplexity", toolB: "Google AI Overview", category: "AI Search" },
      { toolA: "HubSpot AI", toolB: "Salesforce Einstein", category: "CRM AI" },
      { toolA: "Canva AI", toolB: "Adobe Firefly", category: "Design Tools" },
      { toolA: "Grammarly", toolB: "ProWritingAid", category: "Writing Assistants" },
      { toolA: "Synthesia", toolB: "D-ID", category: "AI Video" },
      { toolA: "Zapier AI", toolB: "Make.com AI", category: "Automation" }
    ];

    const comparison = comparisons[Math.floor(Math.random() * comparisons.length)];

    // Generate comparison post using AI
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `You are David Berkowitz writing a practical comparison of ${comparison.toolA} vs ${comparison.toolB} for marketing use cases.

VOICE: No-nonsense, practical, "here's what I'm actually seeing in the field"

STRUCTURE:
1. Quick Context (2-3 sentences): Why this comparison matters
2. ${comparison.toolA} Overview: What it does well, limitations (3-4 bullets each)
3. ${comparison.toolB} Overview: What it does well, limitations (3-4 bullets each)
4. Head-to-Head Comparison:
   - Best for: [Use Case A] vs [Use Case B]
   - Pricing: Honest take on value
   - Learning Curve: Which is easier
   - Integration: How they play with other tools
5. Verdict: "If you're [scenario], choose X. If you're [scenario], choose Y."
6. Action Steps: 2-3 bullets for trying them out

CRITICAL RULES:
- Be specific: cite actual features, pricing, use cases
- Reference what you're hearing from AI Marketers Guild
- Don't be afraid to say "neither is perfect for..."
- No affiliate links or "contact me" CTAs
- Focus on B2B marketing use cases

Write 800-1000 words that help someone make a real decision.`,
      response_json_schema: {
        type: "object",
        properties: {
          title: { type: "string" },
          excerpt: { type: "string" },
          content: { type: "string" },
          tags: { 
            type: "array", 
            items: { type: "string" },
            minItems: 4,
            maxItems: 6
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
      category: "Tools & Tech",
      tags: result.tags,
      published: true,
      published_date: new Date().toISOString().split('T')[0],
      read_time: result.read_time,
      featured_image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png"
    });

    return Response.json({ 
      success: true, 
      message: "Comparison post created successfully",
      post: blogPost
    });

  } catch (error) {
    return Response.json({ 
      success: false,
      error: error.message 
    }, { status: 500 });
  }
});