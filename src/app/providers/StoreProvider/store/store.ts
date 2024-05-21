import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/User';

import { api } from '@/shared/api/api';

import { createReducerManager } from '../../StoreProvider/config/reducerManager';
import { StoreSchema } from '../types/storeSchema';

export const createReduxStore = (initialState?: StoreSchema, asyncReducers?: ReducersMapObject<StoreSchema>) => {
  const rootReducer: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
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

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
