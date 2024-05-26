import { SyntheticEvent, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getFormData, RecipeForm, recipeFormReducer } from '@/features/RecipeForm';

import { fetchRecipeData } from '@/entities/Recipe';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList } from '@/shared/lib/types/reducersList';

import { getEditFormError } from '../model/selectors/getEditFormError/getEditFormError';
import { getEditFormIsLoading } from '../model/selectors/getEditFormIsLoading/getEditFormIsLoading';
import { updateRecipe } from '../model/services/updateRecipe/updateRecipe';
import { recipeEditFormReducer } from '../model/slice/recipeEditFormSlice';

interface IRecipeEditFormProps {
  className?: string;
}

const reducers: ReducersList = {
  recipeForm: recipeFormReducer,
  recipeEditForm: recipeEditFormReducer,
};

export const RecipeEditForm = (props: IRecipeEditFormProps) => {
  const { className } = props;
  const { id: recipeId } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getEditFormIsLoading);
  const error = useSelector(getEditFormError);
  const formData = useSelector(getFormData);

  const handleSubmit = useCallback(
    async (event: SyntheticEvent) => {
      event.preventDefault();
      const result = await dispatch(updateRecipe(recipeId));

      if (result.meta.requestStatus === 'fulfilled') {
        console.log('Данные обновлены');
      }
    },
    [dispatch, recipeId],
  );

  useEffect(() => {
    dispatch(fetchRecipeData(recipeId));
  }, [dispatch, recipeId]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <RecipeForm
        formTitle="Редактировать рецепт"
        formData={formData}
        isLoading={isLoading}
        error={error}
        onSubmit={handleSubmit}
      />
    </DynamicModuleLoader>
  );
};
