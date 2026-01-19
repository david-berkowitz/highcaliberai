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

1. A clear, descriptive title (keep it concise)
2. Key concepts and frameworks (3-7 main concepts)
3. Main takeaways and highlights (focus on the most valuable insights - aim for 500-1000 words)
4. Important actionable recommendations
5. Notable quotes or statistics

Focus on information that would be valuable for answering questions about AI marketing strategy, tools, and implementation.

IMPORTANT: Keep the content focused and digestible. Don't try to capture every detail - extract the most valuable, searchable insights.`;

    console.log('Starting LLM extraction for:', file_url);
    
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
    
    console.log('LLM extraction completed successfully');

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
    console.error('Error in extractAndStoreContent:', error);
    console.error('Error stack:', error.stack);
    return Response.json({ 
      error: error.message,
      details: 'Failed to extract and store content. The file may be too large or in an unsupported format.',
      stack: error.stack
    }, { status: 500 });
  }
});