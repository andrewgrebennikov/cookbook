import { StoreSchema } from '@/app/providers/StoreProvider';

export const getLoginIsLoading = (state: StoreSchema) => state.login?.isLoading;
