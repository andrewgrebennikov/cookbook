import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@/widgets/Header';

import { routeConfig } from '../config/routeConfig';

import { AuthGuard } from './AuthGuard';
import { GuestGuard } from './GuestGuard';

interface IAppRouterProps {
  className?: string;
}

export const AppRouter = (props: IAppRouterProps) => {
  const { className } = props;

  return (
    <div className="container my-4">
      <Header />
      <Suspense fallback="Загрузка страницы...">
        <Routes>
          {Object.values(routeConfig).map((route) => {
            const { path, element, auth, guest } = route;

            return (
              <Route
                key={path}
                path={path}
                element={auth ? <GuestGuard>{element}</GuestGuard> : guest ? <AuthGuard>{element}</AuthGuard> : element}
              />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
};
