import { useLoaderData } from 'react-router-dom';
import { TeamMemberList } from '../components';

export const TeamMembersPage = () => {
  const teamMembers = useLoaderData();

  const membersOnly = teamMembers?.filter(
    (member) => member.teamRole === 'MEMBER'
  );

  return (
    <div id='team-page' className='my-32 mx-2 xs:mx-4 sm:mx-8'>
      <div className='external-container py-10 bg-gray-200'>
        <div className='mb-4 text-center font-accent text-lg'>
          <h2 className='text-purple-700'>Unser Team</h2>
          <p className='sm:text-2xl font-bold'>Teammitglieder</p>
        </div>
        {!membersOnly ? (
          <h3 className='text-center font-accent tracking-widest font-bold'>
            <p className='text-3xl'>Keine Teammitglieder</p>
          </h3>
        ) : (
          <TeamMemberList teamMembers={membersOnly} />
        )}
      </div>
    </div>
  );
};
