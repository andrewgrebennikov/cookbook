import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getLoginIsLoading = (state: StoreSchema) => state.login?.isLoading;
