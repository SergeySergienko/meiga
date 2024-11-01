import { useProfileStore } from '../../store';

export const PersonCard = ({ person, actions }) => {
  const { role } = useProfileStore((state) => state.currentUser);

  return (
    <div
      id='person-card'
      className='flex flex-col md:flex-row gap-4 justify-between items-center p-4 mb-4 rounded overflow-hidden bg-white'
    >
      <img
        src={person.photo}
        alt={person.name}
        className='h-64 rounded object-contain'
      />
      <dl className='grow'>
        <dt>Name</dt>
        <dd>{person.name}</dd>
        <dt>Position</dt>
        <dd>{person.position}</dd>
        <dt>Slogan</dt>
        <dd>{person.slogan}</dd>
        {role === 'ADMIN' && (
          <>
            <dt>ID</dt>
            <dd className='text-sm'>{person.id}</dd>
          </>
        )}
      </dl>
      <div
        className={`min-w-24 md:h-64 flex flex-col justify-center gap-4 ${'md:pl-4 md:border-l-2'}`}
      >
        {actions}
      </div>
    </div>
  );
};
