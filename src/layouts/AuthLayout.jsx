import { useLocation, Outlet, Navigate } from 'react-router-dom';

export const AuthLayout = ({ allowedRoles = ['USER'] }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('userInfo'));

  if (!user) {
    return <Navigate to='/auth' state={{ from: location.pathname }} replace />;
  }
  if (allowedRoles.includes(user.role)) {
    return <Outlet />;
  }

  return <Navigate to='/' replace />;
};
