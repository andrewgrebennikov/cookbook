import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesCategory = (state: IStoreSchema) => state.recipes?.category;
