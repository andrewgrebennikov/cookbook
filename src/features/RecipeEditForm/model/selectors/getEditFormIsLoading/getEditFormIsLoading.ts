import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getEditFormIsLoading = (state: StoreSchema) => state.recipeEditForm?.isLoading;
