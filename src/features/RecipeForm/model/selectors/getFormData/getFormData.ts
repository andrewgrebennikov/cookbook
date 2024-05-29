import { StoreSchema } from '@/app/providers/StoreProvider';

export const getFormData = (state: StoreSchema) => state.recipeForm?.formData;
