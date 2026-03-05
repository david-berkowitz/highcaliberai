import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import MetaTags from "@/components/SEO/MetaTags";
import { BookOpen, Check, AlertCircle, Loader2, Mail } from "lucide-react";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";

const CATEGORIES = [
  "Research & Insights",
  "Content Creation",
  "Social Media Management",
  "Contact Discovery",
  "Agents & Workflow Automation",
  "Vibe Coding",
  "Newsletters",
  "Directories & Prompts",
  "Courses & Learning",
  "LinkedIn Thought Leaders",
  "Community & Events"
];

export default function ResourceSubmit() {
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    url: "",
    submitter_name: "",
    submitter_email: "",
    why_include: "",
    tier: "both",
    has_referral: false,
    referral_code: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await base44.entities.ResourceSubmission.create(formData);
      if (response) {
        setSubmitted(true);
        setFormData({
          category: "",
          title: "",
          description: "",
          url: "",
          submitter_name: "",
          submitter_email: "",
          why_include: "",
          tier: "both",
          has_referral: false,
          referral_code: ""
        });
      }
    } catch (err) {
      setError("Failed to submit resource. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MetaTags
        title="Submit a Resource"
        description="Suggest an AI marketing tool or resource for our library"
        url="https://highcaliberai.com/submit-resource"
      />

      <div className="max-w-2xl mx-auto px-4 py-20">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <div className="mb-4 flex justify-center">
              <div className="bg-green-100 p-3 rounded-full">
                <Check className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h2>
            <p className="text-gray-600 mb-6">
              Your resource submission has been received. I'll review it and get back to you soon.
            </p>
            <Link
              to={createPageUrl("Resources")}
              className="inline-block px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Back to Resources
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-100 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Submit a Resource</h1>
                <p className="text-gray-500 text-sm mt-1">Suggest an AI tool or resource for the library</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select a category</option>
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Resource Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="e.g., My Amazing AI Tool"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Brief description of what the resource does (1-2 sentences)"
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
              </div>

              {/* URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Resource URL *
                </label>
                <input
                  type="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  required
                  placeholder="https://example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Why Include */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Why should this be included? *
                </label>
                <textarea
                  name="why_include"
                  value={formData.why_include}
                  onChange={handleChange}
                  required
                  placeholder="Tell me why this resource would be valuable for AI marketers"
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
              </div>

              {/* Tier */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Pricing Tier
                </label>
                <div className="flex gap-4">
                  {["smb", "enterprise", "both"].map(tier => (
                    <label key={tier} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="tier"
                        value={tier}
                        checked={formData.tier === tier}
                        onChange={handleChange}
                        className="w-4 h-4 text-red-600"
                      />
                      <span className="text-sm text-gray-700 capitalize">{tier === "smb" ? "SMB" : tier}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Referral */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="has_referral"
                    checked={formData.has_referral}
                    onChange={handleChange}
                    className="w-4 h-4 text-red-600 rounded"
                  />
                  <span className="text-sm text-gray-700">This resource has an affiliate/referral link</span>
                </label>
              </div>

              {/* Submitter Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="submitter_name"
                    value={formData.submitter_name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="submitter_email"
                    value={formData.submitter_email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Submitting..." : "Submit Resource"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                I personally review all submissions and will reach out if I have questions.
              </p>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}