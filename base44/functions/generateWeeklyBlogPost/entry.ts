import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    // Fetch reference content for inspiration
    const referenceContent = await base44.asServiceRole.entities.ReferenceContent.list('-created_date', 10);
    
    // Build context from reference content
    let contentContext = "";
    if (referenceContent && referenceContent.length > 0) {
      contentContext = "\n\nREFERENCE MATERIALS TO DRAW FROM:\n";
      referenceContent.forEach(ref => {
        contentContext += `\n- ${ref.title}: ${ref.key_concepts ? ref.key_concepts.join(', ') : ''}\n`;
      });
    }

    // Categories to rotate through
    const categories = ["AI Strategy", "Case Studies", "Tools & Tech", "Industry Trends", "How-To"];
    const category = categories[Math.floor(Math.random() * categories.length)];

    // Generate blog post content using AI
    const result = await base44.integrations.Core.InvokeLLM({
      prompt: `You are writing in the voice of David Berkowitz - pragmatic, no-nonsense, and refreshingly honest about AI marketing. Your tone: "Real-World AI Strategy. No Science Fiction."

VOICE & STYLE:
- Skip the hype and buzzwords. Call out "vaporware" when you see it.
- Use phrases like "what's actually working," "here's what I'm seeing," "the reality is..."
- Be direct: "Strategy fails without skills" not "It's important to train your team"
- Share community intel from 7,000+ AI Marketers Guild members
- Balance optimism with healthy skepticism

DRAW INSPIRATION FROM "THE NON-OBVIOUS GUIDE TO USING AI FOR MARKETING":
Your book covers these themes - adapt them into fresh perspectives:
- AI Readiness assessments and the "be honest" approach to evaluation
- Overcoming objections (privacy, bias, costs, skill gaps, ROI challenges)
- The "process over product" philosophy for selecting tools
- The 70-20-10 framework (or Now/New/Next) for innovation
- AI Audits: mapping tasks to automation opportunities
- "AI should enhance human output, not replace humans"
- Prompting as a skill (curiosity, specificity, iteration)
- The rise of AI agents, copilots, and assistants
- Measuring what matters vs. vanity metrics
- Ethical considerations: transparency, bias mitigation, human oversight
- "You'll often decide it's not worth using AI at all"

TOPICS TO COVER (${category}):
- AI Strategy: Fractional leadership, tech stack audits, GTM modernization, AI readiness gaps
- Case Studies: B2B tech wins, before/after metrics, what worked and what didn't (anonymized)
- Tools & Tech: Practical tool evaluations, avoiding shiny objects, integration challenges
- Industry Trends: GEO (AI search visibility), content scaling, agentic workflows, what's ready vs. what's not
- How-To: Applied workshops, pilot programs, team activation, measuring ROI

CRITICAL RULES:
1. NO self-promotion. Don't mention "High Caliber AI" services, "book a consultation," or "work with me"
2. Focus on teaching, not selling. Give away the knowledge.
3. Reference community insights: "In our guild, members report..." or "I'm hearing from practitioners..."
4. Adapt book concepts and reference materials into new angles - don't copy verbatim, create fresh takes
5. Include specific examples and frameworks readers can use immediately
6. End with actionable next steps, not CTAs
${contentContext}

Write an 800-1200 word post with:
- Title: Clear, specific, no clickbait
- Excerpt: The "so what" in 2-3 sentences
- Content: Use H2 sections, bullets, real examples
- Tags: 3-5 specific terms
- Read time: Realistic estimate`,
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