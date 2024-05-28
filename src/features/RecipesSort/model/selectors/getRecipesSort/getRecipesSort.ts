import { StoreSchema } from '@/app/providers/StoreProvider';

import { RecipesSortField } from '../../consts/recipesSortConsts';

export const getRecipesSort = (state: StoreSchema) => state.recipes?.sort || RecipesSortField.TITLE;
