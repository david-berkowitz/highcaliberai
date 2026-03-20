import { createClientFromRequest } from "npm:@base44/sdk@0.8.21";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

async function sendEmail({ to, subject, text }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "High Caliber AI <david@highcaliberai.com>",
      to: [to],
      subject,
      text,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error: ${err}`);
  }
  return res.json();
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const { listing } = body;

    if (!listing) {
      return Response.json({ error: "Missing listing data" }, { status: 400 });
    }

    // Add contact to subscribers with partners segment
    if (listing.contact_email) {
      const existing = await base44.asServiceRole.entities.EmailSubscriber.filter({ email: listing.contact_email });
      if (existing.length > 0) {
        const sub = existing[0];
        const segments = Array.from(new Set([...(sub.segments || []), "partners"]));
        await base44.asServiceRole.entities.EmailSubscriber.update(sub.id, { segments, name: sub.name || listing.contact_name });
      } else {
        await base44.asServiceRole.entities.EmailSubscriber.create({
          email: listing.contact_email,
          name: listing.contact_name || "",
          source: "partner_submission",
          segments: ["partners"],
          status: "active",
        });
      }
    }

    // Send email notification to David
    await sendEmail({
      to: "david@highcaliberai.com",
      subject: `New Partner Listing Submitted: ${listing.company_name}`,
      text: `A new partner listing has been submitted and is pending review.

Company: ${listing.company_name}
Type: ${listing.company_type || "N/A"}
Specialty: ${listing.specialty_category || "N/A"}
Website: ${listing.website}
Contact: ${listing.contact_name} (${listing.contact_email})
Amount Paid: $${listing.amount_paid ?? "0"}
Discount Code: ${listing.discount_code || "None"}

Description:
${listing.description}

Review it here: https://highcaliberai.com/partner-listings-admin`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("notifyPartnerSubmission error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});