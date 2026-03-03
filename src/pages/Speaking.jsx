import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Calendar, ExternalLink, Mic, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MetaTags from "@/components/SEO/MetaTags";

export default function Speaking() {
  const [selectedYear, setSelectedYear] = useState("all");

  const { data: engagements = [], isLoading } = useQuery({
    queryKey: ['speaking-engagements'],
    queryFn: () => base44.entities.SpeakingEngagement.list('-date'),
    initialData: [],
  });

  const years = ["all", ...new Set(engagements.map(e => new Date(e.date).getFullYear()))];
  
  const filteredEngagements = selectedYear === "all" 
    ? engagements 
    : engagements.filter(e => new Date(e.date).getFullYear() === parseInt(selectedYear));

  const groupedByYear = filteredEngagements.reduce((acc, eng) => {
    const year = new Date(eng.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(eng);
    return acc;
  }, {});

  const roleColors = {
    "Keynote": "bg-red-100 text-red-700",
    "Speaker": "bg-blue-100 text-blue-700",
    "Panelist": "bg-green-100 text-green-700",
    "Moderator": "bg-purple-100 text-purple-700",
    "Guest Lecture": "bg-amber-100 text-amber-700"
  };

  return (
    <div className="min-h-screen bg-white">
      <MetaTags 
        title="Speaking Engagements - David Berkowitz"
        description="David Berkowitz's speaking history on AI marketing, digital strategy, and marketing innovation. 400+ speaking engagements at industry events, universities, and executive forums."
        image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693b1c5eede2934f1ee50170/eebbb17c5_dbforbes.jpg"
        url="https://highcaliberai.com/speaking"
      />

      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-red-100 border border-red-200">
              <Mic className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-900 tracking-wide">400+ Speaking Engagements</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Speaking <span className="text-red-600">Engagements</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
              Keynotes, panels, and workshops on AI marketing, digital strategy, and marketing innovation at industry events, universities, and executive forums worldwide
            </p>
            <p className="text-sm text-gray-500 max-w-3xl mx-auto mb-4">
              (Showing recent highlights—view complete history on David's <a href="https://serialmarketer.net/contact/speaking/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 underline">speaking page</a>)
            </p>
            <div className="mb-8">
              <Link
                to={createPageUrl("GuestLectures")}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-sm font-medium hover:bg-amber-200 transition-colors"
              >
                🎓 View University & College Guest Lectures
              </Link>
            </div>

            {/* Year Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedYear === year
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {year === "all" ? "All Years" : year}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speaking Engagements Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {isLoading ? (
            <div className="text-center py-20">
              <p className="text-gray-500">Loading speaking engagements...</p>
            </div>
          ) : (
            Object.keys(groupedByYear).sort((a, b) => b - a).map((year) => (
              <div key={year} className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 sticky top-24 bg-white py-4 z-10">
                  {year}
                </h2>
                <div className="space-y-4">
                  {groupedByYear[year].map((engagement, index) => (
                    <motion.div
                      key={engagement.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-200">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-center min-w-[100px]">
                                <div className="text-xs text-red-600 font-semibold mb-1">
                                  {new Date(engagement.date).toLocaleDateString('en-US', { month: 'short' })}
                                </div>
                                <div className="text-2xl font-bold text-red-600">
                                  {new Date(engagement.date).getDate()}
                                </div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <h3 className="text-xl font-bold text-gray-900">{engagement.event_name}</h3>
                                <Badge className={`${roleColors[engagement.role]} flex-shrink-0`}>
                                  {engagement.role}
                                </Badge>
                              </div>
                              <p className="text-gray-700 mb-3">{engagement.title}</p>
                              {engagement.url && (
                                <a
                                  href={engagement.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
                                >
                                  Event Details
                                  <ExternalLink className="ml-1 w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Event Organizers Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-4 italic">
                "That session was awesome -- truly! Would love to have you share what you see as new/next with our community WHENEVER you feel inspired. I wrote down multiple things I'll be digging into personally."
              </blockquote>
              <p className="font-semibold text-gray-900 text-sm">Sam Lee</p>
              <p className="text-gray-600 text-xs">Founder, IndeCollective</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-4 italic">
                "You have an incredible ability to make AI accessible, practical and fun! Thanks for joining our podcast!"
              </blockquote>
              <p className="font-semibold text-gray-900 text-sm">Tessa Burg</p>
              <p className="text-gray-600 text-xs">ModOp</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-4 italic">
                "We truly appreciated the time and effort you put into preparing and presenting such a great interactive session. We had 260 attendees to this session, and the audience was really engaged!"
              </blockquote>
              <p className="font-semibold text-gray-900 text-sm">Sally Word</p>
              <p className="text-gray-600 text-xs">Digital Marketing Manager, AARP</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-4 italic">
                "Your willingness to come out and help with an amazing day of content for HSMAI Curate was invaluable. You were the perfect closing keynote. You struck just the right tone after a day long of action packed content."
              </blockquote>
              <p className="font-semibold text-gray-900 text-sm">David Atkins</p>
              <p className="text-gray-600 text-xs">HSMAI Curate</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-4 italic">
                "Very good of you to come speak, and to share SO MUCH helpful material. I am sure everyone was really impressed, and I know they found it incredibly valuable."
              </blockquote>
              <p className="font-semibold text-gray-900 text-sm">Ruth Stevens</p>
              <p className="text-gray-600 text-xs">NYU Stern</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-4 italic">
                "Thanks again for coming to share your thoughts on AI in marketing with my team. They found you approachable and relatable, and loved your advice on which tools to use."
              </blockquote>
              <p className="font-semibold text-gray-900 text-sm">Aurelie Guerreri</p>
              <p className="text-gray-600 text-xs">CMO, DataDome</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-4 italic">
                "David, thank you again for a fantastic session. I have received a lot of great feedback about it, including from our CIO. The tips and tricks were excellent, and the case studies provided some new ideas on how folks could integrate generative AI into their projects."
              </blockquote>
              <p className="font-semibold text-gray-900 text-sm">Dylan O'Brien</p>
              <p className="text-gray-600 text-xs">Agile Delivery Lead, AARP</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <blockquote className="text-gray-700 mb-4 italic">
                "Thanks for such an engaging presentation! You've certainly managed to take daunting information and make it so interesting and accessible!"
              </blockquote>
              <p className="font-semibold text-gray-900 text-sm">Patricia Raufer</p>
              <p className="text-gray-600 text-xs">Executive Forum, May 2025</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Mic className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Book David for Your Event
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Looking for a speaker on AI marketing, digital strategy, or marketing innovation? Let's discuss how David can add value to your event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact for Speaking
              </Link>
              <a
                href="https://serialmarketer.net/contact/speaking/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-400 transition-colors"
              >
                View Speaking Info
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}