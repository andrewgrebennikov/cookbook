import { RecipesCategoryField } from '@/features/RecipesCategory';

import { RecipeDifficulty } from '../consts/recipeConsts';

export interface AltIngredient {
  name: string;
  quantity: string;
}

export interface Ingredient {
  name: string;
  quantity: string;
  alternatives: AltIngredient[];
}

export interface Recipe {
  id?: string;
  title?: string;
  image?: string;
  likes?: number;
  description?: string;
  cookingSteps?: string[];
  ingredients?: Ingredient[];
  baseIngredients?: string[];
  difficulty?: RecipeDifficulty;
  userId?: string;
  category?: RecipesCategoryField;
}
