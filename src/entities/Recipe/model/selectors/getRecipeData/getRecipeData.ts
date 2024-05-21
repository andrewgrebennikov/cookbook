import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getRecipeData = (state: StoreSchema) => state.recipe?.recipeData;
