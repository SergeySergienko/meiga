import { useEffect } from 'react';
import { EventCard } from './EventCard';
import { CrossIcon } from '../icons';

export const EventPopup = ({ event, onClose }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className='fixed p-4 inset-0 z-30 flex items-center justify-center bg-main-dark/80 backdrop-blur sm:top-10'>
      <div className='relative external-container pt-16 pb-6 overflow-y-auto max-h-full bg-white rounded'>
        <button
          className='absolute top-8 right-10 text-main-dark hover:text-main-dark/70'
          onClick={onClose}
        >
          <CrossIcon />
        </button>

        <EventCard event={event} />
      </div>
    </div>
  );
};