import { TeamMemberCard } from './TeamMemberCard';

export const TeamMemberList = ({ teamMembers }) => {
  if (!teamMembers)
    return (
      <h3 className='text-center font-accent tracking-widest font-bold'>
        <p className='text-3xl'>Keine Teammitglieder</p>
      </h3>
    );

  return (
    <div
      id='team-member-list'
      className='flex flex-wrap justify-center gap-8 mt-12'
    >
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.id} teamMember={member} />
      ))}
    </div>
  );
};
