import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useProfileStore, useTeamMemberStore } from '../../store';
import { authApi } from '../../api';
import { EditMenu } from './EditMenu';
import { CaretIcon } from '../icons';

const menuItems = [
  { path: '/my-settings', label: 'Meine Einstellungen' },
  { path: '/create-team-member', label: 'Mitgliedschaft' },
  { path: 'management', label: 'Verwaltung' },
];

export const ProfileMenu = ({ onClose }) => {
  const [currentUser, reset] = useProfileStore((state) => [
    state.currentUser,
    state.reset,
  ]);

  const [currentTeamMember, resetTeamMember] = useTeamMemberStore((state) => [
    state.currentTeamMember,
    state.resetTeamMember,
  ]);

  const [isEditMenuOpen, setEditMenuOpen] = useState(false);

  const toggleEditMenu = () => setEditMenuOpen((prev) => !prev);

  const closeEditMenu = () => {
    setEditMenuOpen(false);
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
        localStorage.removeItem('userInfo');
        localStorage.removeItem('teamMemberInfo');
        reset();
        resetTeamMember();
        onClose();
        navigate('/');
      }
    } catch (error) {
      console.error('error:', error);
    }
  };

  return (
    <div className='flex flex-col items-end gap-8 mb-12'>
      <div className='flex flex-col items-end gap-2 mb-4'>
        <div className='text-white text-2xl font-bold'>
          Hallo {currentTeamMember.name || currentUser.role} !
        </div>
        <span className=' text-gray-400 font-medium underline italic underline-offset-4'>
          {currentUser.email}
        </span>
        <div className='text-white'>Ihre Rolle ist {currentUser.role}</div>
      </div>
      {menuItems.map((link) => {
        if (link.label === 'Verwaltung') {
          if (currentUser.role !== 'ADMIN' || currentUser.role !== 'OWNER')
            return;

          return (
            <div key={link.path} className='relative'>
              <div
                onClick={toggleEditMenu}
                className='flex justify-end items-center gap-1 nav-menu-item'
              >
                <span
                  className={`${isEditMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                >
                  <CaretIcon />
                </span>
                <span>{link.label}</span>
              </div>
              {isEditMenuOpen && <EditMenu onClose={closeEditMenu} />}
            </div>
          );
        }

        if (
          link.label === 'Mitgliedschaft' &&
          (currentUser.role === 'CANDIDATE' || currentUser.role === 'MEMBER')
        )
          return;

        return (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className='nav-menu-item'
          >
            {link.label}
          </NavLink>
        );
      })}
      <button className='nav-menu-item my-6 text-red-500' onClick={logout}>
        Abmelden
      </button>
    </div>
  );
};
