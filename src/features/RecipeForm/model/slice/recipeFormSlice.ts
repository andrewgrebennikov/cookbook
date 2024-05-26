import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Recipe } from '@/entities/Recipe';

import { RecipeFormSchema } from '../types/recipeFormSchema';

const initialState: RecipeFormSchema = {
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
    difficulty: undefined,
    baseIngredients: [],
  },
};

export const recipeFormSlice = createSlice({
  name: 'recipe/recipeForm',
  initialState,
  reducers: {
    changeField: (state, action: PayloadAction<Recipe>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    addStep: (state) => {
      state.formData.cookingSteps?.push('');
    },
    removeStep: (state, action: PayloadAction<number>) => {
      state.formData.cookingSteps = state.formData.cookingSteps?.filter((_, index) => index !== action.payload);
    },
    changeStep: (state, action: PayloadAction<{ step: number; value: string }>) => {
      const { value, step } = action.payload;

      if (state.formData.cookingSteps) {
        state.formData.cookingSteps[step] = value;
      }
    },
    addIngredient: (state) => {
      state.formData.ingredients?.push({
        name: '',
        quantity: '',
        alternatives: [
          {
            name: '',
            quantity: '',
          },
        ],
      });
    },
    removeIngredient: (state, action: PayloadAction<number>) => {
      state.formData.ingredients = state.formData.ingredients?.filter((_, index) => index !== action.payload);
    },
    changeIngredient: (state, action: PayloadAction<{ index: number; field: string; value: string }>) => {
      const { index, field, value } = action.payload;

      if (state.formData.ingredients) {
        state.formData.ingredients[index] = {
          ...state.formData.ingredients[index],
          [field]: value,
        };
      }
    },
    addBaseIngredient: (state) => {
      state.formData.baseIngredients?.push('');
    },
    removeBaseIngredient: (state, action: PayloadAction<number>) => {
      state.formData.baseIngredients = state.formData.baseIngredients?.filter((_, index) => index !== action.payload);
    },
    changeBaseIngredient: (state, action: PayloadAction<{ index: number; value: string }>) => {
      const { value, index } = action.payload;

      if (state.formData.baseIngredients) {
        state.formData.baseIngredients[index] = value;
      }
    },
    changeAltIngredient: (
      state,
      action: PayloadAction<{ index: number; altIndex: number; field: string; value: string }>,
    ) => {
      const { value, field, index, altIndex } = action.payload;

      if (state.formData.ingredients) {
        state.formData.ingredients[index].alternatives[altIndex] = {
          ...state.formData.ingredients[index].alternatives[altIndex],
          [field]: value,
        };
      }
    },
    removeAltIngredient: (state, action: PayloadAction<{ index: number; altIndex: number }>) => {
      const { index, altIndex } = action.payload;

      if (state.formData.ingredients) {
        state.formData.ingredients[index].alternatives = state.formData.ingredients[index].alternatives.filter(
          (_, index) => index !== altIndex,
        );
      }
    },
    addAltIngredient: (state, action: PayloadAction<number>) => {
      if (state.formData.ingredients) {
        state.formData.ingredients[action.payload].alternatives.push({
          name: '',
          quantity: '',
        });
      }
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
    },
    setForm: (state, action: PayloadAction<Recipe>) => {
      state.formData = action.payload;
    },
  },
});

export const { actions: recipeFormActions } = recipeFormSlice;
export const { reducer: recipeFormReducer } = recipeFormSlice;
