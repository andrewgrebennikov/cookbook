import { StoreSchema } from '@/app/providers/StoreProvider/types/storeSchema';

export const getEditFormData = (state: StoreSchema) => state.recipeEditForm?.formData;
