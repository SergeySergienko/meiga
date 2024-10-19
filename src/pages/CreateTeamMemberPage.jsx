import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlurredWrapper, TeamMemberForm } from '../components';
import { teamMemberApi } from '../api';
import { useProfileStore, useTeamMemberStore } from '../store';

export const CreateTeamMemberPage = () => {
  const navigate = useNavigate();
  const update = useProfileStore((state) => state.update);
  const updateTeamMember = useTeamMemberStore(
    (state) => state.updateTeamMember
  );
  const [loading, setLoading] = useState(false);

  const createTeamMember = async (teamMemberData) => {
    try {
      setLoading(true);

      const { data: teamMember } = await teamMemberApi.create(teamMemberData);
      localStorage.setItem('teamMemberInfo', JSON.stringify(teamMember));
      updateTeamMember({
        name: teamMember.name,
        photo: teamMember.photo,
        isActivated: teamMember.isActivated,
      });

      const user = JSON.parse(localStorage.getItem('userInfo'));
      localStorage.setItem(
        'userInfo',
        JSON.stringify({ ...user, role: 'CANDIDATE' })
      );
      update({ role: 'CANDIDATE' });

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
