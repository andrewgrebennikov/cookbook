import { StoreSchema } from '@/app/providers/StoreProvider';

export const getRecipeError = (state: StoreSchema) => state.recipe?.error;
