import Mannschaftsfoto from '../assets/images/Mannschaftsfoto-04-2024.jpg';
import sv3 from '../assets/images/20230712_213110.jpg';
import sv4 from '../assets/images/20230719_213453.jpg';

export const Fotos = () => {
  return (
    <div id='fotos' className='external-container py-6 sm:py-12 lg:py-20'>
      {/* <div className='flex justify-center p-4 bg-purple-200'>
        <h2 className='text-4xl text-center text-purple-600 font-bold [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-purple-900'>
          Fotos
        </h2>
      </div> */}
      <div className='flex-column'>
        <div>
          <img
            src={Mannschaftsfoto}
            alt='Mannschaftsfoto'
            style={{ width: '98%', border: '8px solid white' }}
          />
        </div>
        <div className=''>
          <p>Ein Teil unseres Teams mit den neuen Trikots</p>
          <p className='mb-4'>Hol dir auch du deine Wunschnummer!</p>
        </div>
      </div>

      <div className='flex-column'>
        <div>
          <img src={sv3} alt='sv3' />
        </div>
        <div>
          <p>
            Impressionen zu unseren Trainingseinheiten in der Freiluftsaison
            2023
          </p>
          <p className='mb-4'>Immer mit Ehrgeiz, aber auch viel Spaß</p>
        </div>
      </div>
      <div className='flex-column'>
        <img src={sv4} alt='sv4' />
      </div>
    </div>
  );
};
