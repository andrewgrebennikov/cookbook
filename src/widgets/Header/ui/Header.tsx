import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAuthData, userActions } from '@/entities/User';

import { getRouteLogin, getRouteRecipeCreate } from '@/shared/consts/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface IHeaderProps {
  className?: string;
}

export const Header = (props: IHeaderProps) => {
  const { className } = props;
  const authData = useSelector(getAuthData);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <header className="py-3 d-flex justify-content-end gap-3">
      {authData ? (
        <>
          <Link className="btn btn-primary" to={getRouteRecipeCreate()}>
            Добавить рецепт
          </Link>
          <button type="button" className="btn btn-outline-primary" onClick={handleLogout}>
            Выйти
          </button>
        </>
      ) : (
        <Link className="btn btn-primary" to={getRouteLogin()}>
          Войти
        </Link>
      )}
    </header>
  );
};
