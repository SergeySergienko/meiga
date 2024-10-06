import { useNavigate, useLocation } from 'react-router-dom';

import { BlurredWrapper, EventForm } from '../components';
import { eventApi } from '../api';

export const EditEventPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const event = location.state?.event;

  const editEvent = async (eventData) => {
    try {
      const data = await eventApi.update(eventData);

      navigate(-1);
      return data;
    } catch (error) {
      console.error('error:', error);
      return error;
    }
  };

  return (
    <BlurredWrapper>
      <EventForm
        onSubmit={editEvent}
        onCancel={() => navigate(-1)}
        event={event}
      />
    </BlurredWrapper>
  );
};
