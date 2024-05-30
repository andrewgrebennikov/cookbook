import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesLimit = (state: IStoreSchema) => state.recipes?.limit || 20;
