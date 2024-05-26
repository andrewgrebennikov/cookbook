import { cx } from 'classix';
import { Link, Path } from 'react-router-dom';

import IconLike from '../../assets/icons/icon-like.svg';

interface ICardProps {
  id?: string;
  className?: string;
  image?: string;
  title?: string;
  description?: string;
  difficulty?: string;
  likes?: number;
  link?: string | Partial<Path>;
  baseIngredients?: string[];
}

export const Card = (props: ICardProps) => {
  const { className, image, title, id, description, difficulty, likes, link, baseIngredients } = props;

  return (
    <article className={cx('card', className)}>
      <img
        width="304"
        height="200"
        src={image}
        className="card-img-top object-fit-lg-cover"
        alt={title}
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        {title ? (
          <h5 className="card-title">
            {link ? (
              <Link className="text-decoration-none text-body" to={link}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h5>
        ) : null}
        {description ? <p className="card-text">{description}</p> : null}
        {baseIngredients?.length ? (
          <>
            <h6>Основные ингредиенты</h6>
            <p>{baseIngredients.join(', ')}</p>
          </>
        ) : null}
        <div className="mt-auto">
          {difficulty ? <div>Сложность - {difficulty}</div> : null}
          {likes ? (
            <div>
              <IconLike width="16" height="16" /> - {likes}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
};