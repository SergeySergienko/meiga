import { useNavigate, NavLink } from 'react-router-dom';
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

  const logout = async () => {
    try {
      const res = await authApi.logout();
      const json = await res.json();
      reset();
      onClose();
      navigate('/');
    } catch (error) {
      console.error('error:', error);
    }
  };

  return (
    <div className='flex flex-col items-end gap-8 mb-12'>
      <div className='flex flex-col items-end gap-2 mb-4'>
        <div className='text-white text-2xl font-bold'>
          Hallo {currentUser.role} !
        </div>
        <span className=' text-gray-400 font-medium underline italic underline-offset-4'>
          {currentUser.login}
        </span>
      </div>
      {menuItems.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={onClose}
          className='nav-menu-item'
        >
          {link.label}
        </NavLink>
      ))}
      <button className='nav-menu-item my-6' onClick={logout}>
        Abmelden
      </button>
    </div>
  );
};
