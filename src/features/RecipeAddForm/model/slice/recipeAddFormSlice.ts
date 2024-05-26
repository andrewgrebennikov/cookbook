import { createSlice } from '@reduxjs/toolkit';

import { addNewRecipe } from '../services/addNewRecipe/addNewRecipe';
import { RecipeAddFormSchema } from '../types/recipeAddFormSchema';

const initialState: RecipeAddFormSchema = {
  isLoading: false,
  error: undefined,
};

export const recipeAddFormSlice = createSlice({
  name: 'recipe/recipeAddFrom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewRecipe.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(addNewRecipe.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addNewRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: recipeAddFormActions } = recipeAddFormSlice;
export const { reducer: recipeAddFormReducer } = recipeAddFormSlice;
