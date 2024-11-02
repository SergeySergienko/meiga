import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authApi } from '../api';
import { useStore } from '../store';

export const EmailConfirmationPage = () => {
  const updateUser = useStore((state) => state.updateUser);
  const navigate = useNavigate();
  const { activationToken } = useParams();

  useEffect(() => {
    const activateUser = async () => {
      try {
        const res = await authApi.activate(activationToken);
        const { accessToken, refreshToken, user } = res.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        updateUser(user);
        navigate('/');
      } catch (error) {
        console.error('error:', error);
        navigate('/error', {
          state: {
            error: {
              title: 'Hoppla!',
              message:
                'Etwas ist schiefgelaufen. Die Überprüfung ist fehlgeschlagen.',
            },
          },
        });
      }
    };

    activateUser();
  }, []);

  return <></>;
};
