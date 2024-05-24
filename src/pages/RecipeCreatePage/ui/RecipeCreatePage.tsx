import { RecipeAddForm, recipeAddFormReducer } from '@/features/RecipeAddForm';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { ReducersList } from '@/shared/lib/types/reducersList';

const reducers: ReducersList = {
  recipeAddForm: recipeAddFormReducer,
};

const RecipeCreatePage = () => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <RecipeAddForm />
    </DynamicModuleLoader>
  );
};

export default RecipeCreatePage;
