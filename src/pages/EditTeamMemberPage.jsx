import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BlurredWrapper, TeamMemberForm } from '../components';
import { teamMemberApi } from '../api';
import { useTeamMemberStore } from '../store';

export const EditTeamMemberPage = () => {
  const navigate = useNavigate();
  const [currentTeamMember, updateTeamMember] = useTeamMemberStore((state) => [
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

      navigate('/team-members');
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
        teamMember={currentTeamMember}
        loading={loading}
        onSubmit={editTeamMember}
        onCancel={() => navigate('/team-members')}
      />
    </BlurredWrapper>
  );
};
