import {
  Photos,
  Main,
  Team,
  Kontakt,
  Navbar,
  Footer,
  Events,
} from './components';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div id='img-bg' className='fixed inset-0 bg-cover'></div>
      <Navbar />
      <div className='relative'>
        <Main />
      </div>
      <div className='relative'>
        <Team />
      </div>
      <div className='relative flex justify-center'>
        <Photos />
      </div>
      <div>
        <Events />
      </div>
      <div className='relative flex'>
        <Kontakt />
      </div>
      <div className='relative'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
