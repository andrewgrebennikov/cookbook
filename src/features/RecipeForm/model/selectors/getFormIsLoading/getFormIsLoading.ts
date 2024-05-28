import { StoreSchema } from '@/app/providers/StoreProvider';

export const getFormIsLoading = (state: StoreSchema) => state.recipeForm?.isLoading;
