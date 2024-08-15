import { useEffect, useState } from 'react';
import { NavMenu } from './NavMenu';
import { CrossIcon } from './icons';

export const MenuPopup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleMenuClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 backdrop-blur transition-opacity duration-500 ${
        isVisible ? 'opasity-100' : 'opacity-0'
      }`}
    >
      <nav
        className='p-8 overflow-y-auto max-h-full'
        style={{
          backgroundImage:
            'linear-gradient(to bottom, #161d30, #161d30, #161d30, #161d30, transparent)',
        }}
      >
        <button
          className='absolute top-8 right-6 md:right-10 text-white hover:text-purple-300'
          onClick={handleMenuClose}
        >
          <CrossIcon />
        </button>
        <NavMenu classList='flex flex-col gap-8' onClose={handleMenuClose} />
      </nav>
    </div>
  );
};
