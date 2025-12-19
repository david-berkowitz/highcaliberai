import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Brain, 
  Sparkles, 
  Users, 
  Target, 
  Zap, 
  Lightbulb,
  Book,
  ExternalLink 
} from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              AI Marketing <span className="font-semibold text-red-600">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Curated tools and platforms I recommend for enhancing your AI marketing workflow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research & Insights */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-red-600" />
              Research & Insights
            </h2>
            <p className="text-gray-600">Tools for audience research, brand tracking, and AI-powered insights</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={TrendingUp}
              title="SparkToro"
              description="Audience research and intelligence platform"
              href="https://sparktoro.com/"
            />
            <ResourceCard 
              icon={Target}
              title="Otterly AI"
              description="AI engine monitoring and brand tracking"
              href="https://otterly.ai/?via=david"
            />
            <ResourceCard 
              icon={Brain}
              title="NotebookLM"
              description="Google's AI-powered research and note-taking assistant"
              href="https://notebooklm.google/"
            />
            <ResourceCard 
              icon={Book}
              title="Passionfruit"
              description="AI-powered content optimization and recommendations"
              href="https://www.getpassionfruit.com/"
            />
            <ResourceCard 
              icon={Target}
              title="AI Search Playbook"
              description="AirOps guide for marketers navigating AI-powered search"
              href="https://www.airops.com/report/ai-search-playbook-marketers"
            />
            <ResourceCard 
              icon={Users}
              title="Rally"
              description="AI-powered research and consumer insights platform"
              href="https://askrally.com/"
            />
          </div>
        </div>
      </section>

      {/* Content Creation */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-red-600" />
              Content Creation
            </h2>
            <p className="text-gray-600">AI-powered tools for video, audio, and visual content generation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={Sparkles}
              title="Opus Pro"
              description="AI video clipping and repurposing for social media"
              href="https://www.opus.pro/?via=a4312b"
            />
            <ResourceCard 
              icon={Users}
              title="ElevenLabs"
              description="AI voice generation and text-to-speech platform"
              href="https://elevenlabs.io/"
            />
            <ResourceCard 
              icon={Sparkles}
              title="AdGreetz"
              description="AI-powered personalized video ad creation at scale"
              href="https://www.adgreetz.com/"
            />
            <ResourceCard 
              icon={Sparkles}
              title="Ideogram"
              description="Rapid AI image generation with excellent text rendering"
              href="https://ideogram.ai/"
            />
            <ResourceCard 
              icon={Users}
              title="Jingle My Brand"
              description="AI-powered jingle and brand music creation"
              href="https://jinglemybrand.com/"
            />
          </div>
        </div>
      </section>

      {/* Automation & Workflow */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Zap className="w-8 h-8 text-red-600" />
              Automation & Workflow
            </h2>
            <p className="text-gray-600">Tools to streamline and automate your marketing workflows</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={Zap}
              title="n8n"
              description="Workflow automation for technical teams"
              href="https://n8n.io/"
            />
            <ResourceCard 
              icon={Brain}
              title="Happenstance AI"
              description="Intelligent marketing automation and workflow optimization"
              href="https://happenstance.ai/invite/friend/kG7j1tmEVzwEe0tzIT8im6pw7m2"
            />
          </div>
        </div>
      </section>

      {/* App Building */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-red-600" />
              App Building
            </h2>
            <p className="text-gray-600">No-code and low-code platforms for building AI-powered applications</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={Target}
              title="Base44"
              description="Build AI-powered apps without code"
              href="https://base44.pxf.io/c/5604633/2049275/25619?trafcat=base"
            />
            <ResourceCard 
              icon={Lightbulb}
              title="Lovable"
              description="AI-powered app development platform"
              href="https://lovable.dev/?via=david-berkowitz"
            />
          </div>
        </div>
      </section>

      {/* Community Links */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Community & Learning</h2>
            <p className="text-gray-600">Connect with AI marketing communities and access learning resources</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">AI Marketers Guild</h4>
                    <p className="text-purple-100 mb-4">Join a community of AI-forward marketers sharing insights, tools, and best practices</p>
                    <a 
                      href="https://bit.ly/AIMGinvite" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                    >
                      Join Community
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">Serial Marketers</h4>
                    <p className="text-blue-100 mb-4">Connect with experienced marketers and learn from real-world case studies</p>
                    <a 
                      href="https://bit.ly/SMINVITE" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Join Community
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-green-700 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">AIMG Events</h4>
                    <p className="text-green-100 mb-4">Attend virtual events, workshops, and networking sessions on AI marketing</p>
                    <a 
                      href="https://lu.ma/aimg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                    >
                      View Events
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-600 to-red-700 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Book className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">AI Insiders Recordings</h4>
                    <p className="text-red-100 mb-4">Watch past sessions and learn from AI marketing experts and practitioners</p>
                    <a 
                      href="https://www.youtube.com/@aimarketersguild" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                    >
                      Watch Videos
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-amber-600 to-amber-700 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300 md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Book className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">AI Marketing Resource Guide</h4>
                    <p className="text-amber-100 mb-4">Comprehensive guide with tools, prompts, and strategies for AI-powered marketing</p>
                    <a 
                      href="https://serialmarketers.notion.site/AI-Marketing-Resource-Guide-ab2dd847daf446618f14d1df8e16c6df" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-amber-700 px-4 py-2 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
                    >
                      View Guide
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function ResourceCard({ icon: Icon, title, description, href }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <Card className="bg-white border border-gray-200 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full">
        <CardContent className="p-6">
          <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex items-center gap-2 text-red-600 font-medium text-sm">
            Visit Site
            <ExternalLink className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
}