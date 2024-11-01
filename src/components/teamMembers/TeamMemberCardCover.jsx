import { useNavigate } from 'react-router-dom';

export const TeamMemberCardCover = ({ teamMember }) => {
  const navigate = useNavigate();

  const { id, name, position, slogan, photo } = teamMember;

  const handleClick = () => {
    navigate(`/team-members/${id}`);
  };
  return (
    <div
      className='w-56 h-auto p-4 bg-main-dark/10 rounded overflow-hidden text-center cursor-pointer'
      onClick={handleClick}
    >
      <img
        src={photo}
        alt={name}
        className='h-72 w-full mb-4 rounded object-cover object-top'
      />
      <p className='font-bold'>{name}</p>
      <p className='mb-4 text-sm'>{position}</p>
      <p className='text-sm text-purple-700 font-semibold italic'>"{slogan}"</p>
    </div>
  );
};
