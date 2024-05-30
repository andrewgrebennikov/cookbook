import { createAsyncThunk } from '@reduxjs/toolkit';

import { IThunkConfig } from '@/app/providers/StoreProvider';

import { getAuthData } from '@/entities/User';

import { getRecipeData } from '../../selectors/getRecipeData/getRecipeData';
import { IRecipe } from '../../types/recipe';

export const likeRecipe = createAsyncThunk<
  IRecipe,
  { recipeId: string | undefined; total: number },
  IThunkConfig<string>
>('recipe/likeRecipe', async ({ recipeId, total }, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  const recipeData = getRecipeData(getState());
  const userData = getAuthData(getState());

  try {
    if (!recipeId) {
      throw new Error();
    }

    if (recipeData?.likes?.userLikes.includes(recipeId)) {
      return rejectWithValue('Вы уже поставили лайк!');
    }

    const response = await extra.api.put<IRecipe>(`/recipes/${recipeId}`, {
      ...recipeData,
      likes: {
        total,
        userLikes: recipeData?.likes?.userLikes ? [...recipeData.likes.userLikes, userData?.id] : [],
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue('Error');
  }
});
