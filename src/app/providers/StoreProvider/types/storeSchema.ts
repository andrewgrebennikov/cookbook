import { LoginByUsernameSchema } from '@/features/LoginByUsername';
import { RecipeFormSchema } from '@/features/RecipeForm';
import { RecipesSchema } from '@/features/RecipesList';

import { RecipeSchema } from '@/entities/Recipe';
import { UserSchema } from '@/entities/User';

export interface StoreSchema {
  // Cинхронные редюсеры
  user: UserSchema;
  // Асинхронные редюсеры
  login?: LoginByUsernameSchema;
  recipe?: RecipeSchema;
  recipes?: RecipesSchema;
  recipeForm?: RecipeFormSchema;
}

export type StoreSchemaKeys = keyof StoreSchema;
