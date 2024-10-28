import { TeamMemberCard } from './TeamMemberCard';

export const TeamMemberList = ({ teamMembers, title }) => {
  return (
    <div className='text-center text-2xl font-accent font-bold'>
      <p>{title}</p>
      {!teamMembers.length ? (
        <p className='mt-12'>Keine {title}</p>
      ) : (
        <div
          id='team-member-list'
          className='flex flex-wrap justify-center gap-8 mt-12'
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} teamMember={member} />
          ))}
        </div>
      )}
    </div>
  );
};
