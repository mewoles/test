import React, { useState, useEffect } from 'react';
import { updateUserScore } from '../services/userservice';
import { getTelegramUser } from '../telegram/TelegramSDK';

const Game: React.FC = () => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const user = getTelegramUser();

  useEffect(() => {
    if (score > 0 && score % 10 === 0) {
      setLevel((prev) => prev + 1);
    }
  }, [score]);

  const handleTap = async () => {
    setScore((prev) => prev + 1);
    if (user) await updateUserScore(user.id, score + 1);
  };

  return (
    <div>
      <h1>Skor: {score}</h1>
      <h2>Seviye: {level}</h2>
      <button onClick={handleTap}>Tıkla!</button>
    </div>
  );
};

export default Game;
