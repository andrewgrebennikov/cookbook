export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  RECIPE = 'recipe',
  RECIPE_CREATE = 'recipe_create',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteLogin = () => '/login';
export const getRouteRecipe = (id: string) => `/recipes/${id}`;
export const getRouteRecipeCreate = () => '/recipes/new';
export const getRouteForbidden = () => '/forbidden';
