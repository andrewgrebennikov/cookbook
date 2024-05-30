import { IRecipe } from '@/entities/Recipe';

export interface IRecipeFormSchema {
  formData: IRecipe;
  isLoading?: boolean;
  error?: string;
}
