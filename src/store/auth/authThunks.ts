import axios from 'axios';
import { Dispatch } from 'redux';

import apiConfig from '../../config/api';
import {
  createLoginBeginsAction,
  createLoginSuccessAction,
  createLoginFailureAction,
  createLogoutSuccessAction
} from './authActionCreators';
import { 
  Login,
  ResponsePostLogin,
  LoginBeginsAction,
  LoginSuccessAction,
  LoginFailureAction,
  LogoutSuccessAction
} from './authInterfaces';

/* note: https://daveceddia.com/what-is-a-thunk/ */

export const loginThunk = ( loginData: Login ): Function => async (dispatch: Dispatch ): Promise< void > => {
  try {

    dispatch< LoginBeginsAction >( createLoginBeginsAction() );
    const result = await axios.post< ResponsePostLogin >( `${apiConfig.API_BASE_URL}/auth/login`, loginData );
    localStorage.setItem('JWT_TOKEN', result.data.token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;
    dispatch< LoginSuccessAction >( createLoginSuccessAction( result.data.token ) );
    
  } catch ( error ) {
    dispatch< LoginFailureAction >( createLoginFailureAction( error.message ) );
  }
}

export const logoutThunk = (): Function => ( dispatch: Dispatch ): void => {

  localStorage.removeItem('JWT_TOKEN');
  axios.defaults.headers.common['Authorization'] = '';

  dispatch< LogoutSuccessAction >( createLogoutSuccessAction() );

}
