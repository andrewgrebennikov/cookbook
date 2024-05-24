import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchRecipeData, Recipe, RecipeDifficulty } from '@/entities/Recipe';

import { updateRecipe } from '../services/updateRecipe/updateRecipe';
import { RecipeEditFormSchema } from '../types/recipeEditFormSchema';

const initialState: RecipeEditFormSchema = {
  formData: {
    title: '',
    likes: 0,
    image: '',
    cookingSteps: [''],
    ingredients: [
      {
        name: '',
        quantity: '',
        alternatives: [],
      },
    ],
    description: '',
    difficulty: RecipeDifficulty.EASY,
    baseIngredients: [],
  },
  isLoading: false,
  error: undefined,
};

export const recipeEditFormSlice = createSlice({
  name: 'recipe/recipeEditFrom',
  initialState,
  reducers: {
    changeField: (state, action: PayloadAction<Recipe>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    addStep: (state) => {
      state.formData.cookingSteps?.push('');
    },
    removeStep: (state, action: PayloadAction<number>) => {
      if (state.formData) {
        state.formData.cookingSteps = state.formData.cookingSteps?.filter((_, index) => index !== action.payload);
      }
    },
    changeStep: (state, action: PayloadAction<{ step: number; value: string }>) => {
      const { value, step } = action.payload;

      state.formData.cookingSteps && (state.formData.cookingSteps[step] = value);
    },
    addIngredient: (state) => {
      state.formData.ingredients?.push({ name: '', quantity: '', alternatives: [''] });
    },
    removeIngredient: (state, action: PayloadAction<number>) => {
      if (state.formData) {
        state.formData.ingredients = state.formData.ingredients?.filter((_, index) => index !== action.payload);
      }
    },
    changeIngredient: (state, action: PayloadAction<{ ingredientIndex: number; field: string; value: string }>) => {
      const { ingredientIndex, field, value } = action.payload;

      if (state.formData) {
        const newIngredients = [...(state.formData.ingredients ?? [])];

        newIngredients[ingredientIndex] = {
          ...newIngredients[ingredientIndex],
          [field]: value,
        };

        state.formData.ingredients = newIngredients;
      }
    },
    resetForm: (state) => {
      state.formData = {
        title: '',
        likes: 0,
        image: '',
        cookingSteps: [''],
        ingredients: [
          {
            name: '',
            quantity: '',
            alternatives: [],
          },
        ],
        description: '',
        difficulty: RecipeDifficulty.EASY,
        baseIngredients: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchRecipeData.fulfilled, (state, action: PayloadAction<Recipe>) => {
        state.isLoading = false;
        state.formData = action.payload;
      })
      .addCase(fetchRecipeData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateRecipe.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateRecipe.fulfilled, (state, action: PayloadAction<Recipe>) => {
        state.isLoading = false;
        state.formData = action.payload;
      })
      .addCase(updateRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: recipeEditFormActions } = recipeEditFormSlice;
export const { reducer: recipeEditFormReducer } = recipeEditFormSlice;
