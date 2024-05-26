import { Recipe } from '@/entities/Recipe';

export interface RecipeFormSchema {
  formData: Recipe;
  isLoading?: boolean;
  error?: string;
}
