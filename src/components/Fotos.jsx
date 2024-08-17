import Mannschaftsfoto from '../assets/images/Mannschaftsfoto-04-2024.jpg';
import sv2 from '../assets/images/SV2.jpg';
import sv3 from '../assets/images/20230712_213110.jpg';
import sv4 from '../assets/images/20230719_213453.jpg';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

export const Fotos = () => {
  useScrollFadeIn();

  return (
    <div
      id='fotos'
      className='flex flex-col gap-8 min-h-screen w-full sm:w-3/4 lg:w-1/2 p-4'
    >
      <div className='photo'>
        <img src={sv2} alt='sv2' className='w-full h-auto' />
      </div>

      <div className='photo flex flex-col items-center'>
        <img
          src={Mannschaftsfoto}
          alt='Mannschaftsfoto'
          className='w-full h-auto'
        />
        <div className='w-full bg-white text-center p-2'>
          <p>Ein Teil unseres Teams mit den neuen Trikots</p>
          <p>Hol dir auch du deine Wunschnummer!</p>
        </div>
      </div>

      <div className='photo flex flex-col items-center'>
        <img src={sv3} alt='sv3' className='w-full h-auto' />
        <div className='w-full bg-white text-center p-2'>
          <p>
            Impressionen zu unseren Trainingseinheiten in der Freiluftsaison
            2023
          </p>
          <p>Immer mit Ehrgeiz, aber auch viel Spaß</p>
        </div>
      </div>

      <div className='photo'>
        <img src={sv4} alt='sv4' className='w-full h-auto' />
      </div>
    </div>
  );
};
