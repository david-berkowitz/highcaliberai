import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, CheckCircle2 } from 'lucide-react';
import { createPageUrl } from '../utils';
import { PersonStructuredData, OrganizationStructuredData } from '@/components/SEO/StructuredData';
import MetaTags from '@/components/SEO/MetaTags';
import AgentChat from '@/components/AgentChat';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { data: recentPosts = [] } = useQuery({
    queryKey: ['recent-blog-posts'],
    queryFn: async () => {
      const posts = await base44.entities.BlogPost.filter({ published: true }, '-published_date', 3);
      return posts;
    },
  });

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const existing = await base44.entities.EmailSubscriber.filter({ email });
      if (existing.length > 0) {
        const sub = existing[0];
        const segments = Array.from(new Set([...(sub.segments || []), 'newsletter']));
        await base44.entities.EmailSubscriber.update(sub.id, { segments });
      } else {
        await base44.entities.EmailSubscriber.create({
          email,
          source: 'homepage',
          segments: ['newsletter'],
          status: 'active',
        });
      }
      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      console.error('Newsletter signup error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="High Caliber AI – Applied AI for Marketing"
        description="David Berkowitz helps B2B marketing teams adopt AI that actually works. Fractional CMO, team training & managed pilots. Founder of AI Marketers Guild (7,000+ members). No hype, just results."
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png"
        url="https://highcaliberai.com"
        canonical="https://highcaliberai.com"
      />
      <PersonStructuredData />
      <OrganizationStructuredData />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-40">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-50 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Real-World AI Strategy.
            </h1>
            
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-red-600 leading-[1.15] tracking-tight">
                No Science Fiction.
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-14 leading-relaxed font-light">
              Your team is sitting on AI tools they don't actually use. I fix that — through workshops, training, and a community of 7,000+ marketers who've already figured it out.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4">
              <Link 
                to={createPageUrl('AgenticAssessment')}
                className="inline-flex items-center px-10 py-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all group"
              >
                Check Your AI Readiness
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to={createPageUrl('Training')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors underline"
              >
                Browse Training & Workshops
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "7,000+", label: "Guild Members" },
              { number: "100+", label: "Workshops Delivered" },
              { number: "250+", label: "Published Bylines" },
              { number: "20+", label: "Years in Marketing" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-red-400">{stat.number}</div>
                <div className="text-sm text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Can Help Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              How I Can <span className="font-semibold text-red-600">Help</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Three ways to get your team actually using AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-10 border-2 border-gray-200 hover:border-red-600 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-red-600 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                AI Workshops & Training
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Half-day and full-day workshops that get your team actually using AI on live campaigns — not just watching demos. Book me for your next offsite, summit, or internal training day.
              </p>
              <Link 
                to={createPageUrl('Training')}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-all group"
              >
                See What's Available
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-10 border-2 border-gray-200 hover:border-red-600 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-red-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                AI Readiness Assessment
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Not sure where your team stands? Start here. Free 10-minute self-assessment, personalized roadmap delivered instantly — no call required.
              </p>
              <Link 
                to={createPageUrl('AgenticAssessment')}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-all group"
              >
                Take the Assessment
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-10 border-2 border-gray-200 hover:border-red-600 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-red-600 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                Vetted AI Partners
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Need an agency or tool you can trust? Browse my personally curated directory. Free for buyers, no cost ever.
              </p>
              <Link 
                to={createPageUrl('Partners')}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-all group"
              >
                Browse the Directory
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                The playbook CMOs are actually using.
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The Non-Obvious Guide to Using AI for Marketing cuts through the hype and gives you a practical framework for evaluating tools, building team skills, and showing ROI. Used in workshops across the country.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.amazon.com/Non-Obvious-Guide-AI-Marketing-Guides/dp/1646871863/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all"
                >
                  Get It on Amazon
                </a>
                <Link 
                  to={createPageUrl('WorkshopShowcase')}
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-900 hover:text-white transition-all"
                >
                  Use It in a Workshop
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/324737b14_IMG_4434.jpg"
                alt="The Non-Obvious Guide to Using AI for Marketing book by David Berkowitz"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About David Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-10 leading-tight tracking-tight">
                David Berkowitz
              </h2>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  David Berkowitz has delivered AI workshops for marketing teams across the country. He founded AI Marketers Guild — 7,000+ members strong — and sold Serial Marketers to Marketecture in 2025. He's not here to tell you AI is changing everything. He's here to show your team what to actually do about it.
                </p>
                
                <div className="flex flex-col gap-4 py-6 border-y border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2.5 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-gray-900">The Leader:</span>
                      <span className="text-gray-700"> Fractional CMO for AI-forward firms.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2.5 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-gray-900">The Pragmatist:</span>
                      <span className="text-gray-700"> Author of The Non-Obvious Guide to Using AI for Marketing.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2.5 flex-shrink-0"></div>
                    <div>
                      <span className="font-bold text-gray-900">The Connector:</span>
                      <span className="text-gray-700"> Founder of AIMG & Serial Marketers.</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link 
                to={createPageUrl('About')}
                className="inline-flex items-center mt-8 px-8 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-all group"
              >
                Learn More About David
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl rotate-3 opacity-20"></div>
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/ae6a23b64_1.png" 
                  alt="David Berkowitz - AI Marketing Strategist" 
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Get smarter about AI for marketing.
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Practical tips, tool recommendations, and resources — straight from someone who's actually using this stuff. No hype, no fluff. Join the list.
          </p>
          
          {isSubscribed ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-green-900 font-medium">Thanks for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-red-600 hover:bg-red-700"
              >
                {isSubmitting ? 'Joining...' : 'Join the List'}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 flex flex-col">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Find a Vetted AI Partner</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">Browse personally curated agencies, tools, and consultants. Free for buyers — no cost, ever.</p>
              <Link to={createPageUrl("Partners")} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-sm">
                Browse Partners <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 flex flex-col">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">List Your Services — $49</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">Get in front of David's audience of 7,000+ marketers. One-time fee, lifetime listing, personally reviewed.</p>
              <Link to={createPageUrl("PartnerSubmit")} className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors text-sm">
                Submit a Listing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-16 text-center tracking-tight">
            What People Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "A smart, practical, and refreshingly honest guide, full of real-world applications without the hype. Very on-brand for David Berkowitz, who always simplifies the complex."
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">Sarah Hofstetter</p>
                <p className="text-gray-600 text-sm">President, Profitero & Board Member, Campbell Soup Company</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "David's an innovative thinker and a true pleasure to work with. He's always ahead of the curve and tuned into what's next and what's new. He's pragmatic, sharp, and brings an energy every team wishes they had more of."
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">Leo Morejon</p>
                <p className="text-gray-600 text-sm">Director of Social & Influencer, Hormel Foods</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "In a world with lots of AI fluff, AIMG keeps it real...by helping members learn from each other and experts who are on the cutting edge."
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">Brad Mehl</p>
                <p className="text-gray-600 text-sm">Managing Director, Boundless Markets</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "AIMG is where I learn from serious practitioners which AI tools and platforms are ready for use now. This saves me so much time and frustration!"
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">Chris Perkins</p>
                <p className="text-gray-600 text-sm">President, Model B</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Writing Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
              Recent Writing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {recentPosts.map((post) => (
              <Link 
                key={post.id}
                to={createPageUrl(`Article?slug=${post.slug}`)}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-400 hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    {new Date(post.published_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="text-red-600 group-hover:underline">Read More</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to={createPageUrl('Blog')}
              className="inline-flex items-center text-gray-900 font-medium hover:text-red-600 transition-colors"
            >
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-4 tracking-tight">
            Running an AI workshop or summit? Let's talk.
          </h2>
          <Link
            to={createPageUrl('Contact')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all"
          >
            Inquire About Speaking & Training
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <AgentChat 
        agentName="ai_marketing_advisor"
        title="AI Marketing Advisor"
        subtitle="Ask me anything about AI strategy"
      />
    </div>
  );
}