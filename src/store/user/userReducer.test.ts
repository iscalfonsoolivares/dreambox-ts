import { ActionType } from './userActionType';
import { User, UserState } from './userInterfaces';
import userReducer  from './userReducer'

test('Testing user reducer', () => {

  const message: string = 'Something bad!';
  const users: User[] = [ 
    { id : 1, name: 'Jhon Doe', username: 'pinpon' },
    { id : 2, name: 'Jane Doe', username: 'tuntun' }
  ];
  const [ user ] = users;

  const userInitialState: UserState = {
    userList: [],
    message: '',
    getUserLoading: false,
    addUserLoading: false,
    deleteUserLoading: false,
    updateUserLoading: false
  }

  // Get User
  
  expect(userReducer(userInitialState, { type: ActionType.GET_USER_BEGINS })).toEqual({
    userList: [],
    message: '',
    getUserLoading: true,
    addUserLoading: false,
    deleteUserLoading: false,
    updateUserLoading: false
  });

  expect(userReducer(userInitialState, { type: ActionType.GET_USER_SUCCESS, payload: users })).toEqual({
    userList: users,
    message: '',
    getUserLoading: false,
    addUserLoading: false,
    deleteUserLoading: false,
    updateUserLoading: false
  });

  expect(userReducer(userInitialState, { type: ActionType.GET_USER_FAILURE, payload: message })).toEqual({
    userList: [],
    message: message,
    getUserLoading: false,
    addUserLoading: false,
    deleteUserLoading: false,
    updateUserLoading: false
  });

  // Add User

  expect(userReducer(userInitialState, { type: ActionType.ADD_USER_BEGINS })).toEqual({
    userList: [],
    message: '',
    getUserLoading: false,
    addUserLoading: true,
    deleteUserLoading: false,
    updateUserLoading: false
  });

  expect(userReducer(userInitialState, { type: ActionType.ADD_USER_SUCCESS, payload: user })).toEqual({
    userList: [ { ...user } ],
    message: '',
    getUserLoading: false,
    addUserLoading: false,
    deleteUserLoading: false,
    updateUserLoading: false
  });

  expect(userReducer(userInitialState, { type: ActionType.ADD_USER_FAILURE, payload: message })).toEqual({
    userList: [],
    message: message,
    getUserLoading: false,
    addUserLoading: false,
    deleteUserLoading: false,
    updateUserLoading: false
  });

  // Delete user

  userInitialState.userList = users;

  expect(userReducer(userInitialState, { type: ActionType.DELETE_USER_BEGINS })).toEqual({
    userList: users,
    message: '',
    getUserLoading: false,
    addUserLoading: false,
    deleteUserLoading: true,
    updateUserLoading: false
  });

  expect(userReducer(userInitialState, { type: ActionType.DELETE_USER_SUCCESS, payload: user.id })).toEqual({
    userList: users.filter( currentUser => currentUser.id !== user.id ),
    message: '',
    getUserLoading: false,
    addUserLoading: false,
    deleteUserLoading: false,
    updateUserLoading: false
  });

  expect(userReducer(userInitialState, { type: ActionType.DELETE_USER_FAILURE, payload: message })).toEqual({
    userList: users,
    message: message,
    getUserLoading: false,
    addUserLoading: false,
    deleteUserLoading: false,
    updateUserLoading: false
  });

  // Update user

  expect(userReducer(userInitialState, { type: ActionType.UPDATE_USER_BEGINS })).toEqual({
    userList: users,
    message: '',
    getUserLoading: false,
    addUserLoading: false,
    deleteUserLoading: false,
    updateUserLoading: true
  });

  expect(userReducer(userInitialState, { type: ActionType.UPDATE_USER_SUCCESS, payload:user })).toEqual({
    userList: users,
    message: '',
    getUserLoading: false,
    addUserLoading: false,
    deleteUserLoading: false,
    updateUserLoading: false
  });
  
  expect(userReducer(userInitialState, { type: ActionType.UPDATE_USER_FAILURE, payload: message })).toEqual({
    userList: users,
    message: message,
    getUserLoading: false,
    addUserLoading: false,
    deleteUserLoading: false,
    updateUserLoading: false
  });

  // Clear message 

  userInitialState.message = message;

  expect(userReducer(userInitialState, { type: ActionType.USER_CLEAR_MESSAGE })).toEqual({
    userList: users,
    message: '',
    getUserLoading: false,
    addUserLoading: false,
    deleteUserLoading: false,
    updateUserLoading: false
  });

});