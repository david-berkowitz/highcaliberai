import React from 'react';
import { Presentation, Users, Lightbulb, Target, Calendar, MessageSquare, TrendingUp, Zap, Award, Clock, CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import MetaTags from '@/components/SEO/MetaTags';

export default function OffsitePage() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const formats = [
    {
      icon: Presentation,
      title: "Keynote Talks",
      duration: "60-90 minutes",
      description: "Energize your team with cutting-edge AI insights and practical strategies they can use immediately.",
      ideal: "Company-wide offsites, leadership summits, annual meetings",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Lightbulb,
      title: "Marketing Hackathons",
      duration: "Half-day or full-day",
      description: "Hands-on mentorship as your team builds AI-powered campaigns, content, and strategies in real-time.",
      ideal: "Marketing teams, creative departments, product marketing",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Target,
      title: "Multi-Day Learning Series",
      duration: "2-5 days",
      description: "Deep-dive training across multiple sessions—build AI capabilities from foundation to execution.",
      ideal: "Department transformations, certification programs, skill-building",
      color: "from-emerald-600 to-emerald-700"
    },
    {
      icon: Users,
      title: "Executive Workshops",
      duration: "2-4 hours",
      description: "Strategic sessions for leadership teams on AI adoption, competitive positioning, and innovation roadmaps.",
      ideal: "C-suite, senior leadership, board meetings",
      color: "from-orange-600 to-orange-700"
    }
  ];

  const audiences = [
    {
      icon: TrendingUp,
      title: "Marketing Teams",
      topics: ["AI content production at scale", "Campaign optimization", "Marketing automation", "Data-driven personalization"],
      outcome: "Transform marketing operations with AI tools and workflows"
    },
    {
      icon: Users,
      title: "Sales Organizations",
      topics: ["AI-powered prospecting", "Personalized outreach", "Sales enablement", "Competitive intelligence"],
      outcome: "Accelerate pipeline with AI-enhanced sales processes"
    },
    {
      icon: Award,
      title: "Executive Leadership",
      topics: ["AI strategy and governance", "Competitive positioning", "Innovation roadmaps", "Change management"],
      outcome: "Lead AI transformation with confidence and clarity"
    },
    {
      icon: MessageSquare,
      title: "Customer Success",
      topics: ["AI customer insights", "Support automation", "Personalized engagement", "Retention strategies"],
      outcome: "Enhance customer experience with intelligent automation"
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: "Customized content for your industry and challenges" },
    { icon: CheckCircle, text: "Interactive exercises with immediate takeaways" },
    { icon: CheckCircle, text: "Pre-event consultation to align on goals" },
    { icon: CheckCircle, text: "Post-event resources and implementation guides" },
    { icon: CheckCircle, text: "Ongoing Slack/email support after the session" },
    { icon: CheckCircle, text: "Real-world examples from 20+ years of experience" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <MetaTags 
        title="Book David for Your Team Offsite or Onsite"
        description="Bring AI expertise to your team with keynotes, workshops, hackathons, and multi-day training series. Customized for marketing, sales, leadership, and customer success teams."
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-white border border-blue-200 shadow-sm"
            >
              <Presentation className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Team Offsites & Onsites</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-light text-slate-900 mb-6 leading-tight"
            >
              Bring <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Expertise</span> to Your Team
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              Energize your next offsite or onsite with practical AI training that transforms how your teams work. From keynotes to multi-day intensives, delivered by a proven leader in AI marketing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <Button 
                onClick={() => scrollToSection('formats')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg"
              >
                Explore Formats
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to={createPageUrl("Contact")}>
                <Button variant="outline" className="border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full">
                  <Calendar className="mr-2 w-5 h-5" />
                  Book a Call
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section id="formats" className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-blue-100 border border-blue-200">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Engagement Formats</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Choose Your <span className="font-semibold">Format</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From quick keynotes to immersive multi-day programs—tailored to your team's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {formats.map((format, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-slate-200">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${format.color} flex items-center justify-center shadow-lg`}>
                        <format.icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {format.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-slate-900">{format.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 leading-relaxed">{format.description}</p>
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <p className="text-sm font-medium text-slate-700 mb-1">Ideal for:</p>
                      <p className="text-sm text-slate-600">{format.ideal}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences Section */}
      <section id="audiences" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-purple-100 border border-purple-200">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-900">Tailored by Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Customized for <span className="font-semibold">Your Audience</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Content and exercises adapted for different roles and skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {audiences.map((audience, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-slate-200 hover:border-blue-300 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <audience.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{audience.title}</h3>
                        <p className="text-sm text-blue-600 font-medium">{audience.outcome}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700 mb-3">Sample Topics:</p>
                      <ul className="space-y-2">
                        {audience.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              What You <span className="font-semibold">Get</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              More than just a presentation—comprehensive support for lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20"
              >
                <benefit.icon className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                <p className="text-white/90 leading-relaxed">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              Trusted by <span className="font-semibold">Leading Teams</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">7,000+</div>
              <p className="text-slate-600">AI Marketers Guild Members</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">20+</div>
              <p className="text-slate-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-2">100+</div>
              <p className="text-slate-600">Speaking Engagements</p>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    "David transformed our marketing team's understanding of AI in just two days. The hackathon format was brilliant—we built actual campaigns we're now using in production. His ability to make complex concepts practical and actionable is unmatched."
                  </p>
                  <p className="text-sm font-medium text-slate-900">— CMO, Fortune 500 Consumer Brand</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Ready to <span className="font-semibold">Transform Your Team?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Let's discuss how we can customize the perfect program for your offsite or onsite event.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg rounded-full shadow-lg">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule a Consultation
              </Button>
            </Link>
            <a href="mailto:david@highcaliberai.com">
              <Button variant="outline" className="border-2 border-slate-300 hover:border-blue-600 hover:bg-blue-50 px-10 py-6 text-lg rounded-full">
                <Mail className="mr-2 w-5 h-5" />
                Email David
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}