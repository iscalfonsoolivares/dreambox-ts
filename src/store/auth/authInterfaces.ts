import { ActionType } from './authActionType';

export interface Login {
  username: string;
  password: string;
}

export interface ResponsePostLogin{
  token: string;
}

export interface LoginBeginsAction{
  type: ActionType.LOGIN_BEGINS;
}

export interface LoginSuccessAction{
  type: ActionType.LOGIN_SUCCESS;
  payload: string;
}

export interface LoginFailureAction{
  type: ActionType.LOGIN_FAILURE
  payload: string;
}

export interface LogoutSuccessAction{
  type: ActionType.LOGOUT_SUCCESS;
}


export interface AuthState {
  isAuthenticated: boolean;
  token: string;
  message: string;
  loginLoading: boolean;
}
