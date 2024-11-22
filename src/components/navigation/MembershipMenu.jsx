import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store';
import { InvokeModalElement } from '../ui';
import { teamMemberApi } from '../../api';

export const MembershipMenu = ({ onClose }) => {
  const [currentTeamMember, resetTeamMember] = useStore((state) => [
    state.currentTeamMember,
    state.resetTeamMember,
  ]);

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

  const deleteTeamMember = async (id) => {
    try {
      const res = await teamMemberApi.delete(id);
      if (res.status === 200) {
        resetTeamMember();
        onClose();
        navigate('/team-members');
      }
    } catch (error) {
      console.error('error:', error);
      if (error.status === 403) {
        navigate('/error', {
          state: {
            error: {
              title: 'Löschfehler',
              message: '',
            },
          },
        });
      }
    }
  };

  return (
    <ul
      id='membership-menu'
      className={`flex flex-col gap-2 mt-2 items-end transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {!currentTeamMember.id && (
        <li
          onClick={handleNavigate('/create-team-member')}
          className='submenu-item p-0'
        >
          <div className='profile-menu-item'>Beantragen &#8680;</div>
        </li>
      )}
      {currentTeamMember.id && (
        <>
          <li
            onClick={handleNavigate('/edit-team-member')}
            className='submenu-item p-0'
          >
            <div className='profile-menu-item'>Bearbeiten &#8680;</div>
          </li>
          <InvokeModalElement
            type='error'
            action='löschen'
            entity='Mitglied'
            descriptor={currentTeamMember.name}
            submitFn={() => deleteTeamMember(currentTeamMember.id)}
          >
            {(handleInvoke) => (
              <li onClick={handleInvoke} className='submenu-item p-0'>
                <div className='profile-menu-item'>Löschen &#8680;</div>
              </li>
            )}
          </InvokeModalElement>
        </>
      )}
    </ul>
  );
};
