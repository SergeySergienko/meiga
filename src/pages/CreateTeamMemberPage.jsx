import { useNavigate } from 'react-router-dom';
import { BlurredWrapper, TeamMemberForm } from '../components';
import { teamMemberApi } from '../api';

export const CreateTeamMemberPage = () => {
  const navigate = useNavigate();
  const createTeamMember = async (teamMemberData) => {
    try {
      const data = await teamMemberApi.create(teamMemberData);

      navigate(-1);
      return data;
    } catch (error) {
      console.log('error:', error);
    }
  };
  return (
    <BlurredWrapper>
      <TeamMemberForm
        onSubmit={createTeamMember}
        onCancel={() => navigate(-1)}
      />
    </BlurredWrapper>
  );
};
