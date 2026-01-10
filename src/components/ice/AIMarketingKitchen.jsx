import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChefHat, CheckCircle, XCircle } from 'lucide-react';

const scenarios = [
  {
    challenge: "You need to analyze customer sentiment across 10,000 social media posts",
    options: ["Perplexity", "ChatGPT API", "Manual spreadsheet"],
    correct: 1,
    explanation: "ChatGPT API can process large volumes of text data programmatically for sentiment analysis."
  },
  {
    challenge: "Create a personalized video message for 500 customers",
    options: ["Canva", "HeyGen", "Record individually"],
    correct: 1,
    explanation: "HeyGen specializes in creating personalized AI video content at scale."
  },
  {
    challenge: "You need to monitor how AI search engines are referencing your brand",
    options: ["Google Alerts", "Otterly AI", "Manual checking"],
    correct: 1,
    explanation: "Otterly AI is specifically designed to track AI engine mentions and brand visibility."
  },
  {
    challenge: "Build automated workflows connecting 5 marketing tools",
    options: ["Zapier", "n8n", "Manual data entry"],
    correct: 1,
    explanation: "n8n offers powerful workflow automation with better AI integration capabilities."
  }
];

export default function AIMarketingKitchen() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowResult(true);
    
    if (optionIndex === scenarios[currentScenario].correct) {
      setScore(score + 1);
    }
  };

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  };

  const resetGame = () => {
    setCurrentScenario(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
  };

  const isCorrect = selectedOption === scenarios[currentScenario].correct;
  const isGameComplete = currentScenario === scenarios.length - 1 && showResult;

  return (
    <Card className="bg-white border-2 border-[#E89B1C]/20 shadow-xl">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <ChefHat className="w-6 h-6 text-[#E89B1C]" />
            <span className="text-sm font-semibold text-gray-600">
              Scenario {currentScenario + 1} of {scenarios.length}
            </span>
          </div>
          <div className="text-sm font-semibold text-[#E89B1C]">
            Score: {score}/{scenarios.length}
          </div>
        </div>

        {!isGameComplete ? (
          <>
            <h3 className="text-xl font-bold text-black mb-6">
              {scenarios[currentScenario].challenge}
            </h3>

            <div className="space-y-3 mb-6">
              {scenarios[currentScenario].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    showResult
                      ? index === scenarios[currentScenario].correct
                        ? 'border-green-500 bg-green-50'
                        : index === selectedOption
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200 bg-gray-50'
                      : 'border-gray-200 hover:border-[#E89B1C] hover:bg-orange-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {showResult && index === scenarios[currentScenario].correct && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    {showResult && index === selectedOption && index !== scenarios[currentScenario].correct && (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showResult && (
              <div className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                <p className={`font-semibold mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? '✓ Correct!' : '✗ Not quite!'}
                </p>
                <p className="text-gray-700 text-sm">{scenarios[currentScenario].explanation}</p>
              </div>
            )}

            {showResult && currentScenario < scenarios.length - 1 && (
              <Button 
                onClick={nextScenario}
                className="w-full bg-[#E89B1C] hover:bg-[#D88A0A] text-white"
              >
                Next Scenario
              </Button>
            )}
          </>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-3xl font-bold text-black mb-4">
              Game Complete!
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Your Score: {score}/{scenarios.length}
            </p>
            <p className="text-gray-600 mb-8">
              {score === scenarios.length
                ? "Perfect! You're an AI marketing pro! 🎉"
                : score >= scenarios.length / 2
                ? "Great job! You know your AI tools! 👏"
                : "Keep learning! Check out the resources below. 💡"}
            </p>
            <Button 
              onClick={resetGame}
              className="bg-[#E89B1C] hover:bg-[#D88A0A] text-white px-8"
            >
              Play Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}