import { Recipe } from './recipe';

export interface RecipeSchema {
  recipeData?: Recipe;
  isLoading?: boolean;
  error?: string;
}
