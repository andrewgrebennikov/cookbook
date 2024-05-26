import { MouseEvent, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import IconLike from '@/shared/assets/icons/icon-like.svg';
import { getRouteMain, getRouteRecipeEdit } from '@/shared/consts/router';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList } from '@/shared/lib/types/reducersList';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';

import { getCanEditRecipe } from '../model/selectors/getCanEditRecipe/getCanEditRecipe';
import { getRecipeData } from '../model/selectors/getRecipeData/getRecipeData';
import { getRecipeError } from '../model/selectors/getRecipeError/getRecipeError';
import { getRecipeIsLoading } from '../model/selectors/getRecipeIsLoading/getRecipeIsLoading';
import { fetchRecipeData } from '../model/services/fetchRecipeData/fetchRecipeData';
import { removeRecipe } from '../model/services/removeRecipe/removeRecipe';
import { recipeReducer } from '../model/slice/recipeSlice';

interface IRecipeDetailsProps {
  recipeId: string | undefined;
  className?: string;
}

const reducers: ReducersList = { recipe: recipeReducer };

export const RecipeDetails = (props: IRecipeDetailsProps) => {
  const { recipeId, className } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const recipeData = useSelector(getRecipeData);
  const isLoading = useSelector(getRecipeIsLoading);
  const error = useSelector(getRecipeError);
  const canEdit = useSelector(getCanEditRecipe);

  const handleRemoveRecipe = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const result = await dispatch(removeRecipe(recipeId));

      if (result.meta.requestStatus === 'fulfilled') {
        navigate(getRouteMain());
      }
    },
    [dispatch, navigate, recipeId],
  );

  useEffect(() => {
    dispatch(fetchRecipeData(recipeId));
  }, [dispatch, recipeId]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {isLoading && <div>Загрузка...</div>}
      {error && (
        <div className="alert alert-danger" role="alert">
          Произошла ошибка
        </div>
      )}
      {!isLoading && !error && recipeData && (
        <>
          {canEdit && (
            <div className="d-flex gap-3 mb-3">
              <Link to={getRouteRecipeEdit(recipeId || '')} className="btn btn-primary">
                Редактировать
              </Link>
              <Button type="button" variant={ButtonVariant.DANGER} onClick={handleRemoveRecipe}>
                Удалить
              </Button>
            </div>
          )}
          <h1 className="mb-3">{recipeData.title}</h1>
          <img
            width="600"
            height="400"
            className="object-fit-cover border rounded mb-3 d-block"
            src={recipeData.image}
            alt={recipeData.title}
          />
          {recipeData.description ? (
            <>
              <h2>Описание</h2>
              <p>{recipeData.description}</p>
            </>
          ) : null}
          {recipeData.baseIngredients?.length ? (
            <>
              <h2 className="mb-3">Базовые ингредиенты</h2>
              <ul>
                {recipeData.baseIngredients?.map((ingredient, index) => {
                  return <li key={index}>{ingredient}</li>;
                })}
              </ul>
            </>
          ) : null}
          {recipeData.ingredients?.length ? (
            <>
              <h2 className="mb-3">Список ингредиентов</h2>
              <ul className="list-unstyled">
                {recipeData.ingredients?.map((ingredient, index) => {
                  const { name, quantity, alternatives } = ingredient;

                  return (
                    <li key={index} className="mb-2">
                      {name} {quantity && `/ ${quantity}`}
                      {alternatives?.map((alternative, index) => {
                        const { name, quantity } = alternative;

                        return (
                          <div key={index}>
                            <span>- {name}</span>
                            {quantity ? <span> / {quantity}</span> : null}
                          </div>
                        );
                      })}
                    </li>
                  );
                })}
              </ul>
            </>
          ) : null}
          {recipeData.cookingSteps?.length ? (
            <>
              <h2 className="mb-3">Способ приготовления</h2>
              <ol>
                {recipeData.cookingSteps?.map((step, index) => {
                  return <li key={index}>{step}</li>;
                })}
              </ol>
            </>
          ) : null}
          <div>Сложность: {recipeData.difficulty}</div>
          <div>
            <IconLike width="16" height="16" /> - {recipeData.likes}
          </div>
        </>
      )}
    </DynamicModuleLoader>
  );
};
