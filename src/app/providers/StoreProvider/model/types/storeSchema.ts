import { ILoginByUsernameSchema } from '@/features/LoginByUsername';
import { IRecipeFormSchema } from '@/features/RecipeForm';
import { IRecipesSchema } from '@/features/RecipesList';

import { IRecipeSchema } from '@/entities/Recipe';
import { IUserSchema } from '@/entities/User';

export interface IStoreSchema {
  // Cинхронные редюсеры
  user: IUserSchema;
  // Асинхронные редюсеры
  login?: ILoginByUsernameSchema;
  recipe?: IRecipeSchema;
  recipes?: IRecipesSchema;
  recipeForm?: IRecipeFormSchema;
}

export type StoreSchemaKeysType = keyof IStoreSchema;
