import { createClientFromRequest } from "npm:@base44/sdk@0.8.6";

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const { listing } = body;

    if (!listing) {
      return Response.json({ error: "Missing listing data" }, { status: 400 });
    }

    // Send email notification to David
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: "david@highcaliberai.com",
      subject: `New Partner Listing Submitted: ${listing.company_name}`,
      body: `A new partner listing has been submitted and is pending review.

Company: ${listing.company_name}
Type: ${listing.company_type || "N/A"}
Specialty: ${listing.specialty_category || "N/A"}
Website: ${listing.website}
Contact: ${listing.contact_name} (${listing.contact_email})
Amount Paid: $${listing.amount_paid ?? "0"}
Discount Code: ${listing.discount_code || "None"}

Description:
${listing.description}

Review it here: https://highcaliberai.com/partner-listings-admin
`
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("notifyPartnerSubmission error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});