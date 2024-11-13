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
};
