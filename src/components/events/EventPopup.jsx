import { useEffect, useState } from 'react';
import { EventCard } from './EventCard';
import { CrossIcon } from '../icons';

export const EventPopup = ({ event, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleEventPopUpClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500);
  };

  return (
    <div
      className={`fixed p-4 inset-0 z-30 flex items-center justify-center bg-main-dark/80 backdrop-blur transition-opacity duration-500 ${
        isVisible ? 'opasity-100' : 'opacity-0'
      }`}
    >
      <div className='relative external-container pt-12 pb-6 overflow-y-auto max-h-full bg-white rounded'>
        <button
          className='absolute top-4 right-4 text-main-dark hover:text-main-dark/70'
          onClick={handleEventPopUpClose}
        >
          <CrossIcon />
        </button>

        <EventCard event={event} />
      </div>
    </div>
  );
};
