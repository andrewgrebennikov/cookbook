import { Reducer } from '@reduxjs/toolkit';

import { StoreSchema, StoreSchemaKeys } from '@/app/providers/StoreProvider/types/storeSchema';

export type ReducersList = {
  [name in StoreSchemaKeys]?: Reducer<NonNullable<StoreSchema[name]>>;
};
