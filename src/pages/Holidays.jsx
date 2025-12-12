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
    <div className="relative w-full max-w-md mx-auto aspect-square perspective-1000">
      <motion.div
        className="relative w-full h-full"
        animate={{
          rotateY: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Outer glass sphere with 3D effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-blue-100/30 to-blue-200/20 backdrop-blur-md border-[6px] border-white/50 shadow-[0_25px_60px_rgba(0,0,0,0.4),inset_0_-20px_40px_rgba(255,255,255,0.1),inset_0_20px_40px_rgba(0,0,0,0.1)]">
          
          {/* Light reflection - top left */}
          <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-gradient-to-br from-white/60 to-transparent blur-xl"></div>
          
          {/* Light reflection - bottom right */}
          <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-gradient-to-tl from-blue-200/40 to-transparent blur-2xl"></div>

          {/* Inner atmosphere */}
          <div className="absolute inset-8 rounded-full bg-gradient-radial from-blue-50/20 via-transparent to-transparent"></div>
          
          {/* Snow inside globe */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{
                  y: "-10%",
                  opacity: 0.9,
                }}
                animate={{
                  y: "110%",
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.9, 1, 0.8],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 4,
                }}
              />
            ))}
          </div>

          {/* Center content with 3D depth */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.05, 1],
                rotateZ: [0, -2, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative bg-gradient-to-br from-red-500 to-red-700 px-10 py-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_-4px_8px_rgba(0,0,0,0.3),inset_0_4px_8px_rgba(255,255,255,0.2)] border-2 border-red-400/50">
                {/* Shine effect */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl"></div>
                
                <div className="relative text-7xl font-black text-white text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                  2025
                </div>
                <div className="relative text-white text-center text-base font-bold mt-2 tracking-wide drop-shadow-lg">
                  Happy Holidays
                </div>
                
                {/* Sparkle decorations */}
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-pulse" />
                <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-yellow-300 animate-pulse" style={{ animationDelay: "0.5s" }} />
              </div>
            </motion.div>
          </div>

          {/* Snow pile at bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-gradient-to-t from-white/80 to-transparent rounded-b-full blur-sm"></div>
        </div>

        {/* Glass edge highlight */}
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent bg-gradient-to-br from-white/60 via-transparent to-transparent" style={{ WebkitMaskImage: 'radial-gradient(circle, transparent 98%, black 99%)', maskImage: 'radial-gradient(circle, transparent 98%, black 99%)' }}></div>
      </motion.div>

      {/* Base with 3D perspective */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-900 rounded-b-[50%] shadow-[0_15px_40px_rgba(0,0,0,0.6),inset_0_-8px_16px_rgba(0,0,0,0.4)]">
        <div className="absolute inset-0 rounded-b-[50%] bg-gradient-to-b from-white/10 to-transparent"></div>
      </div>
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
        .perspective-1000 {
          perspective: 1000px;
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