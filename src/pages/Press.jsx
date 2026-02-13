import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Newspaper, ExternalLink, Calendar, Mail, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MetaTags from "@/components/SEO/MetaTags";

export default function Press() {
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ['press-articles'],
    queryFn: () => base44.entities.PressArticle.list('-date'),
    initialData: [],
  });

  const featuredArticles = articles.filter(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

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
      await base44.entities.ContactSubmission.create(formData);
      await base44.integrations.Core.SendEmail({
        to: "dberkowitz@gmail.com",
        subject: `New Press Inquiry from ${formData.name}`,
        body: `
New press inquiry:

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
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="Press & Media - David Berkowitz in the News"
        description="David Berkowitz's media appearances and press coverage on AI marketing, digital strategy, and marketing innovation."
        url="https://highcaliberai.com/press"
        canonical="https://highcaliberai.com/press"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-red-100 border border-red-200">
              <Newspaper className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-900 tracking-wide">Media Coverage</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Press & <span className="text-red-600">Media</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              David Berkowitz's insights featured in leading publications on AI marketing, technology, and digital strategy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Coverage</h2>
            <div className="space-y-6">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className="border-2 border-red-200 hover:border-red-400 hover:shadow-2xl transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-4">
                          <Badge className="bg-red-600 text-white flex-shrink-0">Featured</Badge>
                          <div className="flex items-center text-sm text-gray-500 gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(article.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </div>
                        </div>
                        
                        <div className="mb-3">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-red-600 font-semibold flex items-center gap-2">
                            {article.publication}
                            <ExternalLink className="w-4 h-4" />
                          </p>
                        </div>

                        {article.context && (
                          <p className="text-gray-600 mb-4 leading-relaxed italic">
                            {article.context}
                          </p>
                        )}

                        <blockquote className="border-l-4 border-red-600 pl-4 py-2 bg-gray-50 rounded-r-lg">
                          <p className="text-gray-800 leading-relaxed">
                            "{article.quote}"
                          </p>
                        </blockquote>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Articles */}
      {otherArticles.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Additional Coverage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a 
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full group"
                  >
                    <Card className="h-full hover:shadow-xl hover:border-red-200 transition-all duration-300">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 gap-2 mb-3">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-red-600 font-semibold text-sm mb-3 flex items-center gap-2">
                          {article.publication}
                          <ExternalLink className="w-3 h-3" />
                        </p>

                        {article.context && (
                          <p className="text-gray-600 text-sm mb-3 flex-grow leading-relaxed italic">
                            {article.context}
                          </p>
                        )}

                        <blockquote className="border-l-2 border-gray-300 pl-3 text-sm text-gray-700 mt-auto">
                          "{article.quote.substring(0, 150)}{article.quote.length > 150 ? '...' : ''}"
                        </blockquote>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {isLoading && (
        <div className="text-center py-20">
          <p className="text-gray-500">Loading press coverage...</p>
        </div>
      )}

      {!isLoading && articles.length === 0 && (
        <div className="text-center py-20">
          <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No press coverage available yet.</p>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Press Inquiries
            </h2>
            <p className="text-xl text-gray-600">
              Interested in featuring David or need expert commentary? Get in touch.
            </p>
          </motion.div>

          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
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
                      Publication / Company
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Your publication"
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
                      placeholder="Tell us about your story or inquiry..."
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
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}