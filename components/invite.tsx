import React from 'react';
import { shareTelegramLink } from '../telegram/TelegramSDK';

const Invite: React.FC = () => {
  return (
    <div>
      <h1>Arkadaşlarını Davet Et</h1>
      <button onClick={() => shareTelegramLink('https://t.me/YOUR_BOT', 'Bu oyunu dene!')}>
        Davet Et
      </button>
    </div>
  );
};

export default Invite;
