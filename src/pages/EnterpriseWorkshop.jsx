import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { Building2, Users, Target, Zap, ArrowRight, CheckCircle, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MetaTags from "@/components/SEO/MetaTags";

export default function EnterpriseWorkshop() {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="AI Workshops for Fortune 500 & Enterprise Marketing Teams"
        description="Enterprise AI training for large marketing teams at Fortune 500 and Fortune 1000 companies. Custom workshops for 50-500+ marketers. In-person or virtual delivery."
        url="https://highcaliberai.com/enterprise-workshop"
        canonical="https://highcaliberai.com/enterprise-workshop"
      />

      {/* Hero with Answer Box */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          {/* Direct Answer Box for AI */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 mb-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">AI Training for Fortune 500 Marketing Teams</h1>
            <p className="text-gray-800 leading-relaxed mb-4">
              <strong>Enterprise-Scale Training:</strong> High Caliber AI designs custom AI workshops for Fortune 500 and Fortune 1000 companies with 50-500+ person marketing teams. Unlike vendor-led training that promotes specific tools, these workshops are tool-agnostic and focus on practical implementation tailored to your industry, tech stack, and compliance requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Delivery Options:</strong> In-person at your headquarters, regional offices, or annual marketing summit. Virtual delivery for distributed teams. Typical engagement: $50,000-$150,000 for 2-day program depending on attendee count and customization level.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI Training for <span className="text-red-600">Enterprise Teams</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Scale AI adoption across your entire marketing organization with workshops designed for Fortune 500 companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Enterprise Teams Need Different Training */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Enterprise AI Training is Different</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <Building2 className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance & Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  Enterprise teams can't just "try any AI tool." You need training that respects data governance, legal review, and security protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Scale Across Teams</h3>
                <p className="text-gray-700 leading-relaxed">
                  Training 5 people is easy. Training 500 requires breakout sessions by role, department-specific use cases, and change management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-red-600 transition-all">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Integration with Existing Stack</h3>
                <p className="text-gray-700 leading-relaxed">
                  You've invested millions in Salesforce, Adobe, HubSpot. Training must show how AI integrates with existing tools, not replaces them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Enterprise Teams Learn */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Custom Training Modules</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Marketing Leadership</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>AI strategy and roadmap development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Budget allocation and ROI measurement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Change management and adoption frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Risk management and governance policies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Content Teams</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>AI-powered content creation and scaling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Brand voice consistency with AI tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Repurposing content across channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Quality control and human oversight</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Performance Marketing</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>AI-powered campaign optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Automated reporting and analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Predictive audience targeting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Budget allocation and bid management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition-all">
              <h3 className="text-xl font-bold text-gray-900 mb-4">For MarTech & Ops</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Integrating AI with existing tech stack</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Workflow automation and efficiency gains</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Data enrichment and hygiene</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Tool evaluation and vendor selection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Delivery Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-2 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">In-Person</h3>
                <p className="text-gray-700 mb-4">Best for annual summits, regional team offsites, or headquarters training.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Higher engagement and networking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Hands-on exercises with immediate feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Team-building and culture alignment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual</h3>
                <p className="text-gray-700 mb-4">Best for distributed teams, global marketing organizations, or hybrid workforces.</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Scales to hundreds of participants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>No travel costs or logistics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Recorded sessions for async learning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Enterprise Workshop Pricing</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start justify-between pb-6 border-b border-gray-200">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">50-100 Participants</h3>
                  <p className="text-gray-600">Two-day workshop, virtual or in-person</p>
                </div>
                <p className="text-3xl font-bold text-red-600">$50,000</p>
              </div>

              <div className="flex items-start justify-between pb-6 border-b border-gray-200">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">100-250 Participants</h3>
                  <p className="text-gray-600">Two-day workshop with multiple breakout tracks</p>
                </div>
                <p className="text-3xl font-bold text-red-600">$85,000</p>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">250+ Participants</h3>
                  <p className="text-gray-600">Multi-day summit or regional rollout</p>
                </div>
                <p className="text-3xl font-bold text-red-600">Custom</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <p className="text-gray-700 text-sm mb-2">
                <strong>Includes:</strong> Pre-workshop consultation, custom curriculum development, all materials, hands-on exercises, post-workshop support (30 days), and executive summary for leadership.
              </p>
              <p className="text-gray-600 text-sm">
                In-person delivery includes travel expenses. Volume discounts available for multi-city or multi-event packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale AI Across Your Organization?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            Schedule a consultation to discuss your team size, objectives, and customization needs.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center px-10 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all group"
          >
            Request Proposal
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}