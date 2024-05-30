import { IStoreSchema } from '@/app/providers/StoreProvider';

import { RecipesOrderField } from '../../consts/recipesOrderConsts';

export const getRecipesOrder = (state: IStoreSchema) => state.recipes?.order || RecipesOrderField.ASC;
