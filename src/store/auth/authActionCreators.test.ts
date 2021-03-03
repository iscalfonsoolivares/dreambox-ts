import {
  createLoginBeginsAction,
  createLoginSuccessAction,
  createLoginFailureAction,
  createLoginClearMessageAction,
  createLogoutSuccessAction
} from './authActionCreators';

test('Testing auth action creators', () => {

  const token = 'sdfsfs'
  const message = 'Something bad!';

  // Login

  expect(createLoginBeginsAction()).toEqual({ type: 'LOGIN_BEGINS' });
  expect(createLoginSuccessAction(token)).toEqual({ type: 'LOGIN_SUCCESS', payload: token });
  expect(createLoginFailureAction(message)).toEqual({ type: 'LOGIN_FAILURE', payload: message });

  // Clear message

  expect(createLoginClearMessageAction()).toEqual({ type: 'LOGIN_CLEAR_MESSAGE' });

  // Logout

  expect(createLogoutSuccessAction()).toEqual({ type: 'LOGOUT_SUCCESS' });    

});