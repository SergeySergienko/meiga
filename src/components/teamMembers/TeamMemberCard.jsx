import { useNavigate } from 'react-router-dom';
import { teamMemberApi } from '../../api';
import { useModalStore, useProfileStore } from '../../store';

export const TeamMemberCard = ({ teamMember }) => {
  const navigate = useNavigate();

  const currentUser = useProfileStore((state) => state.currentUser);
  const [setModalOpen, setModalInfo] = useModalStore((state) => [
    state.setModalOpen,
    state.setModalInfo,
  ]);

  const { id, name, position, slogan, photo, teamRole } = teamMember;

  const activateTeamMember = async (id) => {
    try {
      const data = await teamMemberApi.activate(id);

      navigate('/team');
    } catch (error) {
      console.error('error:', error);
      if (error.status === 409) {
        navigate('/error', {
          state: {
            error: {
              title: 'Aktivierungsfehler',
              message: '',
            },
          },
        });
      }
    }
  };

  const handleModal = (info) => () => {
    setModalOpen(true);
    setModalInfo(info);
  };

  return (
    <div className='w-56 h-auto p-4 bg-main-dark/10 rounded overflow-hidden text-center'>
      <img
        src={photo}
        width='14rem'
        height='18rem'
        alt={name}
        className='h-72 w-full mb-4 rounded object-cover object-top'
      />
      <h3 className='font-bold'>{name}</h3>
      <p className='mb-4 text-sm'>{position}</p>
      <p className='text-sm text-purple-700 font-semibold italic'>"{slogan}"</p>
    </div>
  );
};
