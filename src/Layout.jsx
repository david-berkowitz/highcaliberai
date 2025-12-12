import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", page: "Home" },
    { name: "About", page: "About" },
    { name: "Services", page: "Services" },
    { name: "Contact", page: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
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
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
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
              ))}
              <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
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
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-base font-medium ${
                      currentPageName === link.page
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <a
                    href="https://www.linkedin.com/in/dberkowitz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:david@highcaliberai.com"
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

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
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500 font-medium">
              © {new Date().getFullYear()} High Caliber AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}