import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Download, RefreshCw, Loader2, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { base44 } from "@/api/base44Client";

function SnowfallBackground() {
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 3 + 2}s`,
    animationDelay: `${Math.random() * 5}s`,
    fontSize: `${Math.random() * 10 + 10}px`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-fall text-white opacity-70"
          style={{
            left: flake.left,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            fontSize: flake.fontSize,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}

function SnowGlobe() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Glass sphere effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100/20 via-transparent to-blue-200/30 backdrop-blur-sm border-4 border-white/30 shadow-2xl">
        {/* Inner glow */}
        <div className="absolute inset-4 rounded-full bg-gradient-radial from-white/10 to-transparent"></div>
        
        {/* Snow inside globe */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-80"
              initial={{
                x: Math.random() * 100 + "%",
                y: "-10%",
              }}
              animate={{
                y: "110%",
              }}
              transition={{
                duration: Math.random() * 3 + 3,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-600 px-8 py-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
            <div className="text-6xl font-bold text-white text-center">
              2025
            </div>
            <div className="text-white text-center text-sm font-semibold mt-2">
              Happy Holidays
            </div>
          </div>
        </div>
      </div>

      {/* Base */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-full shadow-xl"></div>
    </div>
  );
}

export default function Holidays() {
  const [recipientName, setRecipientName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [tone, setTone] = useState("professional");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateMessage = async () => {
    setLoading(true);
    try {
      const prompt = `Generate a warm, ${tone} holiday greeting for the year 2025 ${recipientName ? `to ${recipientName}` : ""} ${companyName ? `from ${companyName}` : "from High Caliber AI"}. The message should reference AI and marketing in a clever, tasteful way. Keep it to 2-3 sentences. Make it unique and memorable.`;
      
      const response = await base44.integrations.Core.InvokeLLM({
        prompt: prompt,
      });
      
      setMessage(response);
    } catch (error) {
      setMessage("Wishing you a season filled with innovation, success, and the perfect blend of human creativity and AI capability. Happy Holidays 2025 from High Caliber AI!");
    } finally {
      setLoading(false);
    }
  };

  const downloadCard = () => {
    const cardContent = `
━━━━━━━━━━━━━━━━━━━━━━━━━━
    HIGH CALIBER AI
    Holiday Greetings 2025
━━━━━━━━━━━━━━━━━━━━━━━━━━

${message}

${companyName || "High Caliber AI"}
━━━━━━━━━━━━━━━━━━━━━━━━━━
    `;
    
    const blob = new Blob([cardContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'holiday-greetings-2025.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <SnowfallBackground />
      
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-red-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight">
                Happy Holidays <span className="font-semibold text-red-400">2025</span>
              </h1>
              <Sparkles className="w-8 h-8 text-red-400 ml-3" />
            </div>
            <p className="text-xl text-gray-300 font-light">
              From everyone at High Caliber AI
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Snow Globe */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <SnowGlobe />
                <p className="text-center text-gray-400 text-sm mt-12">
                  Interactive snow globe with falling snow
                </p>
              </div>
            </motion.div>

            {/* Message Generator */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Create Your Personalized Message
                </h2>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="recipient" className="text-gray-300 mb-2 block">
                      Recipient Name (Optional)
                    </Label>
                    <Input
                      id="recipient"
                      placeholder="e.g., John Smith"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-300 mb-2 block">
                      Your Company Name (Optional)
                    </Label>
                    <Input
                      id="company"
                      placeholder="e.g., Acme Corp"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="tone" className="text-gray-300 mb-2 block">
                      Message Tone
                    </Label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="warm">Warm & Friendly</SelectItem>
                        <SelectItem value="playful">Playful</SelectItem>
                        <SelectItem value="inspiring">Inspiring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={generateMessage}
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Generate Message
                      </>
                    )}
                  </Button>

                  <AnimatePresence>
                    {message && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-6"
                      >
                        <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600">
                          <p className="text-white text-lg leading-relaxed mb-4">
                            {message}
                          </p>
                          <Button
                            onClick={downloadCard}
                            variant="outline"
                            className="w-full border-gray-500 text-gray-300 hover:bg-gray-700"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download Card
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-2xl text-gray-300 font-light leading-relaxed mb-4">
            As we close out 2024 and welcome 2025, we're grateful for the opportunity to help transform marketing through AI.
          </p>
          <p className="text-xl text-gray-400 font-light">
            Here's to a year filled with innovation, growth, and success.
          </p>
        </motion.div>
      </section>
    </div>
  );
}