import { useEffect, useState } from 'react';
import { FullScreenPopup } from '..';

const submenuItems = [
  // { path: 'mitgliederwerbung', label: 'Mitgliederwerbung' },
  // { path: 'aufnahmeantrag', label: 'Aufnahmeantrag' },
  // { path: 'satzung', label: 'Satzung' },
  { path: 'downloads', label: 'Downloads' },
  { path: 'impressum', label: 'Impressum' },
];

export const SubMenu = ({ isScrolled, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formularName, setFormularName] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubMenuItemClick = (name) => () => {
    setIsVisible(false);
    setFormularName(name);
  };

  const closePopup = () => {
    onClose();
    setFormularName(null);
  };

  const navBgClass = isScrolled ? 'bg-blue-dark' : 'transparent';
  const navEdgeClass = isScrolled
    ? 'bg-gradient-to-b from-blue-dark to-transparent'
    : 'transparent';

  return (
    <>
      <ul
        className={`lg:absolute top-10 lg:left-auto lg:-right-9 lg:w-36 ${navBgClass} font-bold transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {submenuItems.map((item) => (
          <li
            key={item.path}
            onClick={handleSubMenuItemClick(item.label)}
            className='submenu-item'
          >
            <span>{item.label}</span>
          </li>
        ))}
        <div
          className={`hidden lg:block h-4 absolute left-0 right-0 ${navEdgeClass}`}
        />
      </ul>
      {formularName && (
        <FullScreenPopup formularName={formularName} onClose={closePopup} />
      )}
    </>
  );
};
