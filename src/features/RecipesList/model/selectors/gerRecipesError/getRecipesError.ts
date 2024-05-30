import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesError = (state: IStoreSchema) => state.recipes?.error;
