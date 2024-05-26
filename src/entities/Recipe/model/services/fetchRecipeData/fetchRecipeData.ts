import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { recipeFormActions } from '@/features/RecipeForm';

import { Recipe } from '../../types/recipe';

export const fetchRecipeData = createAsyncThunk<Recipe, string | undefined, ThunkConfig<string>>(
  'recipe/fetchRecipeData',
  async (recipeId, thunkAPI) => {
    const { rejectWithValue, extra, dispatch } = thunkAPI;

    try {
      if (!recipeId) {
        throw new Error();
      }

      const response = await extra.api.get<Recipe>(`/recipes/${recipeId}`);

      if (!response.data) {
        throw new Error();
      }

      dispatch(recipeFormActions.setForm(response.data));

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
