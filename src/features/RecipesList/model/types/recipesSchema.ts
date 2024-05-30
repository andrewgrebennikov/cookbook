import { RecipesCategoryField } from '@/features/RecipesCategory';
import { RecipesOrderField } from '@/features/RecipesOrder';
import { RecipesSortField } from '@/features/RecipesSort';

import { IRecipe } from '@/entities/Recipe';

export interface IRecipesSchema {
  recipes?: IRecipe[];
  isLoading?: boolean;
  error?: string;
  page: number;
  limit: number;
  order: RecipesOrderField;
  sort: RecipesSortField;
  category: RecipesCategoryField;
  search: string;
  _inited: boolean;
}
