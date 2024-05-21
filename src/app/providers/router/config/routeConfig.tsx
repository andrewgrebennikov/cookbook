import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RecipeCreatePage } from '@/pages/RecipeCreatePage';
import { RecipePage } from '@/pages/RecipePage';

import {
  AppRoutes,
  getRouteForbidden,
  getRouteLogin,
  getRouteMain,
  getRouteRecipe,
  getRouteRecipeCreate,
} from '@/shared/consts/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <LoginPage />,
  },
  [AppRoutes.RECIPE]: {
    path: getRouteRecipe(':id'),
    element: <RecipePage />,
  },
  [AppRoutes.RECIPE_CREATE]: {
    path: getRouteRecipeCreate(),
    element: <RecipeCreatePage />,
    authOnly: true,
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
