import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
  Users, 
  TrendingUp, 
  Handshake, 
  ArrowRight,
  Network,
  Mail,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MetaTags from '@/components/SEO/MetaTags';

export default function BDPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <MetaTags 
        title="Business Development Services - Strategic Introductions"
        description="David Berkowitz offers business development services including strategic network introductions, partnership facilitation, and revenue-driving connections on referral fees, success fees, and retainers."
        url="https://highcaliberai.com/bd"
        canonical="https://highcaliberai.com/bd"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-blue-100 border border-blue-200">
              <Handshake className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Strategic Connections</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Business <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Development</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Leverage my network and expertise to unlock new partnerships, customers, and revenue opportunities.
            </p>

            <Link to={createPageUrl("Contact")}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Discuss Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to opening doors and creating meaningful business connections
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-2 border-blue-100 h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Network className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">1. Network Mapping</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I search my network or create targeted lists using tools like <a href="https://happenstance.ai/invite/friend/kG7j1tmEVzwEe0tzIT8im6pw7m2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Happenstance</a> to identify the right connections for your goals.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-2 border-blue-100 h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">2. Strategic Introductions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You request intros, and I forward them with context—usually via email, sometimes LinkedIn—explaining how we know each other and why you should connect.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-2 border-blue-100 h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">3. Flexible Follow-Through</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Depending on the engagement, I'll hand off intros for you to pursue or stay involved for next steps—whatever makes the most sense.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Engagement Models</h2>
            <p className="text-xl text-gray-600">
              Flexible compensation structures aligned with your goals
            </p>
          </motion.div>

          <div className="space-y-6">
            <Card className="border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Referral Fees</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pay a percentage when connections convert into business relationships or revenue.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Success Fees</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Compensation tied to specific outcomes like closed deals, partnerships, or key milestones.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Retainers</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ongoing advisory with a monthly retainer for consistent BD support and strategic guidance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-gray-600 mt-8">
            Most engagements use a combination of these models tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-0 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Who This Is For</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Companies seeking strategic partnerships in marketing, media, or AI</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Startups looking to connect with enterprise customers</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Agencies seeking introductions to brands or tech platforms</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Companies expanding into new markets or verticals</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Expand Your Network?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help open doors and create valuable connections for your business.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Start the Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}