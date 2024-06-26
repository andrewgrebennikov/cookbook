import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RecipeCreatePage } from '@/pages/RecipeCreatePage';
import { RecipeEditPage } from '@/pages/RecipeEditPage';
import { RecipePage } from '@/pages/RecipePage';

import {
  AppRoutes,
  getRouteLogin,
  getRouteMain,
  getRouteRecipe,
  getRouteRecipeCreate,
  getRouteRecipeEdit,
} from '@/shared/consts/router';
import { AppRoutesPropsType } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesPropsType> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <LoginPage />,
    guest: true,
  },
  [AppRoutes.RECIPE]: {
    path: getRouteRecipe(':id'),
    element: <RecipePage />,
  },
  [AppRoutes.RECIPE_CREATE]: {
    path: getRouteRecipeCreate(),
    element: <RecipeCreatePage />,
    auth: true,
  },
  [AppRoutes.RECIPE_EDIT]: {
    path: getRouteRecipeEdit(':id'),
    element: <RecipeEditPage />,
    auth: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
