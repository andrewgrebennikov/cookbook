import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getAddFormData = (state: StoreSchema) => state.recipeAddForm?.formData;
