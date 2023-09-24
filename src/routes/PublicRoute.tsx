import { Navigate, Outlet } from 'react-router-dom';

import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';
import checkAuth from './utils/checkAuth';

const PublicRoute = (): React.ReactElement => {
  const [userSessionData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    { _id: '', token: '' }
  );

  return checkAuth(userSessionData) ? (
    <Navigate
      to={`/posts`}
      replace
    />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
