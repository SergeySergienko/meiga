import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlurredWrapper, TeamMemberForm } from '../components';
import { teamMemberApi } from '../api';
import { useStore } from '../store';

export const CreateTeamMemberPage = () => {
  const navigate = useNavigate();
  const updateTeamMember = useStore((state) => state.updateTeamMember);
  const [loading, setLoading] = useState(false);

  const createTeamMember = async (teamMemberData) => {
    try {
      setLoading(true);

      const { data: teamMember } = await teamMemberApi.create(teamMemberData);
      updateTeamMember(teamMember);

      navigate(-1);
      return teamMember;
    } catch (error) {
      console.log('error:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <BlurredWrapper>
      <TeamMemberForm
        loading={loading}
        onSubmit={createTeamMember}
        onCancel={() => navigate(-1)}
      />
    </BlurredWrapper>
  );
};
