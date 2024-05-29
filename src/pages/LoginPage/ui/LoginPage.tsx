import { DynamicModuleLoader, ReducersList } from '@/app/providers/StoreProvider';

import { LoginForm, loginReducer } from '@/features/LoginByUsername';

const reducers: ReducersList = { login: loginReducer };

const LoginPage = () => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col col-md-6 col-xl-4">
          <LoginForm />
        </div>
      </div>
    </DynamicModuleLoader>
  );
};

export default LoginPage;
