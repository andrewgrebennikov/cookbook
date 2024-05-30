import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { IReducerManager } from '../model/types/reducerManager';
import { IStoreSchema, StoreSchemaKeysType } from '../model/types/storeSchema';

export const createReducerManager = (initialReducers: ReducersMapObject<IStoreSchema>): IReducerManager => {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: StoreSchemaKeysType[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: IStoreSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };

        for (const key of keysToRemove) {
          delete state[key];
        }

        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },
    add: (key: StoreSchemaKeysType, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key: StoreSchemaKeysType) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
};
