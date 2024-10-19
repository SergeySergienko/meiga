import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BlurredWrapper, EventForm } from '../components';
import { eventApi } from '../api';

export const CreateEventPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const createEvent = async (eventData) => {
    try {
      setLoading(true);

      const data = await eventApi.create(eventData);

      navigate('/events');
      return data;
    } catch (error) {
      console.error('error:', error);
      const { message, errors } = error.response.data;
      const { path } = errors[0];
      setErrors((prev) => ({
        ...prev,
        [path]: message,
      }));
      return error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlurredWrapper>
      <EventForm
        loading={loading}
        errors={errors}
        onSubmit={createEvent}
        onCancel={() => navigate('/events')}
      />
    </BlurredWrapper>
  );
};
