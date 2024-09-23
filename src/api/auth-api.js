import axios from 'axios';
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

  refresh(refreshToken) {
    return axios({
      method: 'get',
      baseURL: API_URL,
      url: '/auth/refresh',
      headers: {
        'Content-type': 'application/json',
        'x-refresh-token': refreshToken,
      },
    });
  },
};
