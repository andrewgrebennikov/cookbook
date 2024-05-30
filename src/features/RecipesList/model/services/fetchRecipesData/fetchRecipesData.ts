import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';

import { RecipesCategoryField, getRecipesCategory } from '@/features/RecipesCategory';
import { getRecipesOrder } from '@/features/RecipesOrder';
import { getRecipesSearch } from '@/features/RecipesSearch';
import { getRecipesSort } from '@/features/RecipesSort';

import { IRecipe } from '@/entities/Recipe';

import { getRecipesLimit } from '../../selectors/getRecipesLimit/getRecipesLimit';
import { getRecipesPage } from '../../selectors/getRecipesPage/getRecipesPage';

export const fetchRecipesData = createAsyncThunk<IRecipe[], void, IThunkConfig<string>>(
  'recipes/fetchRecipes',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;

    const limit = getRecipesLimit(getState());
    const page = getRecipesPage(getState());
    const sort = getRecipesSort(getState());
    const order = getRecipesOrder(getState());
    const category = getRecipesCategory(getState());
    const search = getRecipesSearch(getState());

    try {
      const response = await extra.api.get<IRecipe[]>('/recipes', {
        params: {
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          category: category === RecipesCategoryField.ALL ? undefined : category,
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
