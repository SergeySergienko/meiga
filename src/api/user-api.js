import { api } from '.';

const URL = '/users';

export const userApi = {
  findAll(paramsObject) {
    if (paramsObject) {
      const paramsString = new URLSearchParams(paramsObject).toString();

      return api.get(`${URL}?${paramsString}`);
    }
    return api.get(URL);
  },
  changeRole(id, role) {
    return api.put(URL, { id, role });
  },
  delete(id) {
    return api.delete(`${URL}/${id}`);
  },
};
