import { useNavigate } from 'react-router-dom';
import { teamMemberApi } from '../../api';
import { useModalStore } from '../../store';

export const TeamMemberCard = ({ teamMember }) => {
  const navigate = useNavigate();

  const [setModalOpen, setModalInfo] = useModalStore((state) => [
    state.setModalOpen,
    state.setModalInfo,
  ]);

  const { id, name, position, slogan, photo, teamRole } = teamMember;
  const isCandidate = teamRole === 'CANDIDATE';

  const activateTeamMember = async (id) => {
    try {
      const data = await teamMemberApi.activate(id);

      navigate('/team');
    } catch (error) {
      console.error('error:', error);
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
      {isCandidate && (
        <div
          id='candidate-info'
          className='text-xs my-2 pt-2 border-t border-gray-400'
        >
          <div>{teamRole}</div>
          <div>ID: {id}</div>
          <button
            className='btn-primary-small mt-4'
            onClick={handleModal({
              action: 'aktivieren',
              entity: 'Kandidat',
              name,
              submitFn: () => activateTeamMember(id),
            })}
          >
            Aktivieren
          </button>
        </div>
      )}
    </div>
  );
};
