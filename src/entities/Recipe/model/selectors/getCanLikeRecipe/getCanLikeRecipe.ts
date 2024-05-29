import { createSelector } from '@reduxjs/toolkit';

import { getAuthData } from '@/entities/User';

import { getRecipeData } from '../getRecipeData/getRecipeData';

export const getCanLikeRecipe = createSelector(getRecipeData, getAuthData, (recipe, user) => {
  if (user && recipe?.likes) {
    return !recipe.likes.userLikes.includes(user.id);
  }
});
