import Stripe from "npm:stripe@14";
import { createClientFromRequest } from "npm:@base44/sdk@0.8.20";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"));

const DISCOUNT_CODES = {
  "bookVIP": { percent: 100, limit: null },
  "AI25":    { percent: 25,  limit: 100 },
};

Deno.serve(async (req) => {
  try {
    const { courseId, email, origin, discountCode } = await req.json();

    if (!courseId || !email || !origin) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const base44 = createClientFromRequest(req);

    // Get course details
    const courses = await base44.asServiceRole.entities.Course.filter({ id: courseId });
    const course = courses[0];
    if (!course) {
      return Response.json({ error: "Course not found" }, { status: 404 });
    }

    // Apply discount code
    const codeKey = discountCode?.trim().toUpperCase();
    const discountConfig = codeKey ? DISCOUNT_CODES[codeKey] : null;

    if (discountCode?.trim() && !discountConfig) {
      return Response.json({ error: "Invalid discount code." }, { status: 400 });
    }

    // Check usage limit for codes with a cap
    if (discountConfig?.limit !== null && discountConfig?.limit !== undefined) {
      const usedEnrollments = await base44.asServiceRole.entities.CourseEnrollment.filter({ course_id: courseId });
      const usageCount = usedEnrollments.filter(e => e.discount_code?.toUpperCase() === codeKey).length;
      if (usageCount >= discountConfig.limit) {
        return Response.json({ error: `Sorry, this promo code has reached its limit of ${discountConfig.limit} uses.` }, { status: 400 });
      }
      console.log(`Discount code ${codeKey}: ${usageCount}/${discountConfig.limit} uses`);
    }

    const originalPrice = course.price;
    const discountPercent = discountConfig?.percent ?? 0;
    const finalPrice = Math.round(originalPrice * (1 - discountPercent / 100) * 100); // in cents

    console.log(`Discount code: ${codeKey}, discount: ${discountPercent}%, final price: $${finalPrice / 100}`);

    // If 100% off, create enrollment directly without Stripe
    if (finalPrice === 0) {
      const token = crypto.randomUUID().replace(/-/g, "");
      await base44.asServiceRole.entities.CourseEnrollment.create({
        course_id: courseId,
        email: email.trim(),
        stripe_session_id: `free_${token}`,
        amount_paid: 0,
        access_token: token,
        status: "active",
        discount_code: codeKey || "",
      });
      console.log(`Free enrollment created for ${email} with token ${token}`);
      return Response.json({ url: `${origin}/course-success?token=${token}&free=1` });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [{
        price_data: {
          currency: "usd",
          unit_amount: finalPrice,
          product_data: {
            name: course.title,
            description: course.subtitle || "Interactive AI Marketing Course — Lifetime Access",
          },
        },
        quantity: 1,
      }],
      success_url: `${origin}/course-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/course`,
      metadata: {
        base44_app_id: Deno.env.get("BASE44_APP_ID"),
        course_id: courseId,
        purchaser_email: email,
        discount_code: discountCode || "",
      },
    });

    console.log(`Course checkout session created: ${session.id} for ${email}, course: ${courseId}`);
    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Course checkout error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});