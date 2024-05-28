import { StoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesError = (state: StoreSchema) => state.recipes?.error;
