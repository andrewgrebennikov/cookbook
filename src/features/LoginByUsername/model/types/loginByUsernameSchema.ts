export interface ILoginByUsernameSchema {
  username: string;
  password: string;
  isLoading?: boolean;
  error?: string;
}
