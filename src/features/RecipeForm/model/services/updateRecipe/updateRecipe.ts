import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';

import { IRecipe } from '@/entities/Recipe';

import { getFormData } from '../../selectors/getFormData/getFormData';

export const updateRecipe = createAsyncThunk<IRecipe, string | undefined, IThunkConfig<string>>(
  'recipe/updateRecipe',
  async (recipeId, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    const formData = getFormData(getState());

    try {
      if (!recipeId) {
        throw new Error();
      }

      const response = await extra.api.put<IRecipe>(`/recipes/${recipeId}`, formData);

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
