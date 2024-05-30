import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getLoginIsLoading = (state: IStoreSchema) => state.login?.isLoading;
