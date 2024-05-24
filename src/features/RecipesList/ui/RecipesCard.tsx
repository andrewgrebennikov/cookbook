import { Link } from 'react-router-dom';

import { Recipe } from '@/entities/Recipe';

import IconLike from '@/shared/assets/icons/icon-like.svg';
import { getRouteRecipe } from '@/shared/consts/router';

interface IRecipesCardProps {
  className?: string;
  recipe: Recipe;
}

export const RecipesCard = (props: IRecipesCardProps) => {
  const { className, recipe } = props;

  return (
    <article className="card">
      <img
        width="304"
        height="200"
        src={recipe.image}
        className="card-img-top object-fit-lg-cover"
        alt={recipe.title}
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <Link className="text-decoration-none text-body" to={getRouteRecipe(recipe.id || '')}>
            {recipe.title}
          </Link>
        </h5>
        <p className="card-text">{recipe.description}</p>
        <div className="mt-auto">
          <div>Сложность - {recipe.difficulty}</div>
          <div>
            <IconLike width="16" height="16" /> - {recipe.likes}
          </div>
        </div>
      </div>
    </article>
  );
};
