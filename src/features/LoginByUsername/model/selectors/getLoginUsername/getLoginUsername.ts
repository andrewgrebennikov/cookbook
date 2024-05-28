import { StoreSchema } from '@/app/providers/StoreProvider';

export const getLoginUsername = (state: StoreSchema) => state.login?.username || '';
