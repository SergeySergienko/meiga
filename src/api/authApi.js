const API_URL = import.meta.env.VITE_API_URL;

export const authApi = {
  login({ email, password }) {
    return fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      credentials: 'include',
    });
  },

  logout() {
    return fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
  },
};
