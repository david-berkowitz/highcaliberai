import React, { useState } from 'react';
import { Brain, Sparkles, Users, TrendingUp, Mail, Book, Lightbulb, Target, Zap, ArrowRight, Download, ExternalLink, Award, Gamepad2, Diamond } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import AIMarketingKitchen from '@/components/ice/AIMarketingKitchen';
import LuxuryActionPlanBuilder from '@/components/ice/LuxuryActionPlanBuilder';

export default function LuxuryOutlookPage() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md border-b border-[#D4AF37]/20 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Diamond className="w-8 h-8 text-[#D4AF37]" />
              <div>
                <h1 className="text-xl font-light text-white tracking-widest">LUXURY OUTLOOK SUMMIT</h1>
                <p className="text-xs text-[#D4AF37] font-light tracking-[0.3em]">2026</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('resources')} className="text-sm font-light text-white/80 hover:text-[#D4AF37] transition-colors tracking-wide">RESOURCES</button>
              <button onClick={() => scrollToSection('tools')} className="text-sm font-light text-white/80 hover:text-[#D4AF37] transition-colors tracking-wide">AI TOOLS</button>
              <button onClick={() => scrollToSection('game')} className="text-sm font-light text-white/80 hover:text-[#D4AF37] transition-colors tracking-wide">EXPERIENCE</button>
              <button onClick={() => scrollToSection('action-plan')} className="text-sm font-light text-white/80 hover:text-[#D4AF37] transition-colors tracking-wide">ACTION PLAN</button>
              <a href="/luxuryrealestate" className="text-sm font-light text-white/80 hover:text-[#D4AF37] transition-colors tracking-wide">DEMO</a>
              <Button className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-black shadow-lg rounded-none px-8 font-light tracking-widest">
                CONNECT
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto relative">
            {/* Elegant badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-4 mb-12 px-8 py-4 rounded-none bg-white/5 border border-[#D4AF37]/30 shadow-2xl backdrop-blur-sm"
            >
              <Diamond className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm font-light text-white tracking-[0.2em]">JANUARY 15, 2026 • NEW YORK CITY</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extralight text-white mb-8 leading-[1.15] tracking-tight"
            >
              AI in Marketing:
              <span className="block font-light text-[#D4AF37] mt-4" style={{ fontFamily: 'Georgia, serif' }}>
                Deployment for Mundane-to-Complex Initiatives
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-10"
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto font-light"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Artificial intelligence, be it generative AI or agentic, will soon be the blood that courses through marketing's veins.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/70 mb-16 leading-relaxed max-w-4xl mx-auto font-light"
            >
              How can AI help marketing in its primary goal: creating awareness and desire for a product or service through targeted outreach to gain and retain customers? Discover how luxury professionals—agents, brokers, sales associates, managers, and leaders—can turn to AI for customization of content and creative, dynamic websites and apps, customer segmentation and targeting, database mining and marketing, and research and trend analysis.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex items-center justify-center gap-6 flex-wrap mb-20"
            >
              <Button 
                onClick={() => scrollToSection('resources')}
                className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-black px-12 py-7 text-base rounded-none font-light tracking-widest group"
              >
                <Download className="mr-2 w-5 h-5" />
                EXPLORE RESOURCES
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('tools')}
                className="bg-white/5 border-2 border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-white px-12 py-7 text-base rounded-none font-light tracking-widest shadow-lg backdrop-blur-sm"
              >
                <Zap className="mr-2 w-5 h-5" />
                VIEW AI TOOLS
              </Button>
              <a 
                href="/luxuryrealestate"
                className="inline-flex items-center justify-center bg-white/5 border-2 border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-white px-12 py-7 text-base rounded-none font-light tracking-widest shadow-lg backdrop-blur-sm transition-all"
              >
                <Diamond className="mr-2 w-5 h-5" />
                VIEW LIVE DEMO
              </a>
            </motion.div>

            {/* Elegant Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Brain, label: 'AI-Powered', sub: 'Solutions' },
                { icon: Diamond, label: 'Luxury', sub: 'Focused' },
                { icon: Award, label: 'Elite', sub: 'Strategies' },
                { icon: Target, label: 'Precision', sub: 'Marketing' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/5 border border-[#D4AF37]/20 rounded-none p-8 hover:shadow-2xl hover:border-[#D4AF37] hover:bg-white/10 transition-all duration-500 group cursor-pointer backdrop-blur-sm"
                >
                  <stat.icon className="w-12 h-12 text-[#D4AF37] mx-auto mb-5 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-light text-white mb-2 tracking-wide">{stat.label}</div>
                  <div className="text-xs text-white/60 font-light tracking-[0.2em] uppercase">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the Instructor Section */}
      <section className="py-32 px-6 relative bg-black/50 backdrop-blur-sm border-y border-[#D4AF37]/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-none bg-white/5 border border-[#D4AF37]/20">
              <Users className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-light text-white tracking-[0.3em]">YOUR PRESENTER</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-2">Meet <span className="font-light text-[#D4AF37]" style={{ fontFamily: 'Georgia, serif' }}>David Berkowitz</span></h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6"></div>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-none shadow-2xl overflow-hidden border border-[#D4AF37]/20 backdrop-blur-sm">
            <div className="grid md:grid-cols-5 gap-10 p-10 md:p-14">
              <div className="md:col-span-2 flex flex-col items-center md:items-start space-y-8">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6fbda0a2f6be073e07a4f/901ef6deb_introstars2copy.png"
                  alt="David Berkowitz"
                  className="w-72 h-72 rounded-none object-cover shadow-2xl border border-[#D4AF37]/30"
                />
                <a 
                  href="https://www.linkedin.com/in/dberkowitz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] text-black px-8 py-4 rounded-none font-light tracking-widest transition-all"
                >
                  <Users className="w-4 h-4" />
                  CONNECT ON LINKEDIN
                </a>
              </div>
              <div className="md:col-span-3 flex flex-col justify-center">
                <p className="text-white/90 text-lg leading-relaxed mb-6 font-light">
                  David Berkowitz is the founder of <span className="font-normal text-[#D4AF37]">High Caliber AI</span> and <a href="https://www.aimarketersguild.com" target="_blank" rel="noopener noreferrer" className="font-normal text-[#D4AF37] hover:text-[#F4D03F] underline">AI Marketers Guild</a>, and he's the author of <a href="https://usingaiformarketing.com" target="_blank" rel="noopener noreferrer" className="font-normal text-[#D4AF37] hover:text-[#F4D03F] underline">The Non-Obvious Guide to Using AI for Marketing</a> (Ideapress, 2025).
                </p>
                <p className="text-white/90 text-lg leading-relaxed mb-6 font-light">
                  A longtime marketing strategist, David has led marketing and innovation for companies including Mediaocean, Storyhunter, Sysomos, MRY (Publicis), and 360i (Dentsu). He has contributed 600+ columns to outlets like Advertising Age, MediaPost, and VentureBeat, and spoken at 400+ events worldwide.
                </p>
                <p className="text-white/90 text-lg leading-relaxed font-light">
                  He helps marketers harness AI to work smarter, stay creative, and strengthen customer connections. David lives in New York City.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-none bg-white/5 border border-[#D4AF37]/20">
              <Book className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-light text-white tracking-[0.3em]">CURATED MATERIALS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-5">Exclusive <span className="font-light text-[#D4AF37]" style={{ fontFamily: 'Georgia, serif' }}>Resources</span></h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6 mb-6"></div>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Premium tools and insights for luxury marketing excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ResourceCard 
              icon={Book}
              title="Content Production Checklist"
              description="Complete checklist for AI content production covering ownership, effectiveness, and brand safety"
              link="Download PDF"
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/c3e6c1fd9_NOGAIMarketingResource--ContentProductionChecklist.pdf"
            />
            <ResourceCard 
              icon={Brain}
              title="Legal & Ethical Risk"
              description="Comprehensive checklist ensuring AI implementations align with legal, ethical, and brand safety"
              link="Download PDF"
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/ec0f9bb1e_NOGAIMarketingResource--LegalEthicalRisk.pdf"
            />
            <ResourceCard 
              icon={Lightbulb}
              title="Process Optimization"
              description="Worksheet to assess marketing processes and identify AI optimization opportunities"
              link="Download PDF"
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/3115f5158_NOGAIMarketingResource--ProcessOptimization.pdf"
            />
            <ResourceCard 
              icon={Users}
              title="ROI & Performance Tracking"
              description="Measure effectiveness of AI implementation and assess return on investment over time"
              link="Download PDF"
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/bb331f866_NOGAIMarketingResource--ROIandPerformanceTracking.pdf"
            />
            <ResourceCard 
              icon={Target}
              title="Tech Recommendations"
              description="Curated list of recommended AI tools across categories from AI engines to SEO and writing"
              link="Download PDF"
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/93edc06d2_NOGAIMarketingResource--TechRecommendations.pdf"
            />
            <ResourceCard 
              icon={TrendingUp}
              title="Tool Selection Worksheet"
              description="Evaluate and compare AI tools based on functionality, usability, cost, and business alignment"
              link="Download PDF"
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/1069e9a5b_NOGAIMarketingResource--ToolSelection.pdf"
            />
          </div>

          {/* Presentation Slides */}
          <div className="mb-12">
            <h3 className="text-2xl font-light text-white mb-8 text-center tracking-wide">Presentation Materials</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              <Card className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 shadow-2xl hover:scale-[1.02] transition-transform duration-300 rounded-none backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D4AF37]/20 p-4 rounded-none border border-[#D4AF37]/30">
                      <Download className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-light text-white mb-2 tracking-wide">PowerPoint Slides</h4>
                      <p className="text-white/70 mb-4 font-light text-sm">Download the complete presentation deck in PowerPoint format</p>
                      <a 
                        href="https://www.dropbox.com/scl/fi/b8p4bksvlnpf6rrbrcu8z/Luxury-Roundtable-1-2026.pptx?rlkey=xcqbwwb9l6xqfnaurca3btguj&dl=1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black px-5 py-2.5 rounded-none font-light tracking-widest hover:shadow-lg transition-all text-sm"
                      >
                        DOWNLOAD PPTX
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 shadow-2xl hover:scale-[1.02] transition-transform duration-300 rounded-none backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D4AF37]/20 p-4 rounded-none border border-[#D4AF37]/30">
                      <Download className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-light text-white mb-2 tracking-wide">PDF Slides</h4>
                      <p className="text-white/70 mb-4 font-light text-sm">Download the complete presentation deck in PDF format</p>
                      <a 
                        href="https://www.dropbox.com/scl/fi/h86igf0qosdi33sv96jk8/Luxury-Roundtable-1-2026.pdf?rlkey=ep6uz674ax5nix7o3d0cmnhhj&dl=1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black px-5 py-2.5 rounded-none font-light tracking-widest hover:shadow-lg transition-all text-sm"
                      >
                        DOWNLOAD PDF
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Community Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-light text-white mb-8 text-center tracking-wide">Community & Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 shadow-2xl hover:scale-[1.02] transition-transform duration-300 rounded-none backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D4AF37]/20 p-4 rounded-none border border-[#D4AF37]/30">
                      <Users className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-light text-white mb-2 tracking-wide">AI Marketers Guild</h4>
                      <p className="text-white/70 mb-4 font-light text-sm">Join a community of AI-forward marketers sharing insights, tools, and best practices</p>
                      <a 
                        href="https://bit.ly/AIMGinvite" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black px-5 py-2.5 rounded-none font-light tracking-widest hover:shadow-lg transition-all text-sm"
                      >
                        JOIN COMMUNITY
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 shadow-2xl hover:scale-[1.02] transition-transform duration-300 rounded-none backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D4AF37]/20 p-4 rounded-none border border-[#D4AF37]/30">
                      <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-light text-white mb-2 tracking-wide">Serial Marketers</h4>
                      <p className="text-white/70 mb-4 font-light text-sm">Connect with experienced marketers and learn from real-world case studies</p>
                      <a 
                        href="https://bit.ly/SMINVITE" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black px-5 py-2.5 rounded-none font-light tracking-widest hover:shadow-lg transition-all text-sm"
                      >
                        JOIN COMMUNITY
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 shadow-2xl hover:scale-[1.02] transition-transform duration-300 rounded-none backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D4AF37]/20 p-4 rounded-none border border-[#D4AF37]/30">
                      <Brain className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-light text-white mb-2 tracking-wide">AI Insiders Recordings</h4>
                      <p className="text-white/70 mb-4 font-light text-sm">Watch past sessions and learn from AI marketing experts and practitioners</p>
                      <a 
                        href="https://www.youtube.com/@aimarketersguild" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black px-5 py-2.5 rounded-none font-light tracking-widest hover:shadow-lg transition-all text-sm"
                      >
                        WATCH VIDEOS
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 shadow-2xl hover:scale-[1.02] transition-transform duration-300 rounded-none backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#D4AF37]/20 p-4 rounded-none border border-[#D4AF37]/30">
                      <Book className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-light text-white mb-2 tracking-wide">AI Marketing Resource Guide</h4>
                      <p className="text-white/70 mb-4 font-light text-sm">Comprehensive guide with tools, prompts, and strategies for AI-powered marketing</p>
                      <a 
                        href="https://serialmarketers.notion.site/AI-Marketing-Resource-Guide-ab2dd847daf446618f14d1df8e16c6df" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black px-5 py-2.5 rounded-none font-light tracking-widest hover:shadow-lg transition-all text-sm"
                      >
                        VIEW GUIDE
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
            <Card className="bg-gradient-to-br from-[#D4AF37] to-[#C4A037] border-0 shadow-2xl rounded-none">
              <CardContent className="p-12 md:p-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-light text-black mb-3 tracking-wide">Need Assistance?</h3>
                    <p className="text-black/80 text-lg font-light leading-relaxed">
                      Our team is available to support your luxury marketing transformation.
                    </p>
                  </div>
                  <Button className="bg-black hover:bg-gray-900 text-[#D4AF37] px-12 py-6 text-base font-light shadow-xl flex-shrink-0 rounded-none tracking-widest">
                    <Mail className="mr-2 w-5 h-5" />
                    CONTACT US
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools & Resources Section */}
      <section id="tools" className="py-32 px-6 relative bg-black/50 backdrop-blur-sm border-y border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-none bg-white/5 border border-[#D4AF37]/20">
              <Zap className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-light text-white tracking-[0.3em]">PREMIUM TOOLS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-5">AI Tools <span className="font-light text-[#D4AF37]" style={{ fontFamily: 'Georgia, serif' }}>Referenced</span></h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6 mb-6"></div>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Sophisticated platforms for elevated marketing performance
            </p>
          </div>

          {/* Research & Insights */}
          <div className="mb-12">
            <h3 className="text-xl font-light text-white mb-8 flex items-center gap-3 tracking-wide">
              <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
              RESEARCH & INSIGHTS
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard title="SparkToro" description="Audience research and intelligence platform" href="https://sparktoro.com/" icon={TrendingUp} />
              <ToolCard title="Otterly AI" description="AI engine monitoring and brand tracking" href="https://otterly.ai/?via=david" icon={Target} />
              <ToolCard title="NotebookLM" description="Google's AI-powered research and note-taking assistant" href="https://notebooklm.google/" icon={Brain} />
              <ToolCard title="Passionfruit" description="AI-powered content optimization and recommendations" href="https://www.getpassionfruit.com/" icon={Book} />
              <ToolCard title="AI Search Playbook" description="AirOps guide for marketers navigating AI-powered search" href="https://www.airops.com/report/ai-search-playbook-marketers" icon={Target} />
              <ToolCard title="Rally" description="AI-powered research and consumer insights platform" href="https://askrally.com/" icon={Users} />
            </div>
          </div>

          {/* Content Creation */}
          <div className="mb-12">
            <h3 className="text-xl font-light text-white mb-8 flex items-center gap-3 tracking-wide">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              CONTENT CREATION
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard title="Opus Pro" description="AI video clipping and repurposing for social media" href="https://www.opus.pro/?via=a4312b" icon={Sparkles} />
              <ToolCard title="ElevenLabs" description="AI voice generation and text-to-speech platform" href="https://elevenlabs.io/" icon={Users} />
              <ToolCard title="Ideogram" description="Rapid AI image generation with excellent text rendering" href="https://ideogram.ai/" icon={Sparkles} />
              <ToolCard title="Napkin" description="AI-powered visual storytelling and infographic creation" href="https://www.napkin.ai/" icon={Target} />
              <ToolCard title="Jingle My Brand" description="AI-powered jingle and brand music creation" href="https://jinglemybrand.com/" icon={Users} />
              <ToolCard title="LiveAvatar" description="Live video avatars by HeyGen for real-time presentations" href="https://liveavatar.com/" icon={Users} />
              <ToolCard title="Google Labs" description="Experimental AI content generation tools from Google" href="https://labs.google/experiments" icon={Sparkles} />
            </div>
          </div>

          {/* Automation & Workflow */}
          <div className="mb-12">
            <h3 className="text-xl font-light text-white mb-8 flex items-center gap-3 tracking-wide">
              <Zap className="w-5 h-5 text-[#D4AF37]" />
              AUTOMATION & WORKFLOW
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard title="n8n" description="Workflow automation for technical teams" href="https://n8n.io/" icon={Zap} />
              <ToolCard title="Happenstance AI" description="Intelligent marketing automation and workflow optimization" href="https://happenstance.ai/invite/friend/kG7j1tmEVzwEe0tzIT8im6pw7m2" icon={Brain} />
            </div>
          </div>

          {/* Vibe Coding */}
          <div>
            <h3 className="text-xl font-light text-white mb-8 flex items-center gap-3 tracking-wide">
              <Lightbulb className="w-5 h-5 text-[#D4AF37]" />
              VIBE CODING
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard title="Base44" description="Build AI-powered apps without code" href="https://base44.pxf.io/c/5604633/2049275/25619?trafcat=base" icon={Target} />
              <ToolCard title="Lovable" description="AI-powered app development platform" href="https://lovable.dev/?via=david-berkowitz" icon={Lightbulb} />
              <ToolCard title="Claude Code" description="AI coding assistant for developers" href="https://www.anthropic.com/claude/code" icon={Brain} />
              <ToolCard title="Ghostty" description="Fast, modern terminal emulator" href="https://ghostty.org/" icon={Target} />
              <ToolCard title="Netlify" description="Modern web hosting and deployment platform" href="https://www.netlify.com/" icon={Zap} />
            </div>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section id="game" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-none bg-white/5 border border-[#D4AF37]/20">
              <Gamepad2 className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-light text-white tracking-[0.3em]">INTERACTIVE EXPERIENCE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-5">Test Your <span className="font-light text-[#D4AF37]" style={{ fontFamily: 'Georgia, serif' }}>Expertise</span></h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6 mb-6"></div>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Challenge yourself with real-world AI marketing scenarios
            </p>
          </div>
          
          <AIMarketingKitchen />
        </div>
      </section>

      {/* Action Plan Builder Section */}
      <section id="action-plan" className="py-32 px-6 relative bg-black/50 backdrop-blur-sm border-t border-[#D4AF37]/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-none bg-white/5 border border-[#D4AF37]/20">
              <Target className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs font-light text-white tracking-[0.3em]">BESPOKE STRATEGY</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-5">Your <span className="font-light text-[#D4AF37]" style={{ fontFamily: 'Georgia, serif' }}>Action Plan</span></h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6 mb-6"></div>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Receive a personalized 30-day AI implementation roadmap
            </p>
          </div>
          
          <LuxuryActionPlanBuilder />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-[#D4AF37]/20 relative bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Diamond className="w-10 h-10 text-[#D4AF37]" />
          </div>
          <p className="text-white/60 mb-6 text-base font-light tracking-[0.2em] uppercase">Luxury Outlook Summit</p>
          <p className="text-xs text-white/40 font-light tracking-wide">
            © 2026 High Caliber AI. Elevating Marketing Through Intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ResourceCard({ icon: Icon, title, description, link, href }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer rounded-none h-full backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="w-16 h-16 rounded-none bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h3 className="text-lg font-light text-white mb-3 group-hover:text-[#D4AF37] transition-colors tracking-wide">{title}</h3>
          <p className="text-white/60 mb-6 leading-relaxed text-sm font-light">{description}</p>
          <div className="flex items-center gap-2 text-[#D4AF37] font-light text-sm group-hover:gap-3 transition-all tracking-wide">
            {link}
            <Download className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

function ToolCard({ title, description, href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
      <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-2xl transition-all duration-500 rounded-none h-full backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="w-12 h-12 rounded-none bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h3 className="text-lg font-light text-white mb-2 group-hover:text-[#D4AF37] transition-colors tracking-wide">{title}</h3>
          <p className="text-white/60 text-sm font-light">{description}</p>
        </CardContent>
      </Card>
    </a>
  );
}