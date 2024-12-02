import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InvokeModalElement } from '../ui';
import { useStore } from '../../store';
import { userApi } from '../../api';

const menuItems = [
  { path: '/change-email', label: 'E-Mail ändern' },
  { path: '/change-password', label: 'Passwort ändern' },
];

export const ProfileMenu = ({ onClose }) => {
  const navigate = useNavigate();
  const [currentUser, resetUser] = useStore((state) => [
    state.currentUser,
    state.resetUser,
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavigate = (path) => () => {
    setIsVisible(false);
    onClose();
    navigate(`${path}`);
  };

  const deleteUser = async (id) => {
    try {
      const res = await userApi.delete(id);
      if (res.status === 200) {
        resetUser();
      }
    } catch (error) {
      console.error('error:', error);
      if (error.status === 403) {
        navigate('/error', {
          state: {
            error: {
              title: 'Der Benutzer konnte nicht gelöscht werden',
              message:
                'Der Benutzer mit Teammitglied Status kann nicht gelöscht werden',
            },
          },
        });
      }
    } finally {
      onClose();
    }
  };

  return (
    <ul
      id='profile-menu'
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
      <InvokeModalElement
        type='error'
        action='löschen'
        entity='Benutzer'
        descriptor={currentUser.email}
        submitFn={() => deleteUser(currentUser.id)}
      >
        {(handleInvoke) => (
          <li onClick={handleInvoke} className='submenu-item p-0'>
            <div className='profile-menu-item'>Konto löschen &#8680;</div>
          </li>
        )}
      </InvokeModalElement>
    </ul>
  );
};
