import { RecipesOrderField } from '@/features/RecipesOrder';
import { RecipesSortField } from '@/features/RecipesSort';

import { Recipe } from '@/entities/Recipe';

export interface RecipesSchema {
  recipes?: Recipe[];
  isLoading?: boolean;
  error?: string;
  page: number;
  limit: number;
  order: RecipesOrderField;
  sort: RecipesSortField;
  search: string;
  _inited: boolean;
}
