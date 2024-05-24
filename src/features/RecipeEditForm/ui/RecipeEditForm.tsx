import { ChangeEvent, SyntheticEvent, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchRecipeData, RecipeDifficulty, RecipeForm } from '@/entities/Recipe';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList } from '@/shared/lib/types/reducersList';

import { getEditFormData } from '../model/selectors/getEditFormData/getEditFormData';
import { getEditFormError } from '../model/selectors/getEditFormError/getEditFormError';
import { getEditFormIsLoading } from '../model/selectors/getEditFormIsLoading/getEditFormIsLoading';
import { updateRecipe } from '../model/services/updateRecipe/updateRecipe';
import { recipeEditFormActions, recipeEditFormReducer } from '../model/slice/recipeEditFormSlice';

interface IRecipeEditFormProps {
  className?: string;
}

const reducers: ReducersList = {
  recipeEditForm: recipeEditFormReducer,
};

export const RecipeEditForm = (props: IRecipeEditFormProps) => {
  const { className } = props;
  const { id: recipeId } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getEditFormIsLoading);
  const error = useSelector(getEditFormError);
  const formData = useSelector(getEditFormData);

  const handleTitleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeEditFormActions.changeField({ title: event.target.value }));
    },
    [dispatch],
  );

  const handleImageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeEditFormActions.changeField({ image: event.target.value }));
    },
    [dispatch],
  );

  const handleLikesChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeEditFormActions.changeField({ likes: Number(event.target.value) }));
    },
    [dispatch],
  );

  const handleDescriptionChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(recipeEditFormActions.changeField({ description: event.target.value }));
    },
    [dispatch],
  );

  const handleDifficultyChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch(recipeEditFormActions.changeField({ difficulty: event.target.value as RecipeDifficulty }));
    },
    [dispatch],
  );

  const handleStepChange = useCallback(
    (step: number) => (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeEditFormActions.changeStep({ step, value: event.target.value }));
    },
    [dispatch],
  );

  const handleIngredientChange = useCallback(
    (ingredientIndex: number, field: string) => (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeEditFormActions.changeIngredient({ ingredientIndex, field, value: event.target.value }));
    },
    [dispatch],
  );

  const handleStepAdd = useCallback(() => {
    dispatch(recipeEditFormActions.addStep());
  }, [dispatch]);

  const handleStepRemove = useCallback(
    (step: number) => () => {
      dispatch(recipeEditFormActions.removeStep(step));
    },
    [dispatch],
  );

  const handleIngredientAdd = useCallback(() => {
    dispatch(recipeEditFormActions.addIngredient());
  }, [dispatch]);

  const handleIngredientRemove = useCallback(
    (index: number) => () => {
      dispatch(recipeEditFormActions.removeIngredient(index));
    },
    [dispatch],
  );

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
    </DynamicModuleLoader>
  );
};
