import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { EventCard } from './EventCard';

export const EventPopup = ({ event, onClose }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className='fixed p-4 inset-0 z-50 flex items-center justify-center bg-main-dark/80 backdrop-blur'>
      <div
        className='relative external-container pt-16 pb-6 overflow-y-auto max-h-full bg-white rounded'
        style={{ marginTop: 100 }}
      >
        <button
          className='absolute top-4 right-4 text-xl hover:text-red-600'
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <EventCard event={event} />
      </div>
    </div>
  );
};
