import { PersonCard } from './PersonCard';

export const CandidateList = ({ candidates, getActions }) => {
  return (
    <>
      <p className='text-center text-2xl font-accent font-bold mb-8'>
        Kandidaten
      </p>
      {candidates.map((candidate) => (
        <PersonCard
          key={candidate.id}
          person={candidate}
          actions={getActions(candidate)}
        />
      ))}
    </>
  );
};
