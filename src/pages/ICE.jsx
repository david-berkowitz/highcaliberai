import React, { useState } from 'react';
import { ChefHat, Brain, Sparkles, Users, TrendingUp, Mail, Calendar, Book, Lightbulb, Target, Zap, ArrowRight, Download, ExternalLink, Clock, Award, Lock, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import AIMarketingKitchen from '@/components/ice/AIMarketingKitchen';
import ActionPlanBuilder from '@/components/ice/ActionPlanBuilder';

export default function IcePage() {
  const [activeDay, setActiveDay] = useState('day1');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'iceai') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50/30 to-pink-50/20 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white border border-[#8B1538]/10 shadow-xl rounded-2xl">
          <CardContent className="p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-[#8B1538] to-[#6B1028] p-4 rounded-xl shadow-md">
                <Lock className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-[#8B1538] text-center mb-2">Protected Content</h2>
            <p className="text-[#8B1538]/70 text-center mb-6">Please enter the password to access the ICE Training page.</p>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`text-center ${error ? 'border-red-500' : ''}`}
              />
              {error && <p className="text-red-500 text-sm text-center">Incorrect password. Please try again.</p>}
              <Button type="submit" className="w-full bg-gradient-to-r from-[#8B1538] to-[#6B1028] hover:from-[#7B1330] hover:to-[#5B0F20] text-white">
                Access Training
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50/30 to-pink-50/20 relative overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(120 53 15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative z-10">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-[#8B1538]/10 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c6fbda0a2f6be073e07a4f/18136dc0e_image.png" 
                alt="ICE Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-semibold text-[#8B1538] tracking-tight">AI Marketing Training</h1>
                <p className="text-xs text-[#8B1538]/70 font-light tracking-wide">INSTITUTE OF CULINARY EDUCATION</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('overview')} className="text-sm font-medium text-[#8B1538]/70 hover:text-[#8B1538] transition-colors">Overview</button>
              <button onClick={() => scrollToSection('schedule')} className="text-sm font-medium text-[#8B1538]/70 hover:text-[#8B1538] transition-colors">Schedule</button>
              <button onClick={() => scrollToSection('resources')} className="text-sm font-medium text-[#8B1538]/70 hover:text-[#8B1538] transition-colors">Resources</button>
              <button onClick={() => scrollToSection('tools')} className="text-sm font-medium text-[#8B1538]/70 hover:text-[#8B1538] transition-colors">AI Tools</button>
              <button onClick={() => scrollToSection('game')} className="text-sm font-medium text-[#8B1538]/70 hover:text-[#8B1538] transition-colors">Play Game</button>
              <button onClick={() => scrollToSection('action-plan')} className="text-sm font-medium text-[#8B1538]/70 hover:text-[#8B1538] transition-colors">Action Plan</button>
              <Button className="bg-gradient-to-r from-[#8B1538] to-[#6B1028] hover:from-[#7B1330] hover:to-[#5B0F20] text-white shadow-lg shadow-[#8B1538]/20 rounded-full px-6 font-medium">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-40 pb-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto relative">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-white border border-[#8B1538]/20 shadow-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B1538] animate-pulse"></div>
              <span className="text-sm font-medium text-[#8B1538] tracking-wide">Two-Day Intensive Program</span>
              <Badge className="bg-[#8B1538]/10 text-[#8B1538] border-0 text-xs font-semibold">Live</Badge>
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-7xl md:text-8xl font-light text-[#8B1538] mb-8 leading-[1.05] tracking-tight">
              Master AI for
              <span className="block font-semibold bg-gradient-to-r from-[#8B1538] via-[#A01848] to-[#8B1538] bg-clip-text text-transparent mt-2">
                Modern Marketing
              </span>
            </motion.h1>
            
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-[#8B1538]/70 mb-14 leading-relaxed max-w-3xl mx-auto font-light">
              Transform your marketing workflow with practical AI strategies. From content creation to automation, learn tools you can implement <span className="text-[#8B1538] font-medium">immediately</span>.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-4 flex-wrap mb-12">
              <Button onClick={() => scrollToSection('schedule')} className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-7 text-lg shadow-xl shadow-red-600/20 rounded-full font-medium group">
                View Full Schedule <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => scrollToSection('resources')} className="bg-white border-2 border-[#8B1538]/20 hover:bg-rose-50 text-[#8B1538] px-10 py-7 text-lg rounded-full font-medium shadow-lg">
                <Download className="mr-2 w-5 h-5" /> Resources
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-24">
              <p className="text-[#8B1538]/60 text-sm font-medium mb-4 tracking-wide">DOWNLOAD THE FULL PRESENTATION</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a href="https://drive.google.com/file/d/1aPCKc6uj39xX5ZSM51zd7q4NNvzfwK-i/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white border-2 border-[#8B1538]/20 hover:border-[#8B1538]/40 hover:bg-rose-50 text-[#8B1538] px-6 py-4 rounded-xl font-medium shadow-lg transition-all hover:scale-105">
                  <Download className="w-5 h-5" /> PDF Version
                </a>
                <a href="https://docs.google.com/presentation/d/1LPj5YWHXoQLUcLmoR-dzEgqd1JOhig4U/edit?usp=drive_link&ouid=115314704721793037922&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white border-2 border-[#8B1538]/20 hover:border-[#8B1538]/40 hover:bg-rose-50 text-[#8B1538] px-6 py-4 rounded-xl font-medium shadow-lg transition-all hover:scale-105">
                  <ExternalLink className="w-5 h-5" /> PowerPoint Version
                </a>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {[
                { icon: Calendar, label: '2 Days', sub: 'Intensive' },
                { icon: Brain, label: '6 Sessions', sub: 'Interactive' },
                { icon: Zap, label: '3 Exercises', sub: 'Hands-on' },
                { icon: Award, label: '100%', sub: 'Actionable' }
              ].map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.1 }} className="bg-white border border-[#8B1538]/10 rounded-2xl p-7 hover:shadow-xl hover:border-[#8B1538]/30 transition-all duration-300 group cursor-pointer">
                  <stat.icon className="w-11 h-11 text-[#8B1538] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-semibold text-[#8B1538] mb-1.5">{stat.label}</div>
                  <div className="text-sm text-[#8B1538]/60 font-light tracking-wide">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="py-28 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-[#8B1538]/10 border border-[#8B1538]/10">
              <Sparkles className="w-4 h-4 text-[#8B1538]" />
              <span className="text-sm font-medium text-[#8B1538] tracking-wide">What You'll Learn</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-[#8B1538] mb-5">Program <span className="font-semibold">Overview</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white border border-[#8B1538]/10 shadow-xl overflow-hidden rounded-2xl group hover:shadow-2xl hover:border-[#8B1538]/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-[#8B1538]/10 text-[#8B1538] px-5 py-2 rounded-xl font-semibold text-base border border-[#8B1538]/20">Day 1</div>
                  <h3 className="text-2xl font-light text-[#8B1538]">Core Skills & <span className="font-semibold">Quick Wins</span></h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Brain, title: 'AI Without the Hype', time: '60 min', desc: 'Tools you can use today, separating fact from fiction' },
                    { icon: Sparkles, title: 'Smarter Prompting & Creativity', time: '45 min', desc: 'Advanced techniques, chaining, personas' },
                    { icon: TrendingUp, title: 'AI Marketing Expedition', time: '60 min', desc: 'Strategies across PR, content, email & web' },
                    { icon: Zap, title: 'Mini Hackathon', time: '45 min', desc: 'The "One Task Faster" Challenge' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-rose-50/50 rounded-xl border border-[#8B1538]/5 hover:bg-rose-50 hover:border-[#8B1538]/20 transition-all">
                      <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center border border-[#8B1538]/10 shrink-0">
                        <item.icon className="w-5 h-5 text-[#8B1538]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="font-medium text-[#8B1538] text-[15px]">{item.title}</h4>
                          <div className="flex items-center gap-1 text-[11px] text-[#8B1538]/70 font-medium bg-[#8B1538]/10 px-2.5 py-1 rounded-full">
                            <Clock className="w-3 h-3" />{item.time}
                          </div>
                        </div>
                        <p className="text-[13px] text-[#8B1538]/60 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#8B1538] to-[#6B1028] border-0 shadow-xl overflow-hidden rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-white/20 text-white px-5 py-2 rounded-xl font-semibold text-base border border-white/30">Day 2</div>
                  <h3 className="text-2xl font-light text-white">Adoption & <span className="font-semibold">Application</span></h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Users, title: 'AI + Change Management', time: '60 min', desc: 'Overcoming objections, building culture' },
                    { icon: Target, title: 'Workflow Mapping', time: '45 min', desc: 'Design AI-enhanced workflows for your team' },
                    { icon: Book, title: 'Team Modules (Breakouts)', time: '75 min', desc: 'PR, Content/Social, Email/Web deep dives' },
                    { icon: Lightbulb, title: 'Action Plan & Share-Out', time: '30 min', desc: 'AI Agents & future of marketing' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                      <div className="w-11 h-11 rounded-lg bg-white/20 flex items-center justify-center border border-white/30 shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="font-medium text-white text-[15px]">{item.title}</h4>
                          <div className="flex items-center gap-1 text-[11px] text-white/90 font-medium bg-white/20 px-2.5 py-1 rounded-full">
                            <Clock className="w-3 h-3" />{item.time}
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

      <section id="schedule" className="py-28 px-6 relative bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-[#8B1538]/10 border border-[#8B1538]/10">
              <Calendar className="w-4 h-4 text-[#8B1538]" />
              <span className="text-sm font-medium text-[#8B1538] tracking-wide">Full Agenda</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-[#8B1538] mb-4">Detailed <span className="font-semibold">Schedule</span></h2>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-xl p-1.5 border border-[#8B1538]/10 shadow-md">
              {['day1', 'day2'].map((day) => (
                <button key={day} onClick={() => setActiveDay(day)} className={`px-10 py-3.5 rounded-lg font-medium transition-all duration-300 ${activeDay === day ? 'bg-gradient-to-r from-[#8B1538] to-[#6B1028] text-white shadow-md' : 'text-[#8B1538]/60 hover:text-[#8B1538]'}`}>
                  {day === 'day1' ? 'Day 1' : 'Day 2'}
                </button>
              ))}
            </div>
          </div>

          {activeDay === 'day1' && (
            <div className="space-y-6">
              <ScheduleItem time="1:00 - 1:15" title="Welcome & Context" description="Why AI matters now; what to expect" color="slate" />
              <ScheduleItem time="1:15 - 2:15" title="Session: AI Without the Hype" description="Tools you can use today; separating fact from fiction" color="amber" badge="Core Session" />
              <ScheduleItem time="2:15 - 3:00" title="Exercise 1: Smarter Prompting & Creativity" description="10 min demo (personas, chaining, system instructions) • 30 min hands-on in small groups • 5 min share-out" color="green" badge="Hands-On" />
              <ScheduleItem time="3:00 - 3:15" title="Break" description="Connect with fellow participants and recharge" color="blue" />
              <ScheduleItem time="3:15 - 4:15" title="Session: The AI Marketing Expedition" description="Practical strategies for PR, Content/Social, Email/Web • Intro to Vibe Marketing/Coding, media workflows, email management" color="amber" badge="Core Session" />
              <ScheduleItem time="4:15 - 5:00" title="Exercise 2: Mini Hackathon" description="Small groups by function • PR: Respond to media request or draft press pitch • Content/Social: Create a week's worth of social posts • Email/Web: Optimize email subject line/copy OR landing page messaging" color="green" badge="Team Challenge" />
            </div>
          )}

          {activeDay === 'day2' && (
            <div className="space-y-6">
              <ScheduleItem time="1:00 - 1:15" title="Recap & Insights from Day 1" description="What stuck? What questions?" color="slate" />
              <ScheduleItem time="1:15 - 2:00" title="Session: Data, Reporting & Analytics with AI" description="How to use AI for pulling data, analyzing metrics, creating reports • GEO • Demo with Excel/Google Sheets" color="amber" badge="Core Session" />
              <ScheduleItem time="2:00 - 2:45" title="Session: Content Repurposing & Adaptation" description="Taking existing content and adapting for different formats/channels • Multichannel marketing • Tools and workflows" color="amber" badge="Core Session" />
              <ScheduleItem time="2:45 - 3:00" title="Break" description="Connect with fellow participants and recharge" color="blue" />
              <ScheduleItem time="3:00 - 4:00" title="Session: AI + Change Management" description="Overcoming objections, building collaborative culture • Integrating AI into daily work • Understanding risks and how to mitigate them" color="amber" badge="Core Session" />
              <ScheduleItem time="4:00 - 4:45" title="Exercise 3: Workflow Mapping" description="Small groups by function • Design AI-enhanced workflow for their role • Define success metrics and KPIs • Output: Documented workflow showing current state → AI-enhanced state" color="green" badge="Hands-On" />
              <ScheduleItem time="4:45 - 5:00" title="Final Share-Out & Action Plan" description="Each group shares their workflow • Discussion on AI Agents & future • Commit to first implementation" color="slate" badge="Wrap-Up" />
            </div>
          )}
        </div>
      </section>

      <section id="resources" className="py-28 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-[#8B1538]/10 border border-[#8B1538]/10">
              <Book className="w-4 h-4 text-[#8B1538]" />
              <span className="text-sm font-medium text-[#8B1538] tracking-wide">Materials & Links</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-[#8B1538] mb-5">Training <span className="font-semibold">Resources</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ResourceCard icon={Book} title="Content Production Checklist" description="Complete checklist for AI content production covering ownership, effectiveness, and brand safety" link="Download PDF" href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/c3e6c1fd9_NOGAIMarketingResource--ContentProductionChecklist.pdf" color="slate" />
            <ResourceCard icon={Brain} title="Legal & Ethical Risk" description="Comprehensive checklist ensuring AI implementations align with legal, ethical, and brand safety" link="Download PDF" href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/ec0f9bb1e_NOGAIMarketingResource--LegalEthicalRisk.pdf" color="amber" />
            <ResourceCard icon={Lightbulb} title="Process Optimization" description="Worksheet to assess marketing processes and identify AI optimization opportunities" link="Download PDF" href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/3115f5158_NOGAIMarketingResource--ProcessOptimization.pdf" color="purple" />
            <ResourceCard icon={Users} title="ROI & Performance Tracking" description="Measure effectiveness of AI implementation and assess return on investment over time" link="Download PDF" href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/bb331f866_NOGAIMarketingResource--ROIandPerformanceTracking.pdf" color="green" />
            <ResourceCard icon={Target} title="Tech Recommendations" description="Curated list of recommended AI tools across categories from AI engines to SEO and writing" link="Download PDF" href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/93edc06d2_NOGAIMarketingResource--TechRecommendations.pdf" color="blue" />
            <ResourceCard icon={TrendingUp} title="Tool Selection Worksheet" description="Evaluate and compare AI tools based on functionality, usability, cost, and business alignment" link="Download PDF" href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6921e106da4826cab8c93ace/1069e9a5b_NOGAIMarketingResource--ToolSelection.pdf" color="orange" />
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#8B1538] mb-6 text-center">Community & Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { gradient: "from-purple-600 to-purple-700", icon: Users, title: "AI Marketers Guild", desc: "Join a community of AI-forward marketers sharing insights, tools, and best practices", url: "https://bit.ly/AIMGinvite", cta: "Join Community", textColor: "text-purple-700", hoverBg: "hover:bg-purple-50" },
                { gradient: "from-blue-600 to-blue-700", icon: TrendingUp, title: "Serial Marketers", desc: "Connect with experienced marketers and learn from real-world case studies", url: "https://bit.ly/SMINVITE", cta: "Join Community", textColor: "text-blue-700", hoverBg: "hover:bg-blue-50" },
                { gradient: "from-green-600 to-green-700", icon: Calendar, title: "AIMG Events", desc: "Attend virtual events, workshops, and networking sessions on AI marketing", url: "https://lu.ma/aimg", cta: "View Events", textColor: "text-green-700", hoverBg: "hover:bg-green-50" },
                { gradient: "from-red-600 to-red-700", icon: Brain, title: "AI Insiders Recordings", desc: "Watch past sessions and learn from AI marketing experts and practitioners", url: "https://www.youtube.com/@aimarketersguild", cta: "Watch Videos", textColor: "text-red-700", hoverBg: "hover:bg-red-50" },
                { gradient: "from-amber-600 to-amber-700", icon: Book, title: "AI Marketing Resource Guide", desc: "Comprehensive guide with tools, prompts, and strategies for AI-powered marketing", url: "https://serialmarketers.notion.site/AI-Marketing-Resource-Guide-ab2dd847daf446618f14d1df8e16c6df", cta: "View Guide", textColor: "text-amber-700", hoverBg: "hover:bg-amber-50" },
              ].map((item) => (
                <Card key={item.title} className={`bg-gradient-to-br ${item.gradient} border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-white/20 p-3 rounded-xl"><item.icon className="w-8 h-8 text-white" /></div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-white/90 mb-4 text-sm">{item.desc}</p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 bg-white ${item.textColor} px-4 py-2 rounded-lg font-semibold ${item.hoverBg} transition-colors text-sm`}>
                          {item.cta} <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-[#8B1538] to-[#6B1028] border-0 shadow-xl rounded-2xl">
            <CardContent className="p-10 md:p-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-light text-white mb-3">Need Help or <span className="font-semibold">Have Questions?</span></h3>
                  <p className="text-white/90 text-lg font-light">Our team is here to support you before, during, and after the training.</p>
                </div>
                <Button className="bg-white hover:bg-rose-50 text-[#8B1538] px-10 py-6 text-base font-medium shadow-xl flex-shrink-0 rounded-full">
                  <Mail className="mr-2 w-5 h-5" /> Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="tools" className="py-28 px-6 relative bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-[#8B1538]/10 border border-[#8B1538]/10">
              <Zap className="w-4 h-4 text-[#8B1538]" />
              <span className="text-sm font-medium text-[#8B1538] tracking-wide">Recommended Tools</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-[#8B1538] mb-5">AI Tools <span className="font-semibold">Referenced</span></h2>
          </div>

          {[
            { label: "Research & Insights", icon: TrendingUp, tools: [
              { name: "SparkToro", desc: "Audience research and intelligence platform", url: "https://sparktoro.com/", icon: TrendingUp },
              { name: "Otterly AI", desc: "AI engine monitoring and brand tracking", url: "https://otterly.ai/?via=david", icon: Target },
              { name: "NotebookLM", desc: "Google's AI-powered research and note-taking assistant", url: "https://notebooklm.google/", icon: Brain },
              { name: "Passionfruit", desc: "AI-powered content optimization and recommendations", url: "https://www.getpassionfruit.com/", icon: Book },
              { name: "AI Search Playbook", desc: "AirOps guide for marketers navigating AI-powered search", url: "https://www.airops.com/report/ai-search-playbook-marketers", icon: Target },
              { name: "Rally", desc: "AI-powered research and consumer insights platform", url: "https://askrally.com/", icon: Users },
            ]},
            { label: "Content Creation", icon: Sparkles, tools: [
              { name: "Opus Pro", desc: "AI video clipping and repurposing for social media", url: "https://www.opus.pro/?via=a4312b", icon: Sparkles },
              { name: "ElevenLabs", desc: "AI voice generation and text-to-speech platform", url: "https://elevenlabs.io/", icon: Users },
              { name: "AdGreetz", desc: "AI-powered personalized video ad creation at scale", url: "https://www.adgreetz.com/", icon: Sparkles },
              { name: "Ideogram", desc: "Rapid AI image generation with excellent text rendering", url: "https://ideogram.ai/", icon: Sparkles },
              { name: "Jingle My Brand", desc: "AI-powered jingle and brand music creation", url: "https://jinglemybrand.com/", icon: Users },
            ]},
            { label: "Automation & Workflow", icon: Zap, tools: [
              { name: "n8n", desc: "Workflow automation for technical teams", url: "https://n8n.io/", icon: Zap },
              { name: "Happenstance AI", desc: "Intelligent marketing automation and workflow optimization", url: "https://happenstance.ai/invite/friend/kG7j1tmEVzwEe0tzIT8im6pw7m2", icon: Brain },
            ]},
            { label: "App Building", icon: Lightbulb, tools: [
              { name: "Base44", desc: "Build AI-powered apps without code", url: "https://base44.pxf.io/c/5604633/2049275/25619?trafcat=base", icon: Target },
              { name: "Lovable", desc: "AI-powered app development platform", url: "https://lovable.dev/?via=david-berkowitz", icon: Lightbulb },
            ]},
          ].map((cat) => (
            <div key={cat.label} className="mb-12">
              <h3 className="text-xl font-semibold text-[#8B1538] mb-6 flex items-center gap-2">
                <cat.icon className="w-5 h-5" /> {cat.label}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.tools.map((tool) => (
                  <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" className="group block">
                    <Card className="bg-white border border-[#8B1538]/10 hover:border-[#8B1538]/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-[#8B1538]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <tool.icon className="w-6 h-6 text-[#8B1538]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#8B1538] mb-2 group-hover:text-[#7B1330] transition-colors">{tool.name}</h3>
                        <p className="text-[#8B1538]/60 text-sm font-light">{tool.desc}</p>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="game" className="py-28 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-[#8B1538]/10 border border-[#8B1538]/10">
              <Gamepad2 className="w-4 h-4 text-[#8B1538]" />
              <span className="text-sm font-medium text-[#8B1538] tracking-wide">Interactive Learning</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-[#8B1538] mb-5">Test Your <span className="font-semibold">AI Skills</span></h2>
          </div>
          <AIMarketingKitchen />
        </div>
      </section>

      <section id="action-plan" className="py-28 px-6 relative bg-white/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-[#8B1538]/10 border border-[#8B1538]/10">
              <Target className="w-4 h-4 text-[#8B1538]" />
              <span className="text-sm font-medium text-[#8B1538] tracking-wide">Personalized Roadmap</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-[#8B1538] mb-5">Your <span className="font-semibold">Action Plan</span></h2>
          </div>
          <ActionPlanBuilder />
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-[#8B1538]/10 relative bg-white/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-[#8B1538] to-[#6B1028] p-3 rounded-xl shadow-md">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-[#8B1538]">Institute of Culinary Education</span>
          </div>
          <p className="text-[#8B1538]/60 mb-6 text-base font-light tracking-wide">AI Marketing Training Program</p>
          <p className="text-sm text-[#8B1538]/50 font-light">© 2025 ICE. Transforming culinary education through innovation.</p>
        </div>
      </footer>
      </div>
    </div>
  );
}

function ScheduleItem({ time, title, description, color, badge }) {
  const colorClasses = {
    slate: 'bg-white border-[#8B1538]/10',
    amber: 'bg-rose-50/50 border-[#8B1538]/20',
    green: 'bg-emerald-50/50 border-emerald-200/50',
    blue: 'bg-blue-50/50 border-blue-200/50',
  };
  const badgeColors = {
    'Core Session': 'bg-[#8B1538]/10 text-[#8B1538] border-0',
    'Hands-On': 'bg-emerald-100 text-emerald-900 border-0',
    'Team Challenge': 'bg-purple-100 text-purple-900 border-0',
    'Wrap-Up': 'bg-stone-100 text-stone-900 border-0',
  };
  return (
    <div className={`${colorClasses[color]} border rounded-xl p-6 hover:shadow-lg hover:border-[#8B1538]/30 transition-all duration-300`}>
      <div className="flex flex-col md:flex-row md:items-start gap-5">
        <div className="flex-shrink-0">
          <div className="bg-white px-5 py-2.5 rounded-lg border border-[#8B1538]/10 shadow-sm">
            <span className="font-medium text-[#8B1538] text-sm">{time}</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-medium text-[#8B1538]">{title}</h3>
            {badge && <Badge className={`${badgeColors[badge]} text-xs font-medium flex-shrink-0`}>{badge}</Badge>}
          </div>
          <p className="text-[#8B1538]/70 leading-relaxed text-[15px] font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}

function ResourceCard({ icon: Icon, title, description, link, href, color }) {
  const colorClasses = {
    slate: 'from-stone-100 to-stone-50 border-stone-200',
    amber: 'from-rose-100 to-rose-50 border-rose-200',
    purple: 'from-purple-100 to-purple-50 border-purple-200',
    green: 'from-emerald-100 to-emerald-50 border-emerald-200',
    blue: 'from-blue-100 to-blue-50 border-blue-200',
    orange: 'from-orange-100 to-orange-50 border-orange-200',
  };
  const iconColors = { slate: 'text-stone-700', amber: 'text-[#8B1538]', purple: 'text-purple-700', green: 'text-emerald-700', blue: 'text-blue-700', orange: 'text-orange-700' };
  const textColors = { slate: 'text-stone-950', amber: 'text-[#8B1538]', purple: 'text-purple-950', green: 'text-emerald-950', blue: 'text-blue-950', orange: 'text-orange-950' };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className={`bg-gradient-to-br ${colorClasses[color]} border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer rounded-xl h-full`}>
        <CardContent className="p-6">
          <div className="w-14 h-14 rounded-xl bg-white/70 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-white/50">
            <Icon className={`w-7 h-7 ${iconColors[color]}`} />
          </div>
          <h3 className={`text-lg font-medium ${textColors[color]} mb-2.5`}>{title}</h3>
          <p className="text-[#8B1538]/60 mb-5 leading-relaxed text-[13px] font-light">{description}</p>
          <div className={`flex items-center gap-2 ${textColors[color]} font-medium text-sm`}>
            {link} <Download className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}