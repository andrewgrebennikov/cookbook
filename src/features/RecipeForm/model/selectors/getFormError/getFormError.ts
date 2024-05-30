import { IStoreSchema } from '@/app/providers/StoreProvider';

export const getFormError = (state: IStoreSchema) => state.recipeForm?.error;
