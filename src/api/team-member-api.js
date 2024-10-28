import { api } from '.';

const URL = '/team-members';

export const teamMemberApi = {
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
  activate(id) {
    return api.patch(`${URL}/${id}`);
  },
  update(teamMember) {
    return api.put(URL, teamMember, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
  },
  // delete(id) {
  //   return api.delete(`${URL}/${id}`);
  // },
};
