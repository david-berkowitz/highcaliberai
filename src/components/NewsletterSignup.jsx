import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function NewsletterSignup({ source = "website", variant = "default" }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await base44.entities.EmailSubscriber.create({
        email,
        name: name || undefined,
        source
      });

      await base44.integrations.Core.SendEmail({
        to: "david@highcaliberai.com",
        subject: `New Newsletter Subscriber from ${source}`,
        body: `Name: ${name || "Not provided"}\nEmail: ${email}\nSource: ${source}`
      });

      setIsSubscribed(true);
      setEmail("");
      setName("");
    } catch (err) {
      console.error('Newsletter signup error:', err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">You're In!</h3>
        <p className="text-gray-600">Check your inbox for a confirmation email.</p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-red-600 hover:bg-red-700"
        >
          {isSubmitting ? "..." : "Subscribe"}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Your name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-red-600 hover:bg-red-700"
      >
        <Mail className="mr-2 w-4 h-4" />
        {isSubmitting ? "Subscribing..." : "Subscribe to Insights"}
      </Button>
      <p className="text-xs text-gray-500 text-center">
        Get monthly AI marketing insights and strategies. Unsubscribe anytime.
      </p>
    </form>
  );
}