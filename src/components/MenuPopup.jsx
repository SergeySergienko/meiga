import { useEffect } from 'react';
import { NavMenu } from './NavMenu';
import { CrossIcon } from './icons';

export const MenuPopup = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className='fixed inset-0 z-50 backdrop-blur'>
      <nav className='fixed bg-blue-dark w-screen p-8'>
        <button
          className='absolute top-8 right-6 md:right-10 text-white hover:text-purple-300'
          onClick={onClose}
        >
          <CrossIcon />
        </button>
        <NavMenu classList='flex flex-col gap-8' onClose={onClose} />
      </nav>
    </div>
  );
};
