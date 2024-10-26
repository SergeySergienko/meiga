import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthForm, BlurredWrapper, TabButton } from '../components';
import { useProfileStore, useTeamMemberStore } from '../store';
import { authApi, teamMemberApi } from '../api';

const tabTitles = ['Anmelden', 'Registrieren'];

export const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const update = useProfileStore((state) => state.update);
  const updateTeamMember = useTeamMemberStore(
    (state) => state.updateTeamMember
  );

  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(tabTitles[0]);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const signup = async ({ email, password }) => {
    try {
      setLoading(true);

      const res = await authApi.signup({ email, password });

      if (res.status === 201) {
        navigate('/email-verification');
      }
    } catch (error) {
      console.error('error:', error);
      if (error.status === 409) {
        navigate('/error', {
          state: {
            error: {
              title: 'E-Mail muss eindeutig sein',
              message: `Benutzer mit der E-Mail ${email} existiert bereits`,
            },
          },
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const findTeamMemberByUserId = async (userId) => {
    try {
      const { data: teamMember } = await teamMemberApi.findByUserId(userId);
      if (teamMember) {
        localStorage.setItem('teamMemberInfo', JSON.stringify(teamMember));
        updateTeamMember(teamMember);
      }
    } catch (error) {
      console.error('error:', error);
    }
  };

  const login = async ({ email, password }) => {
    try {
      setLoading(true);

      const res = await authApi.login({ email, password });
      const { accessToken, refreshToken, user } = res.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('userInfo', JSON.stringify(user));
      update({ id: user.id, email: user.email, role: user.role });

      await findTeamMemberByUserId(user.id);

      navigate(location.state?.from || '/');
    } catch (error) {
      console.error('error:', error);
      if (error.status === 403) {
        navigate('/error', {
          state: {
            error: {
              title: 'Das Konto wurde nicht aktiviert',
              message: `Überprüfen Sie Ihre E-Mail: ${email} und folgen Sie dem Link in der Nachricht`,
            },
          },
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlurredWrapper>
      <div className='flex mb-8'>
        {tabTitles.map((title) => (
          <TabButton
            key={title}
            title={title}
            activeTab={activeTab}
            toggleTab={toggleTab}
          />
        ))}
      </div>

      <AuthForm
        title={activeTab}
        loading={loading}
        onSubmit={activeTab === tabTitles[0] ? login : signup}
        onCancel={() => navigate('/')}
      />
    </BlurredWrapper>
  );
};
