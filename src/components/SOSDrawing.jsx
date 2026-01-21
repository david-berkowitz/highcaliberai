import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Sparkles } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

export default function SOSDrawing() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPick, setCurrentPick] = useState(null);
  const [winners, setWinners] = useState([]);
  const [spinningNames, setSpinningNames] = useState([]);
  
  const { data: entries = [] } = useQuery({
    queryKey: ['sosEntries'],
    queryFn: async () => {
      const allEntries = await base44.entities.SOSRaffleEntry.filter({ status: "entered" });
      return allEntries;
    },
    enabled: isAdmin,
    refetchInterval: 5000,
  });

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const user = await base44.auth.me();
        setIsAdmin(user?.role === 'admin');
      } catch {
        setIsAdmin(false);
      }
    };
    checkAdmin();
  }, []);

  const fireConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        spread: 90,
        scalar: 1.2,
        gravity: 1.5,
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const drawWinner = async () => {
    if (entries.length === 0 || winners.length >= 5) return;

    setIsDrawing(true);
    
    // Show spinning animation
    const spinInterval = setInterval(() => {
      const randomEntries = entries
        .filter(e => !winners.find(w => w.id === e.id))
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
      setSpinningNames(randomEntries);
    }, 100);

    // Wait 3 seconds for dramatic effect
    setTimeout(async () => {
      clearInterval(spinInterval);
      
      // Select random winner from remaining entries
      const availableEntries = entries.filter(e => !winners.find(w => w.id === e.id));
      const winner = availableEntries[Math.floor(Math.random() * availableEntries.length)];
      
      setCurrentPick(winner);
      setWinners(prev => [...prev, winner]);
      
      // Update status in database
      await base44.entities.SOSRaffleEntry.update(winner.id, { status: "winner" });
      
      // Fire confetti
      fireConfetti();
      
      setIsDrawing(false);
      setSpinningNames([]);
    }, 3000);
  };

  const resetDrawing = () => {
    setWinners([]);
    setCurrentPick(null);
  };

  if (!isAdmin) return null;

  return (
    <div className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              Live Drawing (Admin Only)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <p className="text-sm text-gray-400">Total Entries</p>
                  <p className="text-3xl font-bold">{entries.length}</p>
                </div>
                <div className="text-white">
                  <p className="text-sm text-gray-400">Winners Selected</p>
                  <p className="text-3xl font-bold">{winners.length} / 5</p>
                </div>
              </div>

              {/* Drawing Animation */}
              {isDrawing && (
                <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-xl p-12 text-center">
                  <Sparkles className="w-12 h-12 text-white mx-auto mb-4 animate-pulse" />
                  <div className="text-white space-y-2">
                    {spinningNames.map((entry, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-2xl font-bold"
                      >
                        {entry.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Current Winner */}
              <AnimatePresence>
                {currentPick && !isDrawing && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-12 text-center"
                  >
                    <Trophy className="w-16 h-16 text-white mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">
                      🎉 Winner #{winners.length}
                    </h3>
                    <p className="text-4xl font-bold text-white mb-2">
                      {currentPick.name}
                    </p>
                    <p className="text-white text-lg opacity-90">
                      {currentPick.email}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Winners List */}
              {winners.length > 0 && (
                <div className="bg-gray-700 rounded-lg p-6">
                  <h4 className="text-white font-bold mb-4">🏆 All Winners</h4>
                  <div className="space-y-3">
                    {winners.map((winner, idx) => (
                      <div key={winner.id} className="flex items-center justify-between bg-gray-600 rounded-lg p-4">
                        <div className="text-white">
                          <p className="font-bold">#{idx + 1} - {winner.name}</p>
                          <p className="text-sm text-gray-300">{winner.email}</p>
                        </div>
                        <Trophy className="w-6 h-6 text-yellow-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Controls */}
              <div className="flex gap-4">
                <Button
                  onClick={drawWinner}
                  disabled={isDrawing || winners.length >= 5 || entries.length === 0}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-lg py-6"
                >
                  {isDrawing ? "Drawing..." : "Draw Next Winner"}
                </Button>
                {winners.length > 0 && (
                  <Button
                    onClick={resetDrawing}
                    variant="outline"
                    className="text-white border-gray-600 hover:bg-gray-700"
                  >
                    Reset
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}