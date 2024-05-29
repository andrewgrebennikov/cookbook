import { StoreSchema } from '@/app/providers/StoreProvider';

export const getLoginPassword = (state: StoreSchema) => state.login?.password || '';
