import { useEffect } from 'react';
import { links } from './NavMenu';
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
      <nav className='fixed bg-main-dark/90 w-screen p-8'>
        <button
          className='absolute top-8 right-6 md:right-10 text-white hover:text-purple-300'
          onClick={onClose}
        >
          <CrossIcon />
        </button>
        <ul className='flex flex-col gap-8'>
          {links.map((link) => (
            <li key={link.path}>
              <a
                href={link.path}
                onClick={onClose}
                className='mr-10 transition cursor-pointer font-bold text-xl text-white hover:text-purple-300'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
