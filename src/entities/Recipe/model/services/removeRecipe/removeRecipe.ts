import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Recipe } from '../../types/recipe';

export const removeRecipe = createAsyncThunk<Recipe, string | undefined, ThunkConfig<string>>(
  'recipe/removeRecipe',
  async (recipeId, thunkAPI) => {
    const { rejectWithValue, extra, dispatch } = thunkAPI;

    try {
      if (!recipeId) {
        throw new Error();
      }

      const response = await extra.api.delete<Recipe>(`/recipes/${recipeId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Error');
    }
  },
);
