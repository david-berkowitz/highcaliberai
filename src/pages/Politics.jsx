import React, { useState } from 'react';
import { Flag, Brain, Sparkles, Users, TrendingUp, Mail, Calendar, Book, Lightbulb, Target, Zap, ArrowRight, Download, ExternalLink, Clock, Award, Gamepad2, Vote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import AIMarketingKitchen from '@/components/ice/AIMarketingKitchen';
import ActionPlanBuilder from '@/components/ice/ActionPlanBuilder';

export default function PoliticsPage() {
  const [activeDay, setActiveDay] = useState('day1');

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 relative overflow-hidden">
      {/* Patriotic background pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(29 78 216) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-blue-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-blue-600 to-red-600 p-3 rounded-xl shadow-md">
                <Flag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-blue-900 tracking-tight">AI Campaign Training</h1>
                <p className="text-xs text-gray-600 font-light tracking-wide">WIN CAMPAIGNS WITH AI</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('overview')} className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">Overview</button>
              <button onClick={() => scrollToSection('schedule')} className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">Schedule</button>
              <button onClick={() => scrollToSection('resources')} className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">Resources</button>
              <button onClick={() => scrollToSection('tools')} className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">AI Tools</button>
              <button onClick={() => scrollToSection('game')} className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">Play Game</button>
              <button onClick={() => scrollToSection('action-plan')} className="text-sm font-medium text-gray-600 hover:text-blue-900 transition-colors">Action Plan</button>
              <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white shadow-lg rounded-full px-6 font-medium">
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
            {/* Patriotic badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-white border border-blue-200 shadow-lg"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-900 tracking-wide">Two-Day Campaign Bootcamp</span>
              <Badge className="bg-red-100 text-red-700 border-0 text-xs font-semibold">Live</Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-8xl font-light text-blue-900 mb-8 leading-[1.05] tracking-tight"
            >
              Win Campaigns with
              <span className="block font-semibold bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 bg-clip-text text-transparent mt-2">
                AI-Powered Strategy
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-14 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Transform your campaign operations with AI tools for voter outreach, fundraising, messaging, and rapid response. Deploy strategies you can implement <span className="text-blue-600 font-medium">today</span>.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-4 flex-wrap mb-12"
            >
              <Button 
                onClick={() => scrollToSection('schedule')}
                className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-10 py-7 text-lg shadow-xl rounded-full font-medium group"
              >
                View Battle Plan
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('resources')}
                className="bg-white border-2 border-blue-600 hover:bg-blue-50 text-blue-900 px-10 py-7 text-lg rounded-full font-medium shadow-lg"
              >
                <Download className="mr-2 w-5 h-5" />
                Campaign Resources
              </Button>
            </motion.div>

            {/* Elegant Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {[
                { icon: Calendar, label: '2 Days', sub: 'Intensive' },
                { icon: Brain, label: '6 Sessions', sub: 'Interactive' },
                { icon: Zap, label: '3 Exercises', sub: 'Campaign-Ready' },
                { icon: Award, label: '100%', sub: 'Actionable' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white border border-blue-200 rounded-2xl p-7 hover:shadow-xl hover:border-blue-400 transition-all duration-300 group cursor-pointer"
                >
                  <stat.icon className="w-11 h-11 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-semibold text-blue-900 mb-1.5">{stat.label}</div>
                  <div className="text-sm text-gray-600 font-light tracking-wide">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-28 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-blue-100 border border-blue-200">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900 tracking-wide">What You'll Master</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-blue-900 mb-5">Campaign <span className="font-semibold">Training Overview</span></h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              From grassroots organizing to statewide races—AI strategies that win elections
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Day 1 Card */}
            <Card className="bg-white border border-blue-200 shadow-xl overflow-hidden rounded-2xl group hover:shadow-2xl hover:border-blue-400 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-blue-100 text-blue-900 px-5 py-2 rounded-xl font-semibold text-base border border-blue-200">Day 1</div>
                  <h3 className="text-2xl font-light text-blue-900">Field Tactics & <span className="font-semibold">Quick Wins</span></h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Brain, title: 'AI on the Campaign Trail', time: '60 min', desc: 'Cut through the hype—tools that work for campaigns today' },
                    { icon: Sparkles, title: 'Messaging Mastery with AI', time: '45 min', desc: 'Craft persuasive messages, rapid response, and talking points' },
                    { icon: TrendingUp, title: 'The Digital Ground Game', time: '60 min', desc: 'Voter ID, GOTV, fundraising emails, and social strategies' },
                    { icon: Zap, title: 'War Room Challenge', time: '45 min', desc: 'Respond to a breaking crisis in real-time' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 hover:border-blue-300 transition-all cursor-pointer group/item">
                      <div className="flex-shrink-0">
                        <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center border border-blue-200 group-hover/item:border-blue-400 transition-colors">
                          <item.icon className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="font-medium text-blue-900 text-[15px]">{item.title}</h4>
                          <div className="flex items-center gap-1 text-[11px] text-blue-700 font-medium bg-blue-100 px-2.5 py-1 rounded-full">
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
            <Card className="bg-gradient-to-br from-red-600 to-blue-700 border-0 shadow-xl overflow-hidden rounded-2xl group hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-white/20 backdrop-blur text-white px-5 py-2 rounded-xl font-semibold text-base border border-white/30">Day 2</div>
                  <h3 className="text-2xl font-light text-white">Scale & <span className="font-semibold">Victory</span></h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Users, title: 'Volunteer Mobilization with AI', time: '60 min', desc: 'Recruit, train, and activate volunteers at scale' },
                    { icon: Target, title: 'Microtargeting & Persuasion', time: '45 min', desc: 'Data-driven voter targeting and persuasion tactics' },
                    { icon: Book, title: 'Campaign Breakouts', time: '75 min', desc: 'Comms, Field Ops, Digital/Fundraising deep dives' },
                    { icon: Lightbulb, title: 'Your 30-Day Playbook', time: '30 min', desc: 'Build your AI-powered campaign action plan' }
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
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-blue-100 border border-blue-200">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900 tracking-wide">Full Battle Plan</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-blue-900 mb-4">Detailed <span className="font-semibold">Schedule</span></h2>
          </div>

          {/* Day Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-xl p-1.5 border border-blue-200 shadow-md">
              <button
                onClick={() => setActiveDay('day1')}
                className={`px-10 py-3.5 rounded-lg font-medium transition-all duration-300 ${
                  activeDay === 'day1' 
                    ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-900'
                }`}
              >
                Day 1
              </button>
              <button
                onClick={() => setActiveDay('day2')}
                className={`px-10 py-3.5 rounded-lg font-medium transition-all duration-300 ${
                  activeDay === 'day2' 
                    ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-900'
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
                title="Opening Rally"
                description="Why AI wins elections; what you'll master this weekend"
                color="slate"
              />
              <ScheduleItem 
                time="1:15 - 2:15"
                title="Session: AI on the Campaign Trail"
                description="Real tools working for real campaigns right now—no vendor pitches"
                color="blue"
                badge="Core Session"
              />
              <ScheduleItem 
                time="2:15 - 3:00"
                title="Exercise 1: Messaging Mastery"
                description="10 min demo (persuasion frameworks, rapid response) • 30 min hands-on in war room teams • 5 min debrief"
                color="green"
                badge="Hands-On"
              />
              <ScheduleItem 
                time="3:00 - 3:15"
                title="Break & Network"
                description="Connect with campaign operatives and strategists"
                color="slate"
              />
              <ScheduleItem 
                time="3:15 - 4:15"
                title="Session: The Digital Ground Game"
                description="AI for voter ID, GOTV, fundraising emails, social media—the full playbook"
                color="blue"
                badge="Core Session"
              />
              <ScheduleItem 
                time="4:15 - 5:00"
                title="Exercise 2: War Room Challenge"
                description="Small teams respond to breaking crisis • Draft rapid response, social posts, fundraising email • Present to group"
                color="red"
                badge="Crisis Response"
              />
            </div>
          )}

          {/* Day 2 Schedule */}
          {activeDay === 'day2' && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <ScheduleItem 
                time="1:00 - 1:15"
                title="Day 1 Debrief"
                description="Wins from yesterday? Questions before we scale up?"
                color="slate"
              />
              <ScheduleItem 
                time="1:15 - 2:00"
                title="Session: Volunteer Mobilization with AI"
                description="Recruit, train, and activate volunteers using AI-powered automation and personalization"
                color="blue"
                badge="Core Session"
              />
              <ScheduleItem 
                time="2:00 - 2:45"
                title="Session: Microtargeting & Persuasion"
                description="Data-driven voter targeting, message testing, and persuasion architecture"
                color="blue"
                badge="Core Session"
              />
              <ScheduleItem 
                time="2:45 - 3:00"
                title="Break & Network"
                description="Connect with campaign operatives and strategists"
                color="slate"
              />
              <ScheduleItem 
                time="3:00 - 4:00"
                title="Session: Campaign Ops at Scale"
                description="Building AI workflows that work under pressure—election day readiness"
                color="blue"
                badge="Core Session"
              />
              <ScheduleItem 
                time="4:00 - 4:45"
                title="Exercise 3: Department Breakouts"
                description="Small teams by role (Comms, Field, Digital) • Design AI-enhanced workflow • Define metrics for success"
                color="green"
                badge="Hands-On"
              />
              <ScheduleItem 
                time="4:45 - 5:00"
                title="Victory Rally & Next Steps"
                description="Share your playbooks • Commit to first 30 days • Join the campaign network"
                color="red"
                badge="Wrap-Up"
              />
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-28 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-blue-100 border border-blue-200">
              <Book className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900 tracking-wide">Campaign Arsenal</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-blue-900 mb-5">Training <span className="font-semibold">Resources</span></h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              Everything you need to run AI-powered campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ResourceCard 
              icon={Book}
              title="Campaign Message Guide"
              description="AI-powered frameworks for developing persuasive campaign messaging and rapid response"
              link="Download PDF"
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/c3e6c1fd9_NOGAIMarketingResource--ContentProductionChecklist.pdf"
              color="blue"
            />
            <ResourceCard 
              icon={Brain}
              title="Voter Targeting Playbook"
              description="Data-driven strategies for identifying, persuading, and turning out your base"
              link="Download PDF"
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/3115f5158_NOGAIMarketingResource--ProcessOptimization.pdf"
              color="red"
            />
            <ResourceCard 
              icon={Lightbulb}
              title="Fundraising Email Templates"
              description="Proven AI-enhanced templates for donor acquisition and major gifts"
              link="Download PDF"
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/ec0f9bb1e_NOGAIMarketingResource--LegalEthicalRisk.pdf"
              color="blue"
            />
            <ResourceCard 
              icon={Users}
              title="Volunteer Mobilization Kit"
              description="Scripts, workflows, and automation for recruiting and activating volunteers"
              link="Download PDF"
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/bb331f866_NOGAIMarketingResource--ROIandPerformanceTracking.pdf"
              color="red"
            />
            <ResourceCard 
              icon={Target}
              title="Digital Organizing Tools"
              description="Curated list of AI tools for modern campaign operations and digital organizing"
              link="Download PDF"
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/93edc06d2_NOGAIMarketingResource--TechRecommendations.pdf"
              color="blue"
            />
            <ResourceCard 
              icon={TrendingUp}
              title="Campaign Metrics Dashboard"
              description="Track voter contact, fundraising, volunteer hours, and persuasion effectiveness"
              link="Download PDF"
              href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/1069e9a5b_NOGAIMarketingResource--ToolSelection.pdf"
              color="red"
            />
          </div>

          {/* Community Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 text-center">Community & Networks</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">AI Marketers Guild</h4>
                      <p className="text-blue-100 mb-4">Join campaign operatives using AI to win elections and influence voters</p>
                      <a 
                        href="https://bit.ly/AIMGinvite" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                      >
                        Join Network
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
                      <Vote className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">High Caliber AI</h4>
                      <p className="text-red-100 mb-4">Founded by David Berkowitz—AI strategy for marketing and political campaigns</p>
                      <a 
                        href="https://highcaliberai.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                      >
                        Learn More
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Resources Section */}
      <section id="tools" className="py-28 px-6 relative bg-white/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-blue-100 border border-blue-200">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900 tracking-wide">Campaign Tech Stack</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-blue-900 mb-5">AI Tools for <span className="font-semibold">Winning Campaigns</span></h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              Platforms that help you reach voters, raise money, and win elections
            </p>
          </div>

          {/* Voter Research */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Voter Research & Intelligence
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard icon={TrendingUp} title="SparkToro" description="Audience research for targeted campaign messaging" />
              <ToolCard icon={Brain} title="NotebookLM" description="AI research assistant for opposition research and policy briefs" />
              <ToolCard icon={Target} title="Otterly AI" description="Track how AI engines surface your candidate vs opponents" />
            </div>
          </div>

          {/* Content & Messaging */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Campaign Content & Messaging
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard icon={Sparkles} title="Opus Pro" description="Turn town halls and rallies into social media clips" />
              <ToolCard icon={Users} title="ElevenLabs" description="AI voice generation for robocalls and phone banking" />
              <ToolCard icon={Sparkles} title="Ideogram" description="Rapid campaign graphic creation with perfect text" />
            </div>
          </div>

          {/* Campaign Operations */}
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Campaign Operations & Automation
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ToolCard icon={Zap} title="n8n" description="Build automated workflows for volunteer coordination" />
              <ToolCard icon={Brain} title="Happenstance AI" description="Intelligent campaign automation and workflow optimization" />
              <ToolCard icon={Target} title="Base44" description="Build custom campaign apps without code" />
            </div>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section id="game" className="py-28 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-blue-100 border border-blue-200">
              <Gamepad2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900 tracking-wide">Campaign Simulation</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-blue-900 mb-5">Test Your <span className="font-semibold">Campaign Strategy</span></h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              Can you deploy the right AI tool for each campaign challenge?
            </p>
          </div>
          
          <AIMarketingKitchen />
        </div>
      </section>

      {/* Action Plan Builder Section */}
      <section id="action-plan" className="py-28 px-6 relative bg-white/80">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-blue-100 border border-blue-200">
              <Target className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900 tracking-wide">Your Campaign Playbook</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-blue-900 mb-5">Your <span className="font-semibold">30-Day Battle Plan</span></h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
              Get a personalized AI implementation plan for your campaign role and goals
            </p>
          </div>
          
          <ActionPlanBuilder />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-blue-200 relative bg-white/80">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-red-600 p-3 rounded-xl shadow-md">
              <Flag className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-blue-900">AI Campaign Training</span>
          </div>
          <p className="text-gray-600 mb-6 text-base font-light tracking-wide">Win Campaigns with AI-Powered Strategy</p>
          <p className="text-sm text-gray-500 font-light">
            © 2026 High Caliber AI. Training the next generation of campaign operatives.
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
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-emerald-50 border-emerald-200',
    red: 'bg-red-50 border-red-200',
  };

  const badgeColors = {
    'Core Session': 'bg-blue-100 text-blue-900 border-0',
    'Hands-On': 'bg-emerald-100 text-emerald-900 border-0',
    'Crisis Response': 'bg-red-100 text-red-900 border-0',
    'Wrap-Up': 'bg-gray-100 text-gray-900 border-0',
  };

  return (
    <div className={`${colorClasses[color]} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer`}>
      <div className="flex flex-col md:flex-row md:items-start gap-5">
        <div className="flex-shrink-0">
          <div className="bg-white px-5 py-2.5 rounded-lg border border-blue-200 shadow-sm">
            <span className="font-medium text-blue-900 text-sm">{time}</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-medium text-blue-900 group-hover:text-blue-700 transition-colors">{title}</h3>
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
    blue: 'from-blue-100 to-blue-50 border-blue-200',
    red: 'from-red-100 to-red-50 border-red-200',
  };

  const iconColors = {
    blue: 'text-blue-700',
    red: 'text-red-700',
  };

  const textColors = {
    blue: 'text-blue-950',
    red: 'text-red-950',
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
          <h3 className={`text-lg font-medium ${textColors[color]} mb-2.5 group-hover:text-blue-700 transition-colors`}>{title}</h3>
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
    <Card className="bg-white border border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 rounded-xl h-full group">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm font-light">{description}</p>
      </CardContent>
    </Card>
  );
}