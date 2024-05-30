import { cx } from 'classix';
import { Link, Path } from 'react-router-dom';

import { ILike } from '@/entities/Recipe';

import IconLike from '../../assets/icons/icon-like.svg';
import { AppImage } from '../AppImage/AppImage';

interface ICardProps {
  id?: string;
  className?: string;
  image?: string;
  title?: string;
  description?: string;
  difficulty?: string;
  likes?: ILike;
  link?: string | Partial<Path>;
  baseIngredients?: string[];
}

export const Card = (props: ICardProps) => {
  const { className, image, title, description, difficulty, likes, link, baseIngredients } = props;

  return (
    <article className={cx('card', className)}>
      <AppImage
        width="304"
        height="200"
        src={image}
        className="card-img-top object-fit-lg-cover"
        alt={title}
        errorFallback={
          <img
            src="https://placehold.co/304x200"
            width="304"
            height="200"
            loading="lazy"
            decoding="async"
            alt={title}
          />
        }
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
              <IconLike width="16" height="16" /> - {likes?.total}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
};
