import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);
  const body = await req.json();
  const { title, source_url, publication_date, excerpt } = body;

  if (!title || !source_url || !publication_date) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const existing = await base44.asServiceRole.entities.FeaturedWriting.filter({ source_url });
  if (existing && existing.length > 0) {
    return Response.json({ status: "duplicate" }, { status: 200 });
  }

  const record = await base44.asServiceRole.entities.FeaturedWriting.create({
    title,
    source_url,
    publication_date,
    excerpt: excerpt || "",
    type: "article",
    featured: false,
    full_text: ""
  });

  return Response.json({ status: "created", id: record.id }, { status: 201 });
});