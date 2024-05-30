import { AnyAction, CombinedState, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

import { IStoreSchema, StoreSchemaKeysType } from './storeSchema';

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStoreSchema>;
  reduce: (state: IStoreSchema, action: AnyAction) => CombinedState<IStoreSchema>;
  add: (key: StoreSchemaKeysType, reducer: Reducer) => void;
  remove: (key: StoreSchemaKeysType) => void;
}

export type ReducersListType = {
  [name in StoreSchemaKeysType]?: Reducer<NonNullable<IStoreSchema[name]>>;
};
