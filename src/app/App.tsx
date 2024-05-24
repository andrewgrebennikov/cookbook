import './styles/index.scss';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getAuthIsInited, userActions } from '@/entities/User';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { AppRouter } from './providers/router/ui/AppRouter';

export const App = () => {
  const dispatch = useAppDispatch();
  const isInited = useSelector(getAuthIsInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return isInited && <AppRouter />;
};
