import { NavLink } from 'react-router-dom';

const menuItems = [
  { path: '/impressum', label: 'Impressum' },
  { path: '/privacy', label: 'Datenschutzerklärung' },
];

export const DocMenu = () => {
  return (
    <ul id='doc-menu' className='flex gap-3'>
      {menuItems.map((item) => (
        <li key={item.label}>
          <NavLink
            to={item.path}
            className='doc-menu-item hover:text-purple-300'
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
