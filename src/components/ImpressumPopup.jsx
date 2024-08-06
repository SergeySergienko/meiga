import { useEffect, useState } from 'react';
import { BackIcon } from './icons';
import { Impressum } from './Impressum';

export const ImpressumPopup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleImpressumClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 0);
  };

  return (
    <div
      className={`fixed inset-0 z-30 transition-opacity duration-500 ${
        isVisible ? 'opasity-100' : 'opacity-0'
      }`}
    >
      <div className='flex flex-col justify-between h-screen p-8 overflow-y-auto bg-white text-main-dark'>
        <button
          className='place-self-start hover:text-main-dark/70'
          onClick={handleImpressumClose}
        >
          <BackIcon />
        </button>
        <Impressum />
        <button
          className='place-self-end bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 rounded'
          onClick={onClose}
        >
          Zurück zur Startseite
        </button>
      </div>
    </div>
  );
};
