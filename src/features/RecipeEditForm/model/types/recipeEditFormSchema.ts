import { Recipe } from '@/entities/Recipe';

export interface RecipeEditFormSchema {
  formData: Recipe;
  isLoading?: boolean;
  error?: string;
}
