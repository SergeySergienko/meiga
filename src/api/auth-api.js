import { api } from '.';

const API_URL = import.meta.env.VITE_API_URL;

export const authApi = {
  login({ email, password }) {
    return api.post('/auth/login', { email, password });
  },

  logout() {
    const refreshToken = localStorage.getItem('refreshToken') || '';
    return api.post(
      '/auth/logout',
      {},
      {
        headers: {
          'x-refresh-token': refreshToken,
        },
      }
    );
  },
};
