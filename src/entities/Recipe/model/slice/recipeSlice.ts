import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchRecipeData } from '../services/fetchRecipeData/fetchRecipeData';
import { removeRecipe } from '../services/removeRecipe/removeRecipe';
import { Recipe } from '../types/recipe';
import { RecipeSchema } from '../types/recipeSchema';

const initialState: RecipeSchema = {
  recipeData: undefined,
  isLoading: false,
  error: undefined,
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchRecipeData.fulfilled, (state, action: PayloadAction<Recipe>) => {
        state.isLoading = false;
        state.recipeData = action.payload;
      })
      .addCase(fetchRecipeData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeRecipe.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(removeRecipe.fulfilled, (state, action: PayloadAction<Recipe>) => {
        state.isLoading = false;
        state.recipeData = action.payload;
      })
      .addCase(removeRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: recipeActions } = recipeSlice;
export const { reducer: recipeReducer } = recipeSlice;
