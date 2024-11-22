import { useState } from 'react';
import { CaretIcon } from '../icons';

export const Select = ({ children, title, onClose }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => {
    setMenuOpen(false);
    onClose?.();
  };

  return (
    <div className='w-full flex flex-col items-end'>
      <div
        onClick={toggleMenu}
        className='w-full flex justify-between items-center gap-2 nav-menu-item profile-menu-item'
      >
        <span>{title}</span>
        <span className={`${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
          <CaretIcon />
        </span>
      </div>
      {isMenuOpen && children(closeMenu)}
    </div>
  );
};
