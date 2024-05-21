import { ChangeEvent, SyntheticEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAuthData } from '@/entities/User';

import { getRouteMain } from '@/shared/consts/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import { getLoginError } from '../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../model/slice/loginSlice';

interface ILoginFormProps {
  className?: string;
}

export const LoginForm = (props: ILoginFormProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const authData = useSelector(getAuthData);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setUsername(event.target.value));
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(event.target.value));
  };

  const handleLoginFormSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      navigate(getRouteMain());
    }
  };

  useEffect(() => {
    if (authData) {
      navigate(getRouteMain());
    }
  }, [authData, navigate]);

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <fieldset>
        <legend>Вход</legend>
        <div className="mb-3">
          <label htmlFor="login" className="form-label">
            Логин
          </label>
          <input
            type="text"
            className="form-control"
            id="login"
            onChange={handleUsernameChange}
            value={username}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handlePasswordChange}
            value={password}
            required
          />
        </div>
        {error && <div className="text-danger mb-3">Вы ввели неверный логин или пароль</div>}
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          Отправить
        </button>
      </fieldset>
    </form>
  );
};
