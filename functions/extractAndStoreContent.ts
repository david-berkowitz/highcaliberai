import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();

    if (!user || user.role !== 'admin') {
      return Response.json({ error: 'Unauthorized - Admin access required' }, { status: 403 });
    }

    const { file_url, content_type, source, chapter_number } = await req.json();

    if (!file_url) {
      return Response.json({ error: 'file_url is required' }, { status: 400 });
    }

    // Extract key information from the file using AI
    const extractionPrompt = `Analyze this document and extract:

1. A clear, descriptive title
2. Key concepts and frameworks (list them)
3. Main takeaways and highlights (comprehensive but concise)
4. Any actionable insights or recommendations
5. Important quotes or statistics

Focus on information that would be valuable for answering questions about AI marketing strategy, tools, and implementation.

Format the key concepts as an array of strings.
Provide comprehensive content that captures the essence of the document while being searchable and useful.`;

    const response = await base44.integrations.Core.InvokeLLM({
      prompt: extractionPrompt,
      file_urls: [file_url],
      response_json_schema: {
        type: "object",
        properties: {
          title: { type: "string" },
          key_concepts: { 
            type: "array",
            items: { type: "string" }
          },
          content: { type: "string" },
          tags: {
            type: "array",
            items: { type: "string" }
          }
        },
        required: ["title", "key_concepts", "content"]
      }
    });

    // Store in ReferenceContent database
    const record = await base44.asServiceRole.entities.ReferenceContent.create({
      title: response.title,
      content_type: content_type || "article",
      source: source || "Uploaded Document",
      chapter_number: chapter_number || null,
      content: response.content,
      key_concepts: response.key_concepts,
      tags: response.tags || []
    });

    return Response.json({
      success: true,
      record: record,
      message: `Successfully extracted and stored: ${response.title}`
    });

  } catch (error) {
    console.error('Error:', error);
    return Response.json({ 
      error: error.message,
      details: 'Failed to extract and store content'
    }, { status: 500 });
  }
});