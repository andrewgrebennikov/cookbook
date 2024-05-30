import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getLoginError = (state: IStoreSchema) => state.login?.error;
