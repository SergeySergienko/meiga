import { Main, Photos, About, Kontakt } from '../components';

export const HomePage = () => {
  return (
    <div id='home-page'>
      <div className='relative'>
        <Main />
      </div>
      <div className='relative'>
        <About />
      </div>
      <div className='relative flex justify-center'>
        <Photos />
      </div>
      <div className='relative flex'>
        <Kontakt />
      </div>
    </div>
  );
};
