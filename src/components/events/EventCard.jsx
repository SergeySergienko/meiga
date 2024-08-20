import { useState, useRef } from 'react';
// import { FaTrophy } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Events.css';
import { getLocaleDate } from '../../utils';
import { CalendarIcon, MapMarkerIcon } from '../icons';

export const EventCard = ({ event }) => {
  const [fullText, setFullText] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const mainSlider = useRef(null);
  const thumbsSlider = useRef(null);

  const settingsMain = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    swipe: false,
    asNavFor: thumbsSlider.current,
    beforeChange: (oldIndex, newIndex) => setCurrentPhoto(newIndex),
  };

  const settingsThumbs = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: mainSlider.current,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '10px',
    swipeToSlide: true,
    arrows: false,
    variableWidth: true,
    beforeChange: (oldIndex, newIndex) => {
      mainSlider.current.slickGoTo(newIndex);
    },
  };

  const handleThumbnailClick = (index) => {
    setCurrentPhoto(index);
  };

  const toggleFullText = () => setFullText((prev) => !prev);

  if (!event)
    return (
      <h3 className='text-center font-accent tracking-widest font-bold'>
        <p className='text-3xl'>Keine Ereignisse</p>
      </h3>
    );

  return (
    <div id='event-card'>
      <>
        <h3 className='text-center font-bold'>
          <p className='text-xl'>{event.title}</p>
        </h3>
        {/* <p className='text-center'>
          <span className='mr-1'>Platz im Turnier: </span>
          <FaTrophy className='inline pb-1 mr-1 text-red-600' />
          <span>{event.teamPlace}</span>
        </p> */}
        <div className='flex justify-center items-center gap-4 text-purple-800'>
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
            <span>{event.location}</span>
          </div>
        </div>
        <div className='my-4'>
          <p
            className={`h-full text-gray-600 ${fullText ? '' : 'line-clamp-4'}`}
          >
            {event.description}
          </p>
          <span className='flex justify-end'>
            <button className='btn-secondary-small' onClick={toggleFullText}>
              {fullText ? 'Text reduzieren' : 'Text erweitern'}
            </button>
          </span>
        </div>
      </>
      <div id='sliders'>
        <Slider ref={mainSlider} {...settingsMain} className='slider-for mb-4'>
          {event.photos.map((photo, index) => (
            <div key={index}>
              <img
                className='w-full h-96 sm:h-192 object-contain object-center'
                src={photo}
                alt={`Event_photo_${index}`}
              />
            </div>
          ))}
        </Slider>
        <Slider ref={thumbsSlider} {...settingsThumbs} className='slider-nav'>
          {event.photos.map((photo, index) => (
            <div key={index} onClick={() => handleThumbnailClick(index)}>
              <div
                className={`w-16 h-10 mx-1 sm:w-32 sm:h-20 md:mx-4 bg-cover bg-center cursor-pointer transition ${
                  currentPhoto === index ? 'brightness-90' : ''
                } brightness-50  `}
                style={{
                  backgroundImage: `url(${photo})`,
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
