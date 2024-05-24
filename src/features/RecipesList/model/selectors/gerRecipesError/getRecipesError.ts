import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getRecipesError = (state: StoreSchema) => state.recipes?.error;
