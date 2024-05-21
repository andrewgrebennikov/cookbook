import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getAuthInited = (state: StoreSchema) => state.user._inited;
