import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, ExternalLink } from "lucide-react";

const EVENTS = [
  {
    month: "March",
    events: [
      { dates: "March 10–11", name: "CTV World Summit", location: "London, UK", href: "https://www.ctvworldsummit.com/" },
      { dates: "March 10–11", name: "Marketecture Live", location: "New York City, NY", href: "https://www.marketecture.tv/" },
      { dates: "March 10–12", name: "Enterprise Connect", location: "Las Vegas, NV", href: "https://www.enterpriseconnect.com/" },
      { dates: "March 18–19", name: "ARF Advertising X Science", location: "New York, NY", href: "https://thearf.org/" },
      { dates: "March 18–19", name: "Advertising Economic Forum", location: "New York City, NY", href: null, discount: '25% off with code "FriendsofRose"' },
      { dates: "March 23–24", name: "RevvedUP", location: "St. Pete, FL", href: "https://www.revvedup.com/", discount: "10% off with code RUPREFER10" },
      { dates: "March 23–27", name: "CERAWeek", location: "Houston, TX", href: "https://ceraweek.com/" },
      { dates: "March 24–26", name: "Shoptalk", location: "Las Vegas, NV", href: "https://shoptalk.com/" },
      { dates: "March 25–26", name: "ANA Media", location: "Nashville, TN", href: "https://www.ana.net/" },
      { dates: "March 31", name: "IAB Public Policy & Legal Summit", location: "Washington, DC", href: "https://www.iab.com/events/" },
      { dates: "March 31", name: "Jounce Media Summit", location: "New York City, NY", href: "https://jouncemedia.com/" },
    ]
  },
  {
    month: "April",
    events: [
      { dates: "April 18–22", name: "NAB Show", location: "Las Vegas, NV", href: "https://www.nabshow.com/" },
      { dates: "April 27–29", name: "Possible", location: "Miami, FL", href: "https://possible.com/" },
      { dates: "April 28–30", name: "IACC Annual Conference", location: "Orlando, FL", href: "https://www.iaccconference.org/" },
    ]
  },
  {
    month: "May",
    events: [
      { dates: "May 11–13", name: "OOH Media Conference", location: "Dallas, TX", href: "https://www.oaaa.org/" },
    ]
  },
  {
    month: "June",
    events: [
      { dates: "June 16–19", name: "StreamTV", location: "Denver, CO", href: "https://www.streamtvinnovations.com/" },
      { dates: "June 22–26", name: "Cannes Lions", location: "Cannes, France", href: "https://www.canneslions.com/" },
    ]
  },
  {
    month: "October",
    events: [
      { dates: "October 20–23", name: "ANA Masters of Marketing", location: "Orlando, FL", href: "https://www.ana.net/" },
    ]
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Industry <span className="font-semibold text-red-600">Events Calendar</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Key marketing and media events for 2026. Great for networking, learning, and visibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events by Month */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {EVENTS.map((group, i) => (
            <motion.div
              key={group.month}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-5 border-b border-gray-200 pb-2">
                {group.month} 2026
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.events.map((event) => {
                  const Wrapper = event.href ? "a" : "div";
                  const wrapperProps = event.href
                    ? { href: event.href, target: "_blank", rel: "noopener noreferrer" }
                    : {};
                  return (
                    <Wrapper key={event.name} {...wrapperProps} className="group block">
                      <Card className="bg-white border-gray-200 hover:border-red-400 hover:shadow-md transition-all duration-200 h-full">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <p className="text-xs font-semibold text-red-600 mb-1">{event.dates}</p>
                              <h3 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                                {event.name}
                              </h3>
                              <p className="text-xs text-gray-500 mt-0.5">{event.location}</p>
                              {event.discount && (
                                <p className="text-xs text-green-700 bg-green-50 border border-green-200 rounded px-2 py-1 mt-2 font-medium">
                                  🎟 {event.discount}
                                </p>
                              )}
                            </div>
                            {event.href && (
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1 text-gray-400" />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Wrapper>
                  );
                })}
              </div>
            </motion.div>
          ))}

          <p className="text-center text-sm text-gray-500 mt-4">More events will be added as they're confirmed.</p>
        </div>
      </section>
    </div>
  );
}