import { StoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesLimit = (state: StoreSchema) => state.recipes?.limit || 20;
