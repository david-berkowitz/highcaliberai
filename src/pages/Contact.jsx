import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import MetaTags from "@/components/SEO/MetaTags";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  Mail, 
  MapPin, 
  ExternalLink,
  ArrowRight,
  Mic
} from "lucide-react";
import AgentChat from "@/components/AgentChat";

const resources = [
  { name: "AI Marketing Guides", url: "http://bit.ly/ai-guides" },
  { name: "AI Resource List", url: "https://bit.ly/ai-resource-list" },
  { name: "Speaking Information", url: "https://serialmarketer.net/contact/speaking/" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      // Save to database
      await base44.entities.ContactSubmission.create(formData);

      // Send email notification
      await base44.integrations.Core.SendEmail({
        to: "dberkowitz@gmail.com",
        subject: `New Contact Form Submission from ${formData.name}`,
        body: `
New contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "N/A"}

Message:
${formData.message}
        `
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <MetaTags 
        title="Contact David Berkowitz - AI Marketing Consultation"
        description="Schedule a consultation with David Berkowitz for AI marketing strategy, fractional CMO services, or speaking engagements. Located in New York, NY. Book a meeting via Calendly or send a message."
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/eebbb17c5_dbforbes.jpg"
        url="https://highcaliberai.com/contact"
        canonical="https://highcaliberai.com/contact"
      />
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's <span className="text-red-600">Connect</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your marketing with AI? Schedule a consultation or reach out directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Schedule Meeting Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-red-600 rounded-2xl p-8 lg:p-12 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Schedule a Meeting</h2>
              <p className="text-red-100 mb-8 leading-relaxed">
                Book a consultation directly with David to discuss your AI marketing needs.
              </p>
              <a
                href="https://www.calendly.com/dberkowitz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">Your message has been sent. We'll get back to you soon.</p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your needs..."
                        rows={5}
                      />
                    </div>

                    {error && (
                      <p className="text-red-600 text-sm">{error}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <MapPin className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">Location</h3>
                        <p className="text-gray-600 text-sm">New York, NY</p>
                      </div>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-3 text-sm">Quick Resources</h3>
                    <div className="space-y-2">
                      {resources.map((resource) => (
                        <a
                          key={resource.name}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-red-600 hover:text-red-700 transition-colors group text-sm"
                        >
                          {resource.name}
                          <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Speaking Engagements
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              For speaking opportunities and detailed information about David's presentations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-8 border border-gray-700"
          >
            <div className="flex items-start">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                <Mic className="w-7 h-7 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Speaking History & Details</h3>
                <p className="text-gray-400 mb-6">
                  View David's complete speaking history, topics, and testimonials from past events.
                </p>
                <a
                  href="https://serialmarketer.net/contact/speaking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors group"
                >
                  View Speaking History
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AgentChat 
        agentName="speaking_consulting_guide"
        title="Speaking & Consulting"
        subtitle="Learn about working with David"
      />
      </div>
      );
      }