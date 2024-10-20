import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BlurredWrapper, TeamMemberForm } from '../components';
import { teamMemberApi } from '../api';
import { useTeamMemberStore } from '../store';

export const EditTeamMemberPage = () => {
  const navigate = useNavigate();
  const [teamMember, updateTeamMember] = useTeamMemberStore((state) => [
    state.currentTeamMember,
    state.updateTeamMember,
  ]);

  const [loading, setLoading] = useState(false);

  const editTeamMember = async (teamMemberData) => {
    try {
      setLoading(true);

      const { data: teamMember } = await teamMemberApi.update(teamMemberData);
      if (teamMember) {
        localStorage.setItem('teamMemberInfo', JSON.stringify(teamMember));
        updateTeamMember(teamMember);
      }

      navigate('/team');
      return teamMember;
    } catch (error) {
      console.error('error:', error);
      return error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlurredWrapper>
      <TeamMemberForm
        teamMember={teamMember}
        loading={loading}
        onSubmit={editTeamMember}
        onCancel={() => navigate('/team')}
      />
    </BlurredWrapper>
  );
};
