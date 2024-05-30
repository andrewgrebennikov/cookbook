import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getRecipeData = (state: IStoreSchema) => state.recipe?.recipeData;
