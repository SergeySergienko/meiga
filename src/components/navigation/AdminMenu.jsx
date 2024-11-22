import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { path: '/users', label: 'Benutzerverwaltung' },
  { path: '/candidates', label: 'Mitgliederverwaltung' },
  { path: '/create-event', label: 'Veranstaltung erstellen' },
];

export const AdminMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavigate = (path) => () => {
    setIsVisible(false);
    onClose();
    navigate(`${path}`);
  };

  return (
    <ul
      id='admin-menu'
      className={`flex flex-col gap-2 mt-2 items-end transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {menuItems.map((item) => (
        <li
          key={item.path}
          onClick={handleNavigate(item.path)}
          className='submenu-item p-0'
        >
          <div className='profile-menu-item'>{item.label} &#8680;</div>
        </li>
      ))}
    </ul>
  );
};
