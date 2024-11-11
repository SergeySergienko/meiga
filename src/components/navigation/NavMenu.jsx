import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SubMenu } from '..';
import { CaretIcon } from '../icons';

const links = [
  { path: '/', label: 'Startseite' },
  { path: '/team-members', label: 'Team' },
  { path: '/events', label: 'Veranstaltungen' },
  // { path: 'unterlagen', label: 'Unterlagen' },
];

export const NavMenu = ({ classList, isScrolled, onClose }) => {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => setSubmenuOpen((prev) => !prev);

  const closeSubmenu = () => {
    setSubmenuOpen(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={classList}>
      {links.map((link) => {
        if (link.label === 'Unterlagen') {
          return (
            <div key={link.path} className='relative'>
              <div
                onClick={toggleSubmenu}
                className='flex items-center gap-1 nav-menu-item'
              >
                <span>{link.label}</span>
                <span
                  className={`${isSubmenuOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                  <CaretIcon />
                </span>
              </div>
              {isSubmenuOpen && (
                <SubMenu isScrolled={isScrolled} onClose={closeSubmenu} />
              )}
            </div>
          );
        }

        return (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className='nav-menu-item'
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
};
