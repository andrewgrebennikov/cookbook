import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getAddFormError = (state: StoreSchema) => state.recipeAddForm?.error;
