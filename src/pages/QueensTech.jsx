import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import MetaTags from "@/components/SEO/MetaTags";
import { Card, CardContent } from "@/components/ui/card";
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
  Calendar,
  ArrowRight,
  Award,
  Rocket,
  DollarSign,
  CheckCircle,
  Briefcase,
  Newspaper,
  Zap
} from "lucide-react";
import ShareButtons from "@/components/ShareButtons";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function QueensTech() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <MetaTags 
        title="Queens Tech + Innovation Challenge - AI-Powered Startup Marketing"
        description="Keynote: AI-Powered Startup Marketing on a Bootstrap Budget at the Queens Tech + Innovation Challenge, March 31, 2026"
        url="https://highcaliberai.com/queenstech"
        canonical="https://highcaliberai.com/queenstech"
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/49ad330a9_image.png"
                alt="Queens Tech + Innovation Challenge"
                className="h-20 mx-auto mb-6"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Queens Tech + <span className="font-semibold text-blue-600">Innovation Challenge</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
              Finalists Announcement & Networking Event
            </p>
            <p className="text-2xl font-bold text-blue-600 mb-8">
              March 31, 2026
            </p>
            
            <div className="flex justify-center mb-8">
              <ShareButtons 
                url="https://highcaliberai.com/queenstech"
                title="Queens Tech + Innovation Challenge - AI-Powered Startup Marketing"
                description="Keynote on AI-Powered Startup Marketing on a Bootstrap Budget"
              />
            </div>
            
            {/* Keynote Announcement */}
            <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <Rocket className="w-16 h-16 mx-auto mb-4 text-white" />
                <h2 className="text-3xl font-bold text-white mb-3">Keynote Presentation</h2>
                <h3 className="text-2xl font-semibold text-blue-100 mb-4">
                  AI-Powered Startup Marketing on a Bootstrap Budget
                </h3>
                <p className="text-blue-100 text-lg mb-6">
                  Learn how early-stage startups can leverage AI tools to compete with bigger players—without breaking the bank
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-left">
                  {[
                    "Identify the right AI tools for your stage and budget",
                    "Build a lean content engine with AI-assisted workflows",
                    "Use AI to punch above your weight in paid and organic channels",
                    "Avoid the most common AI marketing mistakes early-stage startups make",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-200 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/60 text-xs mt-6 italic">Slides will be shared after the event</p>
              </div>
            </div>

            {/* Bio Section */}
            <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/7cdf61db4_introstars2copy.png"
                  alt="David Berkowitz"
                  className="w-20 h-20 rounded-full flex-shrink-0"
                  loading="lazy"
                />
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 mb-2">Presented by David Berkowitz</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    David is an AI marketing strategist, founder of AI Marketers Guild (7,000+ members), and author of <em>The Non-Obvious Guide to Using AI for Marketing</em>. He serves as Chief Community Officer at Marketecture Media, fractional CMO for AI-forward companies, and Executive in Residence at Progress Partners. With 400+ speaking engagements and 15+ years of experience across agencies and tech companies, David bridges the gap between AI innovation and practical marketing results.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Challenge */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About the Challenge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A program of the Queens Economic Development Corporation designed to help early-stage entrepreneurs grow their businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">$100K</h3>
                <p className="text-gray-600">in Total Prizes</p>
                <p className="text-sm text-gray-500 mt-2">Five up-to $20K grants</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">90+</h3>
                <p className="text-gray-600">Winners Since 2007</p>
                <p className="text-sm text-gray-500 mt-2">$790K in total grants</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">6,200+</h3>
                <p className="text-gray-600">Participants</p>
                <p className="text-sm text-gray-500 mt-2">Queens entrepreneurs supported</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What the Program Offers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Cash Prizes</h4>
                  <p className="text-gray-600 text-sm">One winner in each category receives up to $20,000 with no strings attached</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Book className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Online Workshops</h4>
                  <p className="text-gray-600 text-sm">Wide range of startup topics from product development to fundraising and legal issues</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Networking Events</h4>
                  <p className="text-gray-600 text-sm">Monthly in-person events to meet local entrepreneurs and learn about Queens resources</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">One-on-One Office Hours</h4>
                  <p className="text-gray-600 text-sm">Schedule meetings with program directors and advisors for personalized guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Categories */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Competition Categories</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard title="Consumer Tech" description="B2C technology products or services designed for everyday use by consumers" />
            <CategoryCard title="Enterprise Tech" description="B2B technology products or services used by businesses or organizations" />
            <CategoryCard title="Sustainability" description="Innovative solutions for a healthy planet with positive environmental impact" />
            <CategoryCard title="Community" description="Non-tech businesses delivering services in lifestyle, wellness, fashion, and e-commerce" />
            <CategoryCard title="Food-Based" description="Food/beverage businesses as wholesalers, manufacturers, or retail (Queens location required)" />
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-white" />
                <h3 className="text-3xl font-bold text-white mb-4">Join Us March 31, 2026</h3>
                <p className="text-blue-100 text-lg mb-6">
                  Finalists Announcement & Networking Event at Flushing Town Hall
                </p>
                <a 
                  href="https://www.eventbrite.com/e/queens-tech-innovation-challenge-networking-finalists-announcement-tickets-1984475968041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
                >
                  RSVP on Eventbrite
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick AI Wins for Startups */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Quick AI Wins on a Bootstrap Budget</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Tactics you can use immediately — no enterprise budget required</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Zap, tip: "Use AI to repurpose one piece of content into 10+ formats — blog, LinkedIn, email, short video script, thread" },
              { icon: Target, tip: "Let AI draft your ICP (ideal customer profile) and messaging — then refine with real customer language" },
              { icon: Brain, tip: "Run customer discovery interviews with AI-generated question sets tailored to your market" },
              { icon: TrendingUp, tip: "Use AI to analyze competitors' public content and identify positioning gaps you can own" },
              { icon: Sparkles, tip: "Generate A/B test variants for ad copy, subject lines, and CTAs in minutes, not days" },
              { icon: Lightbulb, tip: "Build a simple AI-powered FAQ chatbot for your site — reduces support load and qualifies leads" },
            ].map(({ icon: Icon, tip }, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-5 flex items-start gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-blue-50 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources for Startups */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI Marketing Resources for Startups</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore affordable AI marketing tools and strategies perfect for bootstrap budgets
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to={createPageUrl("SOS")}>
              <Card className="border-2 border-blue-200 hover:border-blue-600 hover:shadow-xl transition-all cursor-pointer h-full">
                <CardContent className="p-6">
                  <Sparkles className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Source of Sources</h3>
                  <p className="text-gray-600 text-sm mb-4">Curated AI marketing tools for SMBs on a budget</p>
                  <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">Explore Tools <ArrowRight className="w-4 h-4" /></div>
                </CardContent>
              </Card>
            </Link>

            <Link to={createPageUrl("Book")}>
              <Card className="border-2 border-blue-200 hover:border-blue-600 hover:shadow-xl transition-all cursor-pointer h-full">
                <CardContent className="p-6">
                  <Book className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Marketing Guide</h3>
                  <p className="text-gray-600 text-sm mb-4">The Non-Obvious Guide to Using AI for Marketing</p>
                  <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">Learn More <ArrowRight className="w-4 h-4" /></div>
                </CardContent>
              </Card>
            </Link>

            <Link to={createPageUrl("Blog")}>
              <Card className="border-2 border-blue-200 hover:border-blue-600 hover:shadow-xl transition-all cursor-pointer h-full">
                <CardContent className="p-6">
                  <FileText className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Marketing Blog</h3>
                  <p className="text-gray-600 text-sm mb-4">Latest insights on AI-powered marketing strategies</p>
                  <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">Read Articles <ArrowRight className="w-4 h-4" /></div>
                </CardContent>
              </Card>
            </Link>

            <Link to={createPageUrl("Hustle")}>
              <Card className="border-2 border-blue-200 hover:border-blue-600 hover:shadow-xl transition-all cursor-pointer h-full">
                <CardContent className="p-6">
                  <Newspaper className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The Marketing Hustle</h3>
                  <p className="text-gray-600 text-sm mb-4">Practical marketing insights for entrepreneurs and startup teams</p>
                  <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">Check It Out <ArrowRight className="w-4 h-4" /></div>
                </CardContent>
              </Card>
            </Link>

            <Link to={createPageUrl("Jobs")}>
              <Card className="border-2 border-blue-200 hover:border-blue-600 hover:shadow-xl transition-all cursor-pointer h-full">
                <CardContent className="p-6">
                  <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Job Resources</h3>
                  <p className="text-gray-600 text-sm mb-4">Tools, tips, and strategies for building your startup team or landing your next role</p>
                  <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">Explore Resources <ArrowRight className="w-4 h-4" /></div>
                </CardContent>
              </Card>
            </Link>

            <Link to={createPageUrl("Resources")}>
              <Card className="border-2 border-blue-200 hover:border-blue-600 hover:shadow-xl transition-all cursor-pointer h-full">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full Resource Library</h3>
                  <p className="text-gray-600 text-sm mb-4">The complete AI marketing toolkit — tools, guides, communities, and more</p>
                  <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">Browse All <ArrowRight className="w-4 h-4" /></div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Marketing Hustle + Jobs Cross-Promo */}
          <div className="mt-10 bg-gray-900 rounded-2xl p-8 grid md:grid-cols-2 gap-6">
            <Link to={createPageUrl("Hustle")} className="group">
              <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all h-full">
                <Newspaper className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">The Marketing Hustle</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">Real-world marketing strategies, founder stories, and tactical playbooks — built for people who have to do more with less.</p>
                <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Read it now <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
            <Link to={createPageUrl("Jobs")} className="group">
              <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all h-full">
                <Briefcase className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Job Resources for Marketers</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">Whether you're hiring for your startup or looking for your next move, these tools and resources help you navigate the AI-era job market.</p>
                <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Explore resources <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Mail className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
                <p className="text-blue-100">
                  Get monthly AI marketing insights and startup resources delivered to your inbox
                </p>
              </div>
              <NewsletterSignup source="queenstech" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Learn More */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Learn More About the Challenge</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://queensstartup.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Visit Official Site
              <ExternalLink className="w-5 h-5" />
            </a>
            <a 
              href="https://www.f6s.com/2026-queens-tech-innovation-challenge/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Apply to the Challenge
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ title, description }) {
  return (
    <Card className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <Target className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}