import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getAuthData } from '@/entities/User';

import { getRouteMain } from '@/shared/consts/router';

interface IRequireAuthProps {
  children: ReactNode;
}

export const RequireAuth = (props: IRequireAuthProps) => {
  const { children } = props;
  const authData = useSelector(getAuthData);
  const location = useLocation();

  if (!authData) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  return children;
};
