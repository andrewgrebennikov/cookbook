import { StoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesIsLoading = (state: StoreSchema) => state.recipes?.isLoading;
