export interface LoginByUsernameSchema {
  username: string;
  password: string;
  isLoading?: boolean;
  error?: string;
}
