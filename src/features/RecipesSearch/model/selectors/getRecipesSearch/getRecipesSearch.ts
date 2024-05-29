import { StoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesSearch = (state: StoreSchema) => state.recipes?.search || '';
