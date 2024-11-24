import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', label: 'Startseite' },
  { path: '/team-members', label: 'Team' },
  { path: '/events', label: 'Veranstaltungen' },
  { path: '/downloads', label: 'Downloads' },
];

export const NavMenu = ({ classList, onClose }) => {
  return (
    <div className={classList}>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={onClose}
          className='nav-menu-item'
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};
