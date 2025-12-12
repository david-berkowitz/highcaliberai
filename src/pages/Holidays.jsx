import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Text3D, Center } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Download, RefreshCw, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { base44 } from "@/api/base44Client";

function SnowParticle({ position }) {
  const meshRef = useRef();
  const [velocity] = useState(Math.random() * 0.02 + 0.01);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y -= velocity;
      if (meshRef.current.position.y < -3) {
        meshRef.current.position.y = 3;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
    </mesh>
  );
}

function SnowGlobe() {
  const snowflakes = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 4,
      Math.random() * 6 - 3,
      (Math.random() - 0.5) * 4
    ]
  }));

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Outer glass sphere */}
      <Sphere args={[2.5, 64, 64]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          transparent
          opacity={0.2}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
          thickness={0.5}
        />
      </Sphere>

      {/* Snow particles */}
      {snowflakes.map((flake) => (
        <SnowParticle key={flake.id} position={flake.position} />
      ))}

      {/* Center piece - "2025" */}
      <Center position={[0, 0, 0]}>
        <mesh>
          <boxGeometry args={[1.5, 0.8, 0.3]} />
          <meshStandardMaterial color="#dc2626" metalness={0.6} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.16]}>
          <planeGeometry args={[1.4, 0.7]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </Center>

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
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
      setMessage("Wishing you a season filled with innovation, success, and the perfect blend of human creativity and AI capability. Happy Holidays from High Caliber AI!");
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
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
            {/* 3D Snow Globe */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <div className="aspect-square w-full max-w-md mx-auto">
                  <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                    <SnowGlobe />
                  </Canvas>
                </div>
                <p className="text-center text-gray-400 text-sm mt-6">
                  Drag to rotate the snow globe
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
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