import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Mail, 
  MapPin, 
  ExternalLink,
  ArrowRight,
  Mic
} from "lucide-react";

const resources = [
  { name: "AI Marketing Guides", url: "http://bit.ly/ai-guides" },
  { name: "AI Resource List", url: "https://bit.ly/ai-resource-list" },
  { name: "Speaking Information", url: "https://serialmarketer.net/contact/speaking/" },
];

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's <span className="text-red-600">Connect</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your marketing with AI? Schedule a consultation or reach out directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Schedule Meeting Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-red-600 rounded-2xl p-8 lg:p-12 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Schedule a Meeting</h2>
              <p className="text-red-100 mb-8 leading-relaxed">
                Book a consultation directly with David to discuss your AI marketing needs.
              </p>
              <a
                href="https://www.calendly.com/dberkowitz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors group"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a 
                      href="mailto:david@highcaliberai.com" 
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      david@highcaliberai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">New York, NY</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Resources</h3>
                <div className="space-y-3">
                  {resources.map((resource) => (
                    <a
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-red-600 hover:text-red-700 transition-colors group"
                    >
                      {resource.name}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Speaking Engagements
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              For speaking opportunities and detailed information about David's presentations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-8 border border-gray-700"
          >
            <div className="flex items-start">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                <Mic className="w-7 h-7 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Speaking History & Details</h3>
                <p className="text-gray-400 mb-6">
                  View David's complete speaking history, topics, and testimonials from past events.
                </p>
                <a
                  href="https://serialmarketer.net/contact/speaking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors group"
                >
                  View Speaking History
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}