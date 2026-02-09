import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import MetaTags from "@/components/SEO/MetaTags";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  TrendingUp, 
  Brain, 
  Sparkles, 
  Users, 
  Target, 
  Lightbulb,
  Book,
  ExternalLink,
  Mail,
  FileText,
  File,
  Calendar,
  ArrowRight
} from "lucide-react";

export default function SOS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <MetaTags 
        title="Source of Sources - SMB AI Marketing Resources"
        description="Curated AI marketing tools and resources for small and mid-sized businesses. Affordable, practical tools for modern marketing teams."
        url="https://highcaliberai.com/sos"
        canonical="https://highcaliberai.com/sos"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/9f7781ed5_image.png"
                alt="Small Giants 2026"
                className="h-16 mx-auto mb-4"
              />
              <p className="text-sm text-gray-600 font-medium">brought to you by Source of Sources</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Source of <span className="font-semibold text-red-600">Sources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              A curated collection of practical AI marketing tools and resources for small and mid-sized businesses. This is where I point growing teams toward affordable, accessible solutions that actually work—without the enterprise complexity or price tag.
            </p>
            
            {/* Bio Section */}
            <div className="max-w-2xl mx-auto mt-12 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/7cdf61db4_introstars2copy.png"
                  alt="David Berkowitz"
                  className="w-20 h-20 rounded-full flex-shrink-0"
                  loading="lazy"
                />
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 mb-2">Curated by David Berkowitz</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    David is an AI marketing strategist, founder of AI Marketers Guild (7,000+ members), and author of <em>The Non-Obvious Guide to Using AI for Marketing</em>. He serves as Chief Community Officer at Marketecture Media, fractional CMO for AI-forward companies, and Executive in Residence at Progress Partners. With 400+ speaking engagements and 15+ years of experience across agencies and tech companies, David bridges the gap between AI innovation and practical marketing results.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Presentation Materials - Coming Soon */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <File className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Presentation Materials</h3>
                <p className="text-blue-100 text-lg">Coming Soon</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Marketing Hustle Game */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to={createPageUrl("Hustle")}>
            <Card className="bg-gradient-to-r from-green-600 to-green-700 border-0 shadow-xl hover:shadow-2xl transition-all cursor-pointer">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">🎮 The Marketing Hustle</h3>
                  <p className="text-green-100 text-lg mb-4">
                    Think you can build a marketing empire on a bootstrap budget?
                  </p>
                  <p className="text-white/90 text-sm mb-4">
                    Trade AI marketing assets across NYC. Pay off $2,000 in SaaS debt in 30 days.
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-700 rounded-lg font-bold hover:bg-green-50 transition-colors">
                    Play Now
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Research & Insights */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-red-600" />
              Research & Insights
            </h2>
            <p className="text-gray-600">Affordable tools for audience research and AI-powered insights</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={TrendingUp}
              title="SparkToro"
              description="Audience research and intelligence platform"
              href="https://sparktoro.com/"
            />
            <ResourceCard 
              icon={Target}
              title="Otterly AI"
              description="AI engine monitoring and brand tracking"
              href="https://otterly.ai/?via=david"
            />
            <ResourceCard 
              icon={Brain}
              title="NotebookLM"
              description="Google's AI-powered research and note-taking assistant"
              href="https://notebooklm.google/"
            />
            <ResourceCard 
              icon={Book}
              title="Passionfruit"
              description="AI-powered content optimization and recommendations"
              href="https://www.getpassionfruit.com/"
            />
            <ResourceCard 
              icon={Target}
              title="AI Search Playbook"
              description="AirOps guide for marketers navigating AI-powered search"
              href="https://www.airops.com/report/ai-search-playbook-marketers"
            />
            <ResourceCard 
              icon={Users}
              title="Rally"
              description="AI-powered research and consumer insights platform"
              href="https://askrally.com/"
            />
            <ResourceCard 
              icon={Target}
              title="Cluely"
              description="Notetaking app with live feedback"
              href="https://cluely.com/"
            />
          </div>
        </div>
      </section>

      {/* Content Creation */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-red-600" />
              Content Creation
            </h2>
            <p className="text-gray-600">AI-powered tools for video, audio, and visual content</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={Sparkles}
              title="Opus Pro"
              description="AI video clipping and repurposing for social media"
              href="https://www.opus.pro/?via=a4312b"
            />
            <ResourceCard 
              icon={Users}
              title="ElevenLabs"
              description="AI voice generation and text-to-speech platform"
              href="https://elevenlabs.io/"
            />
            <ResourceCard 
              icon={Sparkles}
              title="BizGreetz AI®"
              description="AI-powered personalized video ad creation at scale"
              href="https://www.bizgreetz.com/"
            />
            <ResourceCard 
              icon={Sparkles}
              title="Ideogram"
              description="Rapid AI image generation with excellent text rendering"
              href="https://ideogram.ai/"
            />
            <ResourceCard 
              icon={Users}
              title="Jingle My Brand"
              description="AI-powered jingle and brand music creation"
              href="https://jinglemybrand.com/"
            />
            <ResourceCard 
              icon={Target}
              title="Napkin"
              description="AI-powered infographic and visual storytelling"
              href="https://www.napkin.ai/"
            />
            <ResourceCard 
              icon={Sparkles}
              title="Google Labs"
              description="Experimental AI content generation tools from Google"
              href="https://labs.google/experiments"
            />
            <ResourceCard 
              icon={Sparkles}
              title="Hedra"
              description="AI video creation platform"
              href="https://hedra.com"
            />
            <ResourceCard 
              icon={Sparkles}
              title="HeyGen"
              description="AI avatar and video generation"
              href="https://www.heygen.com/"
            />
          </div>
        </div>
      </section>

      {/* Vibe Coding */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-red-600" />
              Vibe Coding
            </h2>
            <p className="text-gray-600">No-code and AI-assisted platforms for building applications</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={Target}
              title="Base44"
              description="Build AI-powered apps without code"
              href="https://base44.pxf.io/c/5604633/2049275/25619?trafcat=base"
              featured
            />
            <ResourceCard 
              icon={Lightbulb}
              title="Lovable"
              description="AI-powered app development platform"
              href="https://lovable.dev/?via=david-berkowitz"
              featured
            />
            <ResourceCard 
              icon={Brain}
              title="Claude Code"
              description="AI coding assistant for developers"
              href="https://www.anthropic.com/claude/code"
            />
            <ResourceCard 
              icon={Target}
              title="Ghostty"
              description="Fast, modern terminal emulator"
              href="https://ghostty.org/"
            />
            <ResourceCard 
              icon={Target}
              title="Netlify"
              description="Modern web hosting and deployment platform"
              href="https://www.netlify.com/"
            />
            <ResourceCard 
              icon={Lightbulb}
              title="Codex by OpenAI"
              description="AI system that translates natural language to code"
              href="https://openai.com/codex/"
            />
          </div>
        </div>
      </section>

      {/* Newsletters */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Mail className="w-8 h-8 text-red-600" />
              Newsletters
            </h2>
            <p className="text-gray-600">Stay updated with AI marketing news</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={Mail}
              title="The Neuron Daily"
              description="Daily AI news and insights by Pete Huang"
              href="https://www.theneurondaily.com/"
              featured
            />
            <ResourceCard 
              icon={Mail}
              title="The Rundown"
              description="Daily AI updates by Rowan Cheung"
              href="https://www.therundown.ai/"
              featured
            />
            <ResourceCard 
              icon={Mail}
              title="Ben's Bites"
              description="Daily AI news digest"
              href="https://www.bensbites.com/"
            />
            <ResourceCard 
              icon={Mail}
              title="One Useful Thing"
              description="AI insights by Ethan Mollick"
              href="https://www.oneusefulthing.org/"
            />
            <ResourceCard 
              icon={Mail}
              title="Almost Timely News"
              description="Weekly AI marketing by Chris Penn"
              href="https://almosttimely.substack.com?r=xky0"
            />
            <ResourceCard 
              icon={Mail}
              title="AI Marketing School"
              description="AI marketing insights by Charlie Braithwaite"
              href="https://aimarketingschool.beehiiv.com/"
            />
            <ResourceCard 
              icon={Mail}
              title="Wonder Tools"
              description="Weekly AI tools by Jeremy Caplan"
              href="https://wondertools.substack.com/"
            />
            <ResourceCard 
              icon={Mail}
              title="The AI Valley"
              description="Daily AI news by Barsee"
              href="https://www.theaivalley.com/"
            />
            <ResourceCard 
              icon={Mail}
              title="AI Report"
              description="Weekly AI tool updates"
              href="https://aitoolreport.beehiiv.com/"
            />
            <ResourceCard 
              icon={Mail}
              title="IPG Media Lab Weekly"
              description="Weekly media and AI insights"
              href="https://ipglab.substack.com/"
            />
            <ResourceCard 
              icon={Mail}
              title="The AI Ad Economy"
              description="Newsletter by Debra Aho Williamson on AI in advertising"
              href="https://aiadeconomy.substack.com/"
            />
          </div>
        </div>
      </section>

      {/* Directories & Prompts */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <FileText className="w-8 h-8 text-red-600" />
              Directories & Prompts
            </h2>
            <p className="text-gray-600">Discover AI tools and access prompt libraries</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={FileText}
              title="Supertools by The Rundown"
              description="Curated directory of AI tools"
              href="https://www.supertools.com/"
            />
            <ResourceCard 
              icon={FileText}
              title="There's an AI for That"
              description="Comprehensive AI tool database"
              href="https://www.theresanaiforthat.com/"
            />
            <ResourceCard 
              icon={FileText}
              title="1000+ Best ChatGPT Prompts"
              description="Prompt library by Rowan Cheung"
              href="https://www.notion.so/3c26e97a23a948d499e9f1882dd2f542?pvs=21"
            />
            <ResourceCard 
              icon={FileText}
              title="Anthropic's Prompt Library"
              description="Official Claude prompt examples"
              href="https://docs.anthropic.com/en/prompt-library/library"
            />
            <ResourceCard 
              icon={FileText}
              title="Find My AI Tool"
              description="Search engine for AI tools"
              href="https://www.findmyaitool.com/"
            />
            <ResourceCard 
              icon={FileText}
              title="AITools.fyi"
              description="AI marketing tools directory"
              href="https://aitools.fyi/category/ai-marketing"
            />
            <ResourceCard 
              icon={FileText}
              title="MKT1's AI Tools"
              description="Airtable of marketing AI tools"
              href="https://airtable.com/appcRvwXdyEJR0fsT/shrCMY1xkb2fOmy7t/tblrn88uEcqUypqFX"
            />
            <ResourceCard 
              icon={FileText}
              title="ChatGPT Prompt Frameworks"
              description="Prompt frameworks by Shelly Palmer"
              href="https://shellypalmer.com/2023/11/chatgpt-prompt-frameworks/"
            />
          </div>
        </div>
      </section>

      {/* Courses & Learning */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Book className="w-8 h-8 text-red-600" />
              Courses & Learning
            </h2>
            <p className="text-gray-600">Educational resources and video content for AI marketing</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={Book}
              title="AIMG YouTube Channel"
              description="Dozens of AI marketing expert interviews"
              href="https://www.youtube.com/@aimarketersguild"
              featured
            />
            <ResourceCard 
              icon={Book}
              title="Generative AI for Brand Execs"
              description="Course by Shelly Palmer"
              href="https://courses.shellypalmer.com/metacademy-generative-ai"
            />
          </div>
        </div>
      </section>

      {/* LinkedIn Thought Leaders */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Users className="w-8 h-8 text-red-600" />
              LinkedIn Thought Leaders
            </h2>
            <p className="text-gray-600">Follow these AI marketing experts on LinkedIn</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={Users}
              title="Ethan Mollick"
              description="Wharton School professor and AI researcher"
              href="https://www.linkedin.com/in/emollick/"
            />
            <ResourceCard 
              icon={Users}
              title="Catharine Montgomery"
              description="Better Together Agency"
              href="https://www.linkedin.com/in/cnmontgomery/"
            />
            <ResourceCard 
              icon={Users}
              title="Jeremiah Owyang"
              description="Blitzscaling VC"
              href="https://www.linkedin.com/in/jowyang/"
            />
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Community & Events</h2>
            <p className="text-gray-600">Connect with AI marketing communities and attend events</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">AI Marketers Guild</h4>
                    <p className="text-purple-100 mb-4">Join 7,000+ AI-forward marketers</p>
                    <a 
                      href="https://bit.ly/AIMGinvite" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                    >
                      Join Community
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Serial Marketers</h4>
                    <p className="text-blue-100 mb-4">Connect with experienced marketers</p>
                    <a 
                      href="https://bit.ly/SMINVITE" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Join Community
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-green-700 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">AI Insiders Events</h4>
                    <p className="text-green-100 mb-4">Attend virtual events, workshops, and networking sessions on AI marketing</p>
                    <a 
                      href="https://lu.ma/aimg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                    >
                      View Events
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-600 to-red-700 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Book className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">AI Insiders Recordings</h4>
                    <p className="text-red-100 mb-4">Watch past sessions and learn from AI marketing experts and practitioners</p>
                    <a 
                      href="https://www.youtube.com/@aimarketersguild" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                    >
                      Watch Videos
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResourceCard({ icon: Icon, title, description, href, featured }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <Card className={`bg-white border ${featured ? 'border-red-600/50 shadow-lg' : 'border-gray-200'} hover:border-red-600/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full`}>
        <CardContent className="p-6">
          <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-red-600" />
          </div>
          <h3 className={`text-xl ${featured ? 'font-bold' : 'font-semibold'} text-gray-900 mb-2 group-hover:text-red-600 transition-colors`}>{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex items-center gap-2 text-red-600 font-medium text-sm">
            Visit Site
            <ExternalLink className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}