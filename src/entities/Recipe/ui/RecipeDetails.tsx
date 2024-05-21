import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ReducersList } from '@/shared/lib/types/reducersList';

import { getRecipeData } from '../model/selectors/getRecipeData/getRecipeData';
import { getRecipeError } from '../model/selectors/getRecipeError/getRecipeError';
import { getRecipeIsLoading } from '../model/selectors/getRecipeIsLoading/getRecipeIsLoading';
import { fetchRecipeData } from '../model/services/fetchRecipeData/fetchRecipeData';
import { recipeReducer } from '../model/slice/recipeSlice';

interface IRecipeDetailsProps {
  recipeId: string | undefined;
  className?: string;
}

const initialReducers: ReducersList = { recipe: recipeReducer };

export const RecipeDetails = (props: IRecipeDetailsProps) => {
  const { recipeId, className } = props;

  const dispatch = useAppDispatch();
  const recipeData = useSelector(getRecipeData);
  const isLoading = useSelector(getRecipeIsLoading);
  const error = useSelector(getRecipeError);

  useEffect(() => {
    dispatch(fetchRecipeData(recipeId));
  }, [dispatch, recipeId]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      {isLoading && <div>Загрузка рецепта...</div>}
      {error && <div>Произошла ошибка при загрузки рецепта</div>}
      {recipeData && (
        <>
          <h1 className="mb-3">{recipeData?.title}</h1>
          <img
            width="600"
            height="400"
            className="object-fit-cover border rounded mb-3"
            src={recipeData?.image}
            alt={recipeData?.title}
          />
          <p>{recipeData?.description}</p>
          <ul>
            {recipeData?.ingredients.map((ingredient) => {
              return (
                <li key={ingredient.name}>
                  {ingredient.name} / {ingredient.quantity}
                </li>
              );
            })}
          </ul>
          <h2 className="mb-3">Способ приготовления</h2>
          <ol>
            {recipeData?.cookingSteps.map((step) => {
              return <li key={step}>{step}</li>;
            })}
          </ol>
          <div>Количество лайков: {recipeData?.likes}</div>
          <div>Сложность: {recipeData?.difficulty}</div>
        </>
      )}
    </DynamicModuleLoader>
  );
};
