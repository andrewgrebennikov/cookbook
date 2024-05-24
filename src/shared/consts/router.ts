export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  RECIPE = 'recipe',
  RECIPE_CREATE = 'recipe_create',
  RECIPE_EDIT = 'recipe_edit',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteLogin = () => '/login';
export const getRouteRecipe = (id: string) => `/recipes/${id}`;
export const getRouteRecipeCreate = () => '/recipes/new';
export const getRouteRecipeEdit = (id: string) => `/recipes/${id}/edit`;
export const getRouteForbidden = () => '/forbidden';
