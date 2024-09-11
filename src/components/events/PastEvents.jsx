import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { EventCardCover } from './EventCardCover';

export const PastEvents = ({ events }) => {
  return (
    <div
      id='past-events'
      className='external-container py-4 sm:py-10 bg-gray-200'
    >
      <h2 className='mb-4 text-center font-accent text-lg'>
        <p className='text-purple-700'>Galerie</p>
        <p className='sm:text-2xl font-bold'>
          Unsere vergangenen Veranstaltungen
        </p>
      </h2>
      <LazyLoadComponent>
        {events.map((event, index) => (
          <EventCardCover key={index} event={event} />
        ))}
      </LazyLoadComponent>
    </div>
  );
};
