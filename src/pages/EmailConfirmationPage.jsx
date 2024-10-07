import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authApi } from '../api';
import { useProfileStore } from '../store';

export const EmailConfirmationPage = () => {
  const update = useProfileStore((state) => state.update);
  const navigate = useNavigate();
  const { activationToken } = useParams();

  useEffect(() => {
    const activateUser = async () => {
      try {
        const res = await authApi.activate(activationToken);
        const { accessToken, refreshToken, user } = res.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('userInfo', JSON.stringify(user));

        update({ email: user.email, role: user.role });
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
