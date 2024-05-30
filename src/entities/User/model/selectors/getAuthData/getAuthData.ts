import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getAuthData = (state: IStoreSchema) => state.user.authData;
