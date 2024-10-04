import { api } from '.';

export const eventApi = {
  findAll() {
    return api.get('/events');
  },
  create(event) {
    return api.post('/events', event, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
  },
  delete(id) {
    return api.delete(`/events/${id}`);
  },
};
