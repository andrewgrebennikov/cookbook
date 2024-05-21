import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getRecipeError = (state: StoreSchema) => state.recipe?.error;
