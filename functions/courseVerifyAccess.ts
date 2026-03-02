import Stripe from "npm:stripe@14";
import { createClientFromRequest } from "npm:@base44/sdk@0.8.6";
import { crypto } from "npm:@noble/hashes@1.3.3/utils";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY"));

function generateToken() {
  const array = new Uint8Array(32);
  globalThis.crypto.getRandomValues(array);
  return Array.from(array, b => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req) => {
  try {
    const body = await req.json();
    const { sessionId, accessToken, email } = body;
    const base44 = createClientFromRequest(req);

    // Verify by Stripe session ID (post-purchase)
    if (sessionId) {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (!session || session.payment_status !== "paid") {
        return Response.json({ error: "Payment not confirmed" }, { status: 402 });
      }

      const courseId = session.metadata?.course_id;
      const purchaserEmail = session.metadata?.purchaser_email || session.customer_email;

      // Check if enrollment already exists
      const existing = await base44.asServiceRole.entities.CourseEnrollment.filter({
        stripe_session_id: sessionId
      });

      if (existing.length > 0) {
        return Response.json({ enrollment: existing[0] });
      }

      // Create enrollment
      const token = generateToken();
      const enrollment = await base44.asServiceRole.entities.CourseEnrollment.create({
        course_id: courseId,
        email: purchaserEmail,
        stripe_session_id: sessionId,
        amount_paid: session.amount_total / 100,
        access_token: token,
        status: "active",
        completed_lesson_ids: [],
      });

      // Send access email
      await base44.asServiceRole.integrations.Core.SendEmail({
        to: purchaserEmail,
        from_name: "High Caliber AI",
        subject: "Your course access is ready 🎉",
        body: `Hi there,\n\nThank you for enrolling! Your course is ready.\n\nAccess your course anytime at:\nhttps://highcaliberai.com/course-access?token=${token}\n\nBookmark this link — you can also log in with your email at https://highcaliberai.com/course-access\n\nEnjoy the course!\n\nDavid Berkowitz\nHigh Caliber AI`
      });

      console.log(`Enrollment created for ${purchaserEmail}, session: ${sessionId}`);
      return Response.json({ enrollment });
    }

    // Verify by access token
    if (accessToken) {
      const enrollments = await base44.asServiceRole.entities.CourseEnrollment.filter({
        access_token: accessToken,
        status: "active"
      });
      if (enrollments.length > 0) {
        return Response.json({ enrollment: enrollments[0] });
      }
      return Response.json({ error: "Invalid or expired token" }, { status: 401 });
    }

    // Verify by email (resend access)
    if (email) {
      const enrollments = await base44.asServiceRole.entities.CourseEnrollment.filter({
        email: email,
        status: "active"
      });
      if (enrollments.length > 0) {
        // Resend access email
        await base44.asServiceRole.integrations.Core.SendEmail({
          to: email,
          from_name: "High Caliber AI",
          subject: "Your course access link",
          body: `Hi there,\n\nHere's your course access link:\nhttps://highcaliberai.com/course-access?token=${enrollments[0].access_token}\n\nDavid Berkowitz\nHigh Caliber AI`
        });
        return Response.json({ enrollment: enrollments[0] });
      }
      return Response.json({ error: "No enrollment found for that email" }, { status: 404 });
    }

    return Response.json({ error: "Missing verification parameter" }, { status: 400 });
  } catch (error) {
    console.error("Course verify error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});