import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getRecipesSearch = (state: StoreSchema) => state.recipes?.search || '';
