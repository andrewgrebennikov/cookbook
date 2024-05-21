import { AnyAction, combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { ReducerManager } from '../../StoreProvider/types/reducerManager';
import { StoreSchema, StoreSchemaKeys } from '../types/storeSchema';

export const createReducerManager = (initialReducers: ReducersMapObject<StoreSchema>): ReducerManager => {
  const reducers = { ...initialReducers };
  let combinedReducer = combineReducers(reducers);
  let keysToRemove: StoreSchemaKeys[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StoreSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };

        for (const key of keysToRemove) {
          delete state[key];
        }

        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },
    add: (key: StoreSchemaKeys, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },
    remove: (key: StoreSchemaKeys) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
};
