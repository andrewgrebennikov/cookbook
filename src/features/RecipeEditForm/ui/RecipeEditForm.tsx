import { SyntheticEvent, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { DynamicModuleLoader, ReducersList } from '@/app/providers/StoreProvider';

import {
  getFormData,
  RecipeForm,
  recipeFormReducer,
  getFormError,
  getFormIsLoading,
  updateRecipe,
} from '@/features/RecipeForm';

import { fetchRecipeData } from '@/entities/Recipe';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

interface IRecipeEditFormProps {
  className?: string;
}

const reducers: ReducersList = {
  recipeForm: recipeFormReducer,
};

export const RecipeEditForm = (props: IRecipeEditFormProps) => {
  const { className } = props;
  const { id: recipeId } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getFormIsLoading);
  const error = useSelector(getFormError);
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
