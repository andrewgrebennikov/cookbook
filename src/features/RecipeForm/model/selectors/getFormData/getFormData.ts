import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getFormData = (state: StoreSchema) => state.recipeForm?.formData;
