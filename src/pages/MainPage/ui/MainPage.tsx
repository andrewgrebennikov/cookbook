import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { DynamicModuleLoader, ReducersList } from '@/app/providers/StoreProvider';

import { Filters } from '@/widgets/Filters';

import { RecipesList, recipesReducer, initRecipes } from '@/features/RecipesList';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

const reducers: ReducersList = {
  recipes: recipesReducer,
};

const MainPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(initRecipes(searchParams));
  }, [dispatch, searchParams]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Filters />
      <RecipesList />
    </DynamicModuleLoader>
  );
};

export default MainPage;
