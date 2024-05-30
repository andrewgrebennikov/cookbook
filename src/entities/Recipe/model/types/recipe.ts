import { RecipesCategoryField } from '@/features/RecipesCategory';

import { RecipeDifficulty } from '../consts/recipeConsts';

export interface IAltIngredient {
  name: string;
  quantity: string;
}

export interface IIngredient {
  name: string;
  quantity: string;
  alternatives: IAltIngredient[];
}

export interface ILike {
  total: number;
  userLikes: string[];
}

export interface IRecipe {
  id?: string;
  title?: string;
  image?: string;
  likes?: ILike;
  description?: string;
  cookingSteps?: string[];
  ingredients?: IIngredient[];
  baseIngredients?: string[];
  difficulty?: RecipeDifficulty;
  userId?: string;
  category?: RecipesCategoryField;
}
