export const TeamMemberCard = ({ teamMember }) => {
  const { name, position, slogan, photo } = teamMember;
  return (
    <>
      <div className='w-56 h-auto p-4 bg-main-dark/10 rounded overflow-hidden text-center'>
        <img
          src={photo}
          alt='team-member-photo'
          className='h-72 w-full mb-4 rounded object-cover object-top'
        />
        <h3 className='font-bold'>{name}</h3>
        <p className='mb-4 text-sm'>{position}</p>
        <p className='text-sm text-purple-700 font-semibold italic'>
          "{slogan}"
        </p>
      </div>
    </>
  );
};
