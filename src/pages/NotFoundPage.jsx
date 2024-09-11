import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ExclamationTriangleIcon } from '../components';

export const NotFoundPage = ({ message }) => {
  return (
    <div className='backdrop-blur bg-main-dark/60'>
      <motion.div
        initial={{ x: '-25vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 8 }}
      >
        <div className='h-screen min-h-600 flex flex-col px-4 items-center justify-center text-center text-white'>
          <div className=' text-yellow-400 mb-4'>
            <ExclamationTriangleIcon />
          </div>
          <h2 className='text-3xl font-bold mb-4'>404 Nicht gefunden</h2>
          <p className='text-xl mb-5'>{message}</p>
          <Link to='/'>
            <button className='btn-primary'>Zurück</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
