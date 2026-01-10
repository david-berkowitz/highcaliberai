import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChefHat, CheckCircle, XCircle } from 'lucide-react';

const allScenarios = [
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
  },
  {
    challenge: "Turn a 2-hour webinar into 20 social media clips",
    options: ["Manual editing", "Opus Pro", "iMovie"],
    correct: 1,
    explanation: "Opus Pro specializes in AI-powered video clipping and repurposing for social media."
  },
  {
    challenge: "Generate professional voiceovers in multiple languages",
    options: ["Hire voice actors", "ElevenLabs", "Record yourself"],
    correct: 1,
    explanation: "ElevenLabs provides high-quality AI voice generation and text-to-speech in multiple languages."
  },
  {
    challenge: "Create data visualizations from text descriptions",
    options: ["Manual design", "Napkin AI", "PowerPoint"],
    correct: 1,
    explanation: "Napkin AI transforms text into visual storytelling and infographics automatically."
  },
  {
    challenge: "Research your target audience's online behavior and interests",
    options: ["Google Search", "SparkToro", "Survey them all"],
    correct: 1,
    explanation: "SparkToro provides deep audience intelligence about where your audience spends time online."
  },
  {
    challenge: "Generate AI images with perfect text rendering for ads",
    options: ["DALL-E", "Ideogram", "Photoshop"],
    correct: 1,
    explanation: "Ideogram excels at rendering text within AI-generated images, perfect for ads and graphics."
  },
  {
    challenge: "Conduct qualitative research with AI-powered consumer insights",
    options: ["Manual surveys", "Rally", "Email interviews"],
    correct: 1,
    explanation: "Rally provides AI-powered research and consumer insights at scale."
  },
  {
    challenge: "Create a custom brand jingle or background music",
    options: ["Hire composer", "Jingle My Brand", "Use stock music"],
    correct: 1,
    explanation: "Jingle My Brand uses AI to create custom brand music and jingles quickly."
  },
  {
    challenge: "Present live with an AI avatar while traveling",
    options: ["Pre-record videos", "LiveAvatar", "Skip the meeting"],
    correct: 1,
    explanation: "LiveAvatar by HeyGen enables real-time presentations with AI avatars."
  },
  {
    challenge: "Optimize content strategy based on AI search visibility",
    options: ["Manual testing", "Passionfruit", "Hope for the best"],
    correct: 1,
    explanation: "Passionfruit provides AI-powered content optimization and recommendations."
  },
  {
    challenge: "Build a custom marketing app without coding",
    options: ["Hire developers", "Base44", "Use spreadsheets"],
    correct: 1,
    explanation: "Base44 enables building AI-powered apps without writing code."
  },
  {
    challenge: "Connect your research documents to create a podcast",
    options: ["Manual recording", "NotebookLM", "Read aloud"],
    correct: 1,
    explanation: "NotebookLM can analyze your documents and generate podcast-style discussions."
  }
];

// Randomly select 5 questions for each game
const getRandomScenarios = () => {
  const shuffled = [...allScenarios].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
};

const scenarios = getRandomScenarios();

export default function AIMarketingKitchen() {
  const [gameScenarios, setGameScenarios] = useState(getRandomScenarios());
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowResult(true);
    
    if (optionIndex === gameScenarios[currentScenario].correct) {
      setScore(score + 1);
    }
  };

  const nextScenario = () => {
    if (currentScenario < gameScenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  };

  const resetGame = () => {
    setGameScenarios(getRandomScenarios());
    setCurrentScenario(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
  };

  const isCorrect = selectedOption === gameScenarios[currentScenario].correct;
  const isGameComplete = currentScenario === gameScenarios.length - 1 && showResult;

  return (
    <Card className="bg-white border-2 border-[#E89B1C]/20 shadow-xl">
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <ChefHat className="w-6 h-6 text-[#E89B1C]" />
          <span className="text-sm font-semibold text-gray-600">
            Scenario {currentScenario + 1} of {gameScenarios.length}
          </span>
        </div>
        <div className="text-sm font-semibold text-[#E89B1C]">
          Score: {score}/{gameScenarios.length}
        </div>
        </div>

        {!isGameComplete ? (
        <>
          <h3 className="text-xl font-bold text-black mb-6">
            {gameScenarios[currentScenario].challenge}
          </h3>

          <div className="space-y-3 mb-6">
            {gameScenarios[currentScenario].options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && handleAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  showResult
                    ? index === gameScenarios[currentScenario].correct
                      ? 'border-green-500 bg-green-50'
                      : index === selectedOption
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 bg-gray-50'
                    : 'border-gray-200 hover:border-[#E89B1C] hover:bg-orange-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showResult && index === gameScenarios[currentScenario].correct && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                  {showResult && index === selectedOption && index !== gameScenarios[currentScenario].correct && (
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
              <p className="text-gray-700 text-sm">{gameScenarios[currentScenario].explanation}</p>
            </div>
          )}

          {showResult && currentScenario < gameScenarios.length - 1 && (
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
            Your Score: {score}/{gameScenarios.length}
          </p>
          <p className="text-gray-600 mb-8">
            {score === gameScenarios.length
              ? "Perfect! You're an AI marketing pro! 🎉"
              : score >= gameScenarios.length / 2
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