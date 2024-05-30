import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';

import { IRecipe } from '@/entities/Recipe';
import { getAuthData } from '@/entities/User';

import { getFormData } from '../../selectors/getFormData/getFormData';

export const addNewRecipe = createAsyncThunk<IRecipe, void, IThunkConfig<string>>(
  'recipe/addNewRecipe',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState, dispatch } = thunkAPI;

    const profileData = getAuthData(getState());
    const formData = getFormData(getState());

    try {
      const response = await extra.api.post<IRecipe>('/recipes', {
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
