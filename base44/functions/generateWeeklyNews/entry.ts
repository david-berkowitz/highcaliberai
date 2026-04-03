import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (user?.role !== 'admin') {
      return Response.json({ error: 'Forbidden: Admin access required' }, { status: 403 });
    }

    // Get current week info
    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay()); // Start of week (Sunday)
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    const weekTitle = `Week of ${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    // Generate news digest using AI with web search
    const newsPrompt = `You are David Berkowitz, an AI marketing expert. Generate a weekly AI news digest for marketing professionals.

Find and curate 5-7 of the most important AI marketing news stories from this week. For each story, provide:
- A clear headline
- A 2-3 sentence summary
- "Why it matters" for marketers (1-2 sentences)
- Category (Product Launch, Industry Trend, Research, Tool Update, or Strategy)
- Include a realistic source URL if you found one

Then write a brief 2-3 paragraph commentary in David's voice - practical, direct, focused on real business impact. Connect the dots between stories and offer actionable insights.

Format as JSON matching this exact structure:
{
  "intro": "Brief 1-2 sentence intro to this week",
  "news_items": [
    {
      "headline": "...",
      "summary": "...",
      "why_it_matters": "...",
      "source_url": "...",
      "category": "..."
    }
  ],
  "commentary": "David's perspective..."
}`;

    const aiResponse = await base44.integrations.Core.InvokeLLM({
      prompt: newsPrompt,
      add_context_from_internet: true,
      response_json_schema: {
        type: "object",
        properties: {
          intro: { type: "string" },
          news_items: {
            type: "array",
            items: {
              type: "object",
              properties: {
                headline: { type: "string" },
                summary: { type: "string" },
                why_it_matters: { type: "string" },
                source_url: { type: "string" },
                category: { type: "string" }
              },
              required: ["headline", "summary", "why_it_matters", "category"]
            }
          },
          commentary: { type: "string" }
        },
        required: ["intro", "news_items", "commentary"]
      }
    });

    if (!aiResponse || !aiResponse.news_items || aiResponse.news_items.length === 0) {
      throw new Error('Failed to generate news digest - LLM returned empty data');
    }

    // Create the digest
    const digest = await base44.asServiceRole.entities.AINewsDigest.create({
      title: weekTitle,
      week_of: weekStart.toISOString().split('T')[0],
      intro: aiResponse.intro,
      news_items: aiResponse.news_items,
      commentary: aiResponse.commentary,
      published: false
    });

    return Response.json({ 
      success: true, 
      digest,
      message: `Created digest: ${weekTitle}. Review and publish when ready.`
    });

  } catch (error) {
    console.error('Error generating news:', error);
    return Response.json({ 
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
});