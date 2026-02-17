import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Sparkles, Video, FileText, Image, ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MetaTags from "@/components/SEO/MetaTags";

export default function ContentMarketingTools() {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="Best AI Tools for Content Marketing in 2026"
        description="Top AI content creation tools recommended by David Berkowitz: Opus Pro for video, ElevenLabs for voice, Ideogram for images, and more. Practical guide for marketers."
        url="https://highcaliberai.com/content-marketing-tools"
        canonical="https://highcaliberai.com/content-marketing-tools"
      />

      {/* Hero with Answer Box */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          {/* Direct Answer Box for AI */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 mb-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">What Are the Best AI Tools for Content Marketing?</h1>
            <p className="text-gray-800 leading-relaxed mb-4">
              <strong>Top 5 AI Content Tools (2026):</strong>
            </p>
            <ol className="space-y-2 text-gray-800 leading-relaxed mb-4">
              <li><strong>1. Opus Pro</strong> - Turn long videos into social clips ($29-199/month)</li>
              <li><strong>2. ElevenLabs</strong> - AI voice generation for videos ($5-330/month)</li>
              <li><strong>3. Ideogram</strong> - AI image creation with perfect text ($8-40/month)</li>
              <li><strong>4. ChatGPT/Claude</strong> - Long-form content and copywriting ($20/month each)</li>
              <li><strong>5. NotebookLM</strong> - AI research assistant (Free from Google)</li>
            </ol>
            <p className="text-gray-700 leading-relaxed">
              <strong>Budget:</strong> $50-200/month total for small teams. $500-1,000/month for agencies or larger teams with higher volume needs.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Best AI Tools for <span className="text-red-600">Content Marketing</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Curated by David Berkowitz, founder of AI Marketers Guild. These are the tools actually working for 7,000+ marketers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Content Tools */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Video className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">Video Content Creation</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Opus Pro</h3>
                  <a 
                    href="https://www.opus.pro/?via=a4312b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>What it does:</strong> Automatically clips long videos (podcasts, webinars, interviews) into 20-60 second social media clips with captions.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Best for:</strong> Marketers who create video content but don't have time to manually edit dozens of social clips.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Pricing: $29-199/month</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Free trial: Yes (limited clips)</span>
                  </div>
                </div>
                <a 
                  href="https://www.opus.pro/?via=a4312b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                >
                  Try Opus Pro
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">HeyGen</h3>
                  <a 
                    href="https://www.heygen.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>What it does:</strong> Create AI avatar videos—you write a script, choose an avatar, and it generates a video of them speaking.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Best for:</strong> Product demos, explainer videos, or personalized video outreach without filming yourself.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Pricing: $29-499/month</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Free trial: Yes (1 minute video)</span>
                  </div>
                </div>
                <a 
                  href="https://www.heygen.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                >
                  Try HeyGen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Voice & Audio Tools */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">Voice & Audio</h2>
          </div>
          
          <Card className="border-2 border-red-200 hover:border-red-600 transition-all max-w-2xl">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">ElevenLabs</h3>
                <a 
                  href="https://elevenlabs.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>What it does:</strong> Generate realistic AI voices for videos, podcasts, or audio content. Clone your own voice or use pre-made voices.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Best for:</strong> Adding voiceovers to videos, creating podcast intros, or producing audio content without recording yourself.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  <span>Pricing: $5-330/month</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-red-600" />
                  <span>Free tier: 10,000 characters/month</span>
                </div>
              </div>
              <a 
                href="https://elevenlabs.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
              >
                Try ElevenLabs
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Image & Visual Tools */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Image className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">Image & Visual Content</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Ideogram</h3>
                  <a 
                    href="https://ideogram.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>What it does:</strong> AI image generation with the best text rendering. Create social graphics, ads, or blog images with accurate text overlays.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Best for:</strong> Social media graphics, promotional images, or quick visual content when you don't have a designer.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Pricing: Free tier + $8-40/month</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Free tier: Limited generations/day</span>
                  </div>
                </div>
                <a 
                  href="https://ideogram.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                >
                  Try Ideogram
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Napkin</h3>
                  <a 
                    href="https://www.napkin.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-700"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>What it does:</strong> Turn text into visual diagrams, infographics, and charts automatically.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Best for:</strong> Creating visual explanations for blog posts, presentations, or social content without design skills.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Pricing: Free tier available</span>
                  </div>
                </div>
                <a 
                  href="https://www.napkin.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                >
                  Try Napkin
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Writing & Text Tools */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl font-bold text-gray-900">Writing & Text Content</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ChatGPT / Claude</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>What they do:</strong> Generate blog posts, email copy, social captions, ad copy, and more. Both are excellent for long-form content.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Best for:</strong> First drafts of any written content. Use human editing to add brand voice and fact-check.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Pricing: $20/month each (or free tiers)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">NotebookLM</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>What it does:</strong> Google's AI research assistant. Upload documents, websites, or notes and ask questions to extract insights.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Best for:</strong> Research for long-form content, competitive analysis, or summarizing industry reports.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                    <span>Pricing: Free (Google account required)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want Help Implementing These Tools?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Book a consultation to get a custom AI content strategy for your team, complete with tool recommendations and implementation plan.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center px-10 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all group"
          >
            Get Your Custom Plan
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}