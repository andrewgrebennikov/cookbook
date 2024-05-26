import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';

import { getFormData, RecipeForm, recipeFormActions } from '@/features/RecipeForm';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { getAddFormError } from '../model/selectors/getAddFormError/getAddFormError';
import { getAddFormIsLoading } from '../model/selectors/getAddFormIsLoading/getAddFormIsLoading';
import { addNewRecipe } from '../model/services/addNewRecipe/addNewRecipe';

interface IRecipeAddFormProps {
  className?: string;
}

export const RecipeAddForm = (props: IRecipeAddFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const formData = useSelector(getFormData);
  const isLoading = useSelector(getAddFormIsLoading);
  const error = useSelector(getAddFormError);

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
