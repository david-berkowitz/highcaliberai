import React from "react";
import { motion } from "framer-motion";

const trustedLogos = [
  { name: "Twin Galaxies", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/a73caf28d_image.png" },
  { name: "MadTech.AI", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/05e61e07e_image.png" },
  { name: "Mediaocean", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/916f7f775_image.png" },
  { name: "Augie", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/115c61a35_image.png" },
  { name: "Nomix Group", url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/a1888e9a8_image.png" },
];

const featuredLogos = [
  { name: "AdAge", placeholder: "AdAge" },
  { name: "Marketing Week", placeholder: "MW" },
  { name: "Forbes", placeholder: "Forbes" },
  { name: "WSJ", placeholder: "WSJ" },
  { name: "TechCrunch", placeholder: "TC" },
  { name: "MarTech", placeholder: "MT" },
];

export default function TrustedBySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-lg font-semibold text-gray-500 mb-8">
            Trusted by AI Pioneers
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {trustedLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <img src={logo.url} alt={logo.name} className="h-full w-auto object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured In */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center pt-12 border-t border-gray-200"
        >
          <p className="text-sm font-medium text-gray-400 mb-3">
            Providing Market Reality Checks For:
          </p>
          <h3 className="text-lg font-semibold text-gray-500 mb-8">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {featuredLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-24 h-12 flex items-center justify-center"
              >
                <span className="text-xl font-bold text-gray-300">{logo.placeholder}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}