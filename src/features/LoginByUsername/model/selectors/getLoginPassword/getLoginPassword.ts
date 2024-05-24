import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getLoginPassword = (state: StoreSchema) => state.login?.password || '';
