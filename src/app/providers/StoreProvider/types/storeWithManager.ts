import { EnhancedStore } from '@reduxjs/toolkit';

import { ReducerManager } from '../types/reducerManager';

export interface StoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager;
}
