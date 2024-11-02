import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useStore } from '../../store';
import { authApi } from '../../api';
import { AdminMenu } from './AdminMenu';
import { CaretIcon } from '../icons';

const menuItems = [
  { path: '/my-settings', label: 'Meine Einstellungen' },
  { path: '/create-team-member', label: 'Mitgliedschaft beantragen' },
  // { path: '/edit-team-member', label: 'Teammitglied aktualisieren' },
  { path: 'management', label: 'Verwaltung' },
];

export const ProfileMenu = ({ onClose }) => {
  const [currentUser, resetUser, currentTeamMember, resetTeamMember] = useStore(
    (state) => [
      state.currentUser,
      state.resetUser,
      state.currentTeamMember,
      state.resetTeamMember,
    ]
  );

  const [isAdminMenuOpen, setAdminMenuOpen] = useState(false);

  const toggleAdminMenu = () => setAdminMenuOpen((prev) => !prev);

  const closeAdminMenu = () => {
    setAdminMenuOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await authApi.logout();
      if (res.status === 200) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        resetUser();
        resetTeamMember();
        onClose();
        navigate('/');
      }
    } catch (error) {
      console.error('error:', error);
      if (error.status === 404) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        resetUser();
        resetTeamMember();
        onClose();
        navigate('/');
      }
    }
  };

  return (
    <div className='flex justify-end'>
      <div
        id='profile-menu'
        className='flex flex-col w-fit items-end gap-8 mb-12'
      >
        <div id='profile-info' className='flex flex-col items-end gap-2'>
          <div className='text-white text-2xl font-bold'>
            Hallo {currentTeamMember.name || currentUser.role} !
          </div>
          <span className=' text-purple-300 font-medium italic'>
            {currentUser.email}
          </span>
        </div>
        <div className='border border-gray-800 w-full'></div>
        {menuItems.map((item) => {
          if (
            item.label === 'Verwaltung' &&
            (currentUser.role === 'ADMIN' || currentUser.role === 'OWNER')
          ) {
            return (
              <div key={item.path} className='flex flex-col items-end'>
                <div
                  onClick={toggleAdminMenu}
                  className='flex justify-end items-center gap-1 nav-menu-item profile-menu-item'
                >
                  <span>{item.label}</span>
                  <span
                    className={`${isAdminMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <CaretIcon />
                  </span>
                </div>
                {isAdminMenuOpen && <AdminMenu onClose={closeAdminMenu} />}
              </div>
            );
          }

          if (
            item.label === 'Verwaltung' &&
            (currentUser.role !== 'ADMIN' || currentUser.role !== 'OWNER')
          )
            return;

          if (
            item.label === 'Mitgliedschaft beantragen' &&
            currentTeamMember.status
          )
            return;

          if (
            item.label === 'Teammitglied aktualisieren' &&
            currentTeamMember.status !== 'MEMBER'
          )
            return;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className='nav-menu-item'
            >
              <div className='profile-menu-item'>{item.label} &#8680;</div>
            </NavLink>
          );
        })}
        <div className='border border-gray-800 w-full'></div>
        <button
          className='nav-menu-item text-red-500 profile-menu-item'
          onClick={logout}
        >
          Abmelden &#8680;
        </button>
      </div>
    </div>
  );
};
