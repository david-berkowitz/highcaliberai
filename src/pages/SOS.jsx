import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, CheckCircle2, ExternalLink } from "lucide-react";
import { base44 } from "@/api/base44Client";
import SOSDrawing from "../components/SOSDrawing";
import MetaTags from "../components/SEO/MetaTags";

export default function SOS() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState("");
  const [isEntered, setIsEntered] = useState(false);
  const [error, setError] = useState("");
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [isDrawingUnlocked, setIsDrawingUnlocked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await base44.entities.SOSRaffleEntry.create({
        name,
        email
      });

      setIsEntered(true);
      setName("");
      setEmail("");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isEntered) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-6">
        <MetaTags
          title="You're Entered! | Source of Sources Conference Raffle"
          description="Win a free pass to Source of Sources Small Business Conference 2026 in NYC"
        />
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">You're In!</h2>
            <p className="text-gray-600 mb-6">
              Your entry has been submitted. We'll announce the 5 winners during our live webinar. Good luck!
            </p>
            <Button
              onClick={() => setIsEntered(false)}
              variant="outline"
              className="w-full"
            >
              Enter Another Person
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <MetaTags
        title="Win a Free Pass | Source of Sources Conference 2026"
        description="Enter to win 1 of 5 free passes to Source of Sources Small Business Conference 2026 in NYC on February 11th"
      />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gift className="w-4 h-4" />
            5 Free Passes Available
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Win a Pass to<br />
            <span className="text-red-600">Source of Sources</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-4">
            Small Business Conference 2026
          </p>
          
          <div className="flex items-center justify-center gap-6 text-gray-700 mb-8">
            <span className="font-medium">📍 New York City</span>
            <span className="font-medium">📅 February 11, 2026</span>
          </div>
          
          <a
            href="https://www.sourceofsources.com/conference"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium mb-12"
          >
            Learn about the conference
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Entry Form */}
      <div className="pb-20 px-6">
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Enter to Win
              </h2>
              <p className="text-gray-600 text-center mb-6">
                We'll randomly select 5 winners during our live webinar
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
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
                  className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
                >
                  {isSubmitting ? "Entering..." : "Enter Raffle"}
                </Button>
              </form>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                No purchase necessary. Winners will be notified by email.
              </p>
            </CardContent>
          </Card>

          {/* Password Access Link */}
          {!isDrawingUnlocked && !showPasswordPrompt && (
            <div className="text-center mt-4">
              <button
                onClick={() => setShowPasswordPrompt(true)}
                className="text-sm text-gray-400 hover:text-gray-600"
              >
                Admin Access
              </button>
            </div>
          )}

          {/* Password Prompt */}
          {showPasswordPrompt && !isDrawingUnlocked && (
            <Card className="mt-4">
              <CardContent className="pt-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (password === "sosdb") {
                      setIsDrawingUnlocked(true);
                      setShowPasswordPrompt(false);
                    } else {
                      alert("Incorrect password");
                    }
                  }}
                  className="space-y-4"
                >
                  <Input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1">
                      Unlock Drawing
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowPasswordPrompt(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Admin Drawing Section */}
      {isDrawingUnlocked && <SOSDrawing />}
    </div>
  );
}