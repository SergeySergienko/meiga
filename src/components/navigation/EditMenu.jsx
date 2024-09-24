import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { path: '/editUsers', label: 'Benutzer' },
  { path: '/editMembers', label: 'Teammitglieder' },
  { path: '/editEvents', label: 'Veranstaltungen' },
];

export const EditMenu = ({ onClose }) => {
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
      className={`flex flex-col items-end font-bold transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {menuItems.map((item) => (
        <li
          key={item.path}
          onClick={handleNavigate(item.path)}
          className='submenu-item p-0 py-3'
        >
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};
