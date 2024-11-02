import axios from 'axios';
import { authApi } from './auth-api';

export * from './auth-api';
export * from './event-api';
export * from './team-member-api';

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      request.headers.setAuthorization(`Bearer ${accessToken}`);
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await authApi.refresh(refreshToken);
        const { accessToken, refreshToken: newRefreshToken } = response.data;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', newRefreshToken);

        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('store');
        window.location.href = '/auth';

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
