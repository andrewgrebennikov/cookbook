import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  auth?: boolean;
  guest?: boolean;
};
