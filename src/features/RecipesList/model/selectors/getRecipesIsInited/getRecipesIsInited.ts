import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getRecipesIsInited = (state: StoreSchema) => state.recipes?._inited;
