import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getFormError = (state: StoreSchema) => state.recipeForm?.error;
