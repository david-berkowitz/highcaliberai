import React, { useState } from 'react';
import { Code, Brain, Sparkles, Zap, Calendar, Book, Lightbulb, Target, ArrowRight, Clock, Award, Users, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import MetaTags from '@/components/SEO/MetaTags';

export default function VibePage() {
  const [activeDay, setActiveDay] = useState('day1');

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      <MetaTags 
        title="Vibe Coding Workshop - Build with AI"
        description="Learn to build full applications using AI as your development partner. No traditional coding required—just creativity and conversation."
        url="https://highcaliberai.com/vibe"
        canonical="https://highcaliberai.com/vibe"
      />

      {/* Background pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(147 51 234) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-purple-200 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-xl shadow-md">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-purple-900 tracking-tight">Vibe Coding Workshop</h1>
                  <p className="text-xs text-gray-600 font-light tracking-wide">BUILD WITH AI, NO CODE REQUIRED</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <button onClick={() => scrollToSection('overview')} className="text-sm font-medium text-gray-600 hover:text-purple-900 transition-colors">Overview</button>
                <button onClick={() => scrollToSection('curriculum')} className="text-sm font-medium text-gray-600 hover:text-purple-900 transition-colors">Curriculum</button>
                <button onClick={() => scrollToSection('tools')} className="text-sm font-medium text-gray-600 hover:text-purple-900 transition-colors">Tools</button>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg rounded-full px-6 font-medium">
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
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 mb-10 px-6 py-3 rounded-full bg-white border border-purple-200 shadow-lg"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></div>
                <span className="text-sm font-medium text-purple-900 tracking-wide">Interactive Workshop</span>
                <Badge className="bg-blue-100 text-blue-700 border-0 text-xs font-semibold">Hands-On</Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-7xl md:text-8xl font-light text-purple-900 mb-8 leading-[1.05] tracking-tight"
              >
                Build Anything with
                <span className="block font-semibold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
                  AI-Powered Vibe Coding
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-700 mb-14 leading-relaxed max-w-3xl mx-auto font-light"
              >
                Learn to build full applications by talking to AI. No syntax, no barriers—just creativity, intuition, and rapid iteration. If you can describe it, you can build it.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-4 flex-wrap mb-12"
              >
                <Button 
                  onClick={() => scrollToSection('curriculum')}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-7 text-lg shadow-xl rounded-full font-medium group"
                >
                  View Curriculum
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
                {[
                  { icon: Clock, label: 'Half Day', sub: 'Workshop' },
                  { icon: Users, label: 'All Levels', sub: 'Welcome' },
                  { icon: Rocket, label: '3 Projects', sub: 'Built Live' },
                  { icon: Award, label: '100%', sub: 'Practical' }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white border border-purple-200 rounded-2xl p-7 hover:shadow-xl hover:border-purple-400 transition-all duration-300 group cursor-pointer"
                  >
                    <stat.icon className="w-11 h-11 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-semibold text-purple-900 mb-1.5">{stat.label}</div>
                    <div className="text-sm text-gray-600 font-light tracking-wide">{stat.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What is Vibe Coding */}
        <section id="overview" className="py-28 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-purple-100 border border-purple-200">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-900 tracking-wide">The Philosophy</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-purple-900 mb-5">What is <span className="font-semibold">Vibe Coding?</span></h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
                Building software by conversation with AI—where intuition meets technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white border border-purple-200 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <Brain className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Creative & Intuitive</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Follow your instincts and let AI amplify your creative vision without getting bogged down in syntax.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-purple-200 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <Zap className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Fast & Iterative</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Build rapidly, test ideas quickly, and iterate based on what feels right in the moment.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-purple-200 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <Rocket className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-purple-900 mb-3">Immediately Deployable</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Go from idea to live application in hours, not months. Ship real projects that actually work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="py-28 px-6 relative bg-white/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-purple-100 border border-purple-200">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-900 tracking-wide">Workshop Flow</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-purple-900 mb-4">Workshop <span className="font-semibold">Curriculum</span></h2>
            </div>

            <div className="space-y-6">
              <CurriculumItem 
                time="12:00 - 12:15"
                title="Welcome & Warm-up"
                description="Introductions, overview of vibe coding principles, and getting comfortable with the tools"
                color="slate"
              />
              <CurriculumItem 
                time="12:15 - 12:45"
                title="Live Demo: Building Your First App"
                description="Watch David vibe code a functional app from scratch—see the full process from idea to deployment"
                color="purple"
                badge="Core Session"
              />
              <CurriculumItem 
                time="12:45 - 1:15"
                title="Hands-On: Choose Your Challenge"
                description="Pick a project from our challenge generator and start building. David provides live guidance and feedback"
                color="blue"
                badge="Build Together"
              />
              <CurriculumItem 
                time="1:15 - 1:30"
                title="Show & Tell"
                description="Share what you've built! Celebrate everyone's creations with recognition for most creative, most useful, and best-vibed projects"
                color="green"
                badge="Demo Time"
              />
              <CurriculumItem 
                time="1:30 - 1:45"
                title="Q&A & Next Steps"
                description="Open discussion, advanced tips, and how to continue your vibe coding journey with the community"
                color="slate"
              />
            </div>
          </div>
        </section>

        {/* Tools */}
        <section id="tools" className="py-28 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-purple-100 border border-purple-200">
                <Zap className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-900 tracking-wide">Recommended Platforms</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-purple-900 mb-5">Get Started with <span className="font-semibold">Free Tools</span></h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
                AI-powered platforms to start your vibe coding journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Code className="w-7 h-7 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-900 mb-2">Base44</h3>
                      <Badge className="mb-3 text-xs">Free to start</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    The platform powering this very site! Build full-stack apps with AI assistance, instant deployment, and built-in backend features.
                  </p>
                  <a 
                    href="https://base44.pxf.io/c/5604633/2049275/25619?trafcat=base"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    Try Base44 →
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-2">Lovable</h3>
                      <Badge className="mb-3 text-xs">Free to start</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Another excellent AI-powered development platform. Build beautiful, functional apps through natural conversation with AI.
                  </p>
                  <a 
                    href="https://lovable.dev/?via=david-berkowitz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Try Lovable →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Code className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Vibe Coding?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join upcoming workshops or bring this training to your team
              </p>
              <a
                href="mailto:dberkowitz@gmail.com?subject=Vibe Coding Workshop Inquiry"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Inquire About Workshops
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

function CurriculumItem({ time, title, description, color, badge }) {
  const colorClasses = {
    slate: 'bg-white border-gray-200',
    purple: 'bg-purple-50 border-purple-200',
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
  };

  const badgeColors = {
    'Core Session': 'bg-purple-100 text-purple-900 border-0',
    'Build Together': 'bg-blue-100 text-blue-900 border-0',
    'Demo Time': 'bg-green-100 text-green-900 border-0',
  };

  return (
    <div className={`${colorClasses[color]} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer`}>
      <div className="flex flex-col md:flex-row md:items-start gap-5">
        <div className="flex-shrink-0">
          <div className="bg-white px-5 py-2.5 rounded-lg border border-purple-200 shadow-sm">
            <span className="font-medium text-purple-900 text-sm">{time}</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-medium text-purple-900 group-hover:text-purple-700 transition-colors">{title}</h3>
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