import { Outlet, Navigate } from 'react-router-dom';

export const NoAuthLayout = () => {
  const user = localStorage.getItem('userInfo');
  if (user) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};
