import { StoreSchema } from '@/app/providers/StoreProvider';

export const getFormError = (state: StoreSchema) => state.recipeForm?.error;
