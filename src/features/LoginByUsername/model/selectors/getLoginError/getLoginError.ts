import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getLoginError = (state: StoreSchema) => state.login?.error;
