import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { InvokeModalElement, PersonCard } from '../components';
import { teamMemberApi } from '../api';
import { useStore } from '../store';

export const PersonPage = () => {
  const navigate = useNavigate();
  const { personId } = useParams();

  const [currentUser, currentTeamMember, resetTeamMember] = useStore(
    (state) => [
      state.currentUser,
      state.currentTeamMember,
      state.resetTeamMember,
    ]
  );

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

  const deleteTeamMember = async (id) => {
    try {
      const res = await teamMemberApi.delete(id);
      if (res.status === 200) {
        resetTeamMember();
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

  const getActions = () => {
    let deactivateButton = <></>;
    let updateButton = <></>;
    let deleteButton = <></>;
    if (currentUser.role === 'ADMIN' || currentUser.role === 'OWNER') {
      deactivateButton = (
        <InvokeModalElement
          type='error'
          action='blockieren'
          entity='Mitglied'
          descriptor={person.name}
          submitFn={() => deactivateTeamMember(person.id)}
        />
      );
    }
    if (personId === currentTeamMember.id) {
      updateButton = (
        <button
          className='btn-primary-small'
          onClick={() => navigate('/edit-team-member')}
        >
          Bearbeiten
        </button>
      );
      deleteButton = (
        <InvokeModalElement
          type='error'
          action='löschen'
          entity='Mitglied'
          descriptor={person.name}
          submitFn={() => deleteTeamMember(person.id)}
        />
      );
    }
    return (
      <>
        {updateButton}
        {deactivateButton}
        {deleteButton}
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
