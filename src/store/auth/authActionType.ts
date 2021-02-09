import { 
  LoginBeginsAction,
  LoginSuccessAction,
  LoginFailureAction,
  LoginClearMessageAction,
  LogoutSuccessAction
} from './authInterfaces';

export enum ActionType {
  
  LOGIN_BEGINS = 'LOGIN_BEGINS',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGIN_CLEAR_MESSAGE = 'LOGIN_CLEAR_MESSAGE', 
  
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
    
}

export type Actions = LoginBeginsAction       |
                      LoginSuccessAction      |
                      LoginFailureAction      |
                      LoginClearMessageAction |
                      LogoutSuccessAction

