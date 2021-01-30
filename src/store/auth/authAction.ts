import axios from 'axios';
import { Dispatch } from 'redux';

import apiConfig from '../../config/api';
import { ActionType } from './authActionType';

import { 
  Login,
  ResponsePostLogin,
  LoginBeginsAction,
  LoginSuccessAction,
  LoginFailureAction,
  LogoutSuccessAction
} from './authInterfaces';

export const login = ( loginData: Login ) => async (dispatch: Dispatch) => {
  try {

    dispatch< LoginBeginsAction >( { type: ActionType.LOGIN_BEGINS } );
    const result = await axios.post< ResponsePostLogin >( `${apiConfig.API_BASE_URL}/auth/login`, loginData );
    localStorage.setItem('JWT_TOKEN', result.data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
    dispatch< LoginSuccessAction >( { type: ActionType.LOGIN_SUCCESS, payload: result.data.token } );
    
  } catch ( error ) {
    dispatch< LoginFailureAction >( { type: ActionType.LOGIN_FAILURE, payload: error.message } );
  }
}

export const logout = () => ( dispatch: Dispatch ) => {

  localStorage.removeItem('JWT_TOKEN');
  axios.defaults.headers.common['Authorization'] = '';

  dispatch<LogoutSuccessAction>( { type: ActionType.LOGOUT_SUCCESS } );

}
