import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';

import { IRecipe } from '../../types/recipe';

export const fetchRecipeData = createAsyncThunk<IRecipe, string | undefined, IThunkConfig<string>>(
  'recipe/fetchRecipeData',
  async (recipeId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;

    try {
      if (!recipeId) {
        throw new Error();
      }

      const response = await extra.api.get<IRecipe>(`/recipes/${recipeId}`);

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
