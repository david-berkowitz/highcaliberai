import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MetaTags from "@/components/SEO/MetaTags";
import { TrendingUp, Zap, AlertTriangle, Trophy } from "lucide-react";

const ASSETS = [
  { name: "Social Posts", minPrice: 10, maxPrice: 50, space: 1 },
  { name: "Blog Articles", minPrice: 40, maxPrice: 150, space: 2 },
  { name: "Ad Creative", minPrice: 100, maxPrice: 400, space: 5 },
  { name: "Email Campaigns", minPrice: 300, maxPrice: 900, space: 8 },
  { name: "AI Video Clips", minPrice: 800, maxPrice: 3000, space: 15 }
];

const LOCATIONS = [
  { 
    name: "The Corporate Plaza", 
    modifier: 1.3, 
    risk: "Client Audit (15% chance)",
    riskChance: 0.15,
    description: "Midtown - High prices, professional clientele"
  },
  { 
    name: "The Thought Leader Lounge", 
    modifier: 1.2, 
    volatility: [0, 1],
    description: "Volatile Social Posts & Blog Articles"
  },
  { 
    name: "The Algorithmic Hellhole", 
    modifier: 0.6, 
    risk: "The Ratio (20% chance)",
    riskChance: 0.20,
    description: "Formerly X - Low prices, high toxicity"
  },
  { 
    name: "The Freelancer Slack", 
    modifier: 0.7,
    description: "Best place for low-cost raw assets"
  },
  { 
    name: "The Brooklyn Agency Loft", 
    modifier: 1.5,
    premium: [2, 4],
    description: "Premium prices for AI Video & Ad Creative"
  }
];

const EVENTS = [
  { 
    name: "Google Core Update", 
    effect: "Blog Article prices crash to $5",
    trigger: () => Math.random() < 0.15
  },
  { 
    name: "Going Viral", 
    effect: "Social Post prices 10x in Thought Leader Lounge",
    trigger: () => Math.random() < 0.10
  },
  { 
    name: "Hallucination", 
    effect: "A purchased asset corrupts and vanishes",
    trigger: () => Math.random() < 0.05
  },
  {
    name: "Influencer Endorsement",
    effect: "Email Campaigns 5x price boost",
    trigger: () => Math.random() < 0.08
  },
  {
    name: "Platform Outage",
    effect: "Algorithmic Hellhole closed for the day",
    trigger: () => Math.random() < 0.12
  },
  {
    name: "Shark Tank Moment",
    effect: "Invest $500 for 3x return or lose it all",
    trigger: () => Math.random() < 0.06
  }
];

const NEWS_HEADLINES = [
  "Breaking: ChatGPT launches new reasoning model",
  "Marketing budgets shift 40% to AI tools",
  "LinkedIn algorithm change impacts B2B reach",
  "TikTok introduces AI-powered ad targeting",
  "Meta announces new business messaging features",
  "Google Search gets more AI-powered results",
  "Email open rates hit record highs this quarter",
  "Video content dominates social engagement",
  "Influencer marketing ROI surges 200%",
  "SaaS companies battle subscription fatigue"
];

const ACHIEVEMENTS = [
  { id: "first_sale", name: "First Sale", desc: "Made your first profit", check: (stats) => stats.totalSales > 0 },
  { id: "debt_free", name: "Debt Free", desc: "Paid off all debt", check: (stats) => stats.debt === 0 },
  { id: "big_spender", name: "Big Spender", desc: "Spent $5000+ in a day", check: (stats) => stats.daySpent >= 5000 },
  { id: "hustler", name: "Hustler", desc: "Made 50+ trades", check: (stats) => stats.totalTrades >= 50 },
  { id: "viral_king", name: "Viral King", desc: "Survived Going Viral event", check: (stats) => stats.events.includes("Going Viral") },
  { id: "survivor", name: "Survivor", desc: "Reached Day 20", check: (stats) => stats.day >= 20 },
  { id: "whale", name: "Whale", desc: "Had $10,000+ cash at once", check: (stats) => stats.maxCash >= 10000 }
];

function generatePrice(asset, location, event) {
  let base = asset.minPrice + Math.random() * (asset.maxPrice - asset.minPrice);
  
  if (event === "Google Core Update" && asset.name === "Blog Articles") {
    return 5;
  }
  
  if (event === "Going Viral" && asset.name === "Social Posts" && location.name === "The Thought Leader Lounge") {
    return base * 10;
  }
  
  if (location.premium && location.premium.includes(ASSETS.indexOf(asset))) {
    base *= 1.5;
  }
  
  if (location.volatility && location.volatility.includes(ASSETS.indexOf(asset))) {
    base *= (0.5 + Math.random() * 1.5);
  }
  
  base *= location.modifier;
  
  return Math.round(base);
}

export default function Hustle() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  
  const [day, setDay] = useState(1);
  const [cash, setCash] = useState(500);
  const [debt, setDebt] = useState(2000);
  const [inventory, setInventory] = useState({});
  const [currentLocation, setCurrentLocation] = useState(0);
  const [prices, setPrices] = useState({});
  const [log, setLog] = useState(["Welcome to The Marketing Hustle. Pay off your SaaS debt in 30 days."]);
  const [stats, setStats] = useState({
    totalSales: 0,
    totalTrades: 0,
    daySpent: 0,
    maxCash: 500,
    events: []
  });
  const [activeEvent, setActiveEvent] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(null);
  const [showSellModal, setShowSellModal] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [newsHeadline, setNewsHeadline] = useState("");
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  
  const totalSpace = Object.entries(inventory).reduce((sum, [assetName, qty]) => {
    const asset = ASSETS.find(a => a.name === assetName);
    return sum + (asset.space * qty);
  }, 0);
  
  const addLog = (message, ascii = null) => {
    if (ascii) {
      setLog(prev => [ascii, message, ...prev].slice(0, 15));
    } else {
      setLog(prev => [message, ...prev].slice(0, 15));
    }
  };
  
  const checkAchievements = (newStats) => {
    ACHIEVEMENTS.forEach(achievement => {
      if (!achievements.includes(achievement.id) && achievement.check(newStats)) {
        setAchievements(prev => [...prev, achievement.id]);
        addLog(`🏆 Achievement Unlocked: ${achievement.name}!`, "★★★★★");
      }
    });
  };
  
  const getRandomNews = () => {
    return NEWS_HEADLINES[Math.floor(Math.random() * NEWS_HEADLINES.length)];
  };
  
  const updatePrices = () => {
    const location = LOCATIONS[currentLocation];
    const newPrices = {};
    ASSETS.forEach(asset => {
      newPrices[asset.name] = generatePrice(asset, location, activeEvent);
    });
    setPrices(newPrices);
  };
  
  const handleTravel = (locationIndex) => {
    const location = LOCATIONS[locationIndex];
    
    // Check for location-specific risks
    if (location.riskChance && Math.random() < location.riskChance) {
      if (location.name === "The Corporate Plaza") {
        const fee = 500;
        if (cash >= fee) {
          setCash(cash - fee);
          addLog("⚠️ CLIENT AUDIT! Paid $500 in Freelance Editor Fees.", "⚠️⚠️⚠️");
        } else {
          setInventory({});
          addLog("⚠️ CLIENT AUDIT! Lost all inventory - couldn't afford editor fees!", "💀💀💀");
        }
      } else if (location.name === "The Algorithmic Hellhole") {
        setCash(Math.max(0, cash - 200));
        addLog("😱 THE RATIO! Lost $200 in Brand Safety Fines.", "☠️☠️☠️");
      }
    }
    
    setCurrentLocation(locationIndex);
    setNewsHeadline(getRandomNews());
    
    // Check for random events
    let newEvent = null;
    for (const event of EVENTS) {
      if (event.trigger()) {
        newEvent = event.name;
        
        if (event.name === "Shark Tank Moment" && cash >= 500) {
          const invest = window.confirm("🦈 SHARK TANK MOMENT!\n\nInvest $500 for a chance at $1500?\n(50/50 odds)");
          if (invest) {
            setCash(cash - 500);
            if (Math.random() < 0.5) {
              setCash(prev => prev + 1500);
              addLog("🦈 Shark Tank SUCCESS! Won $1500!", "💰💰💰");
            } else {
              addLog("🦈 Shark Tank FAIL! Lost $500.", "📉📉📉");
            }
          }
        } else if (event.name === "Going Viral") {
          addLog(`🎲 ${event.name}: ${event.effect}`, "🚀🚀🚀");
          setStats(prev => ({ ...prev, events: [...prev.events, event.name] }));
        } else {
          addLog(`🎲 ${event.name}: ${event.effect}`);
        }
        
        break;
      }
    }
    setActiveEvent(newEvent);
    
    addLog(`📍 Traveled to ${location.name}`);
  };
  
  const handleBuy = (assetName, quantity) => {
    const asset = ASSETS.find(a => a.name === assetName);
    const price = prices[assetName];
    const cost = price * quantity;
    const spaceNeeded = asset.space * quantity;
    
    if (cash < cost) {
      addLog("❌ Not enough cash!");
      return;
    }
    
    if (totalSpace + spaceNeeded > 100) {
      addLog("❌ Not enough drive space!");
      return;
    }
    
    setCash(cash - cost);
    setInventory(prev => ({
      ...prev,
      [assetName]: (prev[assetName] || 0) + quantity
    }));
    
    const newStats = {
      ...stats,
      totalTrades: stats.totalTrades + 1,
      daySpent: stats.daySpent + cost,
      maxCash: Math.max(stats.maxCash, cash - cost)
    };
    setStats(newStats);
    checkAchievements(newStats);
    
    // Hallucination check
    if (Math.random() < 0.05) {
      addLog(`🤖 HALLUCINATION! Your ${assetName} corrupted and vanished!`, "⚡⚡⚡");
      setInventory(prev => ({
        ...prev,
        [assetName]: Math.max(0, (prev[assetName] || 0) - 1)
      }));
    } else {
      addLog(`✅ Bought ${quantity}x ${assetName} for $${cost}`);
    }
    
    setShowBuyModal(null);
  };
  
  const handleSell = (assetName, quantity) => {
    const current = inventory[assetName] || 0;
    if (current < quantity) {
      addLog("❌ Not enough in inventory!");
      return;
    }
    
    const price = prices[assetName];
    const revenue = price * quantity;
    
    setCash(cash + revenue);
    setInventory(prev => ({
      ...prev,
      [assetName]: prev[assetName] - quantity
    }));
    
    const newStats = {
      ...stats,
      totalSales: stats.totalSales + 1,
      totalTrades: stats.totalTrades + 1,
      maxCash: Math.max(stats.maxCash, cash + revenue)
    };
    setStats(newStats);
    checkAchievements(newStats);
    
    if (quantity >= 10) {
      addLog(`💰 BIG SALE! Sold ${quantity}x ${assetName} for $${revenue}`, "💵💵💵");
    } else {
      addLog(`💰 Sold ${quantity}x ${assetName} for $${revenue}`);
    }
    setShowSellModal(null);
  };
  
  const handlePayDebt = (amount) => {
    if (cash < amount) {
      addLog("❌ Not enough cash!");
      return;
    }
    
    const payment = Math.min(amount, debt);
    setCash(cash - payment);
    setDebt(debt - payment);
    addLog(`💳 Paid $${payment} toward debt. Remaining: $${debt - payment}`);
  };
  
  const nextDay = () => {
    const newDay = day + 1;
    
    // Apply debt interest every 5 days
    if (newDay % 5 === 0) {
      const interest = Math.round(debt * 0.1);
      setDebt(debt + interest);
      addLog(`📈 Debt increased by $${interest} (10% interest)`);
    }
    
    if (newDay > 30) {
      setGameEnded(true);
      return;
    }
    
    setDay(newDay);
    setNewsHeadline(getRandomNews());
    setStats(prev => ({ ...prev, day: newDay, daySpent: 0 }));
    checkAchievements({ ...stats, day: newDay });
    addLog(`📅 Day ${newDay} begins`);
  };
  
  const calculateScore = () => {
    if (debt > 0) return "GAME OVER - Debt not paid";
    
    const score = Math.round(cash / 10000 * 100);
    
    if (cash >= 50000) return "Small Giant CMO 🏆";
    if (cash >= 25000) return "Marketing Director 🎯";
    if (cash >= 10000) return "Senior Strategist 📈";
    if (cash >= 5000) return "Marketing Manager 💼";
    return "Junior Prompt Engineer 🤖";
  };
  
  useEffect(() => {
    if (gameStarted && !gameEnded) {
      updatePrices();
      setNewsHeadline(getRandomNews());
    }
  }, [currentLocation, activeEvent, gameStarted]);
  
  const saveToLeaderboard = (initials, score, rank) => {
    const leaderboard = JSON.parse(localStorage.getItem('hustleLeaderboard') || '[]');
    leaderboard.push({ initials, score: Math.round(score), rank, date: new Date().toISOString() });
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('hustleLeaderboard', JSON.stringify(leaderboard.slice(0, 10)));
  };
  
  const getLeaderboard = () => {
    return JSON.parse(localStorage.getItem('hustleLeaderboard') || '[]');
  };
  
  const shareScore = () => {
    const rank = calculateScore();
    const text = `I just played The Marketing Hustle! 🎮\n\nFinal Score: $${cash}\nRank: ${rank}\n\nCan you beat my score?\n\nhighcaliberai.com/hustle`;
    
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      alert('Score copied to clipboard!');
    }
  };
  
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-6">
        <MetaTags 
          title="The Marketing Hustle - Small Giants 2026"
          description="A text-based strategy game. Pay off your SaaS debt by trading AI marketing assets across NYC business ecosystems."
          url="https://highcaliberai.com/hustle"
          canonical="https://highcaliberai.com/hustle"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl"
        >
          <Card className="bg-gray-800/90 border-2 border-green-500 shadow-2xl">
            <CardContent className="p-12 text-center">
              <Zap className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-green-400 mb-4 font-mono">THE MARKETING HUSTLE</h1>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                You owe the SaaS Overlord <span className="text-red-400 font-bold">$2,000</span>.
              </p>
              <p className="text-gray-300 mb-8">
                Trade AI marketing assets across NYC business ecosystems. Pay off your debt in 30 days.
                Build your marketing empire on a bootstrap budget.
              </p>
              <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 mb-8 text-left">
                <h3 className="text-green-400 font-bold mb-3 font-mono">YOUR MISSION:</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Starting Cash: <span className="text-green-400">$500</span></li>
                  <li>• SaaS Debt: <span className="text-red-400">$2,000</span></li>
                  <li>• Time Limit: <span className="text-yellow-400">30 Days</span></li>
                  <li>• Storage: <span className="text-blue-400">100 Units</span></li>
                  <li>• Goal: Pay off debt & maximize profit</li>
                </ul>
              </div>
              <Button
                onClick={() => setGameStarted(true)}
                className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold text-xl px-12 py-6 rounded-lg"
              >
                START HUSTLING
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }
  
  if (gameEnded) {
    const rank = calculateScore();
    const finalScore = cash;
    
    const handleSaveScore = () => {
      const initials = prompt("Enter your initials (3 letters):");
      if (initials && initials.length <= 3) {
        saveToLeaderboard(initials.toUpperCase(), finalScore, rank);
        setShowLeaderboard(true);
      }
    };
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full"
        >
          <Card className="bg-gray-800/90 border-2 border-green-500 shadow-2xl">
            <CardContent className="p-12 text-center">
              {debt === 0 ? (
                <>
                  <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
                  <h1 className="text-5xl font-bold text-green-400 mb-4 font-mono">VICTORY!</h1>
                  <p className="text-gray-300 text-2xl mb-2">Final Cash: <span className="text-green-400 font-bold">${cash}</span></p>
                  <p className="text-xl text-yellow-400 mb-6 font-bold">{rank}</p>
                  
                  {achievements.length > 0 && (
                    <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4 mb-6">
                      <h3 className="text-yellow-400 font-mono mb-2">🏆 Achievements</h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {achievements.map(id => {
                          const ach = ACHIEVEMENTS.find(a => a.id === id);
                          return (
                            <span key={id} className="text-xs bg-yellow-900/30 text-yellow-300 px-2 py-1 rounded">
                              {ach.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  
                  {cash >= 50000 && (
                    <div className="bg-blue-900/50 border border-blue-500 rounded-lg p-6 mb-6">
                      <p className="text-blue-300 text-lg mb-4">
                        🎉 You've officially built a Marketing Engine on a Bootstrap Budget.
                      </p>
                      <p className="text-gray-300 text-sm">
                        Learn the actual strategy at <a href="https://highcaliberai.com" className="text-blue-400 underline">highcaliberai.com</a>
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <AlertTriangle className="w-20 h-20 text-red-400 mx-auto mb-6" />
                  <h1 className="text-5xl font-bold text-red-400 mb-4 font-mono">GAME OVER</h1>
                  <p className="text-gray-300 text-xl mb-4">You didn't pay off your debt.</p>
                  <p className="text-gray-400">Remaining Debt: <span className="text-red-400 font-bold">${debt}</span></p>
                  <p className="text-gray-400 mb-8">Final Cash: <span className="text-yellow-400">${cash}</span></p>
                </>
              )}
              
              <div className="space-y-3">
                {debt === 0 && (
                  <>
                    <Button
                      onClick={handleSaveScore}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold"
                    >
                      💾 Save to Leaderboard
                    </Button>
                    <Button
                      onClick={shareScore}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
                    >
                      🔗 Share Score
                    </Button>
                  </>
                )}
                <Button
                  onClick={() => setShowLeaderboard(!showLeaderboard)}
                  variant="outline"
                  className="w-full"
                >
                  {showLeaderboard ? "Hide" : "View"} Leaderboard
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  className="w-full bg-green-500 hover:bg-green-600 text-gray-900 font-bold"
                >
                  PLAY AGAIN
                </Button>
              </div>
              
              {showLeaderboard && (
                <div className="mt-6 bg-gray-900/80 border border-gray-700 rounded-lg p-4">
                  <h3 className="text-green-400 font-mono mb-3 font-bold">TOP 10 HUSTLERS</h3>
                  <div className="space-y-2 text-left font-mono text-sm">
                    {getLeaderboard().map((entry, idx) => (
                      <div key={idx} className="flex justify-between text-gray-300">
                        <span>{idx + 1}. {entry.initials}</span>
                        <span className="text-green-400">${entry.score}</span>
                        <span className="text-gray-500 text-xs">{entry.rank}</span>
                      </div>
                    ))}
                    {getLeaderboard().length === 0 && (
                      <p className="text-gray-500 text-center">No scores yet. Be the first!</p>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 p-4">
      <MetaTags 
        title="The Marketing Hustle - Small Giants 2026"
        description="A text-based strategy game. Pay off your SaaS debt by trading AI marketing assets across NYC business ecosystems."
        url="https://highcaliberai.com/hustle"
        canonical="https://highcaliberai.com/hustle"
      />
      
      {/* News Ticker */}
      <div className="max-w-7xl mx-auto mb-2">
        <div className="bg-gray-900 border border-blue-500/30 px-4 py-2 rounded-lg overflow-hidden">
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-bold text-xs">📰 NEWS:</span>
            <div className="text-gray-300 text-xs font-mono animate-pulse">{newsHeadline}</div>
          </div>
        </div>
      </div>
      
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto mb-4">
        <Card className="bg-gray-800/90 border border-green-500/30">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center font-mono">
              <div>
                <div className="text-gray-400 text-xs">DAY</div>
                <div className="text-green-400 font-bold text-xl">{day}/30</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs">CASH</div>
                <div className="text-green-400 font-bold text-xl">${cash}</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs">DEBT</div>
                <div className="text-red-400 font-bold text-xl">${debt}</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs">DRIVE</div>
                <div className={`font-bold text-xl ${totalSpace > 90 ? 'text-red-400' : 'text-blue-400'}`}>
                  {totalSpace}/100
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 flex items-center justify-center">
                <Button
                  onClick={nextDay}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold"
                >
                  NEXT DAY →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
        {/* Market & Inventory */}
        <div className="md:col-span-2 space-y-4">
          {/* Current Location */}
          <Card className="bg-gray-800/90 border border-blue-500/30">
            <CardContent className="p-4">
              <h2 className="text-blue-400 font-bold font-mono mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {LOCATIONS[currentLocation].name}
              </h2>
              <p className="text-gray-400 text-sm mb-3">{LOCATIONS[currentLocation].description}</p>
              {LOCATIONS[currentLocation].risk && (
                <p className="text-yellow-400 text-xs flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  {LOCATIONS[currentLocation].risk}
                </p>
              )}
              {currentLocation === 2 && (
                <p className="text-red-400 text-xs mt-2">⚠️ Warning: Entering the Hellhole. Watch your brand safety.</p>
              )}
            </CardContent>
          </Card>
          
          {/* Market Prices */}
          <Card className="bg-gray-800/90 border border-green-500/30">
            <CardContent className="p-4">
              <h3 className="text-green-400 font-bold font-mono mb-3">MARKET PRICES</h3>
              <div className="space-y-2">
                {ASSETS.map(asset => (
                  <div key={asset.name} className="flex items-center justify-between bg-gray-900/50 p-3 rounded border border-gray-700">
                    <div>
                      <div className="text-white font-semibold">{asset.name}</div>
                      <div className="text-gray-500 text-xs">{asset.space} units space</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-green-400 font-bold font-mono">${prices[asset.name]}</div>
                      <Button
                        onClick={() => setShowBuyModal(asset.name)}
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-xs"
                      >
                        BUY
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Inventory */}
          <Card className="bg-gray-800/90 border border-purple-500/30">
            <CardContent className="p-4">
              <h3 className="text-purple-400 font-bold font-mono mb-3">YOUR INVENTORY</h3>
              {Object.keys(inventory).length === 0 ? (
                <p className="text-gray-500 text-center py-4">No assets yet</p>
              ) : (
                <div className="space-y-2">
                  {Object.entries(inventory).map(([assetName, qty]) => {
                    if (qty === 0) return null;
                    const asset = ASSETS.find(a => a.name === assetName);
                    return (
                      <div key={assetName} className="flex items-center justify-between bg-gray-900/50 p-3 rounded border border-gray-700">
                        <div>
                          <div className="text-white font-semibold">{assetName}</div>
                          <div className="text-gray-500 text-xs">Qty: {qty} ({asset.space * qty} units)</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-green-400 font-mono">${prices[assetName]}</div>
                          <Button
                            onClick={() => setShowSellModal(assetName)}
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-xs"
                          >
                            SELL
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-4">
          {/* Travel */}
          <Card className="bg-gray-800/90 border border-yellow-500/30">
            <CardContent className="p-4">
              <h3 className="text-yellow-400 font-bold font-mono mb-3">TRAVEL</h3>
              <div className="space-y-2">
                {LOCATIONS.map((loc, idx) => (
                  <Button
                    key={idx}
                    onClick={() => handleTravel(idx)}
                    disabled={idx === currentLocation}
                    className={`w-full justify-start text-left text-xs ${
                      idx === currentLocation 
                        ? 'bg-gray-700 text-gray-500' 
                        : 'bg-gray-900 hover:bg-gray-700 text-gray-300'
                    }`}
                  >
                    {loc.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Actions */}
          <Card className="bg-gray-800/90 border border-red-500/30">
            <CardContent className="p-4">
              <h3 className="text-red-400 font-bold font-mono mb-3">ACTIONS</h3>
              <div className="space-y-2">
                <Button
                  onClick={() => {
                    const amount = prompt("How much to pay toward debt?");
                    if (amount) handlePayDebt(parseInt(amount));
                  }}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  PAY DEBT
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Daily Briefing */}
          <Card className="bg-gray-800/90 border border-gray-500/30">
            <CardContent className="p-4">
              <h3 className="text-gray-400 font-bold font-mono mb-3 text-sm">DAILY BRIEFING</h3>
              <div className="space-y-1 text-xs font-mono">
                {log.map((entry, idx) => (
                  <div key={idx} className="text-gray-400 border-b border-gray-700/50 pb-1">
                    {entry}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Buy Modal */}
      {showBuyModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="bg-gray-800 border-2 border-green-500 max-w-md w-full">
            <CardContent className="p-6">
              <h3 className="text-green-400 font-bold font-mono mb-4">BUY {showBuyModal}</h3>
              <p className="text-gray-300 mb-4">Price: ${prices[showBuyModal]} each</p>
              <div className="space-y-3">
                {[1, 5, 10].map(qty => (
                  <Button
                    key={qty}
                    onClick={() => handleBuy(showBuyModal, qty)}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    Buy {qty} for ${prices[showBuyModal] * qty}
                  </Button>
                ))}
                <Button
                  onClick={() => {
                    const asset = ASSETS.find(a => a.name === showBuyModal);
                    const maxAffordable = Math.floor(cash / prices[showBuyModal]);
                    const maxSpace = Math.floor((100 - totalSpace) / asset.space);
                    const maxBuy = Math.min(maxAffordable, maxSpace);
                    if (maxBuy > 0) {
                      handleBuy(showBuyModal, maxBuy);
                    }
                  }}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 font-bold"
                >
                  💰 BUY MAX
                </Button>
                <Button
                  onClick={() => setShowBuyModal(null)}
                  variant="outline"
                  className="w-full"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Sell Modal */}
      {showSellModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="bg-gray-800 border-2 border-blue-500 max-w-md w-full">
            <CardContent className="p-6">
              <h3 className="text-blue-400 font-bold font-mono mb-4">SELL {showSellModal}</h3>
              <p className="text-gray-300 mb-4">Price: ${prices[showSellModal]} each</p>
              <p className="text-gray-400 mb-4 text-sm">You have: {inventory[showSellModal]}</p>
              <div className="space-y-3">
                {[1, 5, Math.min(10, inventory[showSellModal])].map(qty => {
                  if (qty > inventory[showSellModal]) return null;
                  return (
                    <Button
                      key={qty}
                      onClick={() => handleSell(showSellModal, qty)}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Sell {qty} for ${prices[showSellModal] * qty}
                    </Button>
                  );
                })}
                <Button
                  onClick={() => handleSell(showSellModal, inventory[showSellModal])}
                  className="w-full bg-green-600 hover:bg-green-700 font-bold"
                >
                  💰 SELL ALL ({inventory[showSellModal]}) for ${prices[showSellModal] * inventory[showSellModal]}
                </Button>
                <Button
                  onClick={() => setShowSellModal(null)}
                  variant="outline"
                  className="w-full"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}