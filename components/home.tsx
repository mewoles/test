import React from 'react';
import { useNavigate } from 'react-router-dom';
import TaskList from './tasklist';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Tap-to-Earn Game</h1>
      <button onClick={() => navigate('/game')}>Oyunu Başlat</button>
      <button onClick={() => navigate('/invite')}>Arkadaşlarını Davet Et</button>
      <TaskList />
    </div>
  );
};

export default Home;
