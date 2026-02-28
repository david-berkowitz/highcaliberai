import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AgenticROICalculator() {
  const [inputs, setInputs] = useState({
    teamSize: 10,
    avgSalary: 75000,
    autoHours: 8,
    agentCost: 499
  });
  const [results, setResults] = useState(null);

  const calculate = () => {
    const hourlyRate = inputs.avgSalary / 2080;
    const weeklyTimeSaved = inputs.teamSize * inputs.autoHours;
    const annualHoursSaved = weeklyTimeSaved * 52;
    const annualSalarySaved = annualHoursSaved * hourlyRate;
    const annualAgentCost = inputs.agentCost * 12;
    const netROI = annualSalarySaved - annualAgentCost;
    const roiPercent = ((netROI / annualAgentCost) * 100).toFixed(0);

    setResults({ weeklyTimeSaved, annualHoursSaved, annualSalarySaved, annualAgentCost, netROI, roiPercent });
  };

  const fmt = (n) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-[#0d0b1f] text-white">
      <section className="pt-24 pb-12 px-4 text-center max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Agent ROI Calculator</h1>
          <p className="text-xl text-gray-300">
            Estimate the potential time and cost savings from automating tasks with AI agents.
          </p>
        </motion.div>
      </section>

      <section className="px-4 pb-24 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="border border-purple-800/40 bg-[#1a1535] rounded-xl p-8 space-y-8">
          {[
            { icon: <Users className="w-5 h-5 text-purple-400" />, label: "Number of Team Members", key: "teamSize", min: 1, max: 500, step: 1 },
            { icon: <DollarSign className="w-5 h-5 text-purple-400" />, label: "Average Annual Salary ($)", key: "avgSalary", min: 30000, max: 300000, step: 5000 },
            { icon: <Clock className="w-5 h-5 text-purple-400" />, label: "Automatable Hours per Week", key: "autoHours", min: 1, max: 40, step: 1 },
            { icon: <DollarSign className="w-5 h-5 text-purple-400" />, label: "Monthly Agent Solution Cost ($)", key: "agentCost", min: 0, max: 10000, step: 50 }
          ].map(({ icon, label, key, min, max, step }) => (
            <div key={key}>
              <label className="flex items-center gap-2 text-sm font-medium mb-3">
                {icon} {label}
              </label>
              <input
                type="range"
                min={min} max={max} step={step}
                value={inputs[key]}
                onChange={(e) => setInputs({ ...inputs, [key]: Number(e.target.value) })}
                className="w-full mb-2 accent-purple-500"
              />
              <div className="flex justify-between text-sm text-gray-400">
                <span>{min.toLocaleString()}</span>
                <span className="font-bold text-white text-lg">{inputs[key].toLocaleString()}</span>
                <span>{max.toLocaleString()}</span>
              </div>
            </div>
          ))}

          <Button onClick={calculate} className="w-full bg-purple-600 hover:bg-purple-700 py-3 text-lg gap-2">
            <TrendingUp className="w-5 h-5" /> Calculate My ROI
          </Button>
        </div>

        {/* Results */}
        <div className="border border-purple-800/40 bg-[#1a1535] rounded-xl p-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-8">Your Potential Annual ROI</h2>
          {results ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full space-y-6">
              <div className="text-center mb-6">
                <p className="text-gray-400 mb-2">Net Annual ROI</p>
                <p className={`text-5xl font-bold ${results.netROI >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {fmt(results.netROI)}
                </p>
                <p className="text-gray-400 mt-2">{results.roiPercent}% return on investment</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                {[
                  { label: "Hours Saved/Week", value: results.weeklyTimeSaved.toLocaleString() + " hrs" },
                  { label: "Hours Saved/Year", value: results.annualHoursSaved.toLocaleString() + " hrs" },
                  { label: "Annual Labor Value", value: fmt(results.annualSalarySaved) },
                  { label: "Annual Agent Cost", value: fmt(results.annualAgentCost) }
                ].map(({ label, value }) => (
                  <div key={label} className="bg-[#0d0b1f] rounded-lg p-4">
                    <p className="text-gray-400 text-xs mb-1">{label}</p>
                    <p className="font-bold text-purple-300">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="text-center text-gray-500">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p>Your results will appear here once you've filled out the form and clicked "Calculate".</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}