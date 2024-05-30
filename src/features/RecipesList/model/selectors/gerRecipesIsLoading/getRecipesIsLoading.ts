import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesIsLoading = (state: IStoreSchema) => state.recipes?.isLoading;
