import { cx } from 'classix';

import { Recipe } from '@/entities/Recipe';

import { getRouteRecipe } from '@/shared/consts/router';
import { Card } from '@/shared/ui/Card/Card';

interface IRecipesCardProps {
  className?: string;
  recipe: Recipe;
}

export const RecipesCard = (props: IRecipesCardProps) => {
  const { className, recipe } = props;
  const { id, title, image, description, difficulty, likes, baseIngredients } = recipe;

  return (
    <Card
      className={cx('card', className)}
      id={id}
      likes={likes}
      title={title}
      description={description}
      image={image}
      difficulty={difficulty}
      link={getRouteRecipe(id || '')}
      baseIngredients={baseIngredients}
    />
  );
};
