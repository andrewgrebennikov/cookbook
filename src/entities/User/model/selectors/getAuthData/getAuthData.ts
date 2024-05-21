import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getAuthData = (state: StoreSchema) => state.user.authData;
