import { createClientFromRequest } from 'npm:@base44/sdk@0.8.21';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    const { partner_id, sender_name, sender_email, sender_company, message } = await req.json();

    if (!partner_id || !sender_name || !sender_email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Fetch the partner listing to get their contact email
    const partner = await base44.asServiceRole.entities.PartnerListing.get(partner_id);

    if (!partner) {
      return Response.json({ error: "Partner not found" }, { status: 404 });
    }

    if (!partner.contact_email) {
      return Response.json({ error: "Partner has no contact email" }, { status: 400 });
    }

    // Send email to the partner
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: partner.contact_email,
      from_name: "High Caliber AI Partner Marketplace",
      subject: `New intro request from ${sender_name}${sender_company ? " at " + sender_company : ""}`,
      body: `Hi ${partner.contact_name || partner.company_name},

You have a new intro request via the High Caliber AI Partner Marketplace.

From: ${sender_name}${sender_company ? " (" + sender_company + ")" : ""}
Email: ${sender_email}

Message:
${message}

---
To reply, simply respond directly to ${sender_email}.

This message was sent via the High Caliber AI Partner Marketplace (highcaliberai.com/partners).`
    });

    // Send confirmation email to the sender
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: sender_email,
      from_name: "High Caliber AI Partner Marketplace",
      subject: `Your intro request to ${partner.company_name} has been sent`,
      body: `Hi ${sender_name},

Your message to ${partner.company_name} has been forwarded. They'll be in touch with you directly at ${sender_email}.

Here's a copy of what you sent:

"${message}"

---
High Caliber AI Partner Marketplace
highcaliberai.com/partners`
    });

    console.log(`Partner intro sent: ${sender_email} -> ${partner.company_name} (${partner.contact_email})`);

    return Response.json({ success: true });
  } catch (error) {
    console.error("sendPartnerIntro error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});