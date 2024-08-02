import { useState } from 'react';
// import { FaTrophy } from 'react-icons/fa';
import { EventPopup } from './EventPopup';
import { getLocaleDate } from '../../utils';
import { CalendarIcon, MapMarkerIcon } from '../icons';

export const EventCardCover = ({ event }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const openEventPopup = () => {
    setIsPopUpOpen(true);
  };

  const closeEventPopup = () => {
    setIsPopUpOpen(false);
  };

  return (
    <>
      <div className='flex flex-col justify-between p-4 mb-4 rounded overflow-hidden bg-white md:flex-row'>
        <div className='flex flex-col md:flex-row'>
          <div
            className='shrink-0 w-full h-72 md:w-72 md:h-40 mr-4 mb-4 rounded bg-cover bg-center bg-no-repeat md:mb-0'
            style={{
              backgroundImage: `url(${event.photos[0]})`,
            }}
          ></div>
          <div className='flex flex-col justify-between items-start md:mr-4'>
            <h3 className='line-clamp-1 text-xl uppercase'>
              <span
                className='mr-4 font-bold transition hover:text-red-600 cursor-pointer'
                onClick={openEventPopup}
              >
                {event.title}
              </span>
              {/* <FaTrophy className='inline pb-1 mr-1 text-red-600' />
            <span>{event.teamPlace}</span> */}
            </h3>
            <div className='flex justify-center items-center gap-4 text-purple-800 text-sm'>
              <div className='flex justify-center items-center gap-1'>
                <span>
                  <CalendarIcon />
                </span>
                <span>{getLocaleDate(event.date)}</span>
              </div>
              <div className='flex justify-center items-center gap-1'>
                <span>
                  <MapMarkerIcon />
                </span>
                <span className='line-clamp-1'>{event.location}</span>
              </div>
            </div>
            <p className='h-24 line-clamp-4 opacity-60 mb-4 md:mb-0'>
              {event.description}
            </p>
          </div>
        </div>
        <div className='flex items-center shrink-0 md:pl-4 md:border-l-2'>
          <button className='btn-primary' onClick={openEventPopup}>
            Mehr
          </button>
        </div>
      </div>
      {isPopUpOpen && <EventPopup event={event} onClose={closeEventPopup} />}
    </>
  );
};
