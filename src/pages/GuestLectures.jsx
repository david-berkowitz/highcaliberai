import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { GraduationCap, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MetaTags from "@/components/SEO/MetaTags";

const LECTURES = [
  {
    school: "Baruch College (CUNY)",
    department: "Department of Communication Studies",
    topic: "Advertising Account Management",
    notes: "Interactive guest lecture with a live game component covering best practices in client-agency relationships, account management strategy, and modern advertising workflows.",
    link: createPageUrl("Baruch"),
    linkLabel: "View Lecture Page",
    internal: true,
  },
  {
    school: "NYU Stern School of Business",
    department: "Marketing",
    topic: "AI & Digital Marketing",
    notes: "Shared AI tools, frameworks, and practical marketing applications with MBA students and faculty.",
    quote: "Very good of you to come speak, and to share SO MUCH helpful material. I am sure everyone was really impressed, and I know they found it incredibly valuable.",
    quoteAttr: "Ruth Stevens, NYU Stern",
  },
  {
    school: "Columbia University",
    department: "Graduate School of Journalism / Business",
    topic: "Digital & AI Marketing Strategy",
    notes: "Guest lecture on emerging AI tools and marketing strategy for graduate students.",
  },
  {
    school: "Syracuse University",
    department: "S.I. Newhouse School of Public Communications",
    topic: "Digital Marketing & AI",
    notes: "Presentation on AI's impact on advertising and communications for students in one of the top communications programs in the country.",
  },
];

export default function GuestLectures() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <MetaTags
        title="University Guest Lectures - David Berkowitz"
        description="David Berkowitz's guest lectures at universities and colleges on AI marketing, digital strategy, and advertising. Schools include Baruch College, NYU Stern, Columbia, and more."
        url="https://highcaliberai.com/guest-lectures"
      />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 rounded-full bg-red-100 border border-red-200">
              <GraduationCap className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium text-red-900 tracking-wide">University & College Guest Lectures</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Guest <span className="text-red-600">Lectures</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
              Bringing real-world AI marketing experience into the classroom — covering strategy, tools, and the future of the industry.
            </p>
            <Link
              to={createPageUrl("Speaking")}
              className="text-red-600 hover:text-red-700 font-medium text-sm inline-flex items-center gap-1"
            >
              ← Back to all speaking engagements
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lectures Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {LECTURES.map((lecture, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="border border-gray-200 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center">
                        <GraduationCap className="w-7 h-7 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">{lecture.school}</h2>
                      {lecture.department && (
                        <p className="text-sm text-gray-500 font-medium mb-3">{lecture.department}</p>
                      )}
                      <div className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                        {lecture.topic}
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{lecture.notes}</p>

                      {lecture.quote && (
                        <blockquote className="border-l-4 border-red-200 pl-4 italic text-gray-600 text-sm mb-4">
                          "{lecture.quote}"
                          <span className="block not-italic font-semibold text-gray-700 mt-1 text-xs">— {lecture.quoteAttr}</span>
                        </blockquote>
                      )}

                      {lecture.link && (
                        lecture.internal ? (
                          <Link
                            to={lecture.link}
                            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm"
                          >
                            {lecture.linkLabel}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        ) : (
                          <a
                            href={lecture.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm"
                          >
                            {lecture.linkLabel}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Invite David to Your Campus</h2>
          <p className="text-red-100 mb-8 text-lg">
            Available for guest lectures, workshops, and seminars on AI marketing, digital strategy, and the future of marketing. Great for marketing, communications, business, and journalism programs.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}