import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getAuthIsInited = (state: StoreSchema) => state.user._inited;
