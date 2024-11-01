import { api } from '.';

const URL = '/team-members';

export const teamMemberApi = {
  find(id) {
    return api.get(`${URL}/${id}`);
  },
  findByUserId(userId) {
    return api.get(`${URL}/search?userId=${userId}`);
  },
  findAll(paramsObject) {
    if (paramsObject) {
      const paramsString = new URLSearchParams(paramsObject).toString();

      return api.get(`${URL}?${paramsString}`);
    }
    return api.get(URL);
  },
  create(teamMember) {
    return api.post(URL, teamMember, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
  },
  update(teamMember) {
    return api.put(URL, teamMember, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
  },
  changeStatus(id, status) {
    return api.patch(URL, { id, status });
  },
  delete(id) {
    return api.delete(`${URL}/${id}`);
  },
};
