import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BlurredWrapper, EventForm } from '../components';
import { eventApi } from '../api';

export const CreateEventPage = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const createEvent = async (eventData) => {
    try {
      const data = await eventApi.create(eventData);

      navigate(-1);
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
    }
  };

  return (
    <BlurredWrapper>
      <EventForm
        onSubmit={createEvent}
        onCancel={() => navigate(-1)}
        errors={errors}
      />
    </BlurredWrapper>
  );
};
