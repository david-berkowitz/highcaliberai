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
            prompt: `Extract information from this LinkedIn post HTML. This is a "Meet a Mensch Monday" post.
            
            IMPORTANT INSTRUCTIONS:
            1. Find the person's name being celebrated as the "mensch" - NOT the author's name (David Berkowitz)
            2. Extract the post date in YYYY-MM-DD format (look for "Published on LinkedIn" or post timestamp)
            3. Create a brief excerpt or key quote (2-3 sentences that capture the essence)
            4. Get the full text content of the post
            5. Find the main featured image URL (there may be multiple, get the primary one)
            
            HTML content:
            ${html.substring(0, 50000)}
            
            Return structured data with the date in YYYY-MM-DD format.`,
            response_json_schema: {
                type: "object",
                properties: {
                    person_name: { type: "string", description: "The mensch being featured, NOT the post author" },
                    post_date: { type: "string", description: "Date in YYYY-MM-DD format" },
                    excerpt: { type: "string", description: "Brief 2-3 sentence excerpt" },
                    full_text: { type: "string", description: "Full post text" },
                    image_url: { type: "string", description: "Main featured image URL" }
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