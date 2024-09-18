import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfileStore } from '../../store';
import { authApi } from '../../api';

const menuItems = [
  { path: 'settings', label: 'Einstellungen' },
  { path: 'membership', label: 'Mitgliedschaft' },
];

export const ProfileMenu = ({ onClose }) => {
  const [currentUser, reset] = useProfileStore((state) => [
    state.currentUser,
    state.reset,
  ]);

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

  const logout = async () => {
    try {
      const res = await authApi.logout();
      const json = await res.json();
      reset();
      setIsVisible(false);
      onClose();
      navigate('/');
    } catch (error) {
      console.error('error:', error);
    }
  };

  return (
    <>
      <ul
        className={`absolute top-9 right-0 pt-3 text-center bg-blue-dark font-semibold transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className='p-3 border-b-2 border-gray-800'>
          <div className='text-white'>Hallo {currentUser.role}!</div>
          <span className='font-medium underline underline-offset-4'>
            {currentUser.login}
          </span>
        </div>
        {menuItems.map((item) => (
          <li
            key={item.path}
            onClick={handleNavigate(item.path)}
            className='submenu-item hover:bg-gray-800'
          >
            <span>{item.label}</span>
          </li>
        ))}
        <button
          className='submenu-item w-full hover:bg-gray-800'
          onClick={logout}
        >
          Abmelden
        </button>
        <div
          className={
            'h-4 absolute left-0 right-0 bg-gradient-to-b from-blue-dark to-transparent'
          }
        />
      </ul>
    </>
  );
};
