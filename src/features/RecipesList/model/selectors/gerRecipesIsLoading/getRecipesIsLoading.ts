import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getRecipesIsLoading = (state: StoreSchema) => state.recipes?.isLoading;
