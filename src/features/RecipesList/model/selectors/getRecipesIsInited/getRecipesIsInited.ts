import { StoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesIsInited = (state: StoreSchema) => state.recipes?._inited;
