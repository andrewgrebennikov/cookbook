import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { getRecipesOrder } from '@/features/RecipesOrder';
import { getRecipesSearch } from '@/features/RecipesSearch';
import { getRecipesSort } from '@/features/RecipesSort';

import { Recipe } from '@/entities/Recipe';

import { getRecipesLimit } from '../../selectors/getRecipesLimit/getRecipesLimit';
import { getRecipesPage } from '../../selectors/getRecipesPage/getRecipesPage';

export const fetchRecipesData = createAsyncThunk<Recipe[], void, ThunkConfig<string>>(
  'recipes/fetchRecipes',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;

    const limit = getRecipesLimit(getState());
    const page = getRecipesPage(getState());
    const sort = getRecipesSort(getState());
    const order = getRecipesOrder(getState());
    const search = getRecipesSearch(getState());

    try {
      const response = await extra.api.get<Recipe[]>('/recipes', {
        params: {
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          q: search.length ? search : undefined,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
