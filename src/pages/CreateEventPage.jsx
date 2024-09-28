import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { BlurredWrapper, CreateEventForm } from '../components';
import { useProfileStore } from '../store';
import { eventApi } from '../api';

export const CreateEventPage = () => {
  const navigate = useNavigate();

  const createEvent = async (event) => {
    try {
      const data = await eventApi.create(event);

      navigate(-1);
    } catch (error) {
      console.error('error:', error);
    }
  };

  return (
    <BlurredWrapper>
      <CreateEventForm onSubmit={createEvent} onCancel={() => navigate(-1)} />
    </BlurredWrapper>
  );
};
