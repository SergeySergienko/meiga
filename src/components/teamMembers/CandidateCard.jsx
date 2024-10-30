import { useNavigate } from 'react-router-dom';
import { teamMemberApi } from '../../api';
import { useModalStore } from '../../store';

export const CandidateCard = ({ candidate }) => {
  const navigate = useNavigate();

  const [setModalOpen, setModalInfo] = useModalStore((state) => [
    state.setModalOpen,
    state.setModalInfo,
  ]);

  const { id, name, position, slogan, photo } = candidate;

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
    <div className='flex flex-col md:flex-row justify-between items-center p-4 mb-4 rounded overflow-hidden bg-white'>
      <img src={photo} alt={name} className='h-64 rounded object-contain' />
      <div className='flex flex-col items-center md:items-start'>
        <h3 className='font-bold'>{name}</h3>
        <p className='text-sm'>{position}</p>
        <p className='my-4 text-sm text-purple-700 font-semibold italic'>
          "{slogan}"
        </p>
        <div>Kandidat</div>
        <div>ID: {id}</div>
      </div>
      <div className='min-w-24'>
        <button
          className='btn-primary-small mt-4 md:mt-0'
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
    </div>
  );
};
