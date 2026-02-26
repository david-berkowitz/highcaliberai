import React, { useState, useEffect, useRef } from 'react';
import { Trophy, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GAME_WIDTH = 400;
const GAME_HEIGHT = 500;
const PLAYER_WIDTH = 60;
const PLAYER_HEIGHT = 20;
const ITEM_SIZE = 40;
const ITEM_SPEED = 2;

const GOOD_ITEMS = ['✅', '🤝', '💡', '📊', '🎯'];
const BAD_ITEMS = ['❌', '😴', '📱', '🙄', '💩'];

export default function AccountManagerGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [playerX, setPlayerX] = useState(GAME_WIDTH / 2 - PLAYER_WIDTH / 2);
  const [items, setItems] = useState([]);
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
    setPlayerX(GAME_WIDTH / 2 - PLAYER_WIDTH / 2);
    setItems([createItem()]);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setItems([]);
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
          y: item.y + ITEM_SPEED
        }));

        // Check collisions
        newItems.forEach(item => {
          if (
            item.y + ITEM_SIZE >= GAME_HEIGHT - PLAYER_HEIGHT &&
            item.y <= GAME_HEIGHT &&
            item.x + ITEM_SIZE >= playerX &&
            item.x <= playerX + PLAYER_WIDTH
          ) {
            if (item.isGood) {
              setScore(s => s + 10);
            } else {
              setScore(s => Math.max(0, s - 15));
              if (score - 15 <= -30) {
                setGameOver(true);
              }
            }
            item.y = GAME_HEIGHT + 100; // Remove from play
          }
        });

        // Remove off-screen items
        const filteredItems = newItems.filter(item => item.y < GAME_HEIGHT + ITEM_SIZE);

        // Add new items occasionally
        if (Math.random() < 0.02) {
          filteredItems.push(createItem());
        }

        return filteredItems;
      });
    }, 1000 / 60);

    return () => clearInterval(gameLoopRef.current);
  }, [gameStarted, gameOver, playerX, score]);

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

    // Draw player (desk/portfolio)
    ctx.fillStyle = '#1e40af';
    ctx.fillRect(playerX, GAME_HEIGHT - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT);
    ctx.fillStyle = '#fff';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('YOU', playerX + PLAYER_WIDTH / 2, GAME_HEIGHT - 5);
  }, [items, playerX]);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">⚡ Account Manager Challenge ⚡</h3>
        <p className="text-blue-200">Catch good practices (✅ 🤝 💡), avoid bad ones (❌ 😴 📱)!</p>
      </div>

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
          <div className="mb-4">
            <span className="text-3xl font-bold text-white">Score: {score}</span>
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