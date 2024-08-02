import { EventCardCover } from './EventCardCover';

const getPublicUrl = (url) => url.replace('/public', '');

const photos_08_26_2023 = import.meta.glob('/public/events/08_26_2023/*');
const photos_07_03_2024 = import.meta.glob('/public/events/07_03_2024/*');
const photos_07_17_2024 = import.meta.glob('/public/events/07_17_2024/*');

const events = [
  {
    title: 'Beachvolleyball-Training',
    date: '07/17/2024',
    location: 'Irgendwo im Raum Freiberg',
    description: 'Typisches Samstagstraining im Sand.',
    photos: Object.keys(photos_07_17_2024).map(getPublicUrl),
  },
  {
    title: 'Training',
    date: '07/03/2024',
    location: 'Raum Freiberg',
    description: 'Gewöhnliches Samstagstraining im Freien.',
    photos: Object.keys(photos_07_03_2024).map(getPublicUrl),
  },
  {
    title: 'Freundschaft turnier',
    date: '08/26/2023',
    location: 'Raum Freiberg',
    description:
      'Abschluss der Freiluftsaison mit einem Turnier mit Teilnahme unserer Volleyball - Freunde aus Dresden.',
    photos: Object.keys(photos_08_26_2023).map(getPublicUrl),
  },
];

export const PastEvents = () => {
  return (
    <>
      <div id='events' className='bg-main-dark/10'>
        <div className='external-container py-10 sm:py-16 lg:py-20'>
          <h2 className='mb-4 text-center font-accent tracking-widest font-bold'>
            <p className='text-4xl'>Unsere vergangenen Veranstaltungen</p>
          </h2>
          <div className='mb-10'>
            {events.map((event, index) => (
              <EventCardCover key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};