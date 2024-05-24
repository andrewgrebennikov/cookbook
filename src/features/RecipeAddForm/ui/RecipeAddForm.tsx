import { ChangeEvent, SyntheticEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { RecipeDifficulty, RecipeForm } from '@/entities/Recipe';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { getAddFormData } from '../model/selectors/getAddFormData/getAddFormData';
import { getAddFormError } from '../model/selectors/getAddFormError/getAddFormError';
import { getAddFormIsLoading } from '../model/selectors/getAddFormIsLoading/getAddFormIsLoading';
import { addNewRecipe } from '../model/services/addNewRecipe/addNewRecipe';
import { recipeAddFormActions } from '../model/slice/recipeAddFormSlice';

interface IRecipeAddFormProps {
  className?: string;
}

export const RecipeAddForm = (props: IRecipeAddFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const formData = useSelector(getAddFormData);
  const isLoading = useSelector(getAddFormIsLoading);
  const error = useSelector(getAddFormError);

  const handleTitleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeAddFormActions.changeField({ title: event.target.value }));
    },
    [dispatch],
  );

  const handleImageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeAddFormActions.changeField({ image: event.target.value }));
    },
    [dispatch],
  );

  const handleLikesChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeAddFormActions.changeField({ likes: Number(event.target.value) }));
    },
    [dispatch],
  );

  const handleDescriptionChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(recipeAddFormActions.changeField({ description: event.target.value }));
    },
    [dispatch],
  );

  const handleDifficultyChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch(recipeAddFormActions.changeField({ difficulty: event.target.value as RecipeDifficulty }));
    },
    [dispatch],
  );

  const handleStepChange = useCallback(
    (step: number) => (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeAddFormActions.changeStep({ step, value: event.target.value }));
    },
    [dispatch],
  );

  const handleIngredientChange = useCallback(
    (ingredientIndex: number, field: string) => (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeAddFormActions.changeIngredient({ ingredientIndex, field, value: event.target.value }));
    },
    [dispatch],
  );

  const handleStepAdd = useCallback(() => {
    dispatch(recipeAddFormActions.addStep());
  }, [dispatch]);

  const handleStepRemove = useCallback(
    (step: number) => () => {
      dispatch(recipeAddFormActions.removeStep(step));
    },
    [dispatch],
  );

  const handleIngredientAdd = useCallback(() => {
    dispatch(recipeAddFormActions.addIngredient());
  }, [dispatch]);

  const handleIngredientRemove = useCallback(
    (index: number) => () => {
      dispatch(recipeAddFormActions.removeIngredient(index));
    },
    [dispatch],
  );

  const handleSubmit = useCallback(
    async (event: SyntheticEvent) => {
      event.preventDefault();
      const result = await dispatch(addNewRecipe());

      if (result.meta.requestStatus === 'fulfilled') {
        dispatch(recipeAddFormActions.resetForm());
      }
    },
    [dispatch],
  );

  return (
    <RecipeForm
      formTitle="Добавить новый рецепт"
      formData={formData}
      isLoading={isLoading}
      error={error}
      onTitleChange={handleTitleChange}
      onImageChange={handleImageChange}
      onLikesChange={handleLikesChange}
      onDescriptionChange={handleDescriptionChange}
      onDifficultyChange={handleDifficultyChange}
      onStepChange={handleStepChange}
      onIngredientChange={handleIngredientChange}
      onStepAdd={handleStepAdd}
      onIngredientAdd={handleIngredientAdd}
      onIngredientRemove={handleIngredientRemove}
      onStepRemove={handleStepRemove}
      onSubmit={handleSubmit}
    />
  );
};
