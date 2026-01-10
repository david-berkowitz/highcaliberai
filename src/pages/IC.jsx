import React, { useState } from 'react';
import { Brain, Sparkles, Users, TrendingUp, Mail, Book, Lightbulb, Target, Zap, ArrowRight, Download, ExternalLink, Award, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import AIMarketingKitchen from '@/components/ice/AIMarketingKitchen';
import ActionPlanBuilder from '@/components/ice/ActionPlanBuilder';

export default function IndeCollectivePage() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6fbda0a2f6be073e07a4f/1744ac08c_image.png" 
                  alt="Inde Collective Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <h1 className="text-xl font-bold text-black tracking-tight">AI Marketing Training</h1>
                  <p className="text-xs text-[#E89B1C] font-semibold tracking-widest">INDECOLLECTIVE</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <button onClick={() => scrollToSection('resources')} className="text-sm font-semibold text-gray-600 hover:text-[#E89B1C] transition-colors">Resources</button>
                <button onClick={() => scrollToSection('tools')} className="text-sm font-semibold text-gray-600 hover:text-[#E89B1C] transition-colors">AI Tools</button>
                <button onClick={() => scrollToSection('game')} className="text-sm font-semibold text-gray-600 hover:text-[#E89B1C] transition-colors">Play Game</button>
                <button onClick={() => scrollToSection('action-plan')} className="text-sm font-semibold text-gray-600 hover:text-[#E89B1C] transition-colors">Action Plan</button>
                <Button className="bg-gradient-to-r from-[#E89B1C] to-[#D88A0A] hover:from-[#D88A0A] hover:to-[#C87A00] text-white shadow-lg shadow-[#E89B1C]/20 rounded-full px-6 font-medium">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-5xl mx-auto relative">
              {/* Elegant badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-white border border-[#E89B1C]/20 shadow-lg"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#E89B1C] animate-pulse"></div>
                <span className="text-sm font-medium text-black tracking-wide">AI Marketing Excellence</span>
                <Badge className="bg-[#E89B1C]/10 text-[#E89B1C] border-0 text-xs font-semibold">Live</Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-black mb-8 leading-[1.1] tracking-tight"
              >
                The Non-Obvious Tech Stack:
                <span className="block font-bold text-[#E89B1C] mt-2">
                  High-Impact AI Tools Under $30/Month
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto"
              >
                You don't need an enterprise budget to access enterprise-grade intelligence. For fractional leaders and independent consultants, the right AI stack can be the difference between burnout and scaling effectively.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-lg text-gray-600 mb-14 leading-relaxed max-w-4xl mx-auto"
              >
                Join David Berkowitz for a fast-paced tour of the best affordable AI tools on the market. Moving beyond the basics of ChatGPT, this session will cover specific, low-cost (under $30/mo) tools you can implement immediately to streamline operations, automate marketing, and upgrade your client delivery.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-4 flex-wrap mb-12"
              >
                <Button 
                  onClick={() => scrollToSection('resources')}
                  className="bg-gradient-to-r from-[#E89B1C] to-[#D88A0A] hover:from-[#D88A0A] hover:to-[#C87A00] text-white px-10 py-7 text-lg shadow-xl shadow-[#E89B1C]/20 rounded-full font-medium group"
                >
                  <Download className="mr-2 w-5 h-5" />
                  View Resources
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('tools')}
                  className="bg-white border-2 border-[#E89B1C]/20 hover:bg-orange-50 text-black px-10 py-7 text-lg rounded-full font-medium shadow-lg"
                >
                  <Zap className="mr-2 w-5 h-5" />
                  Explore Tools
                </Button>
              </motion.div>

              {/* Presentation Downloads - Placeholder for now */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mb-24"
              >
                <p className="text-[#E89B1C]/60 text-sm font-medium mb-4 tracking-wide">SESSION MATERIALS COMING SOON</p>
              </motion.div>

              {/* Elegant Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
                {[
                  { icon: Brain, label: 'AI-Powered', sub: 'Strategies' },
                  { icon: Zap, label: 'Hands-On', sub: 'Exercises' },
                  { icon: Award, label: '100%', sub: 'Actionable' },
                  { icon: Target, label: 'Real-World', sub: 'Tools' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white border-2 border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:border-[#E89B1C] transition-all duration-300 group cursor-pointer"
                  >
                    <stat.icon className="w-11 h-11 text-[#E89B1C] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-black mb-1.5">{stat.label}</div>
                    <div className="text-sm text-gray-600 font-semibold tracking-wide">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About the Instructor Section */}
        <section className="py-28 px-6 relative bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-[#E89B1C]/10 border border-[#E89B1C]/10">
                <Users className="w-4 h-4 text-[#E89B1C]" />
                <span className="text-sm font-medium text-black tracking-wide">Your Instructor</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-5">Meet <span className="font-bold text-[#E89B1C]">David Berkowitz</span></h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">
                <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-6">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6fbda0a2f6be073e07a4f/901ef6deb_introstars2copy.png"
                    alt="David Berkowitz"
                    className="w-64 h-64 rounded-2xl object-cover shadow-lg"
                  />
                  <a 
                    href="https://www.linkedin.com/in/dberkowitz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#E89B1C] hover:bg-[#D88A0A] text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg"
                  >
                    <Users className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </div>
                <div className="md:col-span-3 flex flex-col justify-center">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    David Berkowitz is the founder of <span className="font-semibold text-[#E89B1C]">High Caliber AI</span> and <span className="font-semibold text-[#E89B1C]">AI Marketers Guild</span>, and he's the author of <span className="font-semibold text-[#E89B1C]">The Non-Obvious Guide to Using AI for Marketing</span> (Ideapress, 2025).
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    A longtime marketing strategist, David has led marketing and innovation for companies including Mediaocean, Storyhunter, Sysomos, MRY (Publicis), and 360i (Dentsu). He has contributed 600+ columns to outlets like Advertising Age, MediaPost, and VentureBeat, and spoken at 400+ events worldwide.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    He helps marketers harness AI to work smarter, stay creative, and strengthen customer connections. David lives in New York City.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-28 px-6 relative bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-[#E89B1C]/10 border border-[#E89B1C]/10">
                <Book className="w-4 h-4 text-[#E89B1C]" />
                <span className="text-sm font-medium text-black tracking-wide">Materials & Links</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-5">Training <span className="font-bold text-[#E89B1C]">Resources</span></h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Everything you need to get the most out of this training
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <ResourceCard 
                icon={Book}
                title="Content Production Checklist"
                description="Complete checklist for AI content production covering ownership, effectiveness, and brand safety"
                link="Download PDF"
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/c3e6c1fd9_NOGAIMarketingResource--ContentProductionChecklist.pdf"
                color="slate"
              />
              <ResourceCard 
                icon={Brain}
                title="Legal & Ethical Risk"
                description="Comprehensive checklist ensuring AI implementations align with legal, ethical, and brand safety"
                link="Download PDF"
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/ec0f9bb1e_NOGAIMarketingResource--LegalEthicalRisk.pdf"
                color="orange"
              />
              <ResourceCard 
                icon={Lightbulb}
                title="Process Optimization"
                description="Worksheet to assess marketing processes and identify AI optimization opportunities"
                link="Download PDF"
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/3115f5158_NOGAIMarketingResource--ProcessOptimization.pdf"
                color="purple"
              />
              <ResourceCard 
                icon={Users}
                title="ROI & Performance Tracking"
                description="Measure effectiveness of AI implementation and assess return on investment over time"
                link="Download PDF"
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/bb331f866_NOGAIMarketingResource--ROIandPerformanceTracking.pdf"
                color="green"
              />
              <ResourceCard 
                icon={Target}
                title="Tech Recommendations"
                description="Curated list of recommended AI tools across categories from AI engines to SEO and writing"
                link="Download PDF"
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/93edc06d2_NOGAIMarketingResource--TechRecommendations.pdf"
                color="orange"
              />
              <ResourceCard 
                icon={TrendingUp}
                title="Tool Selection Worksheet"
                description="Evaluate and compare AI tools based on functionality, usability, cost, and business alignment"
                link="Download PDF"
                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/1069e9a5b_NOGAIMarketingResource--ToolSelection.pdf"
                color="purple"
              />
            </div>

            {/* Community Links */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-black mb-6 text-center">Community & Resources</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">AI Marketers Guild</h4>
                        <p className="text-purple-100 mb-4">Join a community of AI-forward marketers sharing insights, tools, and best practices</p>
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
                        <p className="text-blue-100 mb-4">Connect with experienced marketers and learn from real-world case studies</p>
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

                <Card className="bg-gradient-to-br from-[#E89B1C] to-[#D88A0A] border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">AI Insiders Recordings</h4>
                        <p className="text-white/90 mb-4">Watch past sessions and learn from AI marketing experts and practitioners</p>
                        <a 
                          href="https://www.youtube.com/@aimarketersguild" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white text-[#E89B1C] px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                        >
                          Watch Videos
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-black to-gray-800 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <Book className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">AI Marketing Resource Guide</h4>
                        <p className="text-white/90 mb-4">Comprehensive guide with tools, prompts, and strategies for AI-powered marketing</p>
                        <a 
                          href="https://serialmarketers.notion.site/AI-Marketing-Resource-Guide-ab2dd847daf446618f14d1df8e16c6df" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                          View Guide
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="mt-16">
              <Card className="bg-gradient-to-br from-[#E89B1C] to-[#D88A0A] border-0 shadow-xl rounded-2xl">
                <CardContent className="p-10 md:p-14">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl font-light text-white mb-3">Need Help or <span className="font-semibold">Have Questions?</span></h3>
                      <p className="text-white/90 text-lg font-light leading-relaxed">
                        Our team is here to support you before, during, and after the training.
                      </p>
                    </div>
                    <Button className="bg-white hover:bg-orange-50 text-[#E89B1C] px-10 py-6 text-base font-medium shadow-xl flex-shrink-0 rounded-full">
                      <Mail className="mr-2 w-5 h-5" />
                      Contact Support
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tools & Resources Section */}
        <section id="tools" className="py-28 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-[#E89B1C]/10 border border-[#E89B1C]/10">
                <Zap className="w-4 h-4 text-[#E89B1C]" />
                <span className="text-sm font-medium text-black tracking-wide">Recommended Tools</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-5">AI Tools <span className="font-bold text-[#E89B1C]">Referenced</span></h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Powerful platforms that enhance your AI marketing workflow
              </p>
            </div>

            {/* Research & Insights */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Research & Insights
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="https://sparktoro.com/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">SparkToro</h3>
                      <p className="text-black/60 text-sm font-light">Audience research and intelligence platform</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://otterly.ai/?via=david" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Target className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Otterly AI</h3>
                      <p className="text-black/60 text-sm font-light">AI engine monitoring and brand tracking</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://notebooklm.google/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Brain className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">NotebookLM</h3>
                      <p className="text-black/60 text-sm font-light">Google's AI-powered research and note-taking assistant</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://www.getpassionfruit.com/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Book className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Passionfruit</h3>
                      <p className="text-black/60 text-sm font-light">AI-powered content optimization and recommendations</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://www.airops.com/report/ai-search-playbook-marketers" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Target className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">AI Search Playbook</h3>
                      <p className="text-black/60 text-sm font-light">AirOps guide for marketers navigating AI-powered search</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://askrally.com/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Rally</h3>
                      <p className="text-black/60 text-sm font-light">AI-powered research and consumer insights platform</p>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>

            {/* Content Creation */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Content Creation
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="https://www.opus.pro/?via=a4312b" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Opus Pro</h3>
                      <p className="text-black/60 text-sm font-light">AI video clipping and repurposing for social media</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://elevenlabs.io/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">ElevenLabs</h3>
                      <p className="text-black/60 text-sm font-light">AI voice generation and text-to-speech platform</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://www.adgreetz.com/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">AdGreetz</h3>
                      <p className="text-black/60 text-sm font-light">AI-powered personalized video ad creation at scale</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://ideogram.ai/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Sparkles className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Ideogram</h3>
                      <p className="text-black/60 text-sm font-light">Rapid AI image generation with excellent text rendering</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://www.napkin.ai/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Target className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Napkin</h3>
                      <p className="text-black/60 text-sm font-light">AI-powered visual storytelling and infographic creation</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://jinglemybrand.com/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Jingle My Brand</h3>
                      <p className="text-black/60 text-sm font-light">AI-powered jingle and brand music creation</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://liveavatar.com/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">LiveAvatar</h3>
                      <p className="text-black/60 text-sm font-light">Live video avatars by HeyGen for real-time presentations</p>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>

            {/* Automation & Workflow */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Automation & Workflow
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">n8n</h3>
                      <p className="text-black/60 text-sm font-light">Workflow automation for technical teams</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://happenstance.ai/invite/friend/kG7j1tmEVzwEe0tzIT8im6pw7m2" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Brain className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Happenstance AI</h3>
                      <p className="text-black/60 text-sm font-light">Intelligent marketing automation and workflow optimization</p>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>

            {/* Vibe Coding */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Vibe Coding
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="https://base44.pxf.io/c/5604633/2049275/25619?trafcat=base" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Target className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Base44</h3>
                      <p className="text-black/60 text-sm font-light">Build AI-powered apps without code</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://lovable.dev/?via=david-berkowitz" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Lightbulb className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Lovable</h3>
                      <p className="text-black/60 text-sm font-light">AI-powered app development platform</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://www.anthropic.com/claude/code" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Brain className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Claude Code</h3>
                      <p className="text-black/60 text-sm font-light">AI coding assistant for developers</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://ghostty.org/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Target className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Ghostty</h3>
                      <p className="text-black/60 text-sm font-light">Fast, modern terminal emulator</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="group block">
                  <Card className="bg-white border border-[#E89B1C]/10 hover:border-[#E89B1C]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-[#E89B1C]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-[#E89B1C]" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#D88A0A] transition-colors">Netlify</h3>
                      <p className="text-black/60 text-sm font-light">Modern web hosting and deployment platform</p>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Game Section */}
        <section id="game" className="py-28 px-6 relative bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-[#E89B1C]/10 border border-[#E89B1C]/10">
                <Gamepad2 className="w-4 h-4 text-[#E89B1C]" />
                <span className="text-sm font-medium text-black tracking-wide">Interactive Learning</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-5">Test Your <span className="font-bold text-[#E89B1C]">AI Skills</span></h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Can you pick the right AI ingredient for each marketing challenge?
              </p>
            </div>
            
            <AIMarketingKitchen />
          </div>
        </section>

        {/* Action Plan Builder Section */}
        <section id="action-plan" className="py-28 px-6 relative">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-[#E89B1C]/10 border border-[#E89B1C]/10">
                <Target className="w-4 h-4 text-[#E89B1C]" />
                <span className="text-sm font-medium text-black tracking-wide">Personalized Roadmap</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-5">Your <span className="font-bold text-[#E89B1C]">Action Plan</span></h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Get a personalized 30-day AI implementation plan tailored to your role and goals
              </p>
            </div>
            
            <ActionPlanBuilder />
          </div>
        </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-200 relative bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6fbda0a2f6be073e07a4f/1744ac08c_image.png" 
              alt="Inde Collective Logo" 
              className="h-10 w-auto"
            />
          </div>
          <p className="text-gray-600 mb-6 text-base font-semibold tracking-wide">AI Marketing Training Program</p>
          <p className="text-sm text-gray-500">
            © 2025 IndeCollective. Transforming marketing through innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ResourceCard({ icon: Icon, title, description, link, href, color }) {
  const colorClasses = {
    slate: 'from-slate-100 to-slate-50 border-slate-200',
    orange: 'from-orange-100 to-orange-50 border-orange-200',
    purple: 'from-purple-100 to-purple-50 border-purple-200',
    green: 'from-emerald-100 to-emerald-50 border-emerald-200',
  };

  const iconColors = {
    slate: 'text-slate-700',
    orange: 'text-[#E89B1C]',
    purple: 'text-purple-700',
    green: 'text-emerald-700',
  };

  const textColors = {
    slate: 'text-slate-950',
    orange: 'text-[#E89B1C]',
    purple: 'text-purple-950',
    green: 'text-emerald-950',
  };

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className={`bg-gradient-to-br ${colorClasses[color]} border ${colorClasses[color].split(' ')[2]} hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer rounded-xl h-full`}>
        <CardContent className="p-6">
          <div className={`w-14 h-14 rounded-xl bg-white/70 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-white/50`}>
            <Icon className={`w-7 h-7 ${iconColors[color]}`} />
          </div>
          <h3 className={`text-lg font-medium ${textColors[color]} mb-2.5 group-hover:text-[#D88A0A] transition-colors`}>{title}</h3>
          <p className="text-black/60 mb-5 leading-relaxed text-[13px] font-light">{description}</p>
          <div className={`flex items-center gap-2 ${textColors[color]} font-medium text-sm group-hover:gap-3 transition-all`}>
            {link}
            <Download className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}