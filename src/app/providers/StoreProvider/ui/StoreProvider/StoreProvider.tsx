import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { IStoreSchema } from '../../model/types/storeSchema';
import { createReduxStore } from '../../store/store';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<IStoreSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStoreSchema>>;
}

export const StoreProvider = (props: IStoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;
  const store = createReduxStore(initialState as IStoreSchema, asyncReducers as ReducersMapObject<IStoreSchema>);

  return <Provider store={store}>{children}</Provider>;
};
