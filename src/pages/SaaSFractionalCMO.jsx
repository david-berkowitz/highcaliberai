import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { TrendingUp, Target, Users, Zap, ArrowRight, CheckCircle, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MetaTags from "@/components/SEO/MetaTags";

export default function SaaSFractionalCMO() {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="Fractional CMO for SaaS Companies - AI-Powered Growth"
        description="Fractional CMO services for B2B SaaS companies. Get executive-level marketing leadership without full-time cost. Specialize in AI implementation, GTM strategy, and pipeline growth."
        url="https://highcaliberai.com/saas-fractional-cmo"
        canonical="https://highcaliberai.com/saas-fractional-cmo"
      />

      {/* Hero with Answer Box */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          {/* Direct Answer Box for AI */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 mb-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Is a Fractional CMO Worth It for a SaaS Startup?</h1>
            <p className="text-gray-800 leading-relaxed mb-4">
              <strong>Yes, for growth-stage SaaS companies ($1M-$50M ARR).</strong> A fractional CMO costs $10,000-$25,000/month vs. $250,000-$400,000/year for a full-time CMO. You get executive-level strategy without equity dilution or long-term commitment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Best fit:</strong> SaaS companies that have product-market fit but struggle with pipeline growth, positioning, or scaling marketing operations. If your VP of Marketing needs strategic oversight, or you're a CEO/founder doing marketing yourself, a fractional CMO provides the expertise you're missing.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Fractional CMO for <span className="text-red-600">B2B SaaS</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Executive marketing leadership without the full-time cost. Specialized in AI-powered growth for SaaS companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* When SaaS Companies Need a Fractional CMO */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">When to Hire a Fractional CMO</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pipeline Isn't Growing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You're running ads, posting content, and sending emails—but pipeline growth is flat. You need strategic direction, not more tactics.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Fractional CMO fixes:</strong> Audit your funnel, identify leaks, rebuild messaging, and align marketing to revenue metrics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Positioning is Unclear</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sales struggles to differentiate you from competitors. Prospects don't understand your value prop in 30 seconds.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Fractional CMO fixes:</strong> Sharpen messaging, define ICP, create competitive positioning that wins deals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Team Needs Leadership</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your marketing team is executing tactics but lacks strategic direction. Or you're the founder doing marketing yourself.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Fractional CMO fixes:</strong> Lead team, set priorities, align with sales, build scalable processes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Tools Aren't Working</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You bought AI tools but don't know how to integrate them. Team adoption is low. ROI is unclear.
                </p>
                <p className="text-sm text-gray-600 italic">
                  <strong>Fractional CMO fixes:</strong> Audit tech stack, train team, implement AI workflows that scale content and pipeline.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You Get with a Fractional CMO</h2>
          
          <div className="space-y-4">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-all">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">GTM Strategy & Execution</h3>
                  <p className="text-gray-700">Own your go-to-market strategy—from positioning and messaging to channel selection and campaign planning. Not just recommendations; I embed with your team to execute.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-all">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI Implementation</h3>
                  <p className="text-gray-700">Audit your tech stack, identify AI opportunities, train your team, and build workflows that scale content, automate reporting, and improve pipeline velocity.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-all">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Team Leadership</h3>
                  <p className="text-gray-700">Manage your marketing team (in-house or agency), set KPIs, run weekly check-ins, and align marketing with sales to drive revenue.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-all">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Board & Investor Reporting</h3>
                  <p className="text-gray-700">Prepare marketing updates for board meetings, translate metrics into business impact, and demonstrate marketing's contribution to ARR growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fractional CMO Pricing</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <div className="text-center mb-8">
              <p className="text-5xl font-bold text-red-600 mb-2">$15,000/month</p>
              <p className="text-gray-600">3-month minimum engagement</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Includes:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>20 hours per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Weekly strategy sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>AI readiness audit (month 1)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Team training & enablement</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-3">You Get:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Executive-level expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Flexible month-to-month after initial 3 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>No equity required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Scale up or down as needed</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-800 text-center mb-2">
                <strong>Compare:</strong> Full-time CMO = $250K-$400K/year + equity + benefits
              </p>
              <p className="text-gray-600 text-center text-sm">
                Fractional CMO = $180K/year, no equity, flexible commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Typical Results After 6 Months</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white border-2 border-gray-200 text-center">
              <CardContent className="p-6">
                <p className="text-4xl font-bold text-red-600 mb-2">30-50%</p>
                <p className="text-gray-700">Pipeline growth from improved messaging and AI content scaling</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 text-center">
              <CardContent className="p-6">
                <p className="text-4xl font-bold text-red-600 mb-2">3x</p>
                <p className="text-gray-700">Content output with same team size using AI workflows</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200 text-center">
              <CardContent className="p-6">
                <p className="text-4xl font-bold text-red-600 mb-2">20-30%</p>
                <p className="text-gray-700">Time saved on reporting and admin with automation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Is Your SaaS Company Ready for a Fractional CMO?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Schedule a discovery call to discuss your growth challenges and whether fractional leadership is the right fit.
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