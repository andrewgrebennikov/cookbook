import { AxiosInstance } from 'axios';

import { IStoreSchema } from './storeSchema';

interface IThunkExtraArg {
  api: AxiosInstance;
}

export interface IThunkConfig<T> {
  rejectValue: T;
  extra: IThunkExtraArg;
  state: IStoreSchema;
}
