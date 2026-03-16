import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Star
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MetaTags from "@/components/SEO/MetaTags";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

const faqTop = [
  {
    q: "What kind of AI training does David Berkowitz offer?",
    a: "David offers keynote presentations, half-day workshops, full-day team intensives, multi-session enablement programs, and a self-paced online course. Every live session is hands-on and customized to the team's actual workflows and campaigns."
  },
  {
    q: "Does David speak at conferences and industry events?",
    a: "Yes. David has delivered 400+ speaking engagements across marketing conferences, corporate offsites, and industry summits. Topics range from AI strategy for marketing leaders to hands-on vibe coding workshops."
  },
  {
    q: "Can David's workshops be customized for specific industries?",
    a: "Absolutely. Sessions have been adapted for B2B tech, CPG brands, agencies, political campaigns, financial services, and more. David tailors examples, tools, and exercises to the audience's vertical and use cases."
  },
  {
    q: "How is this different from a typical AI training vendor?",
    a: "David runs AI Marketers Guild, a 7,000+ member community of working marketers — so every session reflects what's actually working in the field right now, not vendor talking points or generic frameworks."
  }
];

const faqBottom = [
  {
    q: "How far in advance should I book David for a workshop or keynote?",
    a: "For conference keynotes, 6–8 weeks minimum is recommended. For corporate workshops, 2–3 weeks is usually sufficient for scoping and customization."
  },
  {
    q: "What's included in a workshop engagement?",
    a: "All sessions include pre-session scoping, customized content and exercises for your team, a copy of The Non-Obvious Guide to Using AI for Marketing for each participant, and post-session resources. Multi-session programs include between-session check-ins."
  },
  {
    q: "Is there a self-paced option for teams that can't schedule a live session?",
    a: "Yes — The Non-Obvious Guide online course covers the same core frameworks as the live workshops for $39, with lifetime access and an AI-powered Q&A assistant."
  },
  {
    q: "How do I get a quote for a workshop or keynote?",
    a: "Just send a note via the contact page with your event type, audience size, and timeline. No lengthy intake forms — most inquiries get a response within one business day."
  }
];

function FAQSection({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="bg-white border-2 border-red-200 rounded-xl p-6 max-w-4xl mx-auto space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between text-left gap-4"
          >
            <h3 className="font-bold text-gray-900 text-sm md:text-base">{item.q}</h3>
            {open === i ? <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />}
          </button>
          {open === i && (
            <p className="text-gray-700 mt-2 text-sm leading-relaxed">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}

const formats = [
  {
    label: "Keynote",
    duration: "45–90 min",
    title: "The AI-Ready Marketing Team",
    desc: "A fast, high-energy session that reframes how your audience thinks about AI — not as a threat or a toy, but as a leverage multiplier. Perfect for conferences, summits, and executive offsites. Leaves the room with a clear mental model and three things they can do on Monday.",
    popular: false
  },
  {
    label: "Half-Day Workshop",
    duration: "3–4 hrs",
    title: "From Tools to Results",
    desc: "Your team has probably tried a few AI tools. This session figures out why they're not sticking — and fixes it. Hands-on, fast-moving, built around your team's actual campaigns. Everyone leaves with something they made.",
    popular: false
  },
  {
    label: "Full-Day Intensive",
    duration: "6–7 hrs",
    title: "AI Team Activation",
    desc: "Morning: landscape and strategy. Afternoon: hands-on build with real campaigns. Role-specific breakouts for content, demand gen, and leadership tracks. Teams typically have working AI workflows by end of day.",
    popular: true
  },
  {
    label: "Multi-Session Series",
    duration: "Custom",
    title: "Ongoing Enablement",
    desc: "For organizations that want real transformation, not a one-day event. A series of sessions over weeks or months, with between-session accountability and progress tracking. Custom-scoped.",
    popular: false
  }
];

const verticals = [
  "B2B Tech & SaaS",
  "Consumer Packaged Goods",
  "Agencies & Consultancies",
  "Political & Advocacy Campaigns",
  "Financial Services & Fintech",
  "Media & Publishing"
];

const topics = [
  "AI Strategy for Marketing Leaders",
  "Prompting That Actually Works",
  "Content at Scale Without Losing Your Voice",
  "AI for Demand Generation",
  "Building an AI-Ready Marketing Team",
  "GEO & AI Search Visibility",
  "Vibe Coding for Marketers",
  "AI Tools Landscape: What to Buy, What to Skip",
  "Measuring AI ROI",
  "Ethics & Risk in AI Marketing",
  "AI for CPG & Retail",
  "AI for Political Campaigns"
];

const testimonials = [
  {
    quote: "A smart, practical, and refreshingly honest guide, full of real-world applications without the hype. Very on-brand for David Berkowitz, who always simplifies the complex.",
    name: "Sarah Hofstetter",
    title: "President, Profitero & Board Member, Campbell Soup Company"
  },
  {
    quote: "David's an innovative thinker and a true pleasure to work with. He's always ahead of the curve and tuned into what's next and what's new. He's pragmatic, sharp, and brings an energy every team wishes they had more of.",
    name: "Leo Morejon",
    title: "Director of Social & Influencer, Hormel Foods"
  },
  {
    quote: "In a world with lots of AI fluff, AIMG keeps it real...by helping members learn from each other and experts who are on the cutting edge.",
    name: "Brad Mehl",
    title: "Managing Director, Boundless Markets"
  },
  {
    quote: "AIMG is where I learn from serious practitioners which AI tools and platforms are ready for use now. This saves me so much time and frustration!",
    name: "Chris Perkins",
    title: "President, Model B"
  }
];

export default function Training() {
  const { data: engagements = [] } = useQuery({
    queryKey: ["speaking-engagements"],
    queryFn: () => base44.entities.SpeakingEngagement.list("-date", 50),
  });

  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="AI Training, Workshops & Speaking — David Berkowitz"
        description="Book David Berkowitz for AI marketing keynotes, half-day workshops, and full-day team intensives. 400+ speaking engagements. Customized for your team and vertical."
        url="https://highcaliberai.com/training"
        canonical="https://highcaliberai.com/training"
      />

      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(239 68 68) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-red-100 border border-red-200">
              <GraduationCap className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-900 tracking-wide">AI Marketing Education</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Book David for Your Next<br />Event or Workshop.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Keynotes, half-day workshops, and full-day team intensives — built around what your marketing team actually needs to do with AI in 2026. No fluff, no theory. Just practical sessions your team will still be talking about next quarter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Top FAQ */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <FAQSection items={faqTop} />
      </section>

      {/* Section 1: What David Delivers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What David Delivers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Every session is modular, customized, and built to fit your team and timeline.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {formats.map((f) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-red-500 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">{f.label}</span>
                        <span className="ml-2 text-xs text-gray-500">· {f.duration}</span>
                      </div>
                      {f.popular && (
                        <Badge className="bg-red-600 text-white text-xs flex items-center gap-1">
                          <Star className="w-3 h-3 fill-white" /> Most Popular
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Vibe Coding Spotlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50 border-y border-red-100">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-red-600 text-white text-sm font-medium">
              Featured Workshop
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vibe Coding for Marketers — The Workshop Everyone's Talking About.
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              No code required. In this half-day or full-day session, your team learns to build real, working AI-powered tools — using nothing but natural language and the right AI models. Marketers leave having actually built something: a campaign dashboard, a content tool, a research automator. It's the most hands-on session David runs, and right now it's the one teams are requesting most.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "No coding background needed",
                "Build real tools, not toy demos",
                "Works for any marketing function",
                "Teams of 5 to 500",
                "Available as a standalone session or add-on to any workshop"
              ].map((pt) => (
                <li key={pt} className="flex items-center gap-2 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0"></span>
                  {pt}
                </li>
              ))}
            </ul>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Ask About Vibe Coding Workshops
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Verticals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Every Industry Has Different AI Challenges. Sessions Are Built Around Yours.
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            David has run workshops for teams across a wide range of verticals. The tools, examples, exercises, and case studies are customized to your world — not recycled from a generic deck.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {verticals.map((v) => (
              <span key={v} className="px-5 py-2.5 bg-gray-900 text-white font-medium rounded-full text-sm">
                {v}
              </span>
            ))}
          </div>
          <p className="text-gray-600 italic">
            Don't see your vertical? If your marketing team uses campaigns, content, and data — there's a session that fits.{" "}
            <Link to={createPageUrl("Contact")} className="text-red-600 hover:underline font-medium">Reach out and we'll scope it.</Link>
          </p>
        </div>
      </section>

      {/* Section 4: Why It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Built on 7,000+ data points</h3>
                <p className="text-gray-600 leading-relaxed">
                  David runs AI Marketers Guild, the largest community of AI-focused marketers. Every session reflects what's actually working across hundreds of teams right now.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">No demo-ware</h3>
                <p className="text-gray-600 leading-relaxed">
                  Participants use real AI tools on real campaigns during the session. The outputs are things you can actually ship.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comes with the book</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every attendee gets a copy of The Non-Obvious Guide to Using AI for Marketing to keep after the session.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Topics David Covers</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((t) => (
              <span key={t} className="px-4 py-2 bg-gray-100 border border-gray-200 text-gray-800 font-medium rounded-full text-sm hover:bg-red-50 hover:border-red-300 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What People Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-gray-200">
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</blockquote>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-gray-600 text-sm">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Past Engagements */}
      {engagements.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Past Engagements</h2>
            <div className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
              {engagements.map((e) => (
                <div key={e.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4 bg-white hover:bg-gray-50 transition-colors">
                  <div>
                    <span className="font-semibold text-gray-900">{e.event_name}</span>
                    {e.title && <span className="text-gray-500 ml-2 text-sm">— {e.title}</span>}
                  </div>
                  <div className="flex items-center gap-4 text-sm flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full font-medium">{e.role}</span>
                    {e.date && (
                      <span className="text-gray-500">
                        {format(new Date(e.date), 'MMM d, yyyy')}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom FAQ */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <FAQSection items={faqBottom} />
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-14 h-14 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Book?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sessions are scoped to your team, timeline, and goals. Reach out with your event type, audience size, and dates — most inquiries get a response within one business day.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center px-10 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Inquire About Speaking & Training
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Self-paced callout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <BookOpen className="w-10 h-10 text-red-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Can't Book a Live Session Right Now?</h3>
          <p className="text-gray-400 mb-6">
            The self-paced online course covers the same frameworks as the live workshops — at your own pace, for $39.
          </p>
          <Link
            to={createPageUrl("Course")}
            className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
          >
            Enroll for $39
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}