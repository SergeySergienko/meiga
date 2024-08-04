import { motion, useMotionValue, useTransform } from 'framer-motion';
import player from '../assets/images/hero-player.png';
import ball from '../assets/images/hero-ball.png';

export const Main = () => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const translateX = useTransform(
    offsetX,
    (value) => `calc(-50% + ${value / 10}px)`
  );
  const translateY = useTransform(
    offsetY,
    (value) => `calc(-50% + ${value / 10}px)`
  );
  const scale = useTransform(
    [offsetX, offsetY],
    ([x, y]) => `calc(1 + ${(x + y) / 6000})`
  );

  const handleMouseMove = (e) => {
    const element = e.currentTarget;

    const { width, height } = element.getBoundingClientRect();
    const centerX = width / 2;
    const centerY = height / 2;
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    offsetX.set(centerX - mouseX);
    offsetY.set(centerY - mouseY);
  };

  const handleMouseLeave = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  return (
    <div
      id='home'
      className='flex flex-col justify-end relative w-full h-screen min-h-600 overflow-hidden bg-hero-bg bg-cover bg-center'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <>
        <motion.div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-2500 ease-out bg-contain bg-center bg-no-repeat w-96 h-screen min-h-600 border-transparent'
          style={{
            borderTopWidth: '60px',
            borderBottomWidth: '160px',
            backgroundImage: `url(${player})`,
            x: translateX,
            y: translateY,
          }}
        ></motion.div>
        <motion.div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-2500 ease-out bg-contain bg-center bg-no-repeat w-96 h-screen min-h-600 border-transparent'
          style={{
            borderTopWidth: '100px',
            borderBottomWidth: '150px',
            backgroundImage: `url(${ball})`,
            x: translateX,
            y: translateY,
            scale: scale,
          }}
        ></motion.div>
      </>

      <div className='z-10 flex flex-col justify-end w-full h-full pt-20 pb-12 px-8 external-container'>
        <motion.div
          className='max-w-sm'
          initial={{ x: '-15vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        >
          <h1 className='mb-4 font-accent tracking-widest font-bold'>
            <p className='text-lg text-blue-400 [text-shadow:1px_1px_1px_var(--tw-shadow-color)] shadow-black'>
              Willkommen beim
            </p>
            <p className='text-3xl text-white text-purple-200 font-bold [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-black'>
              SV Meissner Gasse e.V.
            </p>
          </h1>
        </motion.div>
      </div>
    </div>
  );
};
