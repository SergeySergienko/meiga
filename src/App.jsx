import React from 'react';
import {
  Fotos,
  // Impressum,
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
      <Navbar />
      <div className='parallax' id='parallax1'>
        <div className='content'>
          <Main />
        </div>
      </div>
      <div className='section'>
        <Team />
      </div>
      <div className='parallax' id='parallax2'>
        <div className='content'>
          <Fotos />
        </div>
      </div>
      <div className='section'>
        <PastEvents />
      </div>
      <div className='parallax' id='parallax1'>
        <div className='content'>
          <Kontakt />
        </div>
      </div>
      <div className='section'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
