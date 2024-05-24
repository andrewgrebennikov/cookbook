import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getRecipesData = (state: StoreSchema) => state.recipes?.recipes;
