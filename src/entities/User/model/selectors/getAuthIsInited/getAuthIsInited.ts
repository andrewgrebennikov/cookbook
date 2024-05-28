import { StoreSchema } from '@/app/providers/StoreProvider';

export const getAuthIsInited = (state: StoreSchema) => state.user._inited;
