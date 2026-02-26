import React, { useState, useEffect, useRef } from 'react';
import { Trophy, RotateCcw, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const GAME_WIDTH = 400;
const GAME_HEIGHT = 500;
const PLAYER_WIDTH = 60;
const PLAYER_HEIGHT = 20;
const ITEM_SIZE = 40;
const ITEM_SPEED = 2;

const GOOD_ITEMS = ['✅', '🤝', '💡', '📊', '🎯'];
const BAD_ITEMS = ['❌', '😴', '📱', '🙄', '💩'];

const getLeaderboard = () => {
  try {
    const saved = localStorage.getItem('baruch-game-leaderboard');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveToLeaderboard = (initials, score) => {
  const leaderboard = getLeaderboard();
  leaderboard.push({ initials: initials.toUpperCase().slice(0, 3), score, date: Date.now() });
  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem('baruch-game-leaderboard', JSON.stringify(leaderboard.slice(0, 10)));
};

export default function AccountManagerGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showInitialsInput, setShowInitialsInput] = useState(false);
  const [initials, setInitials] = useState('');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [speed, setSpeed] = useState(ITEM_SPEED);
  const [playerX, setPlayerX] = useState(GAME_WIDTH / 2 - PLAYER_WIDTH / 2);
  const [items, setItems] = useState([]);
  const [popups, setPopups] = useState([]);
  const [leaderboard, setLeaderboard] = useState(getLeaderboard());
  const canvasRef = useRef(null);
  const gameLoopRef = useRef(null);

  const createItem = () => {
    const isGood = Math.random() > 0.4;
    const itemList = isGood ? GOOD_ITEMS : BAD_ITEMS;
    return {
      x: Math.random() * (GAME_WIDTH - ITEM_SIZE),
      y: -ITEM_SIZE,
      emoji: itemList[Math.floor(Math.random() * itemList.length)],
      isGood,
      id: Date.now() + Math.random()
    };
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setLives(3);
    setCombo(0);
    setSpeed(ITEM_SPEED);
    setPlayerX(GAME_WIDTH / 2 - PLAYER_WIDTH / 2);
    setItems([createItem()]);
    setPopups([]);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setShowInitialsInput(false);
    setInitials('');
    setScore(0);
    setLives(3);
    setCombo(0);
    setSpeed(ITEM_SPEED);
    setItems([]);
    setPopups([]);
    setLeaderboard(getLeaderboard());
  };

  const handleSubmitInitials = () => {
    if (initials.trim().length > 0) {
      saveToLeaderboard(initials, score);
      setLeaderboard(getLeaderboard());
      setShowInitialsInput(false);
    }
  };

  const addPopup = (text, x, y, isGood) => {
    const popup = { text, x, y, opacity: 1, id: Date.now() + Math.random(), isGood };
    setPopups(prev => [...prev, popup]);
    setTimeout(() => {
      setPopups(prev => prev.filter(p => p.id !== popup.id));
    }, 1000);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!gameStarted || gameOver) return;
      
      if (e.key === 'ArrowLeft') {
        setPlayerX(prev => Math.max(0, prev - 20));
      } else if (e.key === 'ArrowRight') {
        setPlayerX(prev => Math.min(GAME_WIDTH - PLAYER_WIDTH, prev + 20));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    gameLoopRef.current = setInterval(() => {
      setItems(prevItems => {
        const newItems = prevItems.map(item => ({
          ...item,
          y: item.y + speed
        }));

        // Check collisions
        newItems.forEach(item => {
          if (
            item.y + ITEM_SIZE >= GAME_HEIGHT - PLAYER_HEIGHT &&
            item.y <= GAME_HEIGHT &&
            item.x + ITEM_SIZE >= playerX &&
            item.x <= playerX + PLAYER_WIDTH &&
            item.y < GAME_HEIGHT + 100
          ) {
            if (item.isGood) {
              const comboBonus = Math.floor(combo / 3) * 5;
              const points = 10 + comboBonus;
              setScore(s => s + points);
              setCombo(c => c + 1);
              addPopup(`+${points}${comboBonus > 0 ? ' COMBO!' : ''}`, item.x, item.y, true);
              
              // Speed up every 50 points
              if ((score + points) % 50 === 0 && speed < ITEM_SPEED * 3) {
                setSpeed(s => s + 0.3);
              }
            } else {
              setLives(l => l - 1);
              setCombo(0);
              addPopup('-1 LIFE', item.x, item.y, false);
              if (lives - 1 <= 0) {
                setGameOver(true);
                const lb = getLeaderboard();
                if (lb.length < 10 || score > lb[lb.length - 1]?.score) {
                  setShowInitialsInput(true);
                }
              }
            }
            item.y = GAME_HEIGHT + 100;
          }
        });

        // Remove off-screen items and penalize missed good items
        const filteredItems = newItems.filter(item => {
          if (item.y >= GAME_HEIGHT + ITEM_SIZE) {
            if (item.isGood) {
              setCombo(0); // Break combo on missed good item
            }
            return false;
          }
          return true;
        });

        // Add new items with increasing frequency
        const spawnRate = 0.02 + (speed - ITEM_SPEED) * 0.01;
        if (Math.random() < spawnRate) {
          filteredItems.push(createItem());
        }

        return filteredItems;
      });
    }, 1000 / 60);

    return () => clearInterval(gameLoopRef.current);
  }, [gameStarted, gameOver, playerX, score, lives, combo, speed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Draw background
    ctx.fillStyle = '#eff6ff';
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Draw items
    ctx.font = `${ITEM_SIZE}px Arial`;
    items.forEach(item => {
      ctx.fillText(item.emoji, item.x, item.y + ITEM_SIZE);
    });

    // Draw popups
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    popups.forEach(popup => {
      ctx.fillStyle = popup.isGood ? '#22c55e' : '#ef4444';
      ctx.globalAlpha = popup.opacity;
      ctx.fillText(popup.text, popup.x + ITEM_SIZE / 2, popup.y - 10);
    });
    ctx.globalAlpha = 1;

    // Draw player (desk/portfolio) with glow effect for combo
    if (combo > 2) {
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#fbbf24';
    }
    ctx.fillStyle = combo > 2 ? '#fbbf24' : '#1e40af';
    ctx.fillRect(playerX, GAME_HEIGHT - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT);
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#fff';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('YOU', playerX + PLAYER_WIDTH / 2, GAME_HEIGHT - 5);
  }, [items, playerX, combo, popups]);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">⚡ Account Manager Challenge ⚡</h3>
        <p className="text-blue-200">Catch good practices (✅ 🤝 💡), avoid bad ones (❌ 😴 📱)!</p>
      </div>

      {/* Leaderboard */}
      {leaderboard.length > 0 && !gameStarted && (
        <div className="mb-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-4 border border-yellow-400/30">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Award className="w-5 h-5 text-yellow-400" />
            <h4 className="text-lg font-bold text-white">Top Performers</h4>
          </div>
          <div className="space-y-1">
            {leaderboard.slice(0, 10).map((entry, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between px-4 py-2 rounded-lg ${
                  idx === 0 ? 'bg-yellow-500/30 text-yellow-200' :
                  idx === 1 ? 'bg-gray-400/30 text-gray-200' :
                  idx === 2 ? 'bg-orange-600/30 text-orange-200' :
                  'bg-white/10 text-blue-200'
                }`}
              >
                <span className="font-mono font-bold">
                  {idx + 1}. {entry.initials}
                </span>
                <span className="font-bold">{entry.score}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {!gameStarted ? (
        <div className="text-center">
          <canvas
            ref={canvasRef}
            width={GAME_WIDTH}
            height={GAME_HEIGHT}
            className="mx-auto border-4 border-blue-400 rounded-lg bg-blue-50"
          />
          <Button
            onClick={startGame}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4"
          >
            🎮 Start Game
          </Button>
          <p className="text-blue-200 text-sm mt-4">Use ← → arrow keys to move</p>
        </div>
      ) : gameOver ? (
        <div className="text-center">
          <canvas
            ref={canvasRef}
            width={GAME_WIDTH}
            height={GAME_HEIGHT}
            className="mx-auto border-4 border-red-400 rounded-lg opacity-50"
          />
          <div className="mt-6">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h4 className="text-3xl font-bold text-white mb-2">Game Over!</h4>
            <p className="text-2xl text-blue-200 mb-6">Final Score: {score}</p>
            
            {showInitialsInput ? (
              <div className="mb-6 max-w-xs mx-auto">
                <p className="text-yellow-400 font-bold mb-3">🏆 High Score! Enter Your Initials:</p>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    maxLength={3}
                    value={initials}
                    onChange={(e) => setInitials(e.target.value.toUpperCase())}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubmitInitials()}
                    placeholder="AAA"
                    className="text-center text-2xl font-mono font-bold uppercase bg-white/20 text-white border-yellow-400"
                    autoFocus
                  />
                  <Button
                    onClick={handleSubmitInitials}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            ) : null}
            
            <Button
              onClick={resetGame}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Play Again
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-6">
            <span className="text-3xl font-bold text-white">Score: {score}</span>
            <div className="flex items-center gap-2">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-2xl">
                  {i < lives ? '❤️' : '🖤'}
                </span>
              ))}
            </div>
            {combo > 2 && (
              <span className="text-xl font-bold text-yellow-400 animate-pulse">
                🔥 {combo}x COMBO!
              </span>
            )}
          </div>
          <canvas
            ref={canvasRef}
            width={GAME_WIDTH}
            height={GAME_HEIGHT}
            className="mx-auto border-4 border-blue-400 rounded-lg cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              setPlayerX(Math.max(0, Math.min(GAME_WIDTH - PLAYER_WIDTH, x - PLAYER_WIDTH / 2)));
            }}
          />
          <p className="text-blue-200 text-sm mt-4">
            Use ← → arrow keys or click/tap to move
          </p>
        </div>
      )}
    </div>
  );
}