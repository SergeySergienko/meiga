import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { BlurredWrapper, EventForm } from '../components';
import { eventApi } from '../api';

export const EditEventPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const event = location.state?.event;

  const [loading, setLoading] = useState(false);

  const editEvent = async (eventData) => {
    try {
      setLoading(true);

      const data = await eventApi.update(eventData);

      navigate('/events');
      return data;
    } catch (error) {
      console.error('error:', error);
      return error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlurredWrapper>
      <EventForm
        event={event}
        loading={loading}
        onSubmit={editEvent}
        onCancel={() => navigate('/events')}
      />
    </BlurredWrapper>
  );
};
