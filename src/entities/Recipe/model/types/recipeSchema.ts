import { IRecipe } from './recipe';

export interface IRecipeSchema {
  recipeData?: IRecipe;
  isLoading?: boolean;
  error?: string;
}
