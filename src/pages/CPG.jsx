import React, { useState } from 'react';
import { Package, Brain, Sparkles, Users, TrendingUp, Mail, Calendar, Book, Lightbulb, Target, Zap, ArrowRight, Download, ExternalLink, Clock, Award, Gamepad2, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import AIMarketingKitchen from '@/components/ice/AIMarketingKitchen';
import ActionPlanBuilder from '@/components/ice/ActionPlanBuilder';

export default function CPGPage() {
  const [activeDay, setActiveDay] = useState('day1');

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(16 185 129) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-emerald-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-emerald-600 to-orange-600 p-3 rounded-xl shadow-md">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-emerald-900 tracking-tight">AI CPG Training</h1>
                <p className="text-xs text-gray-600 font-light tracking-wide">TRANSFORM CONSUMER BRANDS WITH AI</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('overview')} className="text-sm font-medium text-gray-600 hover:text-emerald-900 transition-colors">Overview</button>
              <button onClick={() => scrollToSection('schedule')} className="text-sm font-medium text-gray-600 hover:text-emerald-900 transition-colors">Schedule</button>

              <button onClick={() => scrollToSection('tools')} className="text-sm font-medium text-gray-600 hover:text-emerald-900 transition-colors">AI Tools</button>
              <button onClick={() => scrollToSection('game')} className="text-sm font-medium text-gray-600 hover:text-emerald-900 transition-colors">Play Game</button>
              <button onClick={() => scrollToSection('action-plan')} className="text-sm font-medium text-gray-600 hover:text-emerald-900 transition-colors">Action Plan</button>
              <Button className="bg-gradient-to-r from-emerald-600 to-orange-600 hover:from-emerald-700 hover:to-orange-700 text-white shadow-lg rounded-full px-6 font-medium">
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
            {/* AI-optimized answer box */}
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-6 mb-12 max-w-3xl mx-auto">
              <h2 className="text-xl font-bold text-emerald-900 mb-3">AI Training for CPG Brands</h2>
              <p className="text-gray-800 leading-relaxed text-left">
                This 2-day intensive bootcamp teaches consumer packaged goods marketers how to use AI for product development, launches, and retail success. You'll learn consumer insights analysis, product innovation workflows, omnichannel marketing strategies, and brand building techniques. The training includes 6 interactive sessions and 3 hands-on exercises where teams apply AI tools to real CPG challenges. Ideal for brand managers, marketing directors, and product development teams.
              </p>
            </div>

            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-white border border-emerald-200 shadow-lg"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></div>
              <span className="text-sm font-medium text-emerald-900 tracking-wide">Two-Day CPG Bootcamp</span>
              <Badge className="bg-orange-100 text-orange-700 border-0 text-xs font-semibold">Live</Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl font-light text-emerald-900 mb-8 leading-[1.05] tracking-tight"
            >
              Scale CPG Brands with
              <span className="block font-semibold bg-gradient-to-r from-emerald-600 via-orange-600 to-emerald-600 bg-clip-text text-transparent mt-2">
                AI-Powered Marketing
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-14 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Transform your consumer brand operations with AI tools for product launches, consumer insights, content creation, and omnichannel retail. Deploy strategies you can implement <span className="text-emerald-600 font-medium">today</span>.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-4 flex-wrap mb-12"
            >
              <Button 
                onClick={() => scrollToSection('schedule')}
                className="bg-gradient-to-r from-emerald-600 to-orange-600 hover:from-emerald-700 hover:to-orange-700 text-white px-10 py-7 text-lg shadow-xl rounded-full font-medium group"
              >
                View Training Plan
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {[
                { icon: Calendar, label: '2 Days', sub: 'Intensive' },
                { icon: Brain, label: '6 Sessions', sub: 'Interactive' },
                { icon: Zap, label: '3 Exercises', sub: 'Brand-Ready' },
                { icon: Award, label: '100%', sub: 'Actionable' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white border border-emerald-200 rounded-2xl p-7 hover:shadow-xl hover:border-emerald-400 transition-all duration-300 group cursor-pointer"
                >
                  <stat.icon className="w-11 h-11 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-semibold text-emerald-900 mb-1.5">{stat.label}</div>
                  <div className="text-sm text-gray-600 font-light tracking-wide">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Formats */}
      <section className="py-14 px-6 bg-gradient-to-r from-emerald-800 to-emerald-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/30">
            <Sparkles className="w-3.5 h-3.5 text-orange-300" />
            <span className="text-xs font-medium text-orange-200 tracking-wide">Modular & Flexible</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">From a One-Hour Briefing to a Two-Day Bootcamp</h2>
          <p className="text-emerald-200 text-base mb-8 max-w-2xl mx-auto">
            Training is customized to your team's size, timeline, and goals. Pick a format or mix modules—every session is built around your brand's real challenges.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { duration: "1 Hour", label: "CPG AI Landscape", desc: "What's working in AI for consumer brands right now" },
              { duration: "Half Day", label: "Insight Sprint", desc: "Consumer insights, innovation, or content production focus" },
              { duration: "Full Day", label: "Brand Activation", desc: "Multiple sessions + live product launch planning exercise" },
              { duration: "2 Days", label: "Full Bootcamp", desc: "Complete transformation: insights → launches → retail → 90-day plan" },
            ].map((f) => (
              <div key={f.duration} className="bg-white/10 backdrop-blur rounded-xl p-4 text-left border border-white/10">
                <div className="text-orange-300 font-bold text-lg mb-0.5">{f.duration}</div>
                <div className="text-white font-semibold text-sm mb-1">{f.label}</div>
                <div className="text-emerald-300 text-xs leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 max-w-3xl mx-auto text-left">
            <h3 className="text-white font-semibold mb-3 text-sm">Sample Curricula</h3>
            <div className="space-y-2">
              {[
                { title: "\"AI for CPG Today\" (1 hour)", detail: "Landscape overview of AI in consumer brands + top tools + live Q&A" },
                { title: "\"Launch Lab\" (Half day)", detail: "Consumer insights with AI · Product launch planning · Content production · Team challenge" },
                { title: "\"Full CPG Bootcamp\" (2 days)", detail: "Complete framework: insights → omnichannel → brand building → precision marketing → 90-day growth plan" },
              ].map((c) => (
                <div key={c.title} className="flex gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <Zap className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium text-sm">{c.title}</span>
                    <span className="text-emerald-300 text-sm"> — {c.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-28 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-emerald-100 border border-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-900 tracking-wide">What You'll Master</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-emerald-900 mb-5">CPG <span className="font-semibold">Training Overview</span></h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              From emerging brands to Fortune 500 CPG—AI strategies that drive shelf velocity and consumer loyalty
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Day 1 Card */}
            <Card className="bg-white border border-emerald-200 shadow-xl overflow-hidden rounded-2xl group hover:shadow-2xl hover:border-emerald-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-emerald-100 text-emerald-900 px-5 py-2 rounded-xl font-semibold text-base border border-emerald-200">Day 1</div>
                  <h3 className="text-2xl font-light text-emerald-900">Fundamentals & <span className="font-semibold">Quick Wins</span></h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Brain, title: 'AI for CPG Brands Today', time: '60 min', desc: 'Real tools transforming product development, launch, and retail execution' },
                    { icon: Sparkles, title: 'Consumer Insights & Innovation', time: '45 min', desc: 'AI-powered trend spotting, flavor innovation, and packaging optimization' },
                    { icon: TrendingUp, title: 'Omnichannel Retail Excellence', time: '60 min', desc: 'E-commerce, in-store activation, retailer partnerships, and shopper marketing' },
                    { icon: Zap, title: 'Product Launch Challenge', time: '45 min', desc: 'Design a 90-day launch plan for a new CPG product' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-emerald-50 rounded-xl border border-emerald-100 hover:bg-emerald-100 hover:border-emerald-300 transition-all cursor-pointer group/item">
                      <div className="flex-shrink-0">
                        <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center border border-emerald-200 group-hover/item:border-emerald-400 transition-colors">
                          <item.icon className="w-5 h-5 text-emerald-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="font-medium text-emerald-900 text-[15px]">{item.title}</h4>
                          <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium bg-emerald-100 px-2.5 py-1 rounded-full">
                            <Clock className="w-3 h-3" />
                            {item.time}
                          </div>
                        </div>
                        <p className="text-[13px] text-gray-600 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Day 2 Card */}
            <Card className="bg-gradient-to-br from-orange-600 to-emerald-700 border-0 shadow-xl overflow-hidden rounded-2xl group hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-white/20 backdrop-blur text-white px-5 py-2 rounded-xl font-semibold text-base border border-white/30">Day 2</div>
                  <h3 className="text-2xl font-light text-white">Scale & <span className="font-semibold">Innovation</span></h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Users, title: 'Brand Building with AI', time: '60 min', desc: 'Create compelling brand narratives, influencer programs, and UGC campaigns' },
                    { icon: Target, title: 'Precision Marketing & Personalization', time: '45 min', desc: 'Hyper-targeted ads, dynamic pricing, and loyalty program optimization' },
                    { icon: Book, title: 'Department Breakouts', time: '75 min', desc: 'Product Dev, Marketing, Retail/Ops—role-specific AI workflows' },
                    { icon: Lightbulb, title: 'Your 90-Day Growth Plan', time: '30 min', desc: 'Build your AI-powered CPG transformation roadmap' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer group/item">
                      <div className="flex-shrink-0">
                        <div className="w-11 h-11 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center border border-white/30 group-hover/item:border-white/50 transition-colors">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="font-medium text-white text-[15px]">{item.title}</h4>
                          <div className="flex items-center gap-1 text-[11px] text-white/90 font-medium bg-white/20 px-2.5 py-1 rounded-full">
                            <Clock className="w-3 h-3" />
                            {item.time}
                          </div>
                        </div>
                        <p className="text-[13px] text-white/80 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <section id="schedule" className="py-28 px-6 relative bg-white/80">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-emerald-100 border border-emerald-200">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-900 tracking-wide">Full Training Plan</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-emerald-900 mb-4">Detailed <span className="font-semibold">Schedule</span></h2>
          </div>

          {/* Day Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-xl p-1.5 border border-emerald-200 shadow-md">
              <button
                onClick={() => setActiveDay('day1')}
                className={`px-10 py-3.5 rounded-lg font-medium transition-all duration-300 ${
                  activeDay === 'day1' 
                    ? 'bg-gradient-to-r from-emerald-600 to-orange-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-emerald-900'
                }`}
              >
                Day 1
              </button>
              <button
                onClick={() => setActiveDay('day2')}
                className={`px-10 py-3.5 rounded-lg font-medium transition-all duration-300 ${
                  activeDay === 'day2' 
                    ? 'bg-gradient-to-r from-emerald-600 to-orange-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-emerald-900'
                }`}
              >
                Day 2
              </button>
            </div>
          </div>

          {/* Day 1 Schedule */}
          {activeDay === 'day1' && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <ScheduleItem 
                time="1:00 - 1:15"
                title="Welcome & Kickoff"
                description="Why AI transforms CPG brands; what you'll master this weekend"
                color="slate"
              />
              <ScheduleItem 
                time="1:15 - 2:15"
                title="Session: AI for CPG Brands Today"
                description="Real tools transforming product innovation, launches, and retail success"
                color="emerald"
                badge="Core Session"
              />
              <ScheduleItem 
                time="2:15 - 3:00"
                title="Exercise 1: Consumer Insights Deep Dive"
                description="10 min demo (trend analysis, flavor innovation) • 30 min hands-on • 5 min debrief"
                color="green"
                badge="Hands-On"
              />
              <ScheduleItem 
                time="3:00 - 3:15"
                title="Break & Network"
                description="Connect with CPG marketers and brand leaders"
                color="slate"
              />
              <ScheduleItem 
                time="3:15 - 4:15"
                title="Session: Omnichannel Retail Excellence"
                description="AI for e-commerce, in-store activation, retailer relationships—complete playbook"
                color="emerald"
                badge="Core Session"
              />
              <ScheduleItem 
                time="4:15 - 5:00"
                title="Exercise 2: Product Launch Challenge"
                description="Small teams design 90-day launch plan • Create messaging, media plan, retail strategy"
                color="orange"
                badge="Launch Planning"
              />
            </div>
          )}

          {/* Day 2 Schedule */}
          {activeDay === 'day2' && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <ScheduleItem 
                time="1:00 - 1:15"
                title="Day 1 Recap"
                description="Key insights from yesterday? Questions before we scale?"
                color="slate"
              />
              <ScheduleItem 
                time="1:15 - 2:00"
                title="Session: Brand Building with AI"
                description="Create compelling narratives, influencer campaigns, and authentic UGC at scale"
                color="emerald"
                badge="Core Session"
              />
              <ScheduleItem 
                time="2:00 - 2:45"
                title="Session: Precision Marketing & Personalization"
                description="Hyper-targeted advertising, dynamic pricing, and loyalty optimization"
                color="emerald"
                badge="Core Session"
              />
              <ScheduleItem 
                time="2:45 - 3:00"
                title="Break & Network"
                description="Connect with CPG marketers and brand leaders"
                color="slate"
              />
              <ScheduleItem 
                time="3:00 - 4:00"
                title="Session: Scaling CPG Innovation"
                description="Building AI workflows for sustainable growth and competitive advantage"
                color="emerald"
                badge="Core Session"
              />
              <ScheduleItem 
                time="4:00 - 4:45"
                title="Exercise 3: Department Breakouts"
                description="Teams by role (Product, Marketing, Retail) • Design AI workflow • Define success metrics"
                color="green"
                badge="Hands-On"
              />
              <ScheduleItem 
                time="4:45 - 5:00"
                title="Closing & Next Steps"
                description="Share your roadmaps • Commit to first 90 days • Join the CPG network"
                color="orange"
                badge="Wrap-Up"
              />
            </div>
          )}
        </div>
      </section>



      {/* Tools & Resources Section */}
      <section id="tools" className="py-28 px-6 relative bg-white/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-emerald-100 border border-emerald-200">
              <Zap className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-900 tracking-wide">CPG Tech Stack</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-emerald-900 mb-5">AI Tools for <span className="font-semibold">CPG Success</span></h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              Platforms that help you innovate products, understand consumers, and win at retail
            </p>
          </div>

          {/* Consumer Intelligence */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-emerald-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Consumer Intelligence & Insights
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard icon={TrendingUp} title="SparkToro" description="Audience research for understanding consumer behavior and preferences" />
              <ToolCard icon={Brain} title="NotebookLM" description="AI research assistant for competitive analysis and trend reports" />
              <ToolCard icon={Target} title="Otterly AI" description="Track how AI surfaces your brand vs competitors in search" />
            </div>
          </div>

          {/* Content & Branding */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-emerald-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Brand Content & Creative
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard icon={Sparkles} title="Opus Pro" description="Turn product demos and testimonials into social media content" />
              <ToolCard icon={Users} title="ElevenLabs" description="AI voice generation for product videos and brand storytelling" />
              <ToolCard icon={Sparkles} title="Ideogram" description="Rapid packaging mockups and promotional graphic creation" />
            </div>
          </div>

          {/* Operations & Automation */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Marketing Operations & Automation
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard icon={Zap} title="n8n" description="Build automated workflows for retail marketing and promotions" />
              <ToolCard icon={Brain} title="Happenstance AI" description="Intelligent marketing automation and campaign optimization" />
              <ToolCard icon={Target} title="Base44" description="Build custom CPG marketing apps without code" />
            </div>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section id="game" className="py-28 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-emerald-100 border border-emerald-200">
              <Gamepad2 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-900 tracking-wide">Brand Challenge</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-emerald-900 mb-5">Test Your <span className="font-semibold">CPG Strategy</span></h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              Can you deploy the right AI tool for each CPG marketing challenge?
            </p>
          </div>
          
          <AIMarketingKitchen />
        </div>
      </section>

      {/* Action Plan Builder Section */}
      <section id="action-plan" className="py-28 px-6 relative bg-white/80">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-emerald-100 border border-emerald-200">
              <Target className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-900 tracking-wide">Your Growth Playbook</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-emerald-900 mb-5">Your <span className="font-semibold">90-Day Growth Plan</span></h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              Get a personalized AI implementation plan for your brand role and goals
            </p>
          </div>
          
          <ActionPlanBuilder />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-emerald-200 relative bg-white/80">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-emerald-600 to-orange-600 p-3 rounded-xl shadow-md">
              <Package className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-emerald-900">AI CPG Training</span>
          </div>
          <p className="text-gray-600 mb-6 text-base font-light tracking-wide">Transform Consumer Brands with AI-Powered Marketing</p>
          <p className="text-sm text-gray-500 font-light">
            © 2026 High Caliber AI. Training the next generation of CPG brand leaders.
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}

function ScheduleItem({ time, title, description, color, badge }) {
  const colorClasses = {
    slate: 'bg-white border-gray-200',
    emerald: 'bg-emerald-50 border-emerald-200',
    green: 'bg-green-50 border-green-200',
    orange: 'bg-orange-50 border-orange-200',
  };

  const badgeColors = {
    'Core Session': 'bg-emerald-100 text-emerald-900 border-0',
    'Hands-On': 'bg-green-100 text-green-900 border-0',
    'Launch Planning': 'bg-orange-100 text-orange-900 border-0',
    'Wrap-Up': 'bg-gray-100 text-gray-900 border-0',
  };

  return (
    <div className={`${colorClasses[color]} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer`}>
      <div className="flex flex-col md:flex-row md:items-start gap-5">
        <div className="flex-shrink-0">
          <div className="bg-white px-5 py-2.5 rounded-lg border border-emerald-200 shadow-sm">
            <span className="font-medium text-emerald-900 text-sm">{time}</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-medium text-emerald-900 group-hover:text-emerald-700 transition-colors">{title}</h3>
            {badge && (
              <Badge className={`${badgeColors[badge]} text-xs font-medium flex-shrink-0`}>
                {badge}
              </Badge>
            )}
          </div>
          <p className="text-gray-700 leading-relaxed text-[15px] font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ResourceCard({ icon: Icon, title, description, link, href, color }) {
  const colorClasses = {
    emerald: 'from-emerald-100 to-emerald-50 border-emerald-200',
    orange: 'from-orange-100 to-orange-50 border-orange-200',
  };

  const iconColors = {
    emerald: 'text-emerald-700',
    orange: 'text-orange-700',
  };

  const textColors = {
    emerald: 'text-emerald-950',
    orange: 'text-orange-950',
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
          <h3 className={`text-lg font-medium ${textColors[color]} mb-2.5 group-hover:text-emerald-700 transition-colors`}>{title}</h3>
          <p className="text-gray-700 mb-5 leading-relaxed text-[13px] font-light">{description}</p>
          <div className={`flex items-center gap-2 ${textColors[color]} font-medium text-sm group-hover:gap-3 transition-all`}>
            {link}
            <Download className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

function ToolCard({ icon: Icon, title, description }) {
  return (
    <Card className="bg-white border border-emerald-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 rounded-xl h-full group">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <h3 className="text-xl font-semibold text-emerald-900 mb-2 group-hover:text-emerald-700 transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm font-light">{description}</p>
      </CardContent>
    </Card>
  );
}