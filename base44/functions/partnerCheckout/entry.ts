import Stripe from "npm:stripe@14.21.0";
import { createClientFromRequest } from "npm:@base44/sdk@0.8.21";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"));

const BASE_AMOUNT = 4900; // $49 in cents

const DISCOUNT_CODES = {
  "HCAIVIP": { percent: 100, label: "Complimentary" },  // 100% off = free
  "HCAI50":  { percent: 50,  label: "50% Off" },         // 50% off
};

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const { listingId, discountCode, origin, cancelUrl } = body;

    if (!listingId) {
      return Response.json({ error: "Missing listingId" }, { status: 400 });
    }

    let discountPercent = 0;
    if (discountCode) {
      const code = DISCOUNT_CODES[discountCode.toUpperCase()];
      if (code) {
        discountPercent = code.percent;
      } else {
        return Response.json({ error: "Invalid discount code" }, { status: 400 });
      }
    }

    const finalAmount = Math.round(BASE_AMOUNT * (1 - discountPercent / 100));
    const baseUrl = origin || "https://highcaliberai.com";

    // If 100% off (comped), skip Stripe and mark as paid directly
    if (finalAmount === 0) {
      await base44.asServiceRole.entities.PartnerListing.update(listingId, {
        status: "pending_review",
        amount_paid: 0,
        discount_code: discountCode.toUpperCase(),
        stripe_session_id: "COMPED",
      });

      // Send emails for comped listings
      try {
        const listing = await base44.asServiceRole.entities.PartnerListing.get(listingId);
        if (listing) {
          // Confirmation to submitter
          if (listing.contact_email) {
            await base44.asServiceRole.integrations.Core.SendEmail({
              to: listing.contact_email,
              from_name: "David Berkowitz / High Caliber AI",
              subject: `We received your Partner Marketplace submission — ${listing.company_name}`,
              body: `Hi ${listing.contact_name || "there"},

Thanks for submitting ${listing.company_name} to the High Caliber AI Partner Marketplace!

We've received your listing and will review it shortly. If we have any questions or need anything else from you, we'll reach out directly.

In the meantime, feel free to reply to this email if you have any questions.

— David
High Caliber AI
https://highcaliberai.com/partners`,
            });
          }

          await base44.asServiceRole.integrations.Core.SendEmail({
            to: "david@highcaliberai.com",
            subject: `New Partner Listing Submitted (Comped): ${listing.company_name}`,
            body: `A new partner listing has been submitted with a complimentary code and is pending your review.

Company: ${listing.company_name}
Type: ${listing.company_type || "N/A"}
Website: ${listing.website}
Contact: ${listing.contact_name} (${listing.contact_email})
Amount Paid: $0 (Comped - Code: ${discountCode.toUpperCase()})

Review it here: https://highcaliberai.com/partner-listings-admin`
          });
        }
      } catch (emailErr) {
        console.error("Failed to send comped notification email:", emailErr.message);
      }

      return Response.json({ comped: true, redirect: `${baseUrl}/partnersubmitsuccess?listing=${listingId}` });
    }

    // Create Stripe session with the actual discounted amount as a custom price
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "usd",
          unit_amount: finalAmount,
          product_data: {
            name: "High Caliber AI Partner Marketplace Listing",
            description: discountPercent > 0
              ? `Lifetime listing fee — ${discountPercent}% discount applied (Code: ${discountCode.toUpperCase()})`
              : "Lifetime listing fee",
          },
        },
        quantity: 1,
      }],
      mode: "payment",
      success_url: `${baseUrl}/partnersubmitsuccess?listing=${listingId}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${baseUrl}/partner-submit?canceled=true`,
      metadata: {
        base44_app_id: Deno.env.get("BASE44_APP_ID"),
        listing_id: listingId,
        discount_code: discountCode || "",
        discount_percent: String(discountPercent),
        final_amount: String(finalAmount),
      },
    });

    // Store session id on the listing
    await base44.asServiceRole.entities.PartnerListing.update(listingId, {
      stripe_session_id: session.id,
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("partnerCheckout error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});