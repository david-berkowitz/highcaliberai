import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function LuxuryActionPlanBuilder() {
  const [role, setRole] = useState('');
  const [goal, setGoal] = useState('');
  const [experience, setExperience] = useState('');
  const [plan, setPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    if (!role || !goal || !experience) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const prompt = `Create a detailed 30-day AI implementation action plan for a luxury real estate ${role} with ${experience} AI experience who wants to ${goal}. 

Structure the plan as follows:
- Week 1: Foundation & Quick Wins
- Week 2: Skill Building
- Week 3: Implementation
- Week 4: Optimization & Scale

For each week, provide:
- 3-4 specific action items tailored to luxury real estate
- AI tools to use (focusing on high-end client experience and marketing)
- Expected outcomes
- Time investment

Make it practical, actionable, and tailored to their role in luxury real estate and their AI experience level. Focus on high-touch client experiences, premium marketing materials, and sophisticated client relationship management.`;

      const response = await base44.integrations.Core.InvokeLLM({
        prompt: prompt,
        add_context_from_internet: false
      });

      setPlan(response);
    } catch (error) {
      console.error('Error generating plan:', error);
      alert('Failed to generate plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const downloadPlan = () => {
    const element = document.createElement('a');
    const file = new Blob([plan], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'luxury-real-estate-ai-plan.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#D4AF37]/30 shadow-2xl backdrop-blur-sm rounded-none">
      <CardContent className="p-10">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-light text-white mb-3 tracking-wide">
              Your Role
            </label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="bg-white/5 border-[#D4AF37]/30 text-white rounded-none h-12">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-[#D4AF37]/30 rounded-none">
                <SelectItem value="Luxury Real Estate Agent" className="text-white hover:bg-[#D4AF37]/20">Luxury Real Estate Agent</SelectItem>
                <SelectItem value="Real Estate Broker" className="text-white hover:bg-[#D4AF37]/20">Real Estate Broker</SelectItem>
                <SelectItem value="Sales Associate" className="text-white hover:bg-[#D4AF37]/20">Sales Associate</SelectItem>
                <SelectItem value="Team Leader" className="text-white hover:bg-[#D4AF37]/20">Team Leader</SelectItem>
                <SelectItem value="Brokerage Manager" className="text-white hover:bg-[#D4AF37]/20">Brokerage Manager</SelectItem>
                <SelectItem value="Marketing Director" className="text-white hover:bg-[#D4AF37]/20">Marketing Director</SelectItem>
                <SelectItem value="Property Developer" className="text-white hover:bg-[#D4AF37]/20">Property Developer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-light text-white mb-3 tracking-wide">
              Primary Goal
            </label>
            <Select value={goal} onValueChange={setGoal}>
              <SelectTrigger className="bg-white/5 border-[#D4AF37]/30 text-white rounded-none h-12">
                <SelectValue placeholder="What do you want to achieve?" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-[#D4AF37]/30 rounded-none">
                <SelectItem value="enhance property marketing with AI-generated visuals and virtual tours" className="text-white hover:bg-[#D4AF37]/20">Enhance property marketing materials</SelectItem>
                <SelectItem value="automate client communication and follow-ups" className="text-white hover:bg-[#D4AF37]/20">Automate client communication</SelectItem>
                <SelectItem value="create personalized luxury property presentations" className="text-white hover:bg-[#D4AF37]/20">Personalized property presentations</SelectItem>
                <SelectItem value="improve client database management and targeting" className="text-white hover:bg-[#D4AF37]/20">Database management & targeting</SelectItem>
                <SelectItem value="optimize online presence and SEO for luxury properties" className="text-white hover:bg-[#D4AF37]/20">SEO & online visibility</SelectItem>
                <SelectItem value="streamline market research and trend analysis" className="text-white hover:bg-[#D4AF37]/20">Market research & analysis</SelectItem>
                <SelectItem value="scale high-touch client service with AI assistance" className="text-white hover:bg-[#D4AF37]/20">Scale premium client service</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-light text-white mb-3 tracking-wide">
              AI Experience Level
            </label>
            <Select value={experience} onValueChange={setExperience}>
              <SelectTrigger className="bg-white/5 border-[#D4AF37]/30 text-white rounded-none h-12">
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-[#D4AF37]/30 rounded-none">
                <SelectItem value="beginner" className="text-white hover:bg-[#D4AF37]/20">Beginner (Just started)</SelectItem>
                <SelectItem value="intermediate" className="text-white hover:bg-[#D4AF37]/20">Intermediate (Some experience)</SelectItem>
                <SelectItem value="advanced" className="text-white hover:bg-[#D4AF37]/20">Advanced (Regular user)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={generatePlan}
            disabled={loading || !role || !goal || !experience}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] text-black py-7 text-base font-light tracking-widest rounded-none"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                GENERATING YOUR PLAN...
              </>
            ) : (
              'GENERATE MY ACTION PLAN'
            )}
          </Button>

          {plan && (
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-light text-white tracking-wide">Your Personalized Plan</h3>
                <Button
                  onClick={downloadPlan}
                  variant="outline"
                  className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-none font-light tracking-wider"
                >
                  <Download className="mr-2 w-4 h-4" />
                  DOWNLOAD
                </Button>
              </div>
              <div className="bg-white/5 border border-[#D4AF37]/20 p-6 rounded-none whitespace-pre-wrap text-sm leading-relaxed text-white/90 font-light">
                {plan}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}