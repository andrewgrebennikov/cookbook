import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getAuthIsInited = (state: IStoreSchema) => state.user._inited;
