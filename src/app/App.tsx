import './styles/index.scss';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getAuthIsInited, userActions } from '@/entities/User';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

import { AppRouter } from './providers/router';

export const App = () => {
  const dispatch = useAppDispatch();
  const isInited = useSelector(getAuthIsInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return isInited && <AppRouter />;
};
