import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { AuthForm, TabButton } from '../components';
import { useProfileStore } from '../store';

const tabTitles = ['Anmelden', 'Registrieren'];

export const AuthPage = () => {
  const update = useProfileStore((state) => state.update);

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tabTitles[0]);

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  const updateProfile = ({ email }) => {
    update({ login: email, role: 'User' });
    navigate(-1);
  };

  return (
    <div
      id='bg-blur'
      className={
        'inset-0 p-4 fixed flex items-center justify-center backdrop-blur bg-main-dark/60'
      }
    >
      <div id='tabs' className='w-full max-w-sm h-3/5'>
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
            onSubmit={updateProfile}
            onCancel={() => navigate(-1)}
          />
        </motion.div>
      </div>
    </div>
  );
};
