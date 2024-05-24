import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getEditFormError = (state: StoreSchema) => state.recipeEditForm?.error;
