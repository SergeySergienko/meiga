import { TeamMemberCardCover } from './TeamMemberCardCover';

export const TeamMemberList = ({ teamMembers }) => {
  return (
    <>
      <p className='text-center text-2xl font-accent font-bold'>
        Teammitglieder
      </p>
      <div
        id='team-member-list'
        className='flex flex-wrap justify-center gap-8 my-8'
      >
        {teamMembers.map((member) => (
          <TeamMemberCardCover key={member.id} teamMember={member} />
        ))}
      </div>
    </>
  );
};
