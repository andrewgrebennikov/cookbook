import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Recipe } from '@/entities/Recipe';
import { getAuthData } from '@/entities/User';

import { getAddFormData } from '../../selectors/getAddFormData/getAddFormData';

export const addNewRecipe = createAsyncThunk<Recipe, void, ThunkConfig<string>>(
  'recipe/addNewRecipe',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState, dispatch } = thunkAPI;

    const profileData = getAuthData(getState());
    const formData = getAddFormData(getState());

    try {
      const response = await extra.api.post<Recipe>('/recipes', {
        ...formData,
        userId: profileData?.id,
      });

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
