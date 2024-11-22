import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { teamMemberApi } from '../api';
import { CandidateList, InvokeModalElement } from '../components';

export const CandidatesPage = () => {
  const navigate = useNavigate();

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await teamMemberApi.findAll({
          status: 'CANDIDATE',
        });
        setCandidates(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const activateTeamMember = async (id) => {
    try {
      const data = await teamMemberApi.changeStatus(id, 'MEMBER');
      navigate('/team-members');
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

  const getActions = (person) => (
    <InvokeModalElement
      action='aktivieren'
      entity='Kandidat'
      descriptor={person.name}
      submitFn={() => activateTeamMember(person.id)}
    />
  );

  return (
    <div id='candidates-page' className='my-32 mx-2 xs:mx-4 sm:mx-8'>
      <div className='external-container py-10 bg-gray-200'>
        <div className='mb-4 text-center font-accent text-lg'>
          <h2 className='text-purple-700'>Unser Team</h2>
        </div>
        <CandidateList candidates={candidates} getActions={getActions} />
      </div>
    </div>
  );
};
