import { RecipeAddForm } from '@/features/RecipeAddForm';
import { recipeFormReducer } from '@/features/RecipeForm';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { ReducersList } from '@/shared/lib/types/reducersList';

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
