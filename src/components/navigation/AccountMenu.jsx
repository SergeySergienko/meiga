import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { authApi } from '../../api';
import { AdminMenu, MembershipMenu, ProfileMenu } from '.';
import { Select } from '../ui';

export const AccountMenu = ({ onClose }) => {
  const [currentUser, resetUser, currentTeamMember, resetTeamMember] = useStore(
    (state) => [
      state.currentUser,
      state.resetUser,
      state.currentTeamMember,
      state.resetTeamMember,
    ]
  );

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.error('error:', error);
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      resetUser();
      resetTeamMember();
      onClose();
      navigate('/');
    }
  };

  return (
    <div className='flex justify-end'>
      <div
        id='account-menu'
        className='flex flex-col w-fit items-end gap-8 mb-12'
      >
        <div id='account-info' className='flex items-center gap-4'>
          <div className='flex flex-col items-end gap-2'>
            <div className='text-white text-2xl font-bold'>
              Hallo {currentTeamMember.name || currentUser.role} !
            </div>
            <span className='text-purple-300 font-medium italic'>
              {currentUser.email}
            </span>
          </div>
          {currentTeamMember.photo && (
            <img
              src={currentTeamMember.photo}
              alt='team-member-photo'
              className='h-14 w-14 rounded-md object-cover object-top'
            />
          )}
        </div>

        <div className='border border-gray-800 w-full'></div>

        <Select title='Mein Profil' onClose={onClose}>
          {(handleClose) => <ProfileMenu onClose={handleClose} />}
        </Select>

        <Select title='Meine Mitgliedschaft' onClose={onClose}>
          {(handleClose) => <MembershipMenu onClose={handleClose} />}
        </Select>

        {(currentUser.role === 'ADMIN' || currentUser.role === 'OWNER') && (
          <Select title='Verwaltung' onClose={onClose}>
            {(handleClose) => <AdminMenu onClose={handleClose} />}
          </Select>
        )}

        <div className='border border-gray-800 w-full'></div>

        <button
          className='w-full nav-menu-item text-red-500 profile-menu-item'
          onClick={logout}
        >
          Abmelden
        </button>
      </div>
    </div>
  );
};
