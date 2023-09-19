import { Navigate, Outlet, useLocation } from 'react-router-dom';

import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';

const PrivateRoute = (): React.ReactElement => {
  const [userSessionData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );
  const { pathname } = useLocation();

  const checkAuth = () => {
    if (userSessionData._id === null || userSessionData._id === '') {
      return false;
    }
    if (userSessionData.token === undefined || userSessionData.token === '') {
      return false;
    }
    return true;
  };

  return checkAuth() ? (
    <Outlet />
  ) : (
    <Navigate
      to={`/login?redirect=${pathname}`}
      replace
    />
  );
};

export default PrivateRoute;
