import { createSlice } from '@reduxjs/toolkit';

import { fetchRecipeData } from '@/entities/Recipe';

import { updateRecipe } from '../services/updateRecipe/updateRecipe';
import { RecipeEditFormSchema } from '../types/recipeEditFormSchema';

const initialState: RecipeEditFormSchema = {
  isLoading: false,
  error: undefined,
};

export const recipeEditFormSlice = createSlice({
  name: 'recipe/recipeEditFrom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateRecipe.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateRecipe.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchRecipeData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchRecipeData.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchRecipeData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: recipeEditFormActions } = recipeEditFormSlice;
export const { reducer: recipeEditFormReducer } = recipeEditFormSlice;
