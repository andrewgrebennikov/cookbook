import { Recipe } from '@/entities/Recipe';

export interface RecipeAddFormSchema {
  formData: Recipe;
  isLoading?: boolean;
  error?: string;
}
