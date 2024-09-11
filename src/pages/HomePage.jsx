import { Main, Photos, Team, Kontakt } from '../components';

export const HomePage = () => {
  return (
    <div id='home-page'>
      <div className='relative'>
        <Main />
      </div>
      <div className='relative'>
        <Team />
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
