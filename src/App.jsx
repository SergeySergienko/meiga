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
      <Navbar />
      <div className='parallax' id='parallax1'>
        <Main />
      </div>
      <div className='section'>
        <Team />
      </div>
      <div className='parallax' id='parallax2'>
        <Fotos />
      </div>
      <div className='section'>
        <PastEvents />
      </div>
      <div className='parallax' id='parallax1'>
        <Kontakt />
      </div>
      <div className='section'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
