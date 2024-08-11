import { useEffect, useState } from 'react';

const submenuItems = [
  { path: 'mitgliederwerbung', label: 'Mitgliederwerbung' },
  { path: 'aufnahmeantrag', label: 'Aufnahmeantrag' },
  { path: 'satzung', label: 'Satzung' },
  { path: 'impressum', label: 'Impressum' },
];

export const SubMenu = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubMenuItemClick = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <ul
      className={`lg:absolute top-12 lg:left-auto lg:right-0 font-bold transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {submenuItems.map((item) => (
        <li
          key={item.path}
          onClick={handleSubMenuItemClick}
          className='submenu-item'
        >
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};
