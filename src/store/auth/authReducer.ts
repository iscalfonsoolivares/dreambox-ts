import axios from 'axios';

import { ActionType, Actions }  from './authActionType';
import { AuthState } from './authInterfaces'; 

const jwtToken: string = localStorage.getItem('JWT_TOKEN') || '';

if ( jwtToken ) axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;

const initialAuthState: AuthState = {
  isAuthenticated: jwtToken ? true : false,
  token: jwtToken,
  message: '',
  loginLoading: false
}

const authReducer = (state: AuthState = initialAuthState, action: Actions ): AuthState => {
  
  switch (action.type) {
    case ActionType.LOGIN_BEGINS:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        message: '',
        loginLoading: true
      }
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        message: '',
        loginLoading: false
      }
    case ActionType.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        message: action.payload,
        loginLoading: false
      }
    case ActionType.LOGIN_CLEAR_MESSAGE:
      return {
        ...state,
        message: ''
      }
    case ActionType.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        token: '',
        message: '',
        loginLoading: false
      }  
    default:
      return state
  }
}

export default authReducer;
