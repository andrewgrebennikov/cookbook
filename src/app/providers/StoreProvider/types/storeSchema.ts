import { LoginByUsernameSchema } from '@/features/LoginByUsername';
import { RecipeAddFormSchema } from '@/features/RecipeAddForm';
import { RecipeEditFormSchema } from '@/features/RecipeEditForm';
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
  recipeAddForm?: RecipeAddFormSchema;
  recipeEditForm?: RecipeEditFormSchema;
}

export type StoreSchemaKeys = keyof StoreSchema;
