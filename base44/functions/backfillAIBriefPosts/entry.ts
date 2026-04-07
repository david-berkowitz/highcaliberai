import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

const POSTS = [
  {
    title: "AI Tents vs. Fortresses",
    source_url: "https://www.aibriefnewsletter.com/p/ai-tents-vs-fortresses",
    publication_date: "2026-04-02",
    excerpt: "A tip from Sentience opens up questions about data portability and what that means for us all",
    type: "article",
    featured: true,
    publication: "AI Brief Newsletter"
  },
  {
    title: "When the Fire Horse Comes for AI",
    source_url: "https://www.aibriefnewsletter.com/p/when-the-fire-horse-comes-for-ai",
    publication_date: "2026-02-19",
    excerpt: "What does Chinese astrology tell us about how to prepare for the year ahead?",
    type: "article",
    featured: true,
    publication: "AI Brief Newsletter"
  },
  {
    title: "Don't Be My AI Valentine",
    source_url: "https://www.aibriefnewsletter.com/p/don-t-be-my-ai-valentine",
    publication_date: "2026-02-12",
    excerpt: "What can go wrong when going on a date with an AI girlfriend at a real NYC wine bar?",
    type: "article",
    featured: true,
    publication: "AI Brief Newsletter"
  },
  {
    title: "The Emperor's New Clawds: A Claw-tionary Tale",
    source_url: "https://www.aibriefnewsletter.com/p/the-emperor-s-new-clawds-a-claw-tionary-tale",
    publication_date: "2026-02-05",
    excerpt: "Your 5-step plan for not getting worked up over agents that created their own religion",
    type: "article",
    featured: true,
    publication: "AI Brief Newsletter"
  },
  {
    title: "AI Brief: Vibe Coding for Good",
    source_url: "https://www.aibriefnewsletter.com/p/ai-brief-vibe-coding-for-good",
    publication_date: "2026-01-29",
    excerpt: "When it feels like the world's gone completely mad, could AI be a part of the solution?",
    type: "article",
    featured: true,
    publication: "AI Brief Newsletter"
  },
  {
    title: "AI Brief: Claude 1, Vibe Coder 0",
    source_url: "https://www.aibriefnewsletter.com/p/ai-brief-claude-1-vibe-coder-0",
    publication_date: "2026-01-22",
    excerpt: "Claude Code won this round, but intrepid vibe coders must live to see another day",
    type: "article",
    featured: true,
    publication: "AI Brief Newsletter"
  },
  {
    title: "AI Brief: Talking and Talking and Talking Shop",
    source_url: "https://www.aibriefnewsletter.com/p/ai-brief-talking-and-talking-and-talking-shop",
    publication_date: "2026-01-15",
    excerpt: "The barriers preventing AI-powered shopping are melting away",
    type: "article",
    featured: true,
    publication: "AI Brief Newsletter"
  },
  {
    title: "AI Brief: The (Yet Another) Year of AI at CES",
    source_url: "https://www.aibriefnewsletter.com/p/ai-brief-the-yet-another-year-of-ai-at-ces",
    publication_date: "2026-01-08",
    excerpt: "What does CES 2026 tell us about where AI is headed this year?",
    type: "article",
    featured: true,
    publication: "AI Brief Newsletter"
  },
  {
    title: "AI Brief: What Feels Like Magic?",
    source_url: "https://www.aibriefnewsletter.com/p/ai-brief-what-feels-like-magic",
    publication_date: "2025-12-18",
    excerpt: "Let's savor this moment where AI can still deliver a sense of wonder",
    type: "article",
    featured: true,
    publication: "AI Brief Newsletter"
  },
  {
    title: "AI Brief: Yet Another AI Newsletter?",
    source_url: "https://www.aibriefnewsletter.com/p/ai-brief-yet-another-ai-newsletter",
    publication_date: "2025-12-11",
    excerpt: "No, this one's by marketers, for marketers. And you'll actually want to read it.",
    type: "article",
    featured: true,
    publication: "AI Brief Newsletter"
  }
];

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  const results = { created: 0, skipped: 0, errors: [] };

  for (const post of POSTS) {
    try {
      const existing = await base44.asServiceRole.entities.FeaturedWriting.filter({
        source_url: post.source_url
      });
      if (existing && existing.length > 0) {
        results.skipped++;
        continue;
      }
      await base44.asServiceRole.entities.FeaturedWriting.create(post);
      results.created++;
    } catch (e) {
      console.error(`Error creating "${post.title}":`, e.message);
      results.errors.push(`${post.title}: ${e.message}`);
    }
  }

  console.log("Backfill complete:", results);
  return Response.json(results);
});