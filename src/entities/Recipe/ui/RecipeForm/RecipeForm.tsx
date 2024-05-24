import { ChangeEvent, SyntheticEvent, memo } from 'react';

import { Recipe } from '../../model/types/recipe';

interface IRecipeFormProps {
  className?: string;
  formData?: Recipe;
  isLoading?: boolean;
  error?: string;
  onTitleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onImageChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onLikesChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onDifficultyChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  onStepChange?: (step: number) => (event: ChangeEvent<HTMLInputElement>) => void;
  onIngredientChange?: (ingredientIndex: number, field: string) => (event: ChangeEvent<HTMLInputElement>) => void;
  onStepAdd?: () => void;
  onStepRemove?: (step: number) => () => void;
  onIngredientAdd?: () => void;
  onIngredientRemove?: (index: number) => () => void;
  onSubmit?: (event: SyntheticEvent) => void;
  formTitle?: string;
}

export const RecipeForm = memo((props: IRecipeFormProps) => {
  const {
    className,
    isLoading,
    error,
    formData,
    onTitleChange,
    onLikesChange,
    onImageChange,
    onDescriptionChange,
    onDifficultyChange,
    onStepChange,
    onIngredientChange,
    onStepAdd,
    onStepRemove,
    onIngredientAdd,
    onIngredientRemove,
    onSubmit,
    formTitle,
  } = props;

  return (
    <form onSubmit={onSubmit}>
      {error && (
        <div className="alert alert-danger" role="alert">
          Произошла ошибка
        </div>
      )}
      <fieldset disabled={isLoading}>
        <legend>{formTitle}</legend>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Название
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            value={formData?.title || ''}
            onChange={onTitleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">
            Фото URL
          </label>
          <input
            type="text"
            className="form-control"
            name="photo"
            id="photo"
            value={formData?.image || ''}
            onChange={onImageChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="likes" className="form-label">
            Количество лайков
          </label>
          <input
            type="number"
            className="form-control"
            name="likes"
            id="likes"
            value={formData?.likes || 0}
            onChange={onLikesChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Описание
          </label>
          <textarea
            name="description"
            className="form-control"
            id="description"
            value={formData?.description}
            onChange={onDescriptionChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Этапы приготовления</label>
          {formData?.cookingSteps?.map((step, index) => (
            <div className="d-flex gap-3 mb-3" key={index}>
              <input type="text" className="form-control" value={step} onChange={onStepChange?.(index)} required />
              <button type="button" className="btn btn-primary flex-shrink-0" onClick={onStepRemove?.(index)}>
                Удалить этап
              </button>
            </div>
          ))}
          <div>
            <button type="button" className="btn btn-primary" onClick={onStepAdd}>
              Добавить этап
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Ингредиенты</label>
          {formData?.ingredients?.map((ingredient, index) => (
            <div className="mb-3" key={index}>
              <div className="d-flex gap-3 mb-3" key={index}>
                <input
                  type="text"
                  placeholder="Имя"
                  className="form-control"
                  value={ingredient.name}
                  onChange={onIngredientChange?.(index, 'name')}
                  required
                />
                <input
                  type="text"
                  placeholder="Количество"
                  className="form-control"
                  value={ingredient.quantity}
                  onChange={onIngredientChange?.(index, 'quantity')}
                />
                <button type="button" className="btn btn-primary flex-shrink-0" onClick={onIngredientRemove?.(index)}>
                  Удалить ингредиент
                </button>
              </div>
            </div>
          ))}
          <div>
            <button type="button" className="btn btn-primary" onClick={onIngredientAdd}>
              Добавить ингредиент
            </button>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="difficulty" className="form-label">
            Сложность приготовления
          </label>
          <select
            name="difficulty"
            className="form-control"
            id="difficulty"
            value={formData?.difficulty}
            onChange={onDifficultyChange}
            required
          >
            <option value="Легко">Легко</option>
            <option value="Средне">Средне</option>
            <option value="Трудно">Трудно</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить рецепт
        </button>
      </fieldset>
    </form>
  );
});
