import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getLoginUsername = (state: IStoreSchema) => state.login?.username || '';
