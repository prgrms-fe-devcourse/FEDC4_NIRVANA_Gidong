import React from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '@/states/userState';

interface PrivateRouteProps {
  path: string,
  element: () => JSX.Element;
}

const PrivateRoute = ({ path, element }: PrivateRouteProps) => {
  const RouteComponent = element;
  const userInfo = useRecoilValue(userState);

  if (userInfo === null) {
    return <Navigate to={`/login?redirectUrl=${path}`} />
  }
  if (userInfo.token === undefined) {
    return <Navigate to={`/login?redirectUrl=${path}`} />
  }

  return <RouteComponent />; 
}

export default PrivateRoute;