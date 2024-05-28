import { StoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesData = (state: StoreSchema) => state.recipes?.recipes;
