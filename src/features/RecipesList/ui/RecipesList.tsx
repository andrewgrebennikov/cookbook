import { cx } from 'classix';
import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getRecipesData } from '../model/selectors/gerRecipesData/getRecipesData';
import { getRecipesError } from '../model/selectors/gerRecipesError/getRecipesError';
import { getRecipesIsLoading } from '../model/selectors/gerRecipesIsLoading/getRecipesIsLoading';

import { RecipesCard } from './RecipesCard';

interface IRecipesListProps {
  className?: string;
}

export const RecipesList = memo((props: IRecipesListProps) => {
  const { className } = props;
  const recipes = useSelector(getRecipesData);
  const isLoading = useSelector(getRecipesIsLoading);
  const error = useSelector(getRecipesError);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Произошла ошибка
      </div>
    );
  }

  if (!recipes?.length) {
    return (
      <div className="alert alert-danger" role="alert">
        Рецепты не найдены
      </div>
    );
  }

  return (
    <ul className={cx('list-unstyled row gy-4', className)}>
      {recipes?.map((recipe) => {
        return (
          <li key={recipe.id} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <RecipesCard recipe={recipe} />
          </li>
        );
      })}
    </ul>
  );
});
