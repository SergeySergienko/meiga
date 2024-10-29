import { CandidateCard } from './CandidateCard';

export const CandidateList = ({ candidates }) => {
  return (
    <>
      <p className='text-center text-2xl font-accent font-bold mb-8'>
        Kandidaten
      </p>
      {candidates.map((candidate) => (
        <CandidateCard key={candidate.id} candidate={candidate} />
      ))}
    </>
  );
};
