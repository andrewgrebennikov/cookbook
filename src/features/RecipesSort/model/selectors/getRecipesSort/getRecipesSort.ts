import { IStoreSchema } from '@/app/providers/StoreProvider';

import { RecipesSortField } from '../../consts/recipesSortConsts';

export const getRecipesSort = (state: IStoreSchema) => state.recipes?.sort || RecipesSortField.TITLE;
