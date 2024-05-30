import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesPage = (state: IStoreSchema) => state.recipes?.page || 1;
