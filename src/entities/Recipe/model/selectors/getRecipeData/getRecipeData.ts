import { StoreSchema } from '@/app/providers/StoreProvider';

export const getRecipeData = (state: StoreSchema) => state.recipe?.recipeData;
