import Stripe from "npm:stripe@14.21.0";
import { createClientFromRequest } from "npm:@base44/sdk@0.8.6";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"));

const PRICE_ID = "price_1T5XkOAdr85IMGsS2NCvtJdK";
const BASE_AMOUNT = 4900; // $49 in cents

const DISCOUNT_CODES = {
  "HCAIVIP": { percent: 100, label: "Complimentary" },   // 100% off = free
  "HCAI50":  { percent: 50,  label: "50% Off" },          // 50% off
};

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();
    const { listingId, discountCode, origin } = body;

    if (!listingId) {
      return Response.json({ error: "Missing listingId" }, { status: 400 });
    }

    let discountPercent = 0;
    let discountLabel = null;
    if (discountCode) {
      const code = DISCOUNT_CODES[discountCode.toUpperCase()];
      if (code) {
        discountPercent = code.percent;
        discountLabel = code.label;
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
      return Response.json({ comped: true, redirect: `${baseUrl}/partner-submit-success?listing=${listingId}` });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: PRICE_ID, quantity: 1 }],
      mode: "payment",
      success_url: `${baseUrl}/partner-submit-success?listing=${listingId}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/partners`,
      metadata: {
        base44_app_id: Deno.env.get("BASE44_APP_ID"),
        listing_id: listingId,
        discount_code: discountCode || "",
        discount_percent: String(discountPercent),
        final_amount: String(finalAmount),
      },
      ...(finalAmount !== BASE_AMOUNT && {
        discounts: [],
      }),
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