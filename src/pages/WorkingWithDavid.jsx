import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MetaTags from "@/components/SEO/MetaTags";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  Calendar, 
  CheckCircle2, 
  MessageSquare, 
  FileText, 
  Users, 
  Target,
  ArrowRight,
  Clock
} from "lucide-react";

export default function WorkingWithDavid() {
  const process = [
    {
      icon: MessageSquare,
      title: "Discovery Call",
      duration: "30 minutes",
      description: "We'll discuss your challenges, goals, and where AI can make the biggest impact on your marketing operations."
    },
    {
      icon: FileText,
      title: "Assessment & Proposal",
      duration: "3-5 days",
      description: "I'll audit your current state, identify opportunities, and present a tailored engagement plan with clear deliverables."
    },
    {
      icon: Target,
      title: "Kickoff & Alignment",
      duration: "1 week",
      description: "We'll align on objectives, KPIs, and communication cadence. I'll meet your team and establish working rhythms."
    },
    {
      icon: Users,
      title: "Ongoing Partnership",
      duration: "Monthly cadence",
      description: "Regular check-ins, strategic guidance, hands-on execution, and continuous optimization based on results."
    }
  ];

  const engagementTypes = [
    {
      title: "Fractional CMO",
      duration: "6-12 months",
      ideal: "B2B SaaS, AI companies, marketing teams of 3-15",
      includes: [
        "Strategic marketing leadership",
        "Team enablement & training",
        "AI implementation roadmap",
        "Campaign execution oversight",
        "Monthly reporting & optimization"
      ],
      cta: "Schedule Discovery Call"
    },
    {
      title: "AI Readiness Audit",
      duration: "2-4 weeks",
      ideal: "Teams exploring AI adoption",
      includes: [
        "Current state assessment",
        "Gap analysis & recommendations",
        "Tool evaluation & selection",
        "Implementation roadmap",
        "Executive presentation"
      ],
      cta: "Start Audit"
    },
    {
      title: "Team Training",
      duration: "Half-day or full-day",
      ideal: "Marketing teams of 5-50",
      includes: [
        "Customized workshop content",
        "Hands-on AI tool training",
        "Use case development",
        "Implementation frameworks",
        "Post-workshop resources"
      ],
      cta: "Book Workshop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <MetaTags 
        title="Working with David - Process & Approach"
        description="Learn how David Berkowitz partners with marketing teams to implement AI strategies, from discovery to ongoing execution."
        url="https://highcaliberai.com/working-with-david"
        canonical="https://highcaliberai.com/working-with-david"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: "Working with David" }]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              How We <span className="text-red-600">Work Together</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need strategic guidance, hands-on implementation, or team enablement, here's what to expect when working with High Caliber AI.
            </p>
          </div>

          {/* Process */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6">
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Engagement Types */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Engagement Options</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {engagementTypes.map((engagement, index) => (
                <Card key={index} className="flex flex-col">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{engagement.title}</h3>
                    <div className="text-sm text-gray-600 mb-4">{engagement.duration}</div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                      <div className="text-xs font-semibold text-blue-900 mb-1">Ideal For:</div>
                      <div className="text-sm text-blue-700">{engagement.ideal}</div>
                    </div>
                    <div className="mb-6 flex-1">
                      <div className="text-sm font-semibold text-gray-700 mb-3">Includes:</div>
                      <ul className="space-y-2">
                        {engagement.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to={createPageUrl('Contact')}>
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        {engagement.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* What to Expect */}
          <section className="mb-20">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white mb-8">What to Expect</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">My Approach</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span><strong className="text-white">Practical over theoretical:</strong> I focus on what works in production, not what looks good in a deck.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span><strong className="text-white">Embedded, not advisory:</strong> I work alongside your team, not from a distance.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                        <span><strong className="text-white">Results-driven:</strong> Every engagement has clear KPIs and measurable outcomes.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Communication</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span>Weekly or bi-weekly check-ins depending on engagement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span>Async communication via Slack or email</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                        <span>Monthly reporting and strategic recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-red-600 to-red-700 border-0">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                  Schedule a 30-minute discovery call to discuss your goals and see if we're a good fit.
                </p>
                <Link to={createPageUrl('Contact')}>
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                    Schedule Discovery Call
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </section>
        </motion.div>
      </div>
    </div>
  );
}