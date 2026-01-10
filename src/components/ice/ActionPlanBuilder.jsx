import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function ActionPlanBuilder() {
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
      const prompt = `Create a detailed 30-day AI implementation action plan for a ${role} with ${experience} AI experience who wants to ${goal}. 

Structure the plan as follows:
- Week 1: Foundation & Quick Wins
- Week 2: Skill Building
- Week 3: Implementation
- Week 4: Optimization & Scale

For each week, provide:
- 3-4 specific action items
- Tools to use
- Expected outcomes
- Time investment

Make it practical, actionable, and tailored to their role and experience level.`;

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
    element.download = 'ai-implementation-plan.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Card className="bg-white border-2 border-[#E89B1C]/20 shadow-xl">
      <CardContent className="p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Role
            </label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Marketing Manager">Marketing Manager</SelectItem>
                <SelectItem value="Content Marketer">Content Marketer</SelectItem>
                <SelectItem value="CMO">CMO</SelectItem>
                <SelectItem value="Fractional CMO">Fractional CMO</SelectItem>
                <SelectItem value="Marketing Consultant">Marketing Consultant</SelectItem>
                <SelectItem value="Agency Owner">Agency Owner</SelectItem>
                <SelectItem value="Social Media Manager">Social Media Manager</SelectItem>
                <SelectItem value="Growth Marketer">Growth Marketer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Primary Goal
            </label>
            <Select value={goal} onValueChange={setGoal}>
              <SelectTrigger>
                <SelectValue placeholder="What do you want to achieve?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="increase content output by 3x">Increase content output by 3x</SelectItem>
                <SelectItem value="automate repetitive tasks">Automate repetitive tasks</SelectItem>
                <SelectItem value="improve content quality">Improve content quality</SelectItem>
                <SelectItem value="scale personalization">Scale personalization</SelectItem>
                <SelectItem value="reduce manual research time">Reduce manual research time</SelectItem>
                <SelectItem value="improve SEO and visibility">Improve SEO and visibility</SelectItem>
                <SelectItem value="streamline workflow">Streamline workflow</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              AI Experience Level
            </label>
            <Select value={experience} onValueChange={setExperience}>
              <SelectTrigger>
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner (Just started)</SelectItem>
                <SelectItem value="intermediate">Intermediate (Some experience)</SelectItem>
                <SelectItem value="advanced">Advanced (Regular user)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={generatePlan}
            disabled={loading || !role || !goal || !experience}
            className="w-full bg-gradient-to-r from-[#E89B1C] to-[#D88A0A] hover:from-[#D88A0A] hover:to-[#C87A00] text-white py-6 text-lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                Generating Your Plan...
              </>
            ) : (
              'Generate My Action Plan'
            )}
          </Button>

          {plan && (
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-black">Your Personalized Plan</h3>
                <Button
                  onClick={downloadPlan}
                  variant="outline"
                  className="border-[#E89B1C] text-[#E89B1C] hover:bg-orange-50"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download
                </Button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 whitespace-pre-wrap text-sm leading-relaxed">
                {plan}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}