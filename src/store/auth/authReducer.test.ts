
import { ActionType } from './authActionType';
import { AuthState } from './authInterfaces';
import authReducer  from './authReducer';

test('Testing auth reducer', () => {

  const message: string = 'Somethig bad';
  const token: string = 'dskhfsdhflkjdsalflkashdflkwwoe';
  const authInitialState: AuthState = {
    isAuthenticated: false,
    token: '',
    message: '',
    loginLoading: false
  }
    
  expect(authReducer(authInitialState, { type: ActionType.LOGIN_BEGINS } )).toEqual({
      isAuthenticated: false,
      token: '',
      message: '',
      loginLoading: true
  });

  expect(authReducer(authInitialState, { type: ActionType.LOGIN_SUCCESS, payload: token } )).toEqual({
    isAuthenticated: true,
    token: token,
    message: '',
    loginLoading: false
  });

  expect(authReducer(authInitialState, { type: ActionType.LOGIN_FAILURE, payload: message } )).toEqual({
    isAuthenticated: false,
    token: '',
    message: message,
    loginLoading: false
  });

  authInitialState.isAuthenticated = true;
  authInitialState.token = token;

  expect(authReducer( authInitialState, { type: ActionType.LOGOUT_SUCCESS })).toEqual({
    isAuthenticated: false,
    token: '',
    message: '',
    loginLoading: false
  });

  authInitialState.isAuthenticated = false;
  authInitialState.token = '';
  authInitialState.message = message;

  expect(authReducer( authInitialState, { type: ActionType.LOGIN_CLEAR_MESSAGE })).toEqual({
    isAuthenticated: false,
    token: '',
    message: '',
    loginLoading: false
  });

});