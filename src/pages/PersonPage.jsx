import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { InvokeModalButton, PersonCard } from '../components';
import { teamMemberApi } from '../api';
import { useProfileStore, useTeamMemberStore } from '../store';

export const PersonPage = () => {
  const navigate = useNavigate();
  const { personId } = useParams();

  const { role } = useProfileStore((state) => state.currentUser);
  const [currentTeamMember, updateTeamMember] = useTeamMemberStore((state) => [
    state.currentTeamMember,
    state.updateTeamMember,
  ]);

  const [person, setPerson] = useState({});

  useEffect(() => {
    (async (id) => {
      try {
        const { data } = await teamMemberApi.find(id);
        if (data) {
          setPerson(data);
        }
      } catch (error) {
        console.error('error:', error);
      }
    })(personId);
  }, []);

  const deactivateTeamMember = async (id) => {
    try {
      const data = await teamMemberApi.changeStatus(id, 'CANDIDATE');
      navigate('/team-members');
    } catch (error) {
      console.error('error:', error);
      if (error.status === 409) {
        navigate('/error', {
          state: {
            error: {
              title: 'Deaktivierungsfehler',
              message: '',
            },
          },
        });
      }
    }
  };

  const getActions = () => {
    let deactivateButton = <></>;
    let updateButton = <></>;
    if (role === 'ADMIN') {
      deactivateButton = (
        <InvokeModalButton
          type='error'
          action='blockieren'
          entity='Mitglied'
          descriptor={person.name}
          submitFn={() => deactivateTeamMember(person.id)}
        />
      );
    }
    if (person.id === currentTeamMember.id) {
      updateButton = (
        <InvokeModalButton
          type='primary'
          action='aktualisieren'
          entity='Mitglied'
          descriptor={person.name}
          submitFn={() => navigate('/edit-team-member')}
        />
      );
    }
    return (
      <>
        {updateButton}
        {deactivateButton}
      </>
    );
  };

  return (
    <div id='person-page' className='my-32 mx-2 xs:mx-4 sm:mx-8'>
      <div className='flex flex-col gap-4 external-container py-10 bg-gray-200'>
        <div className='text-center text-3xl font-extrabold'>
          <h2 className='text-purple-600'>{person.name}</h2>
        </div>
        <PersonCard person={person} actions={getActions()} />
      </div>
    </div>
  );
};