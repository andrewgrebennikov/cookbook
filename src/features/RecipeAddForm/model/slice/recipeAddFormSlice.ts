import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Recipe, RecipeDifficulty } from '@/entities/Recipe';

import { addNewRecipe } from '../services/addNewRecipe/addNewRecipe';
import { RecipeAddFormSchema } from '../types/recipeAddFormSchema';

const initialState: RecipeAddFormSchema = {
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

export const recipeAddFormSlice = createSlice({
  name: 'recipe/recipeAddFrom',
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
