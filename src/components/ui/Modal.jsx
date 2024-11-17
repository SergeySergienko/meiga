import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CrossIcon, SpinIcon } from '../icons';

export const Modal = ({
  type,
  action,
  entity,
  descriptor,
  loading,
  onSubmit,
  onCancel,
}) => {
  const modalColorMapper = {
    primary: 'purple-700',
    error: 'red-500',
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCancel?.();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <div
      id='popup-bg'
      className={
        'fixed p-4 inset-0 z-30 flex items-center justify-center backdrop-blur bg-main-dark/60'
      }
    >
      <motion.div
        id='animated-wrapper'
        initial={{ x: '-25vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 50, damping: 8 }}
        className='w-full max-w-sm overflow-y-auto'
      >
        <div
          id='popup'
          className='relative overflow-y-auto max-h-full min-w-48 max-w-96 bg-gray-300 rounded-lg border border-gray-400'
        >
          <button
            className='absolute top-4 right-4 text-white hover:text-gray-300'
            onClick={onCancel}
          >
            <CrossIcon />
          </button>

          <h3
            className={`min-h-14 font-bold text-center p-4 text-white ${
              type === 'primary' ? 'bg-purple-700' : 'bg-red-500'
            }`}
          >
            {entity} {action}
          </h3>
          <div className='p-4'>
            <div className='my-4 text-wrap leading-6'>
              Wollen Sie "{descriptor}" {entity} wirklich{' '}
              <span className='font-bold'>{action}</span>?
            </div>
            <div className='border border-black/5' />
            <div className='flex justify-between mt-4'>
              <button className='btn-secondary-small' onClick={onCancel}>
                Abbrechen
              </button>
              <button
                className={`${
                  type === 'primary' ? 'btn-primary-small' : 'btn-error-small'
                }`}
                onClick={onSubmit}
                disabled={loading}
              >
                {loading ? (
                  <span className='flex items-center'>
                    <SpinIcon size='1em' />
                    <span>Aufbereitung...</span>
                  </span>
                ) : (
                  <span>Einreichen</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
