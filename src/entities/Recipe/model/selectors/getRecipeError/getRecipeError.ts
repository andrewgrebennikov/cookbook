import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getRecipeError = (state: IStoreSchema) => state.recipe?.error;
