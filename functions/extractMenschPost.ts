import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const user = await base44.auth.me();

        if (!user || user.role !== 'admin') {
            return Response.json({ error: 'Admin access required' }, { status: 403 });
        }

        const { linkedin_url } = await req.json();

        if (!linkedin_url) {
            return Response.json({ error: 'LinkedIn URL is required' }, { status: 400 });
        }

        // Fetch the LinkedIn post page
        const response = await fetch(linkedin_url);
        const html = await response.text();

        // Use AI to extract structured data from the post
        const extraction = await base44.asServiceRole.integrations.Core.InvokeLLM({
            prompt: `Extract information from this LinkedIn post HTML. Look for:
            1. The person's name being featured/discussed (the "mensch")
            2. The post date
            3. A brief excerpt or key quote (2-3 sentences)
            4. The full text content of the post
            5. Any image URLs
            
            HTML content:
            ${html.substring(0, 50000)}
            
            Return structured data.`,
            response_json_schema: {
                type: "object",
                properties: {
                    person_name: { type: "string" },
                    post_date: { type: "string" },
                    excerpt: { type: "string" },
                    full_text: { type: "string" },
                    image_url: { type: "string" }
                },
                required: ["person_name", "excerpt", "full_text"]
            }
        });

        // Create the record in the database
        const record = await base44.asServiceRole.entities.MenschPost.create({
            person_name: extraction.person_name,
            linkedin_url: linkedin_url,
            post_date: extraction.post_date || new Date().toISOString().split('T')[0],
            excerpt: extraction.excerpt,
            full_text: extraction.full_text,
            image_url: extraction.image_url || null,
            featured: false
        });

        return Response.json({ 
            success: true, 
            message: `Successfully added post for ${extraction.person_name}`,
            record 
        });

    } catch (error) {
        console.error('Error extracting post:', error);
        return Response.json({ 
            error: error.message,
            details: 'Failed to extract post data. Make sure the URL is accessible.'
        }, { status: 500 });
    }
});