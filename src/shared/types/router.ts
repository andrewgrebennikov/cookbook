import { RouteProps } from 'react-router-dom';

export type AppRoutesPropsType = RouteProps & {
  auth?: boolean;
  guest?: boolean;
};
