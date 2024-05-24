import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Recipe } from '@/entities/Recipe';

import { getEditFormData } from '../../selectors/getEditFormData/getEditFormData';

export const updateRecipe = createAsyncThunk<Recipe, string | undefined, ThunkConfig<string>>(
  'recipe/updateRecipe',
  async (recipeId, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const formData = getEditFormData(getState());

    try {
      if (!recipeId) {
        throw new Error();
      }

      const response = await extra.api.put<Recipe>(`/recipes/${recipeId}`, formData);

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
