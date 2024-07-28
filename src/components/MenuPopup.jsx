import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { links } from './NavMenu';

export const MenuPopup = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className='fixed inset-0 z-50 backdrop-blur'>
      <nav
        className='fixed h-72 bg-main-dark w-screen p-8'
        // x-show='showSidenav'
        // x-transition:enter='transition ease-out duration-300'
        // x-transition:enter-start='-translate-x-72'
        // x-transition:enter-end='translate-x-0'
        // x-transition:leave='transition ease-in duration-300 '
        // x-transition:leave-start='translate-x-0'
        // x-transition:leave-end='-translate-x-72'
        // x-cloak
      >
        <button
          className='absolute top-10 right-6 text-2xl text-white/70 hover:text-white'
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <ul className='flex flex-col gap-8'>
          {links.map((link) => (
            <li key={link.path}>
              <a
                href={link.path}
                onClick={onClose}
                className='mr-10 transition cursor-pointer text-white hover:text-purple-300'
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
