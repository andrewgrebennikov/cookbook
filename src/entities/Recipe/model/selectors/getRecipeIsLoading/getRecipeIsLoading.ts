import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getRecipeIsLoading = (state: StoreSchema) => state.recipe?.isLoading;
