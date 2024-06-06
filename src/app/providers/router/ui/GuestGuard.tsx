import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getAuthData } from '@/entities/User';

import { getRouteLogin } from '@/shared/consts/router';

interface IGuestGuardProps {
  children: ReactNode;
}

export const GuestGuard = (props: IGuestGuardProps) => {
  const { children } = props;
  const authData = useSelector(getAuthData);
  const location = useLocation();

  if (!authData) {
    return <Navigate to={getRouteLogin()} state={{ from: location }} replace />;
  }

  return children;
};
