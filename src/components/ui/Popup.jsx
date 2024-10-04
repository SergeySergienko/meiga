import { useEffect } from 'react';
import { CrossIcon } from '../icons';
import { useModalStore } from '../../store';
import { motion } from 'framer-motion';

export const Popup = ({ open }) => {
  const [setModalOpen, modalInfo, resetModalInfo] = useModalStore((state) => [
    state.setModalOpen,
    state.modalInfo,
    state.resetModalInfo,
  ]);

  const handleSubmit = () => {
    modalInfo?.submitFn();
    resetModalInfo();
    setModalOpen(false);
  };

  const handleCancel = () => {
    resetModalInfo();
    setModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) {
        handleCancel();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  if (!open) return null;

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
            onClick={handleCancel}
          >
            <CrossIcon />
          </button>

          <h3 className='font-bold text-center p-4 text-white bg-red-500'>
            {modalInfo.entity} {modalInfo.action}
          </h3>
          <div className='p-4'>
            <div className='my-4'>
              Wollen Sie "{modalInfo.name}" {modalInfo.entity} wirklich{' '}
              <span className='font-bold'>{modalInfo.action}</span>?
            </div>
            <div className='border border-black/5' />
            <div className='flex justify-between mt-4'>
              <button className='btn-secondary-small' onClick={handleCancel}>
                Abbrechen
              </button>
              <button className='btn-error-small' onClick={handleSubmit}>
                Einreichen
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
