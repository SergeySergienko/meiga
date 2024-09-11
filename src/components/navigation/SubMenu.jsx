import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const submenuItems = [
  { path: 'downloads', label: 'Downloads' },
  { path: 'impressum', label: 'Impressum' },
];

export const SubMenu = ({ isScrolled, onClose }) => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavigate = (path) => () => {
    setIsVisible(false);
    onClose();
    navigate(`/${path}`);
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
            onClick={handleNavigate(item.path)}
            className='submenu-item'
          >
            <span>{item.label}</span>
          </li>
        ))}
        <div
          className={`hidden lg:block h-4 absolute left-0 right-0 ${navEdgeClass}`}
        />
      </ul>
    </>
  );
};
