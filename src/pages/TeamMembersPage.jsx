import { useEffect, useState } from 'react';
import { TeamMemberList } from '../components';
import { teamMemberApi } from '../api';

export const TeamMembersPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await teamMemberApi.findAll({
          teamRole: 'MEMBER',
        });
        setTeamMembers(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div id='team-page' className='my-32 mx-2 xs:mx-4 sm:mx-8'>
      <div className='external-container py-10 bg-gray-200'>
        <div className='mb-4 text-center font-accent text-lg'>
          <h2 className='text-purple-700'>Unser Team</h2>
        </div>
        <TeamMemberList teamMembers={teamMembers} />
      </div>
    </div>
  );
};
