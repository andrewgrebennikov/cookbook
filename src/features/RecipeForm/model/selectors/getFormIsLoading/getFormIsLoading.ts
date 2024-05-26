import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getFormIsLoading = (state: StoreSchema) => state.recipeForm?.isLoading;
