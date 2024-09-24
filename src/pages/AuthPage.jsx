import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { AuthForm, TabButton } from '../components';
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

  const createProfile = async ({ email, password }) => {
    try {
      navigate(-1);
    } catch (error) {
      console.error('error:', error);
    }
  };

  const updateProfile = async ({ email, password }) => {
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
    <div
      id='bg-blur'
      className={
        'inset-0 p-4 fixed flex items-center justify-center backdrop-blur bg-main-dark/60'
      }
    >
      <div id='tabs' className='w-full max-w-sm h-2/3'>
        <motion.div
          initial={{ x: '-25vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50, damping: 8 }}
        >
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
            onSubmit={
              activeTab === tabTitles[0] ? updateProfile : createProfile
            }
            onCancel={() => navigate(-1)}
          />
        </motion.div>
      </div>
    </div>
  );
};
