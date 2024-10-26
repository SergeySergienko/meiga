import { useLoaderData } from 'react-router-dom';
import { TeamMemberList } from '../components';

export const CandidatesPage = () => {
  const teamMembers = useLoaderData();

  const candidates = teamMembers?.filter(
    (member) => member.teamRole === 'CANDIDATE'
  );

  return (
    <div id='candidates-page' className='my-32 mx-2 xs:mx-4 sm:mx-8'>
      <div className='external-container py-10 bg-gray-200'>
        <div className='mb-4 text-center font-accent text-lg'>
          <h2 className='text-purple-700'>Unser Team</h2>
          <p className='sm:text-2xl font-bold'>Kandidaten</p>
        </div>
        {!candidates ? (
          <h3 className='text-center font-accent tracking-widest font-bold'>
            <p className='text-3xl'>Keine Kandidaten</p>
          </h3>
        ) : (
          <TeamMemberList teamMembers={candidates} />
        )}
      </div>
    </div>
  );
};
