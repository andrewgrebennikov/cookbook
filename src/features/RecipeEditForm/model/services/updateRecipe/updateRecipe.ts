import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { getFormData } from '@/features/RecipeForm';

import { Recipe } from '@/entities/Recipe';

export const updateRecipe = createAsyncThunk<Recipe, string | undefined, ThunkConfig<string>>(
  'recipe/updateRecipe',
  async (recipeId, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const formData = getFormData(getState());

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
