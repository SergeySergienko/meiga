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

  const createTeamMember = async (teamMemberData) => {
    try {
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
