import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BookOpen, FileText } from 'lucide-react';
import { createPageUrl } from '../utils';
import { PersonStructuredData, OrganizationStructuredData } from '@/components/SEO/StructuredData';
import MetaTags from '@/components/SEO/MetaTags';
import AgentChat from '@/components/AgentChat';
import BylinesCarousel from '@/components/BylinesCarousel';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="AI Marketing Strategy & Fractional CMO Services"
        description="Real-world AI strategy for B2B marketing leaders. Fractional CMO services, team training, and managed AI pilots. Founded by David Berkowitz, author and AI Marketers Guild founder."
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/eebbb17c5_dbforbes.jpg"
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
            <div className="flex justify-center mb-16">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png" 
                alt="High Caliber AI" 
                className="h-24 w-auto"
                loading="eager"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-[1.1] tracking-tight">
              Real-World AI Strategy.
            </h1>
            
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-red-600 leading-[1.15] tracking-tight">
                No Science Fiction.
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-14 leading-relaxed font-light">
              I partner with B2B marketing leaders to bridge the gap between buying tools and getting results, combining fractional leadership, applied training, and safe execution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link 
                to={createPageUrl('Services')}
                className="inline-flex items-center px-10 py-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all group"
              >
                View Capabilities
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to={createPageUrl('About')}
                className="inline-flex items-center px-10 py-4 border border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-900 hover:text-white transition-all"
              >
                Meet David
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "7,000+", label: "Guild Members" },
              { number: "100+", label: "Workshops Delivered" },
              { number: "20+", label: "Years in Marketing" },
              { number: "250+", label: "Published Bylines" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-red-400">{stat.number}</div>
                <div className="text-sm text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* David Berkowitz Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 border border-red-600 text-red-600 text-xs font-medium tracking-wider uppercase mb-8">
                Community-Tested. Agency-Vetted.
              </div>
              
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-10 leading-tight tracking-tight">
                David Berkowitz
              </h2>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  David Berkowitz doesn't just consult on AI; he uses it to drive GTM strategy. He founded AI Marketers Guild and Serial Marketers (sold to Marketecture Media in 2025, where he serves as Chief Community Officer), tracking what's actually working for 7,000+ peers. He combines that community intelligence with decades of executive experience (360i, Sysomos, Publicis Groupe) to help you skip the "hype cycle" and move straight to revenue.
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
                  alt="David Berkowitz - AI Marketing Strategist and Fractional CMO" 
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Our <span className="font-semibold text-red-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Comprehensive AI marketing solutions tailored for B2B tech companies and agencies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-lg p-10 border border-gray-200 hover:border-red-600 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-red-600 flex items-center justify-center mb-8">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                Fractional GTM Leadership
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
                Don't just get a plan; get a partner. I embed with your team to modernize your GTM strategy, overseeing the tech stack, talent alignment, and execution. (Includes my proprietary AI Readiness Audit as the diagnostic starting point).
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-500 font-light">
                  <span className="w-1.5 h-1.5 bg-red-600 mr-3"></span>
                  Tech Stack Audit
                </li>
                <li className="flex items-center text-sm text-gray-500 font-light">
                  <span className="w-1.5 h-1.5 bg-red-600 mr-3"></span>
                  Talent Alignment
                </li>
                <li className="flex items-center text-sm text-gray-500 font-light">
                  <span className="w-1.5 h-1.5 bg-red-600 mr-3"></span>
                  GTM Strategy
                </li>
              </ul>
            </div>
            
            <div className="group bg-white rounded-lg p-10 border border-gray-200 hover:border-red-600 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-red-600 flex items-center justify-center mb-8">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                Team Activation & Training
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
                Strategy fails without skills. I run Applied Workshops that force your team to use AI on live campaigns—building muscle memory and immediate output, not just theory.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-500 font-light">
                  <span className="w-1.5 h-1.5 bg-red-600 mr-3"></span>
                  Applied Workshops
                </li>
                <li className="flex items-center text-sm text-gray-500 font-light">
                  <span className="w-1.5 h-1.5 bg-red-600 mr-3"></span>
                  Live Campaign Work
                </li>
                <li className="flex items-center text-sm text-gray-500 font-light">
                  <span className="w-1.5 h-1.5 bg-red-600 mr-3"></span>
                  Skill Building
                </li>
              </ul>
            </div>
            
            <div className="group bg-white rounded-lg p-10 border border-gray-200 hover:border-red-600 transition-all hover:shadow-xl">
              <div className="w-14 h-14 bg-red-600 flex items-center justify-center mb-8">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                Managed Innovation Pilots
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
                Move fast without breaking things. I oversee high-impact pilots like AI Search Visibility (GEO) and Content Scaling, bringing in my technical partners to handle the wiring while I ensure it hits your KPIs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-500 font-light">
                  <span className="w-1.5 h-1.5 bg-red-600 mr-3"></span>
                  AI Search Visibility
                </li>
                <li className="flex items-center text-sm text-gray-500 font-light">
                  <span className="w-1.5 h-1.5 bg-red-600 mr-3"></span>
                  Content Scaling
                </li>
                <li className="flex items-center text-sm text-gray-500 font-light">
                  <span className="w-1.5 h-1.5 bg-red-600 mr-3"></span>
                  KPI Tracking
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to={createPageUrl('Services')}
              className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all group"
            >
              View All Capabilities
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-16 text-center tracking-tight">
            What People Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "A smart, practical, and refreshingly honest guide, full of real-world applications without the hype. Very on-brand for David Berkowitz, who always simplifies the complex."
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">Sarah Hofstetter</p>
                <p className="text-gray-600 text-sm">President, Profitero & Board Member, Campbell Soup Company</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "David's an innovative thinker and a true pleasure to work with. He's always ahead of the curve and tuned into what's next and what's new. He's pragmatic, sharp, and brings an energy every team wishes they had more of."
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">Leo Morejon</p>
                <p className="text-gray-600 text-sm">Director of Social & Influencer, Hormel Foods</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "In a world with lots of AI fluff, AIMG keeps it real...by helping members learn from each other and experts who are on the cutting edge."
              </blockquote>
              <div>
                <p className="font-semibold text-gray-900">Brad Mehl</p>
                <p className="text-gray-600 text-sm">Managing Director, Boundless Markets</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
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

      {/* Book Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1.5 bg-red-600 text-white text-xs font-medium tracking-wider uppercase mb-6">
                Featured Book
              </div>
              
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
                The Non-Obvious Guide to Using AI for Marketing
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                The playbook for the modern CMO. A practical guide to evaluating tools, avoiding "vaporware," and building the operational muscle your team needs to survive 2026.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.amazon.com/Non-Obvious-Guide-AI-Marketing-Guides/dp/1646871863/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all"
                >
                  Buy on Amazon
                </a>
                <a 
                  href="https://www.highcaliberai.com/resources"
                  className="inline-flex items-center px-8 py-3 border border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-900 hover:text-white transition-all"
                >
                  Free Resources
                </a>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/324737b14_IMG_4434.jpg"
                alt="The Non-Obvious Guide to Using AI for Marketing book by David Berkowitz - learn practical AI strategies for modern marketers"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Trusted by AI Pioneers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-20">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/a73caf28d_image.png" alt="Twin Galaxies" className="h-12 mx-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/05e61e07e_image.png" alt="MadTech.AI" className="h-12 mx-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/916f7f775_image.png" alt="Mediaocean" className="h-12 mx-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/115c61a35_image.png" alt="Augie" className="h-12 mx-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/a1888e9a8_image.png" alt="Nomix Group" className="h-12 mx-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Featured In
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/141df5a5e_image.png" alt="AdAge" className="h-8 mx-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/6cc991648_image.png" alt="MarketWatch" className="h-8 mx-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/a07bd6b26_image.png" alt="USA Today" className="h-8 mx-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/72f8513e3_image.png" alt="Forbes" className="h-8 mx-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/9885fb33d_image.png" alt="VentureBeat" className="h-8 mx-auto grayscale hover:grayscale-0 transition-all" loading="lazy" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 bg-red-600 text-white text-xs font-medium tracking-wider uppercase mb-6">
            Free Self-Assessment
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Not Ready for a Retainer?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
            Take the AI Readiness Assessment and get instant, personalized recommendations for your marketing team.
          </p>
          
          <Link 
            to={createPageUrl('ZAIAudit')}
            className="inline-flex items-center px-10 py-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all group"
          >
            Check Your AI Readiness
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Bylines Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Published <span className="text-red-600">Bylines</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Featured articles and thought leadership across leading publications
            </p>
            <Link to={createPageUrl("Bylines")}>
              <Button variant="outline" className="gap-2">
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <BylinesCarousel />
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <a
                href="https://www.aibriefnewsletter.com/p/when-the-fire-horse-comes-for-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                      AI Brief Newsletter
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    When the Fire Horse Comes for AI
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    What does Chinese astrology tell us about how to prepare for the year ahead?
                  </p>

                  <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span>Feb 19, 2026</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <a
                href="https://www.aibriefnewsletter.com/p/don-t-be-my-ai-valentine"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                      AI Brief Newsletter
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    Don't Be My AI Valentine
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    What can go wrong when going on a date with an AI girlfriend at a real NYC wine bar?
                  </p>

                  <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span>Feb 12, 2026</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <a
                href="https://www.aibriefnewsletter.com/p/the-emperor-s-new-clawds-a-claw-tionary-tale"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                      AI Brief Newsletter
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    The Emperor's New Clawds: A Claw-tionary Tale
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    Your 5-step plan for not getting worked up over agents that created their own religion
                  </p>

                  <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span>Feb 5, 2026</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <a
                href="https://www.aibriefnewsletter.com/p/ai-brief-vibe-coding-for-good"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                      AI Brief Newsletter
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    AI Brief: Vibe Coding for Good
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    When it feels like the world's gone completely mad, could AI be a part of the solution?
                  </p>

                  <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span>Jan 29, 2026</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <a
                href="https://www.aibriefnewsletter.com/p/ai-brief-claude-1-vibe-coder-0"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                      AI Brief Newsletter
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    AI Brief: Claude 1, Vibe Coder 0
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    Claude Code won this round, but intrepid vibe coders must live to see another day
                  </p>

                  <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span>Jan 22, 2026</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <a
                href="https://www.aibriefnewsletter.com/p/ai-brief-talking-and-talking-and-talking-shop"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                      AI Brief Newsletter
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    AI Brief: Talking and Talking and Talking Shop
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    The barriers preventing AI-powered shopping are melting away
                  </p>

                  <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span>Jan 15, 2026</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <a
                href="https://www.aibriefnewsletter.com/p/ai-brief-the-yet-another-year-of-ai-at-ces"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                      AI Brief Newsletter
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    AI Brief: The (Yet Another) Year of AI at CES
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    What does CES 2026 tell us about where AI is headed this year?
                  </p>

                  <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span>Jan 8, 2026</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <a
                href="https://www.aibriefnewsletter.com/p/ai-brief-what-feels-like-magic"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                      AI Brief Newsletter
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    AI Brief: What Feels Like Magic?
                  </h3>

                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    Let's savor this moment where AI can still deliver a sense of wonder
                  </p>

                  <div className="flex items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span>Dec 18, 2025</span>
                  </div>
                </div>
              </a>
            </div>

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