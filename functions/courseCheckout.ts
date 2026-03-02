import Stripe from "npm:stripe@14";
import { createClientFromRequest } from "npm:@base44/sdk@0.8.6";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"));

Deno.serve(async (req) => {
  try {
    const { courseId, email, origin } = await req.json();

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

    const priceInCents = Math.round(course.price * 100);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [{
        price_data: {
          currency: "usd",
          unit_amount: priceInCents,
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
      },
    });

    console.log(`Course checkout session created: ${session.id} for ${email}, course: ${courseId}`);
    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Course checkout error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});