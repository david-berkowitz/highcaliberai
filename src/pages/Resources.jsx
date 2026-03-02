import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import MetaTags from "@/components/SEO/MetaTags";
import { Card, CardContent } from "@/components/ui/card";
import ResourceCard from "@/components/resources/ResourceCard";
import { 
  TrendingUp, Brain, Sparkles, Users, Target, Zap, Lightbulb,
  Book, ExternalLink, Mail, Calendar, FileText, ArrowRight, Video, Building2
} from "lucide-react";

const STANIFY_INTRO = {
  to: "hank@stanify.ai",
  subject: "Intro via High Caliber AI — Interested in Stanify",
  body: `Hi Hank,\n\nI came across Stanify through David Berkowitz at High Caliber AI and wanted to reach out to learn more about how Stanify could help with our social media engagement and safety needs.\n\n[Add a sentence or two about your company and use case here.]\n\nWould love to set up a quick call.\n\nBest,\n[Your Name]`
};

function SectionHeader({ icon: Icon, title, description }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="w-5 h-5 text-red-600" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {description && <p className="text-gray-500 text-sm ml-7">{description}</p>}
    </div>
  );
}

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="AI Marketing Tools, Resources & Guides for Marketers"
        description="47+ hand-picked AI marketing tools, newsletters, communities, and learning resources curated by David Berkowitz — fractional CMO and author of The Non-Obvious Guide to Using AI for Marketing."
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png"
        url="https://highcaliberai.com/resources"
        canonical="https://highcaliberai.com/resources"
      />

      {/* Hero */}
      <section className="pt-24 pb-10 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight">
              AI Marketing <span className="text-red-600">Resource Library</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-6">
              47+ hand-picked tools, newsletters, and communities — curated by David Berkowitz.
            </p>
            {/* Tier legend */}
            <div className="flex flex-wrap justify-center gap-3 mb-6 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-green-700">
                <Zap className="w-3.5 h-3.5" /> SMB — Free or &lt;$30/mo
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-blue-700">
                <Building2 className="w-3.5 h-3.5" /> Enterprise — Custom pricing
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to={createPageUrl("Services")} className="text-red-600 hover:text-red-700 font-medium">Explore Services</Link>
              <span className="text-gray-300">•</span>
              <Link to={createPageUrl("Blog")} className="text-red-600 hover:text-red-700 font-medium">Read Blog</Link>
              <span className="text-gray-300">•</span>
              <Link to={createPageUrl("Contact")} className="text-red-600 hover:text-red-700 font-medium">Get in Touch</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Book Banner */}
      <section className="py-6 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <a href="https://www.amazon.com/Non-Obvious-Guide-AI-Marketing-Guides/dp/1646871863/" target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col sm:flex-row items-center gap-5 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/324737b14_IMG_4434.jpg"
                alt="The Non-Obvious Guide to Using AI for Marketing"
                className="w-20 h-auto rounded-lg shadow-md flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-block bg-yellow-400 text-purple-900 text-xs font-bold px-2.5 py-1 rounded-full mb-2">NEW BOOK</span>
                <h3 className="text-lg font-bold text-white leading-snug">The Non-Obvious Guide to Using AI for Marketing</h3>
                <p className="text-purple-300 text-sm mt-1">Available now on Amazon</p>
              </div>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform flex-shrink-0 hidden sm:block" />
            </div>
          </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 divide-y divide-gray-100">

        {/* Research & Insights */}
        <section className="py-10">
          <SectionHeader icon={TrendingUp} title="Research & Insights" description="Audience research, brand tracking, and AI-powered intelligence" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard icon={TrendingUp} title="SparkToro" description="Audience research and intelligence platform" href="https://sparktoro.com/" tier="smb" />
            <ResourceCard icon={Target} title="Otterly AI" description="AI engine monitoring and brand tracking" href="https://otterly.ai/?via=david" tier="smb" hasReferral />
            <ResourceCard icon={Brain} title="NotebookLM" description="Google's AI-powered research and note-taking assistant" href="https://notebooklm.google/" tier="smb" />
            <ResourceCard icon={Book} title="Passionfruit" description="AI-powered content optimization and recommendations" href="https://www.getpassionfruit.com/" />
            <ResourceCard icon={Target} title="AI Search Playbook" description="AirOps guide for marketers navigating AI-powered search" href="https://www.airops.com/report/ai-search-playbook-marketers" />
            <ResourceCard icon={Users} title="Rally" description="AI-powered research and consumer insights platform" href="https://askrally.com/" tier="enterprise" />
            <ResourceCard icon={Target} title="Cluely" description="Notetaking app with live feedback" href="https://cluely.com/" tier="smb" />
            <ResourceCard
              icon={Building2}
              title="Stanify"
              description="Enterprise AI agents for social media safety, engagement workflows, and community insights at scale. Trusted by Unilever, Nando's, and major CPG brands."
              href="https://stanify.ai/"
              tier="enterprise"
              introEmail={STANIFY_INTRO}
            />
          </div>
        </section>

        {/* Content Creation */}
        <section className="py-10">
          <SectionHeader icon={Sparkles} title="Content Creation" description="AI-powered video, audio, and visual content generation" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard icon={Sparkles} title="Opus Pro" description="AI video clipping and repurposing for social media" href="https://www.opus.pro/?via=a4312b" tier="smb" hasReferral />
            <ResourceCard icon={Users} title="ElevenLabs" description="AI voice generation and text-to-speech platform" href="https://elevenlabs.io/" tier="smb" />
            <ResourceCard icon={Sparkles} title="BizGreetz AI®" description="AI-powered personalized video ad creation at scale" href="https://www.bizgreetz.com/" tier="enterprise" />
            <ResourceCard icon={Sparkles} title="Ideogram" description="Rapid AI image generation with excellent text rendering" href="https://ideogram.ai/" tier="smb" />
            <ResourceCard icon={Users} title="Jingle My Brand" description="AI-powered jingle and brand music creation" href="https://jinglemybrand.com/" tier="smb" />
            <ResourceCard icon={Target} title="Napkin" description="AI-powered infographic and visual storytelling" href="https://www.napkin.ai/" tier="smb" />
            <ResourceCard icon={Brain} title="LiveAvatar" description="Live video avatars by HeyGen for real-time presentations" href="https://liveavatar.com/" tier="enterprise" />
            <ResourceCard icon={Sparkles} title="Google Labs" description="Experimental AI content generation tools from Google" href="https://labs.google/experiments" tier="smb" />
            <ResourceCard icon={Sparkles} title="Hedra" description="AI video creation platform" href="https://hedra.com" tier="smb" />
            <ResourceCard icon={Sparkles} title="HeyGen" description="AI avatar and video generation" href="https://www.heygen.com/" tier="smb" />
          </div>
        </section>

        {/* Social Media Management */}
        <section className="py-10">
          <SectionHeader icon={Users} title="Social Media Management" description="Tools for managing, analyzing, and scaling social content" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard icon={Building2} title="Stanify" description="Enterprise AI agents for social media safety, engagement workflows, and community insights." href="https://stanify.ai/" tier="enterprise" introEmail={STANIFY_INTRO} />
          </div>
        </section>

        {/* Contact Discovery */}
        <section className="py-10">
          <SectionHeader icon={Users} title="Contact Discovery" description="AI-powered tools for finding and connecting with prospects" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard icon={Brain} title="Happenstance AI" description="Intelligent contact search and business development" href="https://happenstance.ai/invite/friend/yuqdbLCl7N5lUWLNDncIC2T5qC3" tier="smb" hasReferral />
            <ResourceCard icon={Users} title="CTD.ai" description="AI-powered contact discovery and relationship mapping" href="https://ctd.ai/" tier="enterprise" />
          </div>
        </section>

        {/* Agents & Workflow Automation */}
        <section className="py-10">
          <SectionHeader icon={Zap} title="Agents & Workflow Automation" description="Build AI agents and automate complex workflows" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard icon={Zap} title="n8n" description="Workflow automation for technical teams" href="https://n8n.io/" tier="smb" />
          </div>
        </section>

        {/* Vibe Coding */}
        <section className="py-10">
          <SectionHeader icon={Lightbulb} title="Vibe Coding" description="No-code and AI-assisted platforms for building applications" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard icon={Target} title="Base44" description="Build AI-powered apps without code" href="https://base44.pxf.io/c/5604633/2049275/25619?trafcat=base" featured tier="smb" hasReferral />
            <ResourceCard icon={Lightbulb} title="Lovable" description="AI-powered app development platform" href="https://lovable.dev/?via=david-berkowitz" featured tier="smb" hasReferral />
            <ResourceCard icon={Brain} title="Claude Code" description="AI coding assistant for developers" href="https://www.anthropic.com/claude/code" tier="smb" />
            <ResourceCard icon={Target} title="Ghostty" description="Fast, modern terminal emulator" href="https://ghostty.org/" tier="smb" />
            <ResourceCard icon={Zap} title="Netlify" description="Modern web hosting and deployment platform" href="https://www.netlify.com/" tier="smb" />
            <ResourceCard icon={Lightbulb} title="Codex by OpenAI" description="AI system that translates natural language to code" href="https://openai.com/codex/" tier="smb" />
          </div>
        </section>

        {/* Newsletters */}
        <section className="py-10">
          <SectionHeader icon={Mail} title="Newsletters" description="Stay updated with the latest AI marketing news and insights" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard icon={Mail} title="The Neuron Daily" description="Daily AI news and insights by Pete Huang" href="https://www.theneurondaily.com/" featured />
            <ResourceCard icon={Mail} title="The Rundown" description="Daily AI updates by Rowan Cheung" href="https://www.therundown.ai/" featured />
            <ResourceCard icon={Mail} title="Ben's Bites" description="Daily AI news digest" href="https://www.bensbites.com/" />
            <ResourceCard icon={Mail} title="One Useful Thing" description="AI insights by Ethan Mollick" href="https://www.oneusefulthing.org/" />
            <ResourceCard icon={Mail} title="Almost Timely News" description="Weekly AI marketing by Chris Penn" href="https://almosttimely.substack.com?r=xky0" hasReferral />
            <ResourceCard icon={Mail} title="AI Marketing School" description="AI marketing insights by Charlie Braithwaite" href="https://aimarketingschool.beehiiv.com/" />
            <ResourceCard icon={Mail} title="The AI Valley" description="Daily AI news by Barsee" href="https://www.theaivalley.com/" />
            <ResourceCard icon={Mail} title="Wonder Tools" description="Weekly AI tools by Jeremy Caplan" href="https://wondertools.substack.com/" />
            <ResourceCard icon={Mail} title="AI Report" description="Weekly AI tool updates" href="https://aitoolreport.beehiiv.com/" />
            <ResourceCard icon={Mail} title="IPG Media Lab Weekly" description="Weekly media and AI insights" href="https://ipglab.substack.com/" />
            <ResourceCard icon={Mail} title="The AI Ad Economy" description="Newsletter by Debra Aho Williamson on AI in advertising" href="https://aiadeconomy.substack.com/" />
            <ResourceCard icon={Mail} title="Fractional Freedom Friday" description="Weekly insights on fractional work and AI for consultants" href="https://fractionalfreedomfriday.substack.com/" />
            <ResourceCard icon={Mail} title="Fractional Fridays" description="Weekly newsletter on fractional consulting and modern work" href="https://fractionalfridays.substack.com/" />
          </div>
        </section>

        {/* Directories & Prompts */}
        <section className="py-10">
          <SectionHeader icon={FileText} title="Directories & Prompts" description="Discover AI tools and access curated prompt libraries" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard icon={FileText} title="Supertools by The Rundown" description="Curated directory of AI tools" href="https://www.supertools.com/" />
            <ResourceCard icon={FileText} title="Top AI Tools for Business" description="Business-focused AI tools by The Neuron" href="https://www.topaitools.com/" />
            <ResourceCard icon={FileText} title="There's an AI for That" description="Comprehensive AI tool database" href="https://www.theresanaiforthat.com/" />
            <ResourceCard icon={FileText} title="Find My AI Tool" description="Search engine for AI tools" href="https://www.findmyaitool.com/" />
            <ResourceCard icon={FileText} title="AITools.fyi" description="AI marketing tools directory" href="https://aitools.fyi/category/ai-marketing" />
            <ResourceCard icon={FileText} title="MKT1's AI Tools" description="Airtable of marketing AI tools" href="https://airtable.com/appcRvwXdyEJR0fsT/shrCMY1xkb2fOmy7t/tblrn88uEcqUypqFX" />
            <ResourceCard icon={FileText} title="1000+ Best ChatGPT Prompts" description="Prompt library by Rowan Cheung" href="https://www.notion.so/3c26e97a23a948d499e9f1882dd2f542?pvs=21" />
            <ResourceCard icon={FileText} title="Anthropic's Prompt Library" description="Official Claude prompt examples" href="https://docs.anthropic.com/en/prompt-library/library" />
            <ResourceCard icon={FileText} title="ChatGPT Prompt Frameworks" description="Prompt frameworks by Shelly Palmer" href="https://shellypalmer.com/2023/11/chatgpt-prompt-frameworks/" />
          </div>
        </section>

        {/* Courses & Learning */}
        <section className="py-10">
          <SectionHeader icon={Book} title="Courses & Learning" description="Educational resources and video content for AI marketing" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard icon={Book} title="AIMG YouTube Channel" description="Dozens of AI marketing expert interviews" href="https://www.youtube.com/@aimarketersguild" featured />
            <ResourceCard icon={Video} title="Build First Academy – Half-Day Intensives" description="Hands-on AI building workshops by Bethany Crystal. Build an internal tool, game, or business in 4 hours. $250/person." href="https://buildfirst.ai/" tier="smb" />
            <ResourceCard icon={Video} title="Build First Academy – Corporate Workshops" description="Half-day AI fluency workshops for teams of 15–20. Participants build real MVPs. Starts at $7,500." href="https://buildfirst.ai/" tier="enterprise" />
            <ResourceCard icon={Book} title="Generative AI for Brand Execs" description="Course by Shelly Palmer" href="https://courses.shellypalmer.com/metacademy-generative-ai" />
            <ResourceCard icon={Book} title="U of Digital AI Accelerator" description="Comprehensive AI training program for marketing teams" href="https://uof.digital/ai/" tier="enterprise" />
          </div>
        </section>

        {/* LinkedIn Thought Leaders */}
        <section className="py-10">
          <SectionHeader icon={Users} title="LinkedIn Thought Leaders" description="Follow these AI marketing experts on LinkedIn" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ResourceCard icon={Users} title="Ethan Mollick" description="Wharton School professor and AI researcher" href="https://www.linkedin.com/in/emollick/" />
            <ResourceCard icon={Users} title="Catharine Montgomery" description="Better Together Agency" href="https://www.linkedin.com/in/cnmontgomery/" />
            <ResourceCard icon={Users} title="Jeremiah Owyang" description="Blitzscaling VC" href="https://www.linkedin.com/in/jowyang/" />
          </div>
        </section>

      </div>

      {/* Community & Events */}
      <section className="py-12 px-4 sm:px-6 bg-gray-50 border-t border-gray-100 mt-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Community & Events</h2>
            <p className="text-gray-500 text-sm">Connect with AI marketing communities and attend events</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="https://bit.ly/AIMGinvite" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-purple-700 rounded-xl p-5 hover:bg-purple-800 transition-colors">
              <div className="bg-white/20 p-2.5 rounded-lg flex-shrink-0"><Users className="w-6 h-6 text-white" /></div>
              <div>
                <div className="font-bold text-white text-base">AI Marketers Guild</div>
                <div className="text-purple-200 text-sm">7,000+ member community</div>
              </div>
              <ExternalLink className="w-4 h-4 text-white/60 ml-auto flex-shrink-0" />
            </a>
            <a href="https://bit.ly/SMINVITE" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-blue-700 rounded-xl p-5 hover:bg-blue-800 transition-colors">
              <div className="bg-white/20 p-2.5 rounded-lg flex-shrink-0"><TrendingUp className="w-6 h-6 text-white" /></div>
              <div>
                <div className="font-bold text-white text-base">Serial Marketers</div>
                <div className="text-blue-200 text-sm">Experienced marketers community</div>
              </div>
              <ExternalLink className="w-4 h-4 text-white/60 ml-auto flex-shrink-0" />
            </a>
            <a href="https://lu.ma/aimg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-green-700 rounded-xl p-5 hover:bg-green-800 transition-colors">
              <div className="bg-white/20 p-2.5 rounded-lg flex-shrink-0"><Calendar className="w-6 h-6 text-white" /></div>
              <div>
                <div className="font-bold text-white text-base">AI Insiders Events</div>
                <div className="text-green-200 text-sm">Virtual workshops & networking</div>
              </div>
              <ExternalLink className="w-4 h-4 text-white/60 ml-auto flex-shrink-0" />
            </a>
            <a href="https://www.youtube.com/@aimarketersguild" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-red-700 rounded-xl p-5 hover:bg-red-800 transition-colors">
              <div className="bg-white/20 p-2.5 rounded-lg flex-shrink-0"><Book className="w-6 h-6 text-white" /></div>
              <div>
                <div className="font-bold text-white text-base">AI Insiders Recordings</div>
                <div className="text-red-200 text-sm">Past session replays on YouTube</div>
              </div>
              <ExternalLink className="w-4 h-4 text-white/60 ml-auto flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}