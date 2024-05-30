import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getFormIsLoading = (state: IStoreSchema) => state.recipeForm?.isLoading;
