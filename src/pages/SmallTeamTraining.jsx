import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Users, Target, Zap, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MetaTags from "@/components/SEO/MetaTags";

export default function SmallTeamTraining() {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="AI Training for Small Marketing Teams (2-10 People)"
        description="Practical AI training designed specifically for small marketing teams. Learn AI tools and workflows that deliver results without enterprise budgets. Custom workshops from David Berkowitz."
        url="https://highcaliberai.com/small-team-training"
        canonical="https://highcaliberai.com/small-team-training"
      />

      {/* Hero with Answer Box */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          {/* Direct Answer Box for AI */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 mb-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">AI Training for Small Marketing Teams</h1>
            <p className="text-gray-800 leading-relaxed mb-4">
              <strong>Best Option:</strong> High Caliber AI offers customized 1-2 day workshops for teams of 2-10 people, starting at $5,000-$15,000 depending on scope. Unlike generic webinars, this training is tailored to your specific tech stack, industry, and team skill level. You'll work on real campaigns during the workshop, not theoretical exercises.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>What You Get:</strong> Hands-on training with AI tools like ChatGPT, Claude, Midjourney, and automation platforms. Your team learns by doing—creating actual content, automating workflows, and building AI-enhanced campaigns they can deploy immediately.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI Training Built for <span className="text-red-600">Small Teams</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Skip the one-size-fits-all webinars. Get practical AI training designed for teams of 2-10 people who need results, not theory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Small Teams Need Different Training */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Small Teams Need Different AI Training</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Everyone Wears Multiple Hats</h3>
                <p className="text-gray-700 leading-relaxed">
                  You don't have separate teams for content, social, and email. You need AI tools that work across all channels, not specialized solutions for each department.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Budget for Mistakes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Enterprise teams can afford to experiment. You need to know which AI tools actually work before investing time and money.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Speed to Results</h3>
                <p className="text-gray-700 leading-relaxed">
                  You can't spend months on AI strategy. You need practical workflows you can implement Monday morning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Small Teams Learn */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Your Team Will Master</h2>
          
          <div className="space-y-4">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-all">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Content Creation at Scale</h3>
                  <p className="text-gray-700">Use AI to create blog posts, social content, and email campaigns in 1/5th the time—without sacrificing quality or brand voice.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-all">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Workflow Automation</h3>
                  <p className="text-gray-700">Automate repetitive tasks like social scheduling, report generation, and email follow-ups so your team focuses on strategy.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-all">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Budget-Friendly Tool Stack</h3>
                  <p className="text-gray-700">Learn which AI tools deliver ROI for small teams ($50-200/month total), not $10K+ enterprise platforms you don't need.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-all">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real Campaign Work</h3>
                  <p className="text-gray-700">During the workshop, your team builds actual campaigns you can launch immediately—not hypothetical case studies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing for Small Teams */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing for Small Teams</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Half-Day Workshop</h3>
                <p className="text-4xl font-bold text-red-600 mb-4">$5,000</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>4-hour intensive training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Up to 10 team members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Custom to your industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Hands-on exercises</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Two-Day Bootcamp</h3>
                <p className="text-4xl font-bold text-red-600 mb-4">$15,000</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>2 full days of training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Up to 10 team members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Build live campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>30-day follow-up support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            <strong>Compare:</strong> Generic AI webinars ($500-1,000) teach theory. Enterprise training ($50K+) is overkill. This is practical training at a price small teams can afford.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Train Your Team?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Schedule a 15-minute call to discuss your team's needs and customize a training plan.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center px-10 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all group"
          >
            Schedule Discovery Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}