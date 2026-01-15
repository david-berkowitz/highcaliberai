import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BookOpen, FileText } from 'lucide-react';
import { createPageUrl } from '../utils';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-20">
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
                I partner with B2B marketing leaders to bridge the gap between "buying tools" and "getting results"—combining fractional leadership, applied training, and safe execution.
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

        {/* David Berkowitz Section */}
        <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
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
                    David Berkowitz doesn't just "consult" on AI; he uses it to drive GTM strategy. As the founder of the AI Marketers Guild, he tracks what's actually working for 7,000+ peers. He combines that community intelligence with decades of executive experience (360i, Sysomos, MADTECH.AI) to help you skip the "hype cycle" and move straight to revenue.
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
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/eebbb17c5_dbforbes.jpg" 
                    alt="David Berkowitz Speaking" 
                    className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 lg:py-32 bg-gray-50">
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
            
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 font-light italic">
                "David's an innovative thinker and a true pleasure to work with. He's always ahead of the curve and tuned into what's next and what's new. He's pragmatic, sharp, and brings an energy every team wishes they had more of."
              </blockquote>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-gray-900">Leo Morejon</p>
                  <p className="text-gray-600 text-sm">Director of Social & Influencer, Hormel Foods</p>
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
                  alt="The Non-Obvious Guide to Using AI for Marketing"
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
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
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/a73caf28d_image.png" alt="Twin Galaxies" className="h-12 mx-auto grayscale hover:grayscale-0 transition-all" />
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/05e61e07e_image.png" alt="MadTech.AI" className="h-12 mx-auto grayscale hover:grayscale-0 transition-all" />
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/916f7f775_image.png" alt="Mediaocean" className="h-12 mx-auto grayscale hover:grayscale-0 transition-all" />
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/115c61a35_image.png" alt="Augie" className="h-12 mx-auto grayscale hover:grayscale-0 transition-all" />
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/a1888e9a8_image.png" alt="Nomix Group" className="h-12 mx-auto grayscale hover:grayscale-0 transition-all" />
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
              Featured In
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/141df5a5e_image.png" alt="AdAge" className="h-8 mx-auto grayscale hover:grayscale-0 transition-all" />
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/6cc991648_image.png" alt="MarketWatch" className="h-8 mx-auto grayscale hover:grayscale-0 transition-all" />
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/a07bd6b26_image.png" alt="USA Today" className="h-8 mx-auto grayscale hover:grayscale-0 transition-all" />
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/72f8513e3_image.png" alt="Forbes" className="h-8 mx-auto grayscale hover:grayscale-0 transition-all" />
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/9885fb33d_image.png" alt="VentureBeat" className="h-8 mx-auto grayscale hover:grayscale-0 transition-all" />
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
              to={createPageUrl('AIAudit')}
              className="inline-flex items-center px-10 py-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-all group"
            >
              Check Your AI Readiness
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">High Caliber AI</h3>
                <p className="text-gray-400 text-sm">
                  Real-World AI Strategy. No Science Fiction.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to={createPageUrl('Services')} className="text-gray-400 hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to={createPageUrl('About')} className="text-gray-400 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to={createPageUrl('AIAudit')} className="text-gray-400 hover:text-white transition-colors">
                      AI Readiness Audit
                    </Link>
                  </li>
                  <li>
                    <Link to={createPageUrl('Jobs')} className="text-gray-400 hover:text-white transition-colors">
                      Job Resources
                    </Link>
                  </li>
                  <li>
                    <Link to={createPageUrl('Lux')} className="text-gray-400 hover:text-white transition-colors">
                      Luxury Outlook
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://www.linkedin.com/in/dberkowitz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="mailto:david@highcaliberai.com" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} High Caliber AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}