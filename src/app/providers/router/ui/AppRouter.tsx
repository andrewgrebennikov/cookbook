import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@/widgets/Header';

import { routeConfig } from '../config/routeConfig';

import { RequireAuth } from './RequireAuth';

interface IAppRouterProps {
  className?: string;
}

export const AppRouter = (props: IAppRouterProps) => {
  const { className } = props;

  return (
    <div className="container">
      <Header />
      <Suspense fallback="Загрузка страницы...">
        <Routes>
          {Object.values(routeConfig).map((route) => {
            const { path, element, authOnly } = route;

            return <Route key={path} path={path} element={authOnly ? <RequireAuth>{element}</RequireAuth> : element} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
};
