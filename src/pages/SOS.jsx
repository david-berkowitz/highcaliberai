import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import MetaTags from "@/components/SEO/MetaTags";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Upload,
  File,
  CheckCircle
} from "lucide-react";

export default function SOS() {
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setUploadSuccess(false);

    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setFileName(file.name);
      setUploadSuccess(true);
      
      // TODO: Store file reference in database if needed
      
      setTimeout(() => setUploadSuccess(false), 3000);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <MetaTags 
        title="Source of Sources - SMB AI Marketing Resources"
        description="Curated AI marketing tools and resources for small and mid-sized businesses. Affordable, practical tools for modern marketing teams."
        url="https://highcaliberai.com/sos"
        canonical="https://highcaliberai.com/sos"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Source of <span className="font-semibold text-red-600">Sources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              SMB-friendly AI marketing tools and resources. Practical, affordable solutions for growing teams.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Presentation Materials Upload */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Upload Presentation Materials</h3>
                <p className="text-blue-100 mb-6">Share slides, decks, or resources related to these tools</p>
                
                <div className="max-w-md mx-auto">
                  <label className="cursor-pointer">
                    <div className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
                      <File className="w-5 h-5" />
                      {uploading ? "Uploading..." : "Choose File"}
                    </div>
                    <Input
                      type="file"
                      onChange={handleFileUpload}
                      disabled={uploading}
                      className="hidden"
                      accept=".pdf,.ppt,.pptx,.key"
                    />
                  </label>
                  
                  {uploadSuccess && (
                    <div className="mt-4 bg-green-500/20 border border-green-300 rounded-lg p-3 flex items-center justify-center gap-2 text-white">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">{fileName} uploaded successfully!</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
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
            <p className="text-gray-600">Affordable tools for audience research and AI-powered insights</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={Brain}
              title="NotebookLM"
              description="Google's AI-powered research and note-taking assistant"
              href="https://notebooklm.google/"
            />
            <ResourceCard 
              icon={Target}
              title="Cluely"
              description="AI-powered user research and feedback analysis"
              href="https://cluely.com/"
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
            <p className="text-gray-600">AI-powered tools for video, audio, and visual content</p>
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
              title="BizGreetz AI®"
              description="AI-powered personalized video ad creation at scale"
              href="https://www.bizgreetz.com/"
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
            <ResourceCard 
              icon={Target}
              title="Napkin"
              description="AI-powered infographic and visual storytelling"
              href="https://www.napkin.ai/"
            />
            <ResourceCard 
              icon={Sparkles}
              title="Google Labs"
              description="Experimental AI content generation tools from Google"
              href="https://labs.google/experiments"
            />
          </div>
        </div>
      </section>

      {/* Vibe Coding */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-red-600" />
              Vibe Coding
            </h2>
            <p className="text-gray-600">No-code platforms for building applications</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={Target}
              title="Base44"
              description="Build AI-powered apps without code"
              href="https://base44.pxf.io/c/5604633/2049275/25619?trafcat=base"
              featured
            />
            <ResourceCard 
              icon={Lightbulb}
              title="Lovable"
              description="AI-powered app development platform"
              href="https://lovable.dev/?via=david-berkowitz"
              featured
            />
          </div>
        </div>
      </section>

      {/* Newsletters */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <Mail className="w-8 h-8 text-red-600" />
              Newsletters
            </h2>
            <p className="text-gray-600">Stay updated with AI marketing news</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={Mail}
              title="The Neuron Daily"
              description="Daily AI news and insights by Pete Huang"
              href="https://www.theneurondaily.com/"
              featured
            />
            <ResourceCard 
              icon={Mail}
              title="The Rundown"
              description="Daily AI updates by Rowan Cheung"
              href="https://www.therundown.ai/"
              featured
            />
            <ResourceCard 
              icon={Mail}
              title="Ben's Bites"
              description="Daily AI news digest"
              href="https://www.bensbites.com/"
            />
            <ResourceCard 
              icon={Mail}
              title="One Useful Thing"
              description="AI insights by Ethan Mollick"
              href="https://www.oneusefulthing.org/"
            />
            <ResourceCard 
              icon={Mail}
              title="Almost Timely News"
              description="Weekly AI marketing by Chris Penn"
              href="https://almosttimely.substack.com?r=xky0"
            />
            <ResourceCard 
              icon={Mail}
              title="AI Marketing School"
              description="AI marketing insights by Charlie Braithwaite"
              href="https://aimarketingschool.beehiiv.com/"
            />
            <ResourceCard 
              icon={Mail}
              title="Wonder Tools"
              description="Weekly AI tools by Jeremy Caplan"
              href="https://wondertools.substack.com/"
            />
          </div>
        </div>
      </section>

      {/* Directories & Prompts */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <FileText className="w-8 h-8 text-red-600" />
              Directories & Prompts
            </h2>
            <p className="text-gray-600">Discover AI tools and access prompt libraries</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard 
              icon={FileText}
              title="Supertools by The Rundown"
              description="Curated directory of AI tools"
              href="https://www.supertools.com/"
            />
            <ResourceCard 
              icon={FileText}
              title="There's an AI for That"
              description="Comprehensive AI tool database"
              href="https://www.theresanaiforthat.com/"
            />
            <ResourceCard 
              icon={FileText}
              title="1000+ Best ChatGPT Prompts"
              description="Prompt library by Rowan Cheung"
              href="https://www.notion.so/3c26e97a23a948d499e9f1882dd2f542?pvs=21"
            />
            <ResourceCard 
              icon={FileText}
              title="Anthropic's Prompt Library"
              description="Official Claude prompt examples"
              href="https://docs.anthropic.com/en/prompt-library/library"
            />
            <ResourceCard 
              icon={FileText}
              title="ChatGPT Prompt Frameworks"
              description="Prompt frameworks by Shelly Palmer"
              href="https://shellypalmer.com/2023/11/chatgpt-prompt-frameworks/"
            />
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Community</h2>
            <p className="text-gray-600">Connect with AI marketing communities</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">AI Marketers Guild</h4>
                    <p className="text-purple-100 mb-4">Join 7,000+ AI-forward marketers</p>
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
                    <p className="text-blue-100 mb-4">Connect with experienced marketers</p>
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
          </div>
        </div>
      </section>
    </div>
  );
}

function ResourceCard({ icon: Icon, title, description, href, featured }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <Card className={`bg-white border ${featured ? 'border-red-600/50 shadow-lg' : 'border-gray-200'} hover:border-red-600/30 hover:shadow-xl transition-all duration-300 rounded-xl h-full`}>
        <CardContent className="p-6">
          <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-red-600" />
          </div>
          <h3 className={`text-xl ${featured ? 'font-bold' : 'font-semibold'} text-gray-900 mb-2 group-hover:text-red-600 transition-colors`}>{title}</h3>
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