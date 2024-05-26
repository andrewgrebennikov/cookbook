import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getRecipesCategory = (state: StoreSchema) => state.recipes?.category;
