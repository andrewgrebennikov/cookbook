import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RecipesOrderField } from '@/features/RecipesOrder';
import { RecipesSortField } from '@/features/RecipesSort';

import { Recipe } from '@/entities/Recipe';

import { fetchRecipesData } from '../services/fetchRecipesData/fetchRecipesData';
import { RecipesSchema } from '../types/recipesSchema';

const initialState: RecipesSchema = {
  recipes: undefined,
  isLoading: false,
  error: undefined,
  page: 1,
  limit: 20,
  order: RecipesOrderField.ASC,
  sort: RecipesSortField.LIKES,
  search: '',
  _inited: false,
};

export const recipesListSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<RecipesOrderField>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<RecipesSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    initState: (state) => {
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesData.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchRecipesData.fulfilled, (state, action: PayloadAction<Recipe[]>) => {
        state.isLoading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: recipesActions } = recipesListSlice;
export const { reducer: recipesReducer } = recipesListSlice;
