import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { RecipesOrderField } from '@/features/RecipesOrder';
import { RecipesSortField } from '@/features/RecipesSort';

import { getRecipesIsInited } from '../../selectors/getRecipesIsInited/getRecipesIsInited';
import { recipesActions } from '../../slice/recipesListSlice';
import { fetchRecipesData } from '../fetchRecipesData/fetchRecipesData';

export const initRecipes = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'recipes/initRecipes',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getRecipesIsInited(getState());

    if (!inited) {
      const sort = searchParams.get('sort') as RecipesSortField;
      const order = searchParams.get('order') as RecipesOrderField;
      const search = searchParams.get('search');

      if (sort) {
        dispatch(recipesActions.setSort(sort));
      }

      if (order) {
        dispatch(recipesActions.setOrder(order));
      }

      if (search) {
        dispatch(recipesActions.setSearch(search));
      }

      dispatch(recipesActions.initState());
      dispatch(fetchRecipesData());
    }
  },
);
