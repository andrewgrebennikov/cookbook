import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getRecipeIsLoading = (state: IStoreSchema) => state.recipe?.isLoading;
