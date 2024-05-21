import { LoginSchema } from '@/features/LoginByUsername';

import { RecipeSchema } from '@/entities/Recipe';
import { UserSchema } from '@/entities/User';

export interface StoreSchema {
  // Cинхронные редюсеры
  user: UserSchema;
  // Асинхронные редюсеры
  login?: LoginSchema;
  recipe?: RecipeSchema;
}

export type StoreSchemaKeys = keyof StoreSchema;
