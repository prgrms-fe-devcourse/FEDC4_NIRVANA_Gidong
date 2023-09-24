import { Navigate, Outlet, useLocation } from 'react-router-dom';

import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';
import checkAuth from './utils/checkAuth';

const PrivateRoute = (): React.ReactElement => {
  const [userSessionData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    { _id: '', token: '' }
  );
  const { pathname } = useLocation();

  return checkAuth(userSessionData) ? (
    <Outlet />
  ) : (
    <Navigate
      to={`/login?redirect=${pathname}`}
      replace
    />
  );
};

export default PrivateRoute;
