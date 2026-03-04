import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Star, 
  Download, 
  ExternalLink, 
  CheckCircle2,
  BookOpen,
  Users,
  TrendingUp,
  Target,
  Eye,
  Zap,
  Coffee,
  ChevronDown,
  Loader2
} from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { BookStructuredData, PersonStructuredData } from '@/components/SEO/StructuredData';
import MetaTags from '@/components/SEO/MetaTags';
import AgentChat from '@/components/AgentChat';

export default function BookPage() {
  const [ideaInput, setIdeaInput] = useState('');
  const [generatedIdea, setGeneratedIdea] = useState('');
  const [loadingIdea, setLoadingIdea] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const generateIdea = async () => {
    if (!ideaInput.trim()) {
      alert('Please enter your industry or business type');
      return;
    }

    setLoadingIdea(true);
    try {
      const prompt = `Generate a creative, AI-powered marketing idea for a business in this industry: "${ideaInput}". 
      
      The idea should be:
      - Practical and actionable
      - Leverage AI technology
      - Be innovative but realistic
      - Specific to their industry
      - Include 2-3 specific implementation steps
      
      Keep it concise (3-4 sentences max) and inspiring.`;

      const response = await base44.integrations.Core.InvokeLLM({
        prompt: prompt,
        add_context_from_internet: false
      });

      setGeneratedIdea(response);
    } catch (error) {
      console.error('Error generating idea:', error);
      alert('Failed to generate idea. Please try again.');
    } finally {
      setLoadingIdea(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.reason || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setSubmitting(true);
    try {
      await base44.entities.ContactSubmission.create({
        name: formData.name,
        email: formData.email,
        company: `Book Inquiry - ${formData.reason}`,
        message: formData.message
      });

      await base44.integrations.Core.SendEmail({
        to: 'david@highcaliberai.com',
        subject: `Book Website Contact: ${formData.reason}`,
        body: `Name: ${formData.name}\nEmail: ${formData.email}\nReason: ${formData.reason}\n\nMessage:\n${formData.message}`
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', reason: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <MetaTags 
        title="The Non-Obvious Guide to Using AI for Marketing"
        description="A practical guide by David Berkowitz to harnessing AI for marketing without losing your brand's human touch. Learn strategic integration, boost productivity, and stay competitive in the AI era."
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e2caa7739d4d7ec44ee610/cedc73191_NOG-AIMarketing-2025-HiRes.jpg"
        url="https://highcaliberai.com/book"
        type="book"
      />
      <BookStructuredData />
      <PersonStructuredData />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(138,43,226,0.2),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Book Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30"></div>
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e2caa7739d4d7ec44ee610/cedc73191_NOG-AIMarketing-2025-HiRes.jpg"
                alt="The Non-Obvious Guide to Using AI for Marketing book cover by David Berkowitz - practical strategies for harnessing AI in marketing"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                loading="eager"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-4 py-2 shadow-xl flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-bold text-purple-900">Top Rated</span>
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block bg-purple-700 text-white text-sm px-4 py-2 rounded-full mb-6">
                Non-Obvious Guide Series
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                The Non-Obvious Guide to
                <span className="block text-yellow-400">Using AI for Marketing</span>
              </h1>
              <p className="text-2xl text-purple-200 mb-4">
                How to Harness the Transformative Power of AI
              </p>
              <div className="flex items-center gap-2 text-white/90 mb-8">
                <Coffee className="w-5 h-5" />
                <span className="italic">"Like having coffee with an expert"</span>
              </div>
              <p className="text-xl text-white/80 mb-8">By David Berkowitz</p>
              
              <div className="flex flex-wrap gap-4">
                 <a 
                   href="https://www.amazon.com/Non-Obvious-Guide-Using-Marketing-Transformative-ebook/dp/B0DZQQW7M7"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   <Button className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-6 text-lg font-bold shadow-xl">
                     Order Now on Amazon
                     <ExternalLink className="ml-2 w-5 h-5" />
                   </Button>
                 </a>
                 <Link to={createPageUrl("CourseHome")}>
                   <Button className="bg-white text-purple-900 hover:bg-purple-100 px-8 py-6 text-lg font-bold shadow-xl">
                     <BookOpen className="mr-2 w-5 h-5" />
                     Take the Course — $39
                   </Button>
                 </Link>
                 <Button 
                   onClick={() => scrollToSection('chapters')}
                   variant="outline" 
                   className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg"
                 >
                   Explore Chapters
                   <ChevronDown className="ml-2 w-5 h-5" />
                 </Button>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Practical Guide to AI Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read this book to understand how AI is changing marketing—and how to make it work for you. 
              If you want to harness AI without losing your brand's human touch, this book will show you how.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={Target}
              title="Strategic AI Integration"
              description="Learn how to develop clear strategies for AI integration in your marketing efforts"
            />
            <BenefitCard 
              icon={Zap}
              title="Boost Productivity"
              description="Discover tools and techniques to improve efficiency and automate repetitive tasks"
            />
            <BenefitCard 
              icon={CheckCircle2}
              title="Navigate Ethics"
              description="Understand how to use AI responsibly while managing risks and ethical concerns"
            />
            <BenefitCard 
              icon={TrendingUp}
              title="Measure Success"
              description="Track meaningful metrics and ROI from your AI-driven marketing initiatives"
            />
            <BenefitCard 
              icon={Eye}
              title="Customer Insights"
              description="Harness AI for deeper audience insights and data-driven decision-making"
            />
            <BenefitCard 
              icon={Star}
              title="Stay Competitive"
              description="Keep ahead of emerging AI trends and innovations in marketing"
            />
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Who Is This Book For?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AudienceCard 
              title="Marketing Managers"
              description="Looking to integrate AI into their team's workflow and strategy."
            />
            <AudienceCard 
              title="Entrepreneurs"
              description="Who want to leverage AI for growth without a big team or budget."
            />
            <AudienceCard 
              title="Agency Professionals"
              description="Aiming to deliver innovative, AI-powered results for clients."
            />
            <AudienceCard 
              title="Students & Career Changers"
              description="Eager to future-proof their skills in the new era of marketing."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Praise from Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by marketing professionals and executives worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <TestimonialCard 
              quote="David Berkowitz has a gift for separating hype from reality, a skill that's never been more crucial than in the AI era. His insights on AI are essential reading for anyone looking to stay ahead."
              author="Jeremiah Owyang"
              title="General Partner, AI Investments, Blitzscaling Ventures"
            />
            <TestimonialCard 
              quote="This book is a must-read for anyone looking to future-proof their career and embrace AI as an opportunity, not a threat."
              author="Marni Gordon"
              title="Senior Vice President, Partnerships, AEF"
            />
            <TestimonialCard 
              quote="A practical, hype-free guide to using AI to enhance creativity, optimize strategy, and drive results—helping marketers harness AI's power without losing the human touch."
              author="Greg Stuart"
              title="CEO of MMA Global"
            />
            <TestimonialCard 
              quote="David cuts through the AI hype to deliver a practical, no-nonsense guide for marketers. A trusted expert and community builder, Berkowitz makes AI accessible and actionable."
              author="Lan Phan"
              title="CEO of community of SEVEN"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 shadow-xl overflow-hidden">
              <CardContent className="p-8">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e2caa7739d4d7ec44ee610/a6e122b8e_DarrenHermanwithbook.png"
                  alt="Marketing executive Darren Herman reading The Non-Obvious Guide to Using AI for Marketing"
                  className="w-full rounded-lg mb-6"
                  loading="lazy"
                />
                <p className="text-white/90 text-center italic">
                  Trusted by industry leaders and marketing executives.
                </p>
              </CardContent>
            </Card>

            <TestimonialCard 
              quote="A smart, practical, and refreshingly honest guide, full of real-world applications without the hype. Very on-brand for David Berkowitz, who always simplifies the complex."
              author="Sarah Hofstetter"
              title="President, Profitero"
            />
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-20 px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What You'll Learn
            </h2>
            <p className="text-xl text-purple-200">
              12 comprehensive chapters organized into 3 actionable parts
            </p>
          </div>

          <div className="space-y-8">
            <ChapterSection 
              title="Part One: Getting AI-Ready"
              chapters={[
                { num: 1, title: "Introduction to AI for Marketers" },
                { num: 2, title: "AI Readiness and Strategy Assessment" },
                { num: 3, title: "Overcoming Objections" },
                { num: 4, title: "Selecting and Implementing AI Tools" }
              ]}
            />
            <ChapterSection 
              title="Part Two: Putting AI to Work"
              chapters={[
                { num: 5, title: "Developing AI-Infused Marketing Strategies" },
                { num: 6, title: "Optimizing Customer Personas and Personalization with AI" },
                { num: 7, title: "AI-Powered Customer Service and Retention" },
                { num: 8, title: "AI in Content Creation" },
                { num: 9, title: "How to Prompt" }
              ]}
            />
            <ChapterSection 
              title="Part Three: Measuring and Adapting"
              chapters={[
                { num: 10, title: "Measuring Success with AI—and Course Correcting" },
                { num: 11, title: "The Ethical Use of AI in Marketing" },
                { num: 12, title: "The Agentic Future of AI in Marketing" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e2caa7739d4d7ec44ee610/00b68beb5_dbholdingbooksxsw2025.jpg"
                alt="David Berkowitz holding The Non-Obvious Guide to Using AI for Marketing at SXSW 2025"
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About David Berkowitz</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                David Berkowitz is a recognized leader in digital marketing and AI innovation, with over two decades 
                of experience helping brands navigate transformative technologies.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                As the founder of the Serial Marketers and AI Marketers Guild communities, David has built platforms 
                dedicated to advancing the marketing profession through collaboration and continuous learning.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/dberkowitz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Users className="mr-2 w-4 h-4" />
                    LinkedIn
                  </Button>
                </a>
                <a 
                  href="https://serialmarketers.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Website
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Free Resources & Checklists
            </h2>
            <p className="text-xl text-gray-600">
              Download these free guides and worksheets mentioned in the book to accelerate your AI adoption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceDownload 
              title="Content Production Checklist"
              description="Ensure your AI-generated content is effective, ethical, and on-brand."
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e2caa7739d4d7ec44ee610/7f1f5d10b_NOGAIMarketingResource--ContentProductionChecklist.pdf"
            />
            <ResourceDownload 
              title="Legal & Ethical Risk Checklist"
              description="Navigate AI implementation with a focus on compliance and brand safety."
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e2caa7739d4d7ec44ee610/733d312ff_NOGAIMarketingResource--LegalEthicalRisk.pdf"
            />
            <ResourceDownload 
              title="Process Optimization Worksheet"
              description="Assess your marketing processes and identify opportunities for AI optimization."
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e2caa7739d4d7ec44ee610/b0d1ce628_NOGAIMarketingResource--ProcessOptimization.pdf"
            />
            <ResourceDownload 
              title="ROI & Performance Tracking"
              description="A sheet to measure the effectiveness and return on investment of your AI tools."
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e2caa7739d4d7ec44ee610/50e79c3f2_NOGAIMarketingResource--ROIandPerformanceTracking.pdf"
            />
            <ResourceDownload 
              title="Recommended AI Tools"
              description="A curated list of AI tools for marketing, creativity, productivity, and more."
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e2caa7739d4d7ec44ee610/87f3cd411_NOGAIMarketingResource--TechRecommendations.pdf"
            />
            <ResourceDownload 
              title="AI Tool Selection Worksheet"
              description="Evaluate and compare AI tools to find the perfect fit for your business needs."
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e2caa7739d4d7ec44ee610/a80ae431c_NOGAIMarketingResource--ToolSelection.pdf"
            />
          </div>
        </div>
      </section>

      {/* AI Idea Generator */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Your AI-Powered Marketing Idea
            </h2>
            <p className="text-xl text-gray-600">
              Enter your industry or business type for a custom marketing idea, inspired by the book.
            </p>
          </div>

          <Card className="shadow-xl border-2 border-purple-200">
            <CardContent className="p-8">
              <div className="space-y-4">
                <Input 
                  placeholder="Your Industry or Business Type"
                  value={ideaInput}
                  onChange={(e) => setIdeaInput(e.target.value)}
                  className="text-lg py-6"
                  onKeyPress={(e) => e.key === 'Enter' && generateIdea()}
                />
                <Button 
                  onClick={generateIdea}
                  disabled={loadingIdea}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg"
                >
                  {loadingIdea ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Generating Idea...
                    </>
                  ) : (
                    'Generate Idea'
                  )}
                </Button>

                {generatedIdea && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-6 bg-purple-50 rounded-lg border-2 border-purple-200"
                  >
                    <p className="text-gray-800 leading-relaxed">{generatedIdea}</p>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connect with David
            </h2>
            <p className="text-xl text-gray-600">
              Have questions, want to learn more, or interested in booking a speaking engagement? Get in touch.
            </p>
          </div>

          {submitted ? (
            <Card className="shadow-xl border-2 border-green-200 bg-green-50">
              <CardContent className="p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-700">Thank you for reaching out. I'll get back to you soon.</p>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-xl border-2 border-purple-200">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="py-6"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="py-6"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Reason for Contact
                    </label>
                    <Select value={formData.reason} onValueChange={(value) => setFormData({...formData, reason: value})}>
                      <SelectTrigger className="py-6">
                        <SelectValue placeholder="Select an option..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="speaking">Speaking Engagement</SelectItem>
                        <SelectItem value="press">Press / Media</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-32"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-purple-700 text-white text-sm px-4 py-2 rounded-full mb-6">
            Available Now
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Transform Your
            <span className="block">Marketing with AI?</span>
          </h2>
          <p className="text-xl text-purple-200 mb-10">
            Join thousands of marketers who are harnessing the transformative power of AI
          </p>
          <a 
            href="https://www.amazon.com/Non-Obvious-Guide-Using-Marketing-Transformative-ebook/dp/B0DZQQW7M7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-10 py-7 text-xl font-bold shadow-2xl">
              Order on Amazon
              <ExternalLink className="ml-2 w-6 h-6" />
            </Button>
          </a>
          <p className="text-purple-200 mt-6">
            Available in paperback and Kindle formats
          </p>
        </div>
      </section>

      <AgentChat 
        agentName="book_qa_assistant"
        title="Ask About the Book"
        subtitle="Questions about concepts, chapters, or frameworks"
      />
    </div>
  );
}

function BenefitCard({ icon: Icon, title, description }) {
  return (
    <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-purple-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

function AudienceCard({ title, description }) {
  return (
    <Card className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ quote, author, title }) {
  return (
    <Card className="bg-white border border-gray-200 shadow-lg">
      <CardContent className="p-8">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">"{quote}"</p>
        <div>
          <p className="font-bold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function ChapterSection({ title, chapters }) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
        <div className="space-y-4">
          {chapters.map((chapter) => (
            <div key={chapter.num} className="flex items-start gap-4 text-white/90">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold">
                {chapter.num}
              </div>
              <p className="text-lg pt-0.5">{chapter.title}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ResourceDownload({ title, description, href }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="bg-white border border-gray-200 hover:shadow-xl hover:border-purple-300 transition-all duration-300 h-full">
        <CardContent className="p-6">
          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
            <Download className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm">
            Download PDF
            <ExternalLink className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}