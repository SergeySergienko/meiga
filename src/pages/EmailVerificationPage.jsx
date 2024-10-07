import { motion } from 'framer-motion';

export const EmailVerificationPage = () => {
  return (
    <div className='backdrop-blur bg-main-dark/60'>
      <motion.div
        initial={{ x: '-25vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 8 }}
      >
        <div className='h-screen min-h-600 flex flex-col px-4 items-center justify-center text-center text-white'>
          <h2 className='text-2xl font-bold mb-4'>
            Überprüfen Sie Ihre E-Mail
          </h2>
          <p className='text-xl mb-5'>
            Folgen Sie dem Link in der Nachricht, um Ihr Konto zu aktivieren
          </p>
        </div>
      </motion.div>
    </div>
  );
};
