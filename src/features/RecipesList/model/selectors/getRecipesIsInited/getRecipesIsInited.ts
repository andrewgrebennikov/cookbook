import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getRecipesIsInited = (state: IStoreSchema) => state.recipes?._inited;
