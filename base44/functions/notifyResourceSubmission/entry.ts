import { createClientFromRequest } from "npm:@base44/sdk@0.8.23";

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const { submission } = body;

    if (!submission) {
      return Response.json({ error: "Missing submission data" }, { status: 400 });
    }

    // Send email notification to David
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: "david@highcaliberai.com",
      subject: `New Resource Submission: ${submission.title}`,
      body: `A new resource has been submitted for the library.

Title: ${submission.title}
Category: ${submission.category}
URL: ${submission.url}
Tier: ${submission.tier}
Has Referral: ${submission.has_referral ? "Yes" : "No"}

Description:
${submission.description}

Why Include:
${submission.why_include}

Submitted by: ${submission.submitter_name} (${submission.submitter_email})

Review it here: https://highcaliberai.com/resource-submissions-admin
`
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("notifyResourceSubmission error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});