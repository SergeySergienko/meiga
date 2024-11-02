import { Outlet, Navigate } from 'react-router-dom';
import { useStore } from '../store';

export const NoAuthLayout = () => {
  const currentUser = useStore((state) => state.currentUser);
  if (currentUser?.email) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};
