import { RecipesCategoryField } from '@/features/RecipesCategory';

import { RecipeDifficulty } from '@/entities/Recipe';

export const RECIPE_FORM_INITIAL_STATE = {
  formData: {
    title: '',
    likes: {
      total: 0,
      userLikes: [],
    },
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
    difficulty: RecipeDifficulty.NONE,
    category: RecipesCategoryField.ALL,
    baseIngredients: [],
  },
  isLoading: false,
  error: undefined,
};
