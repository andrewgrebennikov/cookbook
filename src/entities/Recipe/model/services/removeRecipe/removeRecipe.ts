import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';

import { IRecipe } from '../../types/recipe';

export const removeRecipe = createAsyncThunk<IRecipe, string | undefined, IThunkConfig<string>>(
  'recipe/removeRecipe',
  async (recipeId, thunkAPI) => {
    const { rejectWithValue, extra, dispatch } = thunkAPI;

    try {
      if (!recipeId) {
        throw new Error();
      }

      const response = await extra.api.delete<IRecipe>(`/recipes/${recipeId}`);

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
