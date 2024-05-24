import { createSelector } from '@reduxjs/toolkit';

import { getAuthData } from '@/entities/User';

import { getRecipeData } from '../getRecipeData/getRecipeData';

export const getCanEditRecipe = createSelector(getRecipeData, getAuthData, (recipe, user) => {
  if (!recipe || !user) {
    return false;
  }

  return recipe.userId === user.id;
});
