import { MouseEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import IconLike from '@/shared/assets/icons/icon-like.svg';
import { getRouteMain, getRouteRecipeEdit } from '@/shared/consts/router';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList } from '@/shared/lib/types/reducersList';

import { getCanEditRecipe } from '../../model/selectors/getCanEditRecipe/getCanEditRecipe';
import { getRecipeData } from '../../model/selectors/getRecipeData/getRecipeData';
import { getRecipeError } from '../../model/selectors/getRecipeError/getRecipeError';
import { getRecipeIsLoading } from '../../model/selectors/getRecipeIsLoading/getRecipeIsLoading';
import { fetchRecipeData } from '../../model/services/fetchRecipeData/fetchRecipeData';
import { removeRecipe } from '../../model/services/removeRecipe/removeRecipe';
import { recipeReducer } from '../../model/slice/recipeSlice';

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

  const handleRemoveRecipe = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = await dispatch(removeRecipe(recipeId));

    if (result.meta.requestStatus === 'fulfilled') {
      navigate(getRouteMain());
    }
  };

  useEffect(() => {
    dispatch(fetchRecipeData(recipeId));
  }, [dispatch, recipeId]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {isLoading && <div>Загрузка рецепта...</div>}
      {error && (
        <div className="alert alert-danger" role="alert">
          Произошла ошибка при загрузки рецепта
        </div>
      )}
      {!isLoading && !error && recipeData && (
        <>
          {canEdit && (
            <div className="d-flex gap-3 mb-3">
              <Link to={getRouteRecipeEdit(recipeId || '')} className="btn btn-primary">
                Редактировать
              </Link>
              <button type="button" className="btn btn-danger" onClick={handleRemoveRecipe}>
                Удалить
              </button>
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
          <p>{recipeData.description}</p>
          <ul>
            {recipeData.ingredients?.map((ingredient) => {
              return (
                <li key={ingredient.name}>
                  {ingredient.name} {ingredient.quantity && `/ ${ingredient.quantity}`}
                </li>
              );
            })}
          </ul>
          <h2 className="mb-3">Способ приготовления</h2>
          <ol>
            {recipeData.cookingSteps?.map((step) => {
              return <li key={step}>{step}</li>;
            })}
          </ol>
          <div>Сложность: {recipeData.difficulty}</div>
          <div>
            <IconLike width="16" height="16" /> - {recipeData.likes}
          </div>
        </>
      )}
    </DynamicModuleLoader>
  );
};
