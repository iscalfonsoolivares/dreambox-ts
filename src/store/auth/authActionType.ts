import { 
  LoginBeginsAction,
  LoginSuccessAction,
  LoginFailureAction,
  LogoutSuccessAction
} from './authInterfaces';

export enum ActionType {
  
  LOGIN_BEGINS = 'LOGIN_BEGINS',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
    
}

export type Actions = LoginBeginsAction   |
                      LoginSuccessAction  |
                      LoginFailureAction  |
                      LogoutSuccessAction

