import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginByUsername } from '../services/loginByUsername/loginByUsername';
import { ILoginByUsernameSchema } from '../types/loginByUsernameSchema';

import { LOGIN_BY_USERNAME_INITIAL_STATE } from './loginByUsernameInitialState';

const initialState: ILoginByUsernameSchema = LOGIN_BY_USERNAME_INITIAL_STATE;

export const loginByUsernameSlice = createSlice({
  name: 'loginByUsername',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginByUsernameSlice;
