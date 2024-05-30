import { DynamicModuleLoader, ReducersListType } from '@/app/providers/StoreProvider';

import { RecipeAddForm } from '@/features/RecipeAddForm';
import { recipeFormReducer } from '@/features/RecipeForm';

const reducers: ReducersListType = {
  recipeForm: recipeFormReducer,
};

const RecipeCreatePage = () => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <RecipeAddForm />
    </DynamicModuleLoader>
  );
};

export default RecipeCreatePage;
