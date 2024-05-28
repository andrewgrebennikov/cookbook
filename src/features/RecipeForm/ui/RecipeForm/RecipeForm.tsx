import { ChangeEvent, SyntheticEvent, useCallback, useMemo } from 'react';

import { RecipesCategoryField } from '@/features/RecipesCategory';

import { Recipe, RecipeDifficulty } from '@/entities/Recipe';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Select } from '@/shared/ui/Select/Select';
import { Textarea } from '@/shared/ui/Textarea/Textarea';

import { recipeFormActions } from '../../model/slice/recipeFormSlice';
import { RecipeFormAltIngredient } from '../RecipeFormAltIngredient/RecipeFormAltIngredient';
import { RecipeFormBaseIngredient } from '../RecipeFormBaseIngredient/RecipeFormBaseIngredient';
import { RecipeFormIngredient } from '../RecipeFormIngredient/RecipeFormIngredient';
import { RecipeFormStep } from '../RecipeFormStep/RecipeFormStep';

interface IRecipeFormProps {
  className?: string;
  formData?: Recipe;
  isLoading?: boolean;
  error?: string;
  onSubmit?: (event: SyntheticEvent) => void;
  formTitle?: string;
}

export const RecipeForm = (props: IRecipeFormProps) => {
  const { className, isLoading, error, formData, onSubmit, formTitle } = props;
  const dispatch = useAppDispatch();

  const optionsDifficulty = useMemo(
    () => [
      {
        id: 1,
        value: RecipeDifficulty.EASY,
        name: 'Легко',
      },
      {
        id: 2,
        value: RecipeDifficulty.NORMAL,
        name: 'Средне',
      },
      {
        id: 3,
        value: RecipeDifficulty.HARD,
        name: 'Трудно',
      },
    ],
    [],
  );

  const optionsCategory = useMemo(
    () => [
      {
        id: 1,
        value: RecipesCategoryField.SALAD,
        name: 'Салаты',
      },
      {
        id: 2,
        value: RecipesCategoryField.SOUP,
        name: 'Супы',
      },
      {
        id: 3,
        value: RecipesCategoryField.PASTA,
        name: 'Паста и пицца',
      },
      {
        id: 4,
        value: RecipesCategoryField.DRINK,
        name: 'Напитки',
      },
    ],
    [],
  );

  const handleTitleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeFormActions.changeField({ title: event.target.value }));
    },
    [dispatch],
  );

  const handleImageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeFormActions.changeField({ image: event.target.value }));
    },
    [dispatch],
  );

  const handleLikesChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeFormActions.changeLikeTotal(Number(event.target.value)));
    },
    [dispatch],
  );

  const handleDescriptionChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(recipeFormActions.changeField({ description: event.target.value }));
    },
    [dispatch],
  );

  const handleDifficultyChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch(recipeFormActions.changeField({ difficulty: event.target.value as RecipeDifficulty }));
    },
    [dispatch],
  );

  const handleCategoryChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch(recipeFormActions.changeField({ category: event.target.value as RecipesCategoryField }));
    },
    [dispatch],
  );

  const handleStepAdd = useCallback(() => {
    dispatch(recipeFormActions.addStep());
  }, [dispatch]);

  const handleStepRemove = useCallback(
    (step: number) => () => {
      dispatch(recipeFormActions.removeStep(step));
    },
    [dispatch],
  );

  const handleStepChange = useCallback(
    (step: number) => (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeFormActions.changeStep({ step, value: event.target.value }));
    },
    [dispatch],
  );

  const handleIngredientAdd = useCallback(() => {
    dispatch(recipeFormActions.addIngredient());
  }, [dispatch]);

  const handleIngredientRemove = useCallback(
    (index: number) => () => {
      dispatch(recipeFormActions.removeIngredient(index));
    },
    [dispatch],
  );

  const handleIngredientChange = useCallback(
    (index: number, field: string) => (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeFormActions.changeIngredient({ index, field, value: event.target.value }));
    },
    [dispatch],
  );

  const handleBaseIngredientAdd = useCallback(() => {
    dispatch(recipeFormActions.addBaseIngredient());
  }, [dispatch]);

  const handleBaseIngredientRemove = useCallback(
    (index: number) => () => {
      dispatch(recipeFormActions.removeBaseIngredient(index));
    },
    [dispatch],
  );

  const handleBaseIngredientChange = useCallback(
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeFormActions.changeBaseIngredient({ index, value: event.target.value }));
    },
    [dispatch],
  );

  const handleAltIngredientAdd = useCallback(
    (index: number) => () => {
      dispatch(recipeFormActions.addAltIngredient(index));
    },
    [dispatch],
  );

  const handleAltIngredientRemove = useCallback(
    (index: number, altIndex: number) => () => {
      dispatch(recipeFormActions.removeAltIngredient({ index, altIndex }));
    },
    [dispatch],
  );

  const handleAltIngredientChange = useCallback(
    (index: number, altIndex: number, field: string) => (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(recipeFormActions.changeAltIngredient({ index, altIndex, field, value: event.target.value }));
    },
    [dispatch],
  );

  const steps = useMemo(
    () =>
      formData?.cookingSteps?.map((step, index) => (
        <RecipeFormStep
          key={index}
          value={step}
          onStepChange={handleStepChange?.(index)}
          onStepRemove={handleStepRemove?.(index)}
        />
      )),
    [formData?.cookingSteps, handleStepChange, handleStepRemove],
  );

  const baseIngredients = useMemo(
    () =>
      formData?.baseIngredients?.map((ingredient, index) => (
        <RecipeFormBaseIngredient
          key={index}
          value={ingredient}
          onBaseIngredientChange={handleBaseIngredientChange?.(index)}
          onBaseIngredientRemove={handleBaseIngredientRemove?.(index)}
        />
      )),
    [formData?.baseIngredients, handleBaseIngredientChange, handleBaseIngredientRemove],
  );

  const ingredients = useMemo(
    () =>
      formData?.ingredients?.map((ingredient, index) => {
        const { name, quantity } = ingredient;
        const isDisabledRemoveButton = formData?.ingredients?.length === 1;

        return (
          <div className="mb-3" key={index}>
            <RecipeFormIngredient
              name={name}
              quantity={quantity}
              onAltIngredientChangeName={handleIngredientChange?.(index, 'name')}
              onAltIngredientChangeQuantity={handleIngredientChange?.(index, 'quantity')}
            />
            {ingredient.alternatives.map((ingredient, altIngredientIndex) => {
              const { name, quantity } = ingredient;

              return (
                <RecipeFormAltIngredient
                  key={altIngredientIndex}
                  name={name}
                  quantity={quantity}
                  onAltIngredientChangeName={handleAltIngredientChange?.(index, altIngredientIndex, 'name')}
                  onAltIngredientChangeQuantity={handleAltIngredientChange?.(index, altIngredientIndex, 'quantity')}
                  onAltIngredientRemove={handleAltIngredientRemove?.(index, altIngredientIndex)}
                />
              );
            })}
            <div className="d-flex flex-column flex-md-row gap-3">
              <Button type="button" onClick={handleAltIngredientAdd?.(index)}>
                Добавить альтернативу
              </Button>
              <Button
                disabled={isDisabledRemoveButton}
                type="button"
                variant={ButtonVariant.DANGER}
                onClick={handleIngredientRemove?.(index)}
              >
                Удалить ингредиент
              </Button>
            </div>
          </div>
        );
      }),
    [
      formData?.ingredients,
      handleAltIngredientAdd,
      handleAltIngredientChange,
      handleAltIngredientRemove,
      handleIngredientChange,
      handleIngredientRemove,
    ],
  );

  return (
    <form onSubmit={onSubmit} className={className}>
      {error && (
        <div className="alert alert-danger" role="alert">
          Произошла ошибка
        </div>
      )}
      <fieldset disabled={isLoading}>
        <legend>{formTitle}</legend>
        <Input
          className="mb-3"
          label="Название"
          type="text"
          name="title"
          id="title"
          value={formData?.title || ''}
          onChange={handleTitleChange}
          required
        />
        <Input
          className="mb-3"
          label="Фото URL"
          type="text"
          name="photo"
          id="photo"
          value={formData?.image || ''}
          onChange={handleImageChange}
        />
        <Input
          className="mb-3"
          label="Количество лайков"
          type="number"
          name="likes"
          id="likes"
          value={formData?.likes?.total || ''}
          onChange={handleLikesChange}
        />
        <Textarea
          label="Описание"
          name="description"
          id="description"
          value={formData?.description}
          onChange={handleDescriptionChange}
        />
        <div className="mb-3">
          <span className="form-label d-inline-block">Этапы приготовления</span>
          {steps}
          <div>
            <Button type="button" onClick={handleStepAdd}>
              Добавить этап
            </Button>
          </div>
        </div>
        <div className="mb-3">
          <span className="form-label d-inline-block">Базовые ингредиенты</span>
          {baseIngredients}
          <div>
            <Button type="button" onClick={handleBaseIngredientAdd}>
              Добавить ингредиент
            </Button>
          </div>
        </div>
        <div className="mb-3">
          <span className="form-label d-inline-block">Ингредиенты</span>
          {ingredients}
          <div>
            <Button type="button" onClick={handleIngredientAdd}>
              Добавить ингредиент
            </Button>
          </div>
        </div>
        <Select
          className="mb-3"
          label="Выберите сложность"
          defaultLabel="Выберите сложность"
          id="difficulty"
          name="difficulty"
          value={formData?.difficulty}
          onChange={handleDifficultyChange}
          options={optionsDifficulty}
          required
        />
        <Select
          className="mb-3"
          label="Выберите категорию"
          defaultLabel="Выберите категорию"
          id="category"
          name="category"
          value={formData?.category}
          onChange={handleCategoryChange}
          options={optionsCategory}
        />
        <Button type="submit">Отправить рецепт</Button>
      </fieldset>
    </form>
  );
};
