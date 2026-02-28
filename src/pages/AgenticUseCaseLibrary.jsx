import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const impactColors = { High: "bg-green-900/40 text-green-300 border-green-700", Medium: "bg-yellow-900/40 text-yellow-300 border-yellow-700", Low: "bg-gray-800 text-gray-300 border-gray-600" };
const effortColors = { High: "bg-red-900/40 text-red-300 border-red-700", Medium: "bg-orange-900/40 text-orange-300 border-orange-700", Low: "bg-blue-900/40 text-blue-300 border-blue-700" };
const levelColors = { Beginner: "bg-green-900/40 text-green-300", Intermediate: "bg-yellow-900/40 text-yellow-300", Advanced: "bg-red-900/40 text-red-300" };

export default function AgenticUseCaseLibrary() {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("all");
  const [func, setFunc] = useState("all");
  const [level, setLevel] = useState("all");
  const [impact, setImpact] = useState("all");

  const { data: useCases = [], isLoading } = useQuery({
    queryKey: ["agenticUseCases"],
    queryFn: () => base44.entities.AgenticUseCase.list("-impact", 200)
  });

  const industries = ["all", ...new Set(useCases.map(u => u.industry).filter(Boolean))].sort();
  const functions = ["all", ...new Set(useCases.map(u => u.function).filter(Boolean))].sort();

  const filtered = useCases.filter(u => {
    const matchSearch = !search || u.title?.toLowerCase().includes(search.toLowerCase()) || u.description?.toLowerCase().includes(search.toLowerCase());
    const matchIndustry = industry === "all" || u.industry === industry;
    const matchFunc = func === "all" || u.function === func;
    const matchLevel = level === "all" || u.level === level;
    const matchImpact = impact === "all" || u.impact === impact;
    return matchSearch && matchIndustry && matchFunc && matchLevel && matchImpact;
  });

  return (
    <div className="min-h-screen bg-[#0d0b1f] text-white">
      <section className="pt-24 pb-12 px-4 text-center max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="w-16 h-16 bg-purple-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">📚</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Agent Use Case Library</h1>
          <p className="text-xl text-gray-300">
            Find inspiration from {useCases.length}+ real-world AI agent examples.
          </p>
        </motion.div>
      </section>

      <section className="px-4 pb-24 max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex-1 min-w-48">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search use cases..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-[#1a1535] border-purple-800/40 text-white placeholder:text-gray-500"
            />
          </div>
          {[
            { label: "All Industries", value: industry, onChange: setIndustry, options: industries },
            { label: "All Functions", value: func, onChange: setFunc, options: functions },
            { label: "All Levels", value: level, onChange: setLevel, options: ["all", "Beginner", "Intermediate", "Advanced"] },
            { label: "All Impacts", value: impact, onChange: setImpact, options: ["all", "High", "Medium", "Low"] }
          ].map(({ label, value, onChange, options }) => (
            <Select key={label} value={value} onValueChange={onChange}>
              <SelectTrigger className="w-44 bg-[#1a1535] border-purple-800/40 text-white">
                <SelectValue placeholder={label} />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1535] border-purple-800/40 text-white">
                {options.map(opt => (
                  <SelectItem key={opt} value={opt} className="hover:bg-purple-900/30">
                    {opt === "all" ? label : opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}
        </div>

        <p className="text-gray-400 mb-6">{filtered.length} use cases found</p>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border border-purple-800/40 bg-[#1a1535] rounded-xl p-6 h-48 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((uc, i) => (
              <motion.div
                key={uc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.5) }}
                className="border border-purple-800/40 bg-[#1a1535] rounded-xl p-6 flex flex-col hover:border-purple-500 transition-colors"
              >
                <h3 className="font-bold text-lg mb-3">{uc.title}</h3>
                <p className="text-gray-400 text-sm flex-1 mb-4">{uc.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="text-xs bg-purple-900/40 text-purple-300 border border-purple-700/40 px-2 py-1 rounded">
                    {uc.industry}
                  </span>
                  <span className="text-xs bg-gray-800 text-gray-300 border border-gray-700 px-2 py-1 rounded">
                    {uc.function}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className={`text-xs border px-2 py-1 rounded ${impactColors[uc.impact] || ""}`}>
                    Impact: {uc.impact}
                  </span>
                  <span className={`text-xs border px-2 py-1 rounded ${effortColors[uc.effort] || ""}`}>
                    Effort: {uc.effort}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${levelColors[uc.level] || "bg-gray-800 text-gray-300"}`}>
                    {uc.level}
                  </span>
                </div>
                {(uc.time || uc.size) && (
                  <div className="flex gap-3 mt-3 text-xs text-gray-500">
                    {uc.time && <span>⏱ {uc.time}</span>}
                    {uc.size && <span>👥 {uc.size}</span>}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}