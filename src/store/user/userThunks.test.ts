import { ResponseAddUser, ResponseDeleteUser, ResponseGetUsers, ResponseUpdateUser, User } from './userInterfaces';
import { 
  getUserThunk,
  addUserThunk,
  deleteUserThunk,
  updateUserThunk 
} from './userThunks';

test('Succefull get users', async () => {

  const users: User[] = [ 
    { id : 1, name: 'Jhon Doe', username: 'pinpon' },
    { id : 2, name: 'Jane Doe', username: 'tuntun' }
  ];
  const tasksData: ResponseGetUsers = { users }
  const responseData = { data: tasksData };
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { get: jest.fn().mockResolvedValue(responseData) } } 

  await getUserThunk()(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([
    [{ type: 'GET_USER_BEGINS' }],
    [{ type: 'GET_USER_SUCCESS', payload: responseData.data.users }]
  ]);

});

test('Fail get users', async () => {

  const message: string = 'something bad';
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { get: jest.fn().mockRejectedValue( new Error(message) ) } } 

  await getUserThunk()(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([
    [{ type: 'GET_USER_BEGINS' }],
    [{ type: 'GET_USER_FAILURE', payload: message }]
  ]);

});

test('Succefull add user', async () => {

  const user: User = { id : 1, name: 'Jhon Doe', username: 'pinpon' };
  const tasksData: ResponseAddUser = { user }
  const responseData = { data: tasksData };
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { post: jest.fn().mockResolvedValue(responseData) } } 

  await addUserThunk( user )(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([
    [{ type: 'ADD_USER_BEGINS' }],
    [{ type: 'ADD_USER_SUCCESS', payload: responseData.data.user }]
  ]);

});

test('Fail add user', async () => {

  const user: User = { id : 1, name: 'Jhon Doe', username: 'pinpon' };
  const message: string = 'something bad';
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { post: jest.fn().mockRejectedValue( new Error(message) ) } } 

  await addUserThunk( user )(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([
    [{ type: 'ADD_USER_BEGINS' }],
    [{ type: 'ADD_USER_FAILURE', payload: message }]
  ]);

});

test('Succefull delete user', async () => {

  const user: User = { id : 1, name: 'Jhon Doe', username: 'pinpon' };
  const tasksData: ResponseDeleteUser = { user }
  const responseData = { data: tasksData };
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { delete: jest.fn().mockResolvedValue(responseData) } } 

  await deleteUserThunk( user.id )(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([
    [{ type: 'DELETE_USER_BEGINS' }],
    [{ type: 'DELETE_USER_SUCCESS', payload: responseData.data.user.id }]
  ]);

});

test('Fail delete user', async () => {

  const user: User = { id : 1, name: 'Jhon Doe', username: 'pinpon' };
  const message: string = 'something bad';
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { delete: jest.fn().mockRejectedValue( new Error(message) ) } } 

  await deleteUserThunk( user.id )(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([
    [{ type: 'DELETE_USER_BEGINS' }],
    [{ type: 'DELETE_USER_FAILURE', payload: message }]
  ]);

});

test('Succefull update user', async () => {

  const user: User = { id : 1, name: 'Jhon Doe', username: 'pinpon' };
  const tasksData: ResponseUpdateUser = { user }
  const responseData = { data: tasksData };
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { put: jest.fn().mockResolvedValue(responseData) } } 

  await updateUserThunk( user )(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([
    [{ type: 'UPDATE_USER_BEGINS' }],
    [{ type: 'UPDATE_USER_SUCCESS', payload: responseData.data.user }]
  ]);

});

test('Fail update user', async () => {

  const user: User = { id : 1, name: 'Jhon Doe', username: 'pinpon' };
  const message: string = 'something bad';
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { put: jest.fn().mockRejectedValue( new Error(message) ) } } 

  await updateUserThunk( user )(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([
    [{ type: 'UPDATE_USER_BEGINS' }],
    [{ type: 'UPDATE_USER_FAILURE', payload: message }]
  ]);

});
