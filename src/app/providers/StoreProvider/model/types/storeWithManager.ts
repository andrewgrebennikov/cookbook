import { EnhancedStore } from '@reduxjs/toolkit';

import { ReducerManager } from './reducerManager';

export interface StoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager;
}
