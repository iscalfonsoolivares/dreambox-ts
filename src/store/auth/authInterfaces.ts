import { ActionType } from './authActionType';

/*
 Interfaces for data structuring
 */

export interface Login {
  username: string;
  password: string;
}

/*
 Interfaces for api responnses
 */

export interface ResponsePostLogin{
  token: string;
}

/*
 Interfaces for actions
 */

// Get Login actions

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

export interface LoginClearMessageAction{
  type: ActionType.LOGIN_CLEAR_MESSAGE
}

// Get Logout actions

export interface LogoutSuccessAction{
  type: ActionType.LOGOUT_SUCCESS;
}

/*
 Interface for state
 */

export interface AuthState {
  isAuthenticated: boolean;
  token: string;
  message: string;
  loginLoading: boolean;
}
