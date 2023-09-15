import React from 'react';
import { Navigate } from 'react-router-dom';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';

interface PrivateRouteProps {
  path: string;
  element: () => JSX.Element;
}

const PrivateRoute = ({ path, element }: PrivateRouteProps) => {
  const RouteComponent = element;
  const [userSessionData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );

  if (userSessionData._id === null) {
    return <Navigate to={`/login?redirectUrl=${path}`} />;
  }
  if (userSessionData.token === undefined) {
    return <Navigate to={`/login?redirectUrl=${path}`} />;
  }

  return <RouteComponent />;
};

export default PrivateRoute;
