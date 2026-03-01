import Stripe from "npm:stripe@14.21.0";
import { createClientFromRequest } from "npm:@base44/sdk@0.8.6";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"));

Deno.serve(async (req) => {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

  let event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature error:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const listingId = session.metadata?.listing_id;
    const discountCode = session.metadata?.discount_code;
    const finalAmount = parseInt(session.metadata?.final_amount || "4900");

    if (listingId) {
      try {
        const base44 = createClientFromRequest(req);
        await base44.asServiceRole.entities.PartnerListing.update(listingId, {
          status: "pending_review",
          stripe_session_id: session.id,
          amount_paid: finalAmount / 100,
          discount_code: discountCode || null,
        });
        console.log(`Listing ${listingId} marked as pending_review after payment`);

        // Fetch listing data and notify David
        const listing = await base44.asServiceRole.entities.PartnerListing.get(listingId);
        if (listing) {
          await base44.asServiceRole.integrations.Core.SendEmail({
            to: "david@highcaliberai.com",
            subject: `New Partner Listing Submitted: ${listing.company_name}`,
            body: `A new partner listing has been submitted and is pending your review.

Company: ${listing.company_name}
Type: ${listing.company_type || "N/A"}
Specialty: ${listing.specialty_category || "N/A"}
Website: ${listing.website}
Contact: ${listing.contact_name} (${listing.contact_email})
Amount Paid: $${(finalAmount / 100).toFixed(2)}
Discount Code: ${discountCode || "None"}

Description:
${listing.description}

Review it here: https://highcaliberai.com/partner-listings-admin`
          });
        }
      } catch (err) {
        console.error("Error updating listing or sending email:", err.message);
      }
    }
  }

  return Response.json({ received: true });
});