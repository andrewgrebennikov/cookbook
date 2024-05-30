import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getFormData = (state: IStoreSchema) => state.recipeForm?.formData;
