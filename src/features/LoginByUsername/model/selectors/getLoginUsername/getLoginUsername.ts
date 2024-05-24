import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getLoginUsername = (state: StoreSchema) => state.login?.username || '';
