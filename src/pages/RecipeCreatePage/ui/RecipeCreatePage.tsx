import { DynamicModuleLoader, ReducersList } from '@/app/providers/StoreProvider';

import { RecipeAddForm } from '@/features/RecipeAddForm';
import { recipeFormReducer } from '@/features/RecipeForm';

const reducers: ReducersList = {
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
