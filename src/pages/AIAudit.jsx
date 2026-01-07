import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, 
  Target, 
  Users, 
  FileText, 
  Wrench, 
  DollarSign, 
  Settings, 
  BarChart3, 
  Shield, 
  BookOpen,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const questions = [
  {
    id: 1,
    icon: Brain,
    category: "AI Awareness",
    question: "How familiar are you and your team with AI concepts relevant to marketing?",
    description: "Understanding generative AI, agents, predictive analytics, and current AI marketing applications."
  },
  {
    id: 2,
    icon: Target,
    category: "AI Implementation Status",
    question: "To what extent have you integrated AI into your marketing strategies?",
    description: "Current usage of AI tools and technologies across your marketing operations."
  },
  {
    id: 3,
    icon: Users,
    category: "Leadership Support",
    question: "How much support do you have from your leadership team for AI integration?",
    description: "Executive buy-in, budget allocation, and organizational commitment to AI initiatives."
  },
  {
    id: 4,
    icon: FileText,
    category: "Strategic Planning",
    question: "Do you have a clear, documented strategy for AI integration in marketing?",
    description: "Formal plans, policies, and frameworks guiding AI adoption and usage."
  },
  {
    id: 5,
    icon: Wrench,
    category: "In-House Expertise",
    question: "How would you evaluate your team's expertise in AI-related skills?",
    description: "Technical capabilities, prompting skills, and ability to evaluate AI technologies."
  },
  {
    id: 6,
    icon: DollarSign,
    category: "Budget",
    question: "Do you have the budget to test, integrate, build, and buy AI tools?",
    description: "Financial resources allocated for AI experimentation and implementation."
  },
  {
    id: 7,
    icon: Settings,
    category: "Technology Stack",
    question: "Is your technology stack capable of integrating AI tools and solutions?",
    description: "Technical infrastructure and compatibility with AI platforms."
  },
  {
    id: 8,
    icon: BarChart3,
    category: "Performance Metrics",
    question: "Do you track specific metrics to measure AI success and review them regularly?",
    description: "KPIs, measurement frameworks, and regular performance reviews."
  },
  {
    id: 9,
    icon: Shield,
    category: "Risk Management",
    question: "How prepared is your organization to manage AI risks (privacy, ethics)?",
    description: "Data governance, ethical guidelines, and contingency planning."
  },
  {
    id: 10,
    icon: BookOpen,
    category: "Continuous Learning",
    question: "How regularly are you staying up to date on the latest AI developments?",
    description: "Ongoing education, community engagement, and knowledge sharing."
  }
];

const getScoreLevel = (score) => {
  if (score <= 30) return {
    level: "Just Starting",
    color: "from-gray-600 to-gray-700",
    description: "You're at the beginning of your AI journey. Focus on building foundational understanding and identifying key areas.",
    icon: AlertCircle,
    recommendations: [
      "Start experimenting with free AI tools like ChatGPT or Claude",
      "Join the AI Marketers Guild community to learn from peers",
      "Focus on one high-impact use case (e.g., content drafting or research)",
      "Read foundational resources about AI in marketing"
    ]
  };
  if (score <= 60) return {
    level: "Early Stages",
    color: "from-amber-600 to-amber-700",
    description: "You've begun exploring AI but have room for growth. Time to refine your approach and scale what's working.",
    icon: TrendingUp,
    recommendations: [
      "Document your current AI usage and measure time savings",
      "Create formal guidelines for AI usage across your team",
      "Invest in paid AI tools where you see the most value",
      "Conduct an AI audit to identify automation opportunities"
    ]
  };
  if (score <= 80) return {
    level: "Making Progress",
    color: "from-blue-600 to-blue-700",
    description: "You're on your way with AI. Now refine your strategies and leverage AI more effectively across operations.",
    icon: CheckCircle2,
    recommendations: [
      "Build cross-functional AI governance and strategy team",
      "Implement advanced automation and AI agents for repetitive tasks",
      "Develop team training programs and best practice documentation",
      "Explore enterprise AI solutions with better integration capabilities"
    ]
  };
  return {
    level: "Advanced",
    color: "from-green-600 to-green-700",
    description: "You're ahead of your peers. Share this knowledge and continue pushing the boundaries of what's possible.",
    icon: CheckCircle2,
    recommendations: [
      "Document and share your AI success stories with the broader community",
      "Consider speaking or writing about your AI marketing approach",
      "Explore cutting-edge AI applications (agentic workflows, synthetic data)",
      "Partner with AI vendors to shape product roadmaps"
    ]
  };
};

export default function AIAudit() {
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleSliderChange = (questionId, value) => {
    setResponses({ ...responses, [questionId]: value[0] });
  };

  const totalScore = Object.values(responses).reduce((sum, val) => sum + val, 0);
  const allAnswered = Object.keys(responses).length === questions.length;
  const scoreLevel = getScoreLevel(totalScore);

  const handleSubmit = () => {
    if (allAnswered) {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setResponses({});
    setShowResults(false);
    setCurrentStep(0);
  };

  if (showResults) {
    const ScoreIcon = scoreLevel.icon;
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Score Display */}
            <div className={`bg-gradient-to-br ${scoreLevel.color} rounded-3xl p-12 text-white mb-8 text-center shadow-2xl`}>
              <ScoreIcon className="w-20 h-20 mx-auto mb-6 opacity-90" />
              <div className="text-7xl font-bold mb-4">{totalScore}<span className="text-4xl opacity-75">/100</span></div>
              <h2 className="text-3xl font-bold mb-3">{scoreLevel.level}</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                {scoreLevel.description}
              </p>
            </div>

            {/* Recommendations */}
            <Card className="mb-8 border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-7 h-7 text-red-600" />
                  Your Next Steps
                </h3>
                <div className="space-y-4">
                  {scoreLevel.recommendations.map((rec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-100"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{rec}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-center text-white mb-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Take Action?</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your specific AI challenges and build a custom roadmap tailored to your team's needs, tech stack, and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={createPageUrl("Contact")}
                  className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all shadow-xl group"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:david@highcaliberai.com?subject=AI Audit Results - Let's Discuss"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Email David
                </a>
              </div>
            </div>

            {/* Book Section */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Prefer to Explore on Your Own?
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    This assessment is just one chapter from <span className="font-semibold">The Non-Obvious Guide to Using AI for Marketing</span>. Get the complete framework for AI-powered marketing strategy, implementation, and measurement.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://www.amazon.com/Non-Obvious-Guide-Using-Marketing-Transformative/dp/1646871863"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
                    >
                      Buy on Amazon
                    </a>
                    <a
                      href="http://bit.ly/ai-guides"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all"
                    >
                      Free Resources
                    </a>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src="https://highcaliberai.com/wp-content/uploads/2025/07/The-Non-Obvious-Guide-to-Using-AI-for-Marketing-by-David-Berkowitz-193x300.png"
                    alt="The Non-Obvious Guide to Using AI for Marketing"
                    className="w-48 mx-auto md:w-full md:max-w-xs rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button onClick={handleReset} variant="outline" className="text-gray-600">
                Retake Assessment
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Readiness <span className="text-red-600">Assessment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Take this 10-question self-assessment from <span className="font-semibold">The Non-Obvious Guide to Using AI for Marketing</span> to gauge your AI maturity and get personalized recommendations.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full text-red-700 text-sm font-medium">
            <Brain className="w-4 h-4" />
            Takes 3-5 minutes
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {Object.keys(responses).length} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round((Object.keys(responses).length / questions.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(Object.keys(responses).length / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-8 mb-12">
          {questions.map((q, index) => {
            const Icon = q.icon;
            const answered = responses[q.id] !== undefined;
            
            return (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className={`border-2 transition-all ${answered ? 'border-red-200 bg-red-50/30' : 'border-gray-200 hover:border-red-100'}`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${answered ? 'bg-red-600' : 'bg-gray-100'}`}>
                        <Icon className={`w-6 h-6 ${answered ? 'text-white' : 'text-gray-600'}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{q.category}</h3>
                          {answered && (
                            <CheckCircle2 className="w-5 h-5 text-red-600" />
                          )}
                        </div>
                        <p className="text-gray-700 mb-3">{q.question}</p>
                        <p className="text-sm text-gray-500">{q.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between text-sm text-gray-600 font-medium">
                        <span>0 - Not at all</span>
                        <span className="text-red-600 font-bold text-lg">
                          {responses[q.id] !== undefined ? responses[q.id] : '-'}
                        </span>
                        <span>10 - Completely</span>
                      </div>
                      <Slider
                        value={[responses[q.id] || 0]}
                        onValueChange={(value) => handleSliderChange(q.id, value)}
                        max={10}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-400">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <span key={num}>{num}</span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className={`px-12 py-6 text-lg font-semibold rounded-lg transition-all ${
              allAnswered 
                ? 'bg-red-600 hover:bg-red-700 text-white shadow-xl hover:shadow-2xl' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {allAnswered ? 'View My Results' : `Answer All Questions (${Object.keys(responses).length}/${questions.length})`}
            {allAnswered && <ArrowRight className="ml-2 w-5 h-5" />}
          </Button>
          {!allAnswered && (
            <p className="text-sm text-gray-500 mt-3">
              Please complete all {questions.length} questions to see your personalized results
            </p>
          )}
        </div>

        {/* Context Section */}
        <div className="mt-16 pt-12 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            This assessment is based on Chapter 2 of David Berkowitz's book
          </p>
          <p className="text-2xl font-bold text-gray-900 mb-2">
            The Non-Obvious Guide to Using AI for Marketing
          </p>
          <p className="text-gray-500 italic">
            "Be honest. No one will get a perfect score here."
          </p>
        </div>
      </div>
    </div>
  );
}