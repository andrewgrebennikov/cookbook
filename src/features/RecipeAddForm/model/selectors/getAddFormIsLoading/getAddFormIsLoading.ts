import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getAddFormIsLoading = (state: StoreSchema) => state.recipeAddForm?.isLoading;
