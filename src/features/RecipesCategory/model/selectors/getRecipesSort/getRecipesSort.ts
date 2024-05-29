import { StoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesCategory = (state: StoreSchema) => state.recipes?.category;
