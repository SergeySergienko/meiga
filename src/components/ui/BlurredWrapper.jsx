import { motion } from 'framer-motion';

export const BlurredWrapper = ({ children }) => {
  return (
    <div
      id='blurred-wrapper'
      className={
        'z-30 inset-0 p-4 fixed flex items-center justify-center backdrop-blur bg-main-dark/60'
      }
    >
      <motion.div
        id='blurred-wrapper-content'
        initial={{ x: '-25vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 8 }}
        className='w-full max-w-sm h-5/6 overflow-y-auto'
      >
        {children}
      </motion.div>
    </div>
  );
};
