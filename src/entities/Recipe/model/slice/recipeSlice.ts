import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchRecipeData } from '../services/fetchRecipeData/fetchRecipeData';
import { likeRecipe } from '../services/likeRecipe/likeRecipe';
import { removeRecipe } from '../services/removeRecipe/removeRecipe';
import { IRecipe } from '../types/recipe';
import { IRecipeSchema } from '../types/recipeSchema';

import { recipeInitialState } from './recipeInitialState';

const initialState: IRecipeSchema = recipeInitialState;

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
      .addCase(fetchRecipeData.fulfilled, (state, action: PayloadAction<IRecipe>) => {
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
      .addCase(removeRecipe.fulfilled, (state, action: PayloadAction<IRecipe>) => {
        state.isLoading = false;
        state.recipeData = action.payload;
      })
      .addCase(removeRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(likeRecipe.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(likeRecipe.fulfilled, (state, action: PayloadAction<IRecipe>) => {
        state.isLoading = false;
        state.recipeData = action.payload;
      })
      .addCase(likeRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: recipeActions } = recipeSlice;
export const { reducer: recipeReducer } = recipeSlice;
