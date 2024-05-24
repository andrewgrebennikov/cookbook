import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getRecipesPage = (state: StoreSchema) => state.recipes?.page || 1;
