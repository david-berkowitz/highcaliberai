import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";

const MONTH_ORDER = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function Events() {
  const { data: events = [], isLoading } = useQuery({
    queryKey: ["calendar-events"],
    queryFn: () => base44.entities.CalendarEvent.list("start_date", 200),
  });

  const grouped = events.reduce((acc, event) => {
    const key = event.month_group;
    if (!acc[key]) acc[key] = { year: event.year || 2026, items: [] };
    acc[key].items.push(event);
    return acc;
  }, {});

  const sortedGroups = Object.entries(grouped).sort(([a], [b]) =>
    MONTH_ORDER.indexOf(a) - MONTH_ORDER.indexOf(b)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Industry <span className="font-semibold text-red-600">Events Calendar</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Key marketing and media events for 2026. Great for networking, learning, and visibility.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-red-600" />
            </div>
          ) : (
            <>
              {sortedGroups.map(([month, { year, items }], i) => (
                <motion.div
                  key={month}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-5 border-b border-gray-200 pb-2">
                    {month} {year}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((event) => {
                      const Wrapper = event.href ? "a" : "div";
                      const wrapperProps = event.href
                        ? { href: event.href, target: "_blank", rel: "noopener noreferrer" }
                        : {};
                      return (
                        <Wrapper key={event.id} {...wrapperProps} className="group block">
                          <Card className="bg-white border-gray-200 hover:border-red-400 hover:shadow-md transition-all duration-200 h-full">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                  <p className="text-xs font-semibold text-red-600 mb-1">{event.dates_display}</p>
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
            </>
          )}
        </div>
      </section>
    </div>
  );
}