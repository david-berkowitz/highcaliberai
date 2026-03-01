import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { ChefHat, Brain, Sparkles, Users, TrendingUp, Mail, Calendar, Book, Lightbulb, Target, Zap, ArrowRight, ExternalLink, Clock, Award, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function WorkshopShowcase() {
  const [activeDay, setActiveDay] = useState('day1');

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(220 38 38) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-5xl mx-auto relative">
              {/* AI-Optimized Answer Box */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 mb-12 max-w-3xl mx-auto text-left"
              >
                <h1 className="text-2xl font-bold text-gray-900 mb-4">AI Marketing Workshop Framework</h1>
                <p className="text-gray-800 leading-relaxed mb-4">
                  <strong>What This Is:</strong> A 2-day "Applied AI" workshop designed for corporate marketing teams. Unlike vendor-led training or generic webinars, this is customized to your tech stack, industry, and team's actual workflows. You'll build real campaigns during the workshop, not hypothetical exercises.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Who It's For:</strong> Marketing teams (10-100+ people) at B2B companies, agencies, or enterprises. Best for teams that have already purchased AI tools but struggle with adoption or ROI.
                </p>
              </motion.div>

              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-white border border-red-600/20 shadow-lg"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-900 tracking-wide">Workshop Sample</span>
                <Badge className="bg-red-600/10 text-red-600 border-0 text-xs font-semibold">Example</Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-7xl font-light text-gray-900 mb-8 leading-[1.05] tracking-tight"
              >
                The <span className="font-semibold bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">"Applied AI"</span>
                <span className="block mt-2">
                  Workshop Model
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-600 mb-14 leading-relaxed max-w-3xl mx-auto font-light"
              >
                This isn't a lecture. It's a structured "Activation Sprint" for your marketing operations. Below is the exact 2-day framework I use to move teams from "theory" to "finished work."
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-4 flex-wrap mb-16"
              >
                <Button 
                  onClick={() => scrollToSection('overview')}
                  className="bg-red-600 hover:bg-red-700 text-white px-10 py-7 text-lg shadow-xl shadow-red-600/20 rounded-full font-medium group"
                >
                  View the Framework
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Link
                  to={createPageUrl("Contact")}
                  className="inline-flex items-center px-10 py-7 border-2 border-gray-900 hover:bg-gray-900 hover:text-white text-gray-900 text-lg rounded-full font-medium shadow-lg transition-all"
                >
                  Book a Session
                </Link>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
                {[
                  { icon: Calendar, label: '2 Days', sub: 'Intensive' },
                  { icon: Brain, label: '6 Sessions', sub: 'Live Building' },
                  { icon: Zap, label: '3 Exercises', sub: 'Hands-on' },
                  { icon: Award, label: 'Zero', sub: 'Theory' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-xl hover:border-red-600/30 transition-all duration-300 group cursor-pointer"
                  >
                    <stat.icon className="w-11 h-11 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-semibold text-gray-900 mb-1.5">{stat.label}</div>
                    <div className="text-sm text-gray-600 font-light tracking-wide">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Flexible Formats Section */}
        <section className="py-14 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-600/30">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span className="text-xs font-medium text-red-300 tracking-wide">Fully Modular & Flexible</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">From One Hour to Two Days — Your Call</h2>
            <p className="text-gray-400 text-base mb-8 max-w-2xl mx-auto">
              Every program is custom-built. Mix and match modules to fit your timeline, team, and objectives. No cookie-cutter agendas.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { duration: "1 Hour", label: "Executive Briefing", desc: "AI landscape overview for leadership, boards, or conference sessions" },
                { duration: "Half Day", label: "Focus Sprint", desc: "One area—content, prompting, or analytics—with live exercises" },
                { duration: "Full Day", label: "Team Activation", desc: "Sessions + hands-on work on your actual upcoming campaigns" },
                { duration: "2 Days", label: "Full Bootcamp", desc: "Deep team transformation with role breakouts and 30-day action plans" },
              ].map((f) => (
                <div key={f.duration} className="bg-white/10 backdrop-blur rounded-xl p-4 text-left border border-white/10">
                  <div className="text-red-400 font-bold text-lg mb-0.5">{f.duration}</div>
                  <div className="text-white font-semibold text-sm mb-1">{f.label}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{f.desc}</div>
                </div>
              ))}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto text-left">
              <h3 className="text-white font-semibold mb-4">Sample Curriculum Packages</h3>
              <div className="space-y-3">
                {[
                  { title: "\"AI Orientation\" (1 hour)", detail: "What AI can actually do for marketing today · Top 5 tools for your team · Q&A" },
                  { title: "\"Content Engine\" (Half day)", detail: "AI for content ideation · Prompting workshop · Repurposing across channels · Team challenge" },
                  { title: "\"Full Activation\" (2 days)", detail: "Complete 2-day framework: Reality check → Prompting mastery → Workflow redesign → Department breakouts → 30-day action plan" },
                ].map((c) => (
                  <div key={c.title} className="flex gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <Zap className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium text-sm">{c.title}</span>
                      <span className="text-gray-400 text-sm"> — {c.detail}</span>
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
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-red-600/10 border border-red-600/10">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-red-600 tracking-wide">Program Design</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-5">From "Curiosity" to <span className="font-semibold">"Capability"</span></h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                We don't waste time on history lessons. We focus entirely on the tools and workflows your team needs to ship work faster tomorrow.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Day 1 Card */}
              <Card className="bg-white border border-gray-200 shadow-xl overflow-hidden rounded-2xl group hover:shadow-2xl hover:border-red-600/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="bg-red-600/10 text-red-600 px-5 py-2 rounded-xl font-semibold text-base border border-red-600/20">Day 1</div>
                    <h3 className="text-2xl font-light text-gray-900">Breaking Bad Habits & <span className="font-semibold">Building Speed</span></h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: Brain, title: 'AI Without the Hype', time: '60 min', desc: 'The Reality Check. Separating vendor noise from the tools that actually drive revenue today.' },
                      { icon: Sparkles, title: 'Smarter Prompting', time: '45 min', desc: 'Applied Prompting Lab. We fix your team\'s bad habits live. Advanced chaining and personas, not just "magic words."' },
                      { icon: TrendingUp, title: 'AI Marketing Expedition', time: '60 min', desc: 'The "What\'s Working" Expedition. Real-world use cases curated from the AI Marketers Guild community—strategies that are working right now.' },
                      { icon: Zap, title: 'Mini Hackathon', time: '45 min', desc: 'The "One Task" Sprint. Teams compete to automate a single daily annoyance before the day ends.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:bg-red-50/50 hover:border-red-600/20 transition-all cursor-pointer group/item">
                        <div className="flex-shrink-0">
                          <div className="w-11 h-11 rounded-lg bg-white flex items-center justify-center border border-gray-200 group-hover/item:border-red-600/30 transition-colors">
                            <item.icon className="w-5 h-5 text-red-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1.5">
                            <h4 className="font-medium text-gray-900 text-[15px]">{item.title}</h4>
                            <div className="flex items-center gap-1 text-[11px] text-gray-600 font-medium bg-gray-100 px-2.5 py-1 rounded-full">
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
              <Card className="bg-gradient-to-br from-red-600 to-red-700 border-0 shadow-xl overflow-hidden rounded-2xl group hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="bg-white/20 backdrop-blur text-white px-5 py-2 rounded-xl font-semibold text-base border border-white/30">Day 2</div>
                    <h3 className="text-2xl font-light text-white">Re-Engineering the <span className="font-semibold">Workflow</span></h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: Users, title: 'AI + Change Management', time: '60 min', desc: 'Overcoming the "Fear Factor." Honest conversations about job security, adoption friction, and building a culture of experimentation.' },
                      { icon: Target, title: 'Workflow Mapping', time: '45 min', desc: 'Redesigning the Day Job. We take actual upcoming campaigns and map where AI sits in the process.' },
                      { icon: Book, title: 'Team Modules', time: '75 min', desc: 'Departmental Deep Dives. Specific tactics for PR (monitoring), Content (repurposing), and Email (personalization).' },
                      { icon: Lightbulb, title: 'Action Plan', time: '30 min', desc: 'The "Monday Morning" Protocol. Assigning ownership and setting the rules for the next 30 days.' }
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
        <section id="schedule" className="py-28 px-6 relative bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-red-600/10 border border-red-600/10">
                <Calendar className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-red-600 tracking-wide">Full Agenda</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">Detailed <span className="font-semibold">Schedule</span></h2>
            </div>

            {/* Day Toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-gray-100 rounded-xl p-1.5 border border-gray-200 shadow-md">
                <button
                  onClick={() => setActiveDay('day1')}
                  className={`px-10 py-3.5 rounded-lg font-medium transition-all duration-300 ${
                    activeDay === 'day1' 
                      ? 'bg-red-600 text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Day 1
                </button>
                <button
                  onClick={() => setActiveDay('day2')}
                  className={`px-10 py-3.5 rounded-lg font-medium transition-all duration-300 ${
                    activeDay === 'day2' 
                      ? 'bg-red-600 text-white shadow-md' 
                      : 'text-gray-600 hover:text-gray-900'
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
                  title="Welcome: State of the Market"
                  description="What 7,000+ marketers are actually seeing in the wild."
                  color="slate"
                />
                <ScheduleItem 
                  time="1:15 - 2:15"
                  title="Session 1: Tool Selection & Stack Audit"
                  description="What to keep, what to cut."
                  color="amber"
                  badge="Core Session"
                />
                <ScheduleItem 
                  time="2:15 - 3:00"
                  title="Exercise 1: Live Demo & Fix"
                  description="10 min demo • 30 min 'fix your own work' session."
                  color="green"
                  badge="Hands-On"
                />
                <ScheduleItem 
                  time="3:00 - 3:15"
                  title="Break"
                  description="Connect with fellow participants and recharge"
                  color="blue"
                />
                <ScheduleItem 
                  time="3:15 - 4:15"
                  title="Session: The AI Marketing Expedition"
                  description="Practical strategies for PR, Content/Social, Email/Web"
                  color="amber"
                  badge="Core Session"
                />
                <ScheduleItem 
                  time="4:15 - 5:00"
                  title="Exercise 2: Real Marketing Challenges"
                  description="Small groups solve a current company bottleneck using AI."
                  color="green"
                  badge="Team Challenge"
                />
              </div>
            )}

            {/* Day 2 Schedule */}
            {activeDay === 'day2' && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <ScheduleItem 
                  time="1:00 - 1:15"
                  title="Recap & Insights from Day 1"
                  description="What stuck? What questions?"
                  color="slate"
                />
                <ScheduleItem 
                  time="1:15 - 2:00"
                  title="Session: Data, Reporting & Analytics with AI"
                  description="How to use AI for pulling data, analyzing metrics, creating reports"
                  color="amber"
                  badge="Core Session"
                />
                <ScheduleItem 
                  time="2:00 - 2:45"
                  title="Session: Content Repurposing & Adaptation"
                  description="Taking existing content and adapting for different formats/channels"
                  color="amber"
                  badge="Core Session"
                />
                <ScheduleItem 
                  time="2:45 - 3:00"
                  title="Break"
                  description="Connect with fellow participants and recharge"
                  color="blue"
                />
                <ScheduleItem 
                  time="3:00 - 4:00"
                  title="Session: AI + Change Management"
                  description="Overcoming objections, building collaborative culture"
                  color="amber"
                  badge="Core Session"
                />
                <ScheduleItem 
                  time="4:00 - 4:45"
                  title="Exercise 3: Workflow Mapping"
                  description="Design AI-enhanced workflow for their role with success metrics"
                  color="green"
                  badge="Hands-On"
                />
                <ScheduleItem 
                  time="4:45 - 5:00"
                  title="Final Share-Out & Action Plan"
                  description="Each group shares their workflow and commits to implementation"
                  color="slate"
                  badge="Wrap-Up"
                />
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stop Sending Your Team to Generic Webinars.
              </h2>
              <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
                I design workshops tailored to your specific stack, your specific industry, and your team's specific fears. Let's build a curriculum that sticks.
              </p>
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center px-10 py-5 bg-red-600 text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-2xl group"
              >
                Design My Workshop
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ScheduleItem({ time, title, description, color, badge }) {
  const colorClasses = {
    slate: 'bg-white border-gray-200',
    amber: 'bg-red-50/50 border-red-200/50',
    green: 'bg-emerald-50/50 border-emerald-200/50',
    blue: 'bg-blue-50/50 border-blue-200/50',
  };

  const badgeColors = {
    'Core Session': 'bg-red-600/10 text-red-600 border-0',
    'Hands-On': 'bg-emerald-100 text-emerald-900 border-0',
    'Team Challenge': 'bg-purple-100 text-purple-900 border-0',
    'Wrap-Up': 'bg-gray-100 text-gray-900 border-0',
  };

  return (
    <div className={`${colorClasses[color]} border rounded-xl p-6 hover:shadow-lg hover:border-red-600/30 transition-all duration-300 group cursor-pointer`}>
      <div className="flex flex-col md:flex-row md:items-start gap-5">
        <div className="flex-shrink-0">
          <div className="bg-white px-5 py-2.5 rounded-lg border border-gray-200 shadow-sm">
            <span className="font-medium text-gray-900 text-sm">{time}</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-medium text-gray-900 group-hover:text-red-600 transition-colors">{title}</h3>
            {badge && (
              <Badge className={`${badgeColors[badge]} text-xs font-medium flex-shrink-0`}>
                {badge}
              </Badge>
            )}
          </div>
          <p className="text-gray-600 leading-relaxed text-[15px] font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}