// Telegram WebApp SDK için TypeScript tanımları
interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
  }
  
  interface TelegramInitDataUnsafe {
    user?: TelegramUser;
  }
  
  interface TelegramWebApp {
    initDataUnsafe: TelegramInitDataUnsafe;
    showPopup: (params: { message: string }) => void;
    shareButton: {
      setParams: (params: { text: string; url?: string }) => void;
    };
  }
  
  declare global {
    interface Window {
      Telegram: {
        WebApp: TelegramWebApp;
      };
    }
  }
  
  // Telegram kullanıcı bilgisini almak için fonksiyon
  export const getTelegramUser = (): TelegramUser | null => {
    const tg = window.Telegram?.WebApp;
    return tg?.initDataUnsafe?.user || null;
  };
  
  // Telegram paylaşım düğmesi işlevi
  export const shareTelegramLink = (link: string, text: string): void => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.shareButton.setParams({
        text,
        url: link,
      });
    } else {
      console.error('Telegram WebApp API kullanılamıyor.');
    }
  };
  