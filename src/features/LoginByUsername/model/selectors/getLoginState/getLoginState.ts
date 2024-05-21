import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getLoginState = (state: StoreSchema) => state?.login;
