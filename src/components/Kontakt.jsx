import React from 'react';

export const Kontakt = () => {
  return (
    <div
      id='contacts'
      className='external-container bg-blue-dark/80 text-white text-center text-sm m-8 sm:my-12 lg:my-20 p-6 sm:py-12 lg:py-20'
    >
      <div>
        <p className='font-bold'>Anschrift: </p>
        <p className='mb-8'>
          SV Meissner Gasse e.V., Frank Kehling, Hirtenplatz 7, 09599 Freiberg
        </p>
      </div>
      <div>
        <p className='font-bold'>Kontaktinformationen: </p>
        <p>email: info@sv-meiga.de Tel: 03731 4794534</p>
      </div>
    </div>
  );
};
