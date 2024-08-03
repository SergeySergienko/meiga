import Mannschaftsfoto from '../assets/images/Mannschaftsfoto-04-2024.jpg';
import sv3 from '../assets/images/20230712_213110.jpg';
import sv4 from '../assets/images/20230719_213453.jpg';

export const Fotos = () => {
  return (
    <div id='fotos' className='external-container py-20'>
      <div className='flex-column rotate-6'>
        <div>
          <img
            src={Mannschaftsfoto}
            alt='Mannschaftsfoto'
            style={{ width: '98%', border: '8px solid white' }}
          />
        </div>
        <div className='bg-white text-main-dark mb-16' style={{ width: '98%' }}>
          <p>Ein Teil unseres Teams mit den neuen Trikots</p>
          <p className='pb-2'>Hol dir auch du deine Wunschnummer!</p>
        </div>
      </div>

      <div className='relative flex-column -rotate-6 z-10'>
        <div>
          <img src={sv3} alt='sv3' />
        </div>
        <div className='bg-white text-main-dark mb-16' style={{ width: '98%' }}>
          <p>
            Impressionen zu unseren Trainingseinheiten in der Freiluftsaison
            2023
          </p>
          <p className='pb-2'>Immer mit Ehrgeiz, aber auch viel Spaß</p>
        </div>
      </div>
      <div className='flex-column origin-bottom-right transform rotate-12'>
        <img src={sv4} alt='sv4' />
      </div>
    </div>
  );
};
