import { EnhancedStore } from '@reduxjs/toolkit';

import { IReducerManager } from './reducerManager';

export interface IStoreWithManager extends EnhancedStore {
  reducerManager: IReducerManager;
}
