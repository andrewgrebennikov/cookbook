import { useSelector } from 'react-redux';

import { getRecipesData } from '../model/selectors/gerRecipesData/getRecipesData';
import { getRecipesError } from '../model/selectors/gerRecipesError/getRecipesError';
import { getRecipesIsLoading } from '../model/selectors/gerRecipesIsLoading/getRecipesIsLoading';

import { RecipesCard } from './RecipesCard';

interface IRecipesListProps {
  className?: string;
}

export const RecipesList = (props: IRecipesListProps) => {
  const { className } = props;
  const recipes = useSelector(getRecipesData);
  const isLoading = useSelector(getRecipesIsLoading);
  const error = useSelector(getRecipesError);

  if (isLoading) {
    return <div>Загрузка рецептов...</div>;
  }

  if (error) {
    return <div>Произошла ошибка при загрузке рецептов</div>;
  }

  if (!recipes?.length) {
    return <div>Рецепты не найдены</div>;
  }

  return (
    <ul className="list-unstyled row gy-4">
      {recipes?.map((recipe) => {
        return (
          <li key={recipe.id} className="col-3">
            <RecipesCard recipe={recipe} />
          </li>
        );
      })}
    </ul>
  );
};
