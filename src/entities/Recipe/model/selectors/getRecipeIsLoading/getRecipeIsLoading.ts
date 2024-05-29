import { StoreSchema } from '@/app/providers/StoreProvider';

export const getRecipeIsLoading = (state: StoreSchema) => state.recipe?.isLoading;
