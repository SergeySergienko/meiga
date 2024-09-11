import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { EventCard } from './EventCard';

export const LastEvent = ({ event }) => {
  return (
    <div
      id='last-event'
      className='external-container p-4 sm:py-10 bg-gray-200'
    >
      <h2 className='mb-4 text-center font-accent text-lg'>
        <p className='text-purple-700'>Letzte Veranstaltung</p>
      </h2>
      <LazyLoadComponent>
        <EventCard event={event} />
      </LazyLoadComponent>
    </div>
  );
};
