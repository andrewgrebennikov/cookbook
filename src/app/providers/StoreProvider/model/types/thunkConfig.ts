import { AxiosInstance } from 'axios';

import { StoreSchema } from './storeSchema';

interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StoreSchema;
}
