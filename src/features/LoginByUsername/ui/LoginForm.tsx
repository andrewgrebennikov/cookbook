import { ChangeEvent, SyntheticEvent, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getRouteMain } from '@/shared/consts/router';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { getLoginError } from '../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../model/slice/loginByUsernameSlice';

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

  const handleUsernameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(loginActions.setUsername(event.target.value));
    },
    [dispatch],
  );

  const handlePasswordChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(loginActions.setPassword(event.target.value));
    },
    [dispatch],
  );

  const handleLoginFormSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') {
      navigate(getRouteMain());
    }
  };

  return (
    <form onSubmit={handleLoginFormSubmit} className={className}>
      <fieldset>
        <legend>Вход</legend>
        <Input
          className="mb-3"
          label="Логин"
          type="text"
          id="login"
          onChange={handleUsernameChange}
          value={username}
          required
        />
        <Input
          className="mb-3"
          label="Пароль"
          type="password"
          id="password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
        {error && (
          <div className="alert alert-danger" role="alert">
            Вы ввели неверный логин или пароль
          </div>
        )}
        <Button type="submit" disabled={isLoading}>
          Отправить
        </Button>
      </fieldset>
    </form>
  );
};
