import { RecipesCategoryField } from '@/features/RecipesCategory';
import { RecipesOrderField } from '@/features/RecipesOrder';
import { RecipesSortField } from '@/features/RecipesSort';

export const RECIPES_LIST_INITIAL_STATE = {
  recipes: undefined,
  isLoading: false,
  error: undefined,
  page: 1,
  limit: 20,
  order: RecipesOrderField.ASC,
  sort: RecipesSortField.LIKES,
  category: RecipesCategoryField.ALL,
  search: '',
  _inited: false,
};
