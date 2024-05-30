import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesData = (state: IStoreSchema) => state.recipes?.recipes;
