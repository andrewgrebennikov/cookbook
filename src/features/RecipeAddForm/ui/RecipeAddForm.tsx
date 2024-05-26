import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';

import {
  getFormData,
  RecipeForm,
  recipeFormActions,
  addNewRecipe,
  getFormIsLoading,
  getFormError,
} from '@/features/RecipeForm';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface IRecipeAddFormProps {
  className?: string;
}

export const RecipeAddForm = (props: IRecipeAddFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const formData = useSelector(getFormData);
  const isLoading = useSelector(getFormIsLoading);
  const error = useSelector(getFormError);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const result = await dispatch(addNewRecipe());

    if (result.meta.requestStatus === 'fulfilled') {
      dispatch(recipeFormActions.resetForm());
    }
  };

  return (
    <RecipeForm
      className={className}
      formTitle="Добавить новый рецепт"
      formData={formData}
      isLoading={isLoading}
      error={error}
      onSubmit={handleSubmit}
    />
  );
};
