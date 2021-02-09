import { ActionType } from './authActionType';
import { 
  LoginBeginsAction,
  LoginSuccessAction,
  LoginFailureAction,
  LoginClearMessageAction,
  LogoutSuccessAction
} from './authInterfaces';

export const createLoginBeginsAction = (): LoginBeginsAction => ({ type: ActionType.LOGIN_BEGINS });
export const createLoginSuccessAction = ( token: string ): LoginSuccessAction => ({ type: ActionType.LOGIN_SUCCESS, payload: token });
export const createLoginFailureAction = ( message: string ): LoginFailureAction => ({ type: ActionType.LOGIN_FAILURE, payload: message });
export const createLoginClearMessageAction = (): LoginClearMessageAction => ({ type: ActionType.LOGIN_CLEAR_MESSAGE });
export const createLogoutSuccessAction = (): LogoutSuccessAction => ({ type: ActionType.LOGOUT_SUCCESS });
