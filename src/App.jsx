import React from 'react';
import {
  Fotos,
  Impressum,
  Main,
  Team,
  Kontakt,
  Navbar,
  PastEvents,
  Footer,
} from './components';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div
        id='bg-fixed'
        className='fixed top-0 left-0 bottom-0 right-0 bg-cover'
      ></div>
      <Navbar />
      <div className='parallax'>
        <Main />
      </div>
      <div className='relative bg-white'>
        <Team />
      </div>
      <div className='parallax'>
        <Fotos />
      </div>
      <div className='relative bg-white'>
        <PastEvents />
      </div>
      <div className='parallax'>
        <Kontakt />
      </div>
      <div className='relative'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
