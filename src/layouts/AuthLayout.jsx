import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useStore } from '../store';

export const AuthLayout = ({ allowedRoles = ['USER', 'ADMIN', 'OWNER'] }) => {
  const location = useLocation();
  const currentUser = useStore((state) => state.currentUser);

  if (!currentUser.role) {
    return <Navigate to='/auth' state={{ from: location.pathname }} replace />;
  }
  if (allowedRoles.includes(currentUser.role)) {
    return <Outlet />;
  }

  return <Navigate to='/' />;
};
