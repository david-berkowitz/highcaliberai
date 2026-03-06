import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, Linkedin, Mail, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import StickyCTA from "./components/StickyCTA";
import GlobalSearch from "./components/GlobalSearch";
import OrganizationSchema from "./components/SEO/OrganizationSchema";

export default function Layout({ children, currentPageName }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect uppercase/mixed-case paths to lowercase for canonical SEO
  useEffect(() => {
    const path = location.pathname;
    const lowered = path.toLowerCase();
    if (path !== lowered) {
      navigate(lowered + location.search, { replace: true });
    }
  }, [location.pathname]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.knock-ai.com/ad256bf8-8420-4958-a1dd-31d3d0c27d51.js';
    script.async = true;
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  const primaryNavLinks = [
    { name: "Home", page: "Home" },
    { name: "About", page: "About" },
    { 
      name: "Capabilities", 
      page: "Services",
      subMenu: [
        { name: "Overview", page: "Services" },
        { name: "Case Studies", page: "CaseStudies" },
        { name: "Speaking", page: "Speaking" },
        { name: "BD", page: "BD" }
      ]
    },
    { 
      name: "Training", 
      page: "Training",
      subMenu: [
        { name: "All Programs", page: "Training" },
        { name: "Book Course", page: "CourseHome" },
        { name: "CPG Brands", page: "CPG" },
        { name: "Political Campaigns", page: "Politics" },
        { name: "Corporate Teams", page: "WorkshopShowcase" }
      ]
    },
    { 
      name: "Resources", 
      page: "Resources",
      subMenu: [
        { name: "Resource Library", page: "Resources" },
        { name: "Blog", page: "Blog" },
        { name: "AI News", page: "AINews" },
        { name: "Bylines", page: "Bylines" },
        { name: "Book", page: "Book" },
        { name: "Press", page: "Press" },
        { name: "Meet a Mensch", page: "Mensch" },
        { name: "The Marketing Hustle", page: "Hustle" }
      ]
    },
    { 
      name: "Partners", 
      page: "Partners",
      subMenu: [
        { name: "Partner Marketplace", page: "Partners" },
        { name: "Submit Your Listing", page: "PartnerSubmit" },
        { name: "Partner FAQ", page: "PartnerFAQ" },
      ]
    },
    { name: "Contact", page: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <OrganizationSchema />
      <StickyCTA />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/2679ed99d_highcaliberaibiggerlogo.png"
                alt="High Caliber AI"
                className="h-10 w-auto"
                loading="lazy"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {primaryNavLinks.map((link) => (
                link.subMenu ? (
                  <div key={link.page} className="relative group">
                    <Link
                      to={createPageUrl(link.page)}
                      className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                        currentPageName === link.page || link.subMenu.some(sub => sub.page === currentPageName)
                          ? "text-red-600"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {link.subMenu.map((subLink) => (
                        <Link
                          key={subLink.page}
                          to={createPageUrl(subLink.page)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className={`text-sm font-medium transition-colors ${
                      currentPageName === link.page
                        ? "text-red-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
                <button
                  onClick={() => setSearchOpen(true)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <a
                  href="https://www.linkedin.com/in/dberkowitz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:david@highcaliberai.com"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-y-auto max-h-[80vh]"
            >
              <div className="px-4 py-3 space-y-1">
                {primaryNavLinks.map((link) => (
                  <div key={link.page}>
                    {link.subMenu ? (
                      <button
                        onClick={() => setExpandedMobileMenu(expandedMobileMenu === link.page ? null : link.page)}
                        className={`w-full flex items-center justify-between py-3 text-base font-medium ${
                          currentPageName === link.page || link.subMenu.some(s => s.page === currentPageName)
                            ? "text-red-600" : "text-gray-700"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedMobileMenu === link.page ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <Link
                        to={createPageUrl(link.page)}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-3 text-base font-medium ${
                          currentPageName === link.page ? "text-red-600" : "text-gray-700"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                    <AnimatePresence>
                      {link.subMenu && expandedMobileMenu === link.page && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-gray-50 rounded-lg mb-1 overflow-hidden"
                        >
                          {link.subMenu.map((subLink) => (
                            <Link
                              key={subLink.page}
                              to={createPageUrl(subLink.page)}
                              onClick={() => { setMobileMenuOpen(false); setExpandedMobileMenu(null); }}
                              className={`block px-4 py-2.5 text-sm border-b border-gray-100 last:border-0 ${
                                currentPageName === subLink.page ? "text-red-600 font-medium" : "text-gray-600"
                              }`}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="flex items-center space-x-4 pt-3 pb-2 border-t border-gray-100 mt-2">
                  <a href="https://www.linkedin.com/in/dberkowitz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:david@highcaliberai.com" className="text-gray-400 hover:text-gray-600">
                    <Mail className="w-5 h-5" />
                  </a>
                  <Link to={createPageUrl("Contact")} onClick={() => setMobileMenuOpen(false)}
                    className="ml-auto px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Global Search */}
      <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
              <div className="h-14 mb-4 flex items-center">
                <span className="text-2xl font-light text-white tracking-tight">High Caliber AI</span>
              </div>
              <p className="text-sm text-gray-400 font-semibold">
                Applied AI for Marketing
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/dberkowitz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors p-3 hover:bg-gray-800 rounded-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <Link
                to={createPageUrl("Contact")}
                className="text-gray-400 hover:text-red-500 transition-colors p-3 hover:bg-gray-800 rounded-lg"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400 text-center mb-4 leading-relaxed">
              David Berkowitz: Founder of <a href="https://www.aimarketersguild.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">AI Marketers Guild</a> (7,000+ Members). Author of <a href="https://www.amazon.com/Non-Obvious-Guide-AI-Marketing-Guides/dp/1646871863/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">The Non-Obvious Guide to Using AI for Marketing</a>.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 max-w-4xl mx-auto">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Services</h3>
                <div className="space-y-1">
                  <Link to={createPageUrl("Services")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Overview</Link>
                  <Link to={createPageUrl("CaseStudies")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Case Studies</Link>
                  <Link to={createPageUrl("WorkshopShowcase")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Training</Link>
                  <Link to={createPageUrl("Speaking")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Speaking</Link>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Resources</h3>
                <div className="space-y-1">
                  <Link to={createPageUrl("Resources")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Tools & Guides</Link>
                  <Link to={createPageUrl("Blog")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Blog</Link>
                  <Link to={createPageUrl("AINews")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">AI News</Link>
                  <Link to={createPageUrl("Book")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Book</Link>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Company</h3>
                <div className="space-y-1">
                  <Link to={createPageUrl("About")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">About David</Link>
                  <Link to={createPageUrl("Contact")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Contact</Link>
                  <Link to={createPageUrl("Partners")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Partners</Link>
                  <Link to={createPageUrl("ZAIAudit")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">AI Audit</Link>
                  <Link to={createPageUrl("PartnerListingsAdmin")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Partner Admin</Link>
                  <Link to={createPageUrl("AdminHub")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Admin Hub</Link>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">More</h3>
                <div className="space-y-1">
                  <Link to={createPageUrl("IC")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">IndeCollective</Link>
                  <Link to={createPageUrl("Jobs")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Job Resources</Link>
                  <Link to={createPageUrl("Lux")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Luxury Outlook</Link>
                  <Link to={createPageUrl("FOAF")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">FOAF</Link>
                  <Link to={createPageUrl("Hustle")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">The Marketing Hustle</Link>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Agentic Agency</h3>
                <div className="space-y-1">
                  <Link to={createPageUrl("AgenticAgency")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Hub</Link>
                  <Link to={createPageUrl("AgenticQuickStart")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Quick Start Guide</Link>
                  <Link to={createPageUrl("AgenticAssessment")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Assessment</Link>
                  <Link to={createPageUrl("AgenticROICalculator")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">ROI Calculator</Link>
                  <Link to={createPageUrl("AgenticClientScorecard")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Client Scorecard</Link>
                  <Link to={createPageUrl("AgenticUseCaseLibrary")} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">Use Case Library</Link>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium text-center">
              © {new Date().getFullYear()} High Caliber AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}