import { 
  createGetUsersBeginsAction,
  createGetUsersSuccessAction,
  createGetUsersFailureAction,
  createAddUserBeginsAction,
  createAddUserSuccessAction,
  createAddUserFailureAction,
  createDeleteUserBeginsAction,
  createDeleteUserSuccessAction,
  createDeleteUserFailureAction,
  createUpdateUserBeginsAction,
  createUpdateUserSuccessAction,
  createUpdateUserFailureAction,
  createUserClearMessageAction
} from './userActionCreators';
import { User } from './userInterfaces';

test('Testing user action creators', () => {

  const message: string = 'Something bad!';
  const users: User[] = [ 
    { id : 1, name: 'Jhon Doe', username: 'pinpon' },
    { id : 2, name: 'Jane Doe', username: 'tuntun' }
  ];
  const [ user ] = users;

  // Get Users

  expect( createGetUsersBeginsAction() ).toEqual( { type: 'GET_USER_BEGINS' } );
  expect( createGetUsersSuccessAction( users )).toEqual( { type: 'GET_USER_SUCCESS', payload: users } );
  expect( createGetUsersFailureAction( message ) ).toEqual( { type: 'GET_USER_FAILURE', payload: message } );

  // Add User

  expect( createAddUserBeginsAction() ).toEqual( { type: 'ADD_USER_BEGINS' } );
  expect( createAddUserSuccessAction( user ) ).toEqual({ type: 'ADD_USER_SUCCESS', payload: user });
  expect( createAddUserFailureAction( message ) ).toEqual({ type: 'ADD_USER_FAILURE', payload: message });

  // Delete User

  expect( createDeleteUserBeginsAction() ).toEqual( { type: 'DELETE_USER_BEGINS' } );
  expect( createDeleteUserSuccessAction(user.id) ).toEqual({ type: 'DELETE_USER_SUCCESS', payload: user.id });
  expect( createDeleteUserFailureAction( message ) ).toEqual( { type: 'DELETE_USER_FAILURE', payload: message } );

  // Update User

  expect( createUpdateUserBeginsAction() ).toEqual({ type: 'UPDATE_USER_BEGINS' });
  expect( createUpdateUserSuccessAction( user ) ).toEqual( { type: 'UPDATE_USER_SUCCESS', payload: user } );
  expect( createUpdateUserFailureAction( message ) ).toEqual( { type: 'UPDATE_USER_FAILURE', payload: message } );

  // Clear message

  expect( createUserClearMessageAction() ).toEqual({ type: 'USER_CLEAR_MESSAGE' });

});