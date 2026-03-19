import { createClientFromRequest } from 'npm:@base44/sdk@0.8.21';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: CORS_HEADERS });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const { partner_id, sender_name, sender_email, sender_company, message } = body;

    if (!partner_id || !sender_name || !sender_email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400, headers: CORS_HEADERS });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sender_email)) {
      return Response.json({ error: 'Invalid sender email address' }, { status: 400, headers: CORS_HEADERS });
    }

    const base44 = createClientFromRequest(req);
    const partner = await base44.asServiceRole.entities.PartnerListing.get(partner_id);

    if (!partner || partner.status !== 'approved') {
      return Response.json({ error: 'Partner not found' }, { status: 404, headers: CORS_HEADERS });
    }

    if (!partner.contact_email) {
      return Response.json({ error: 'This partner has not provided a contact email' }, { status: 400, headers: CORS_HEADERS });
    }

    // Email to the partner
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: partner.contact_email,
      from_name: "High Caliber AI Partner Marketplace",
      subject: `Intro via High Caliber AI — Interested in ${partner.company_name}`,
      body: `Hi ${partner.contact_name || partner.company_name},

You received a new intro request through the High Caliber AI Partner Marketplace.

From: ${sender_name}${sender_company ? ` at ${sender_company}` : ''}
Email: ${sender_email}

Message:
${message}

---
Reply directly to ${sender_email} to connect with ${sender_name}.
This message was sent via the High Caliber AI Partner Marketplace (highcaliberai.com/partners).`,
    });

    // Confirmation email to the sender
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: sender_email,
      from_name: "High Caliber AI Partner Marketplace",
      subject: `Your intro to ${partner.company_name} has been sent`,
      body: `Hi ${sender_name},

Your message has been sent to ${partner.company_name}. They'll be in touch directly at ${sender_email}.

Here's what you sent:
"${message}"

—
High Caliber AI Partner Marketplace
https://highcaliberai.com/partners`,
    });

    console.log(`Partner intro sent: ${sender_email} -> ${partner.company_name} (${partner.contact_email})`);

    return Response.json(
      { ok: true, message: `Intro sent to ${partner.company_name}` },
      { headers: CORS_HEADERS }
    );

  } catch (error) {
    console.error('sendPartnerIntro error:', error);
    return Response.json(
      { error: 'Failed to send intro. Please try again.' },
      { status: 500, headers: CORS_HEADERS }
    );
  }
});