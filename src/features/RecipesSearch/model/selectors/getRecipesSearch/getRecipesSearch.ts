import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesSearch = (state: IStoreSchema) => state.recipes?.search || '';
