import { StoreSchema } from '@/app/providers/StoreProvider';

export const getAuthData = (state: StoreSchema) => state.user.authData;
