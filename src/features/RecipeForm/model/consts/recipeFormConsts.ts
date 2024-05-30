import { RecipesCategoryField } from '@/features/RecipesCategory';

import { RecipeDifficulty } from '@/entities/Recipe';

export const OPTIONS_DIFFICULTY = [
  {
    id: 1,
    value: RecipeDifficulty.EASY,
    name: 'Легко',
  },
  {
    id: 2,
    value: RecipeDifficulty.NORMAL,
    name: 'Средне',
  },
  {
    id: 3,
    value: RecipeDifficulty.HARD,
    name: 'Трудно',
  },
];

export const OPTIONS_CATEGORY = [
  {
    id: 1,
    value: RecipesCategoryField.SALAD,
    name: 'Салаты',
  },
  {
    id: 2,
    value: RecipesCategoryField.SOUP,
    name: 'Супы',
  },
  {
    id: 3,
    value: RecipesCategoryField.PASTA,
    name: 'Паста и пицца',
  },
  {
    id: 4,
    value: RecipesCategoryField.DRINK,
    name: 'Напитки',
  },
];
