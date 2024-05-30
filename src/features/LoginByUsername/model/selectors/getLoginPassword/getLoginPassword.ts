import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getLoginPassword = (state: IStoreSchema) => state.login?.password || '';
