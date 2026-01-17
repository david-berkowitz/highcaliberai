import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { X, Calendar, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-red-600 to-red-700 shadow-2xl border-t border-red-500"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-white font-semibold text-sm sm:text-base">
                  Ready to transform your marketing with AI?
                </p>
                <p className="text-red-100 text-xs sm:text-sm">
                  Schedule a free consultation to discuss your needs
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.calendly.com/dberkowitz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
                >
                  <Calendar className="w-4 h-4" />
                  Book Now
                </a>
                <Link
                  to={createPageUrl("Contact")}
                  className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-400 transition-colors text-sm sm:text-base"
                >
                  Contact
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 text-white hover:bg-red-500 rounded-lg transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}