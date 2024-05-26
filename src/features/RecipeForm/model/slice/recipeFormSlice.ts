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
      if (state.formData) {
        state.formData.cookingSteps = state.formData.cookingSteps?.filter((_, index) => index !== action.payload);
      }
    },
    changeStep: (state, action: PayloadAction<{ step: number; value: string }>) => {
      const { value, step } = action.payload;

      state.formData.cookingSteps && (state.formData.cookingSteps[step] = value);
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
      if (state.formData) {
        state.formData.ingredients = state.formData.ingredients?.filter((_, index) => index !== action.payload);
      }
    },
    changeIngredient: (state, action: PayloadAction<{ index: number; field: string; value: string }>) => {
      const { index, field, value } = action.payload;

      if (state.formData) {
        const newIngredients = [...(state.formData.ingredients ?? [])];

        newIngredients[index] = {
          ...newIngredients[index],
          [field]: value,
        };

        state.formData.ingredients = newIngredients;
      }
    },
    addBaseIngredient: (state) => {
      state.formData.baseIngredients?.push('');
    },
    removeBaseIngredient: (state, action: PayloadAction<number>) => {
      if (state.formData) {
        state.formData.baseIngredients = state.formData.baseIngredients?.filter((_, index) => index !== action.payload);
      }
    },
    changeBaseIngredient: (state, action: PayloadAction<{ index: number; value: string }>) => {
      const { value, index } = action.payload;

      state.formData.baseIngredients && (state.formData.baseIngredients[index] = value);
    },
    changeAltIngredient: (
      state,
      action: PayloadAction<{ index: number; altIndex: number; field: string; value: string }>,
    ) => {
      const { value, field, index, altIndex } = action.payload;

      if (state.formData) {
        const newIngredients = [...(state.formData.ingredients ?? [])];

        if (newIngredients) {
          const newAlt = newIngredients[index].alternatives;

          newAlt[altIndex] = {
            ...newAlt[altIndex],
            [field]: value,
          };
        }

        state.formData.ingredients = newIngredients;
      }
    },
    removeAltIngredient: (state, action: PayloadAction<{ index: number; altIndex: number }>) => {
      const { index, altIndex } = action.payload;

      if (state.formData) {
        const newIngredients = [...(state.formData.ingredients ?? [])];
        const newAlternatives = newIngredients[index].alternatives.filter((_, index) => index !== altIndex);

        newIngredients[index] = {
          ...newIngredients[index],
          alternatives: newAlternatives,
        };

        state.formData.ingredients = newIngredients;
      }
    },
    addAltIngredient: (state, action: PayloadAction<number>) => {
      if (state.formData) {
        const newIngredients = [...(state.formData.ingredients ?? [])];

        newIngredients[action.payload].alternatives.push({
          name: '',
          quantity: '',
        });

        state.formData.ingredients = newIngredients;
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
