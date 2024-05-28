import { StoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesPage = (state: StoreSchema) => state.recipes?.page || 1;
