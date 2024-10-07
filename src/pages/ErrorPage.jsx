import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ExclamationTriangleIcon } from '../components';

export const ErrorPage = ({ title, message }) => {
  const location = useLocation();
  const error = location.state?.error;

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
          <h2 className='text-2xl font-bold mb-4'>{title || error?.title}</h2>
          <p className='text-xl mb-5'>{message || error?.message}</p>
          <Link to='/'>
            <button className='btn-primary'>Zurück</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
