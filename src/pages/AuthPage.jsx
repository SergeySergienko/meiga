import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthForm, BlurredWrapper, TabButton } from '../components';
import { useProfileStore } from '../store';
import { authApi } from '../api';

const tabTitles = ['Anmelden', 'Registrieren'];

export const AuthPage = () => {
  const update = useProfileStore((state) => state.update);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tabTitles[0]);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const signup = async ({ email, password }) => {
    try {
      const res = await authApi.signup({ email, password });

      navigate(-1);
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
    }
  };

  const login = async ({ email, password }) => {
    try {
      const res = await authApi.login({ email, password });
      const { accessToken, refreshToken, user } = res.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('userInfo', JSON.stringify(user));

      update({ email: user.email, role: user.role });
      navigate(-1);
    } catch (error) {
      console.error('error:', error);
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
        onSubmit={activeTab === tabTitles[0] ? login : signup}
        onCancel={() => navigate(-1)}
      />
    </BlurredWrapper>
  );
};
