import { api } from '.';

export const teamMemberApi = {
  findByUserId(userId) {
    return api.get(`/team-members/search?userId=${userId}`);
  },
  findAll() {
    return api.get('/team-members');
  },
  create(teamMember) {
    return api.post('/team-members', teamMember, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
  },
  // update(event) {
  //   return api.put('/events', event, {
  //     headers: {
  //       'Content-type': 'multipart/form-data',
  //     },
  //   });
  // },
  // delete(id) {
  //   return api.delete(`/events/${id}`);
  // },
};
