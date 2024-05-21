import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from '../store/store';
import { StoreSchema } from '../types/storeSchema';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StoreSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StoreSchema>>;
}

export const StoreProvider = (props: IStoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;
  const store = createReduxStore(initialState as StoreSchema, asyncReducers as ReducersMapObject<StoreSchema>);

  return <Provider store={store}>{children}</Provider>;
};
