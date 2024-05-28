import { StoreSchema } from '@/app/providers/StoreProvider';

export const getLoginError = (state: StoreSchema) => state.login?.error;
