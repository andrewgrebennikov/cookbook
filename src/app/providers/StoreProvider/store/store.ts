import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';

import { api } from '@/shared/api/api';

import { createReducerManager } from '../libs/reducerManager';
import { IStoreSchema } from '../model/types/storeSchema';

export const createReduxStore = (initialState?: IStoreSchema, asyncReducers?: ReducersMapObject<IStoreSchema>) => {
  const rootReducer: ReducersMapObject<IStoreSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStoreSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api,
          },
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
