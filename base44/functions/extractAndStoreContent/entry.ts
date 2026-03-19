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
    const extractionPrompt = `Analyze this PDF document and extract the following information:

1. Title: Create a clear, descriptive title for this content
2. Key Concepts: List 3-7 main concepts, frameworks, or ideas (as an array of strings)
3. Content: Extract the main takeaways, insights, and highlights in 500-1000 words
4. Tags: Suggest 3-5 relevant tags for searchability

Focus on information valuable for AI marketing strategy, tools, and implementation.

YOU MUST provide all required fields. If the document is very long, summarize the key points rather than trying to include everything.`;

    console.log('Starting LLM extraction for:', file_url);
    
    let response;
    try {
      response = await base44.integrations.Core.InvokeLLM({
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
    } catch (llmError) {
      console.error('LLM extraction failed:', llmError.message);
      throw new Error(`Failed to process file. The file may be too large, corrupted, or in an unsupported format. Error: ${llmError.message}`);
    }
    
    console.log('LLM extraction completed successfully');
    
    // Validate response
    if (!response || !response.title || !response.content) {
      throw new Error('LLM failed to extract required fields from the document');
    }

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