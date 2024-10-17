import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useProfileStore } from '../store';

export const AuthLayout = ({ allowedRoles = ['USER'] }) => {
  const location = useLocation();
  const currentUser = useProfileStore((state) => state.currentUser);

  if (!currentUser.role) {
    return <Navigate to='/auth' state={{ from: location.pathname }} replace />;
  }
  if (allowedRoles.includes(currentUser.role)) {
    return <Outlet />;
  }

  return <Navigate to='/' />;
};
