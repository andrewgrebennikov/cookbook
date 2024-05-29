import { FC, PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

import { ReducersList } from '../../model/types/reducerManager';
import { StoreSchemaKeys } from '../../model/types/storeSchema';
import { StoreWithManager } from '../../model/types/storeWithManager';

interface IDynamicModuleLoader {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<PropsWithChildren<IDynamicModuleLoader>> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as StoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const allReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      if (!allReducers[name as StoreSchemaKeys]) {
        store.reducerManager.add(name as StoreSchemaKeys, reducer);
        dispatch({ type: `@init ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StoreSchemaKeys);
          dispatch({ type: `@destroy ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return children;
};
