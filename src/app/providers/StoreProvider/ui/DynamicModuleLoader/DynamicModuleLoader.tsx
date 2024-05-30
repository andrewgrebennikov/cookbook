import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

import { ReducersListType } from '../../model/types/reducerManager';
import { StoreSchemaKeysType } from '../../model/types/storeSchema';
import { IStoreWithManager } from '../../model/types/storeWithManager';

interface IDynamicModuleLoader {
  reducers: ReducersListType;
  removeAfterUnmount?: boolean;
  children?: ReactNode;
}

export const DynamicModuleLoader = (props: IDynamicModuleLoader) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as IStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const allReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      if (!allReducers[name as StoreSchemaKeysType]) {
        store.reducerManager.add(name as StoreSchemaKeysType, reducer);
        dispatch({ type: `@init ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StoreSchemaKeysType);
          dispatch({ type: `@destroy ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return children;
};
