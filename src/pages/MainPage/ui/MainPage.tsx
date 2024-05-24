import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Filters } from '@/widgets/Filters';

import { RecipesList, recipesReducer, initRecipes } from '@/features/RecipesList';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList } from '@/shared/lib/types/reducersList';

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
