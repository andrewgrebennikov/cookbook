import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getRecipesLimit = (state: StoreSchema) => state.recipes?.limit || 20;
