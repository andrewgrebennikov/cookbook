import { StoreSchema } from '@/app/providers/StoreProvider';

import { RecipesOrderField } from '../../consts/recipesOrderConsts';

export const getRecipesOrder = (state: StoreSchema) => state.recipes?.order || RecipesOrderField.ASC;
