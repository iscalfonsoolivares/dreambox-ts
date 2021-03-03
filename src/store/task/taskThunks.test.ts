import { ResponseGetTaks, ResponseAddTask, Task, ResponseDeleteTask, ResponseUpdateTask } from './taskInterfaces';

import { 
  getTaskThunk,
  addTaskThunk,
  deleteTaskThunk,
  updateTaskThunk
} from './taskThunks'

test('Succefull get tasks', async () => {

  const tasksData: ResponseGetTaks = { tasks: [ { id: 1 }, { id: 2 }, { id: 3 } ]  }
  const responseData = { data: tasksData };
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { get: jest.fn().mockResolvedValue(responseData) } } 

  await getTaskThunk()(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([ 
    [{ type: 'GET_TASK_BEGINS' }],
    [{ type: 'GET_TASK_SUCCESS', payload: responseData.data.tasks }]
  ]);

});

test('Fail get tasks', async () => {
  
  const message = 'Something bad';
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { get: jest.fn().mockRejectedValue( new Error(message) ) } } 

  await getTaskThunk()(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([ 
    [{ type: 'GET_TASK_BEGINS' }],
    [{ type: 'GET_TASK_FAILURE', payload: message }]
  ]);

});

test('Succefull add task', async () => {

  const task: Task = { id: 1 };
  const tasksData: ResponseAddTask = { task };
  const responseData = { data: tasksData };
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { post: jest.fn().mockResolvedValue(responseData) } } 

  await addTaskThunk( task )(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([ 
    [{ type: 'ADD_TASK_BEGINS' }],
    [{ type: 'ADD_TASK_SUCCESS', payload: responseData.data.task }]
  ]);

});

test('Fail get tasks', async () => {
  
  const task: Task = { id: 1 };
  const message = 'Something bad';
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { post: jest.fn().mockRejectedValue( new Error(message) ) } } 

  await addTaskThunk(task)(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([ 
    [{ type: 'ADD_TASK_BEGINS' }],
    [{ type: 'ADD_TASK_FAILURE', payload: message }]
  ]);

});

test('Succefull delete task', async () => {

  const task: Task = { id: 1 };
  const tasksData: ResponseDeleteTask = { task };
  const responseData = { data: tasksData };
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { delete: jest.fn().mockResolvedValue(responseData) } } 

  await deleteTaskThunk( task.id )(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([ 
    [{ type: 'DELETE_TASK_BEGINS' }],
    [{ type: 'DELETE_TASK_SUCCESS', payload: responseData.data.task.id }]
  ]);

});

test('Fail delete task', async () => {

  const message: string = 'Something bad';
  const task: Task = { id: 1 };
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { delete: jest.fn().mockRejectedValue( new Error(message) ) } } 

  await deleteTaskThunk( task.id )(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([ 
    [{ type: 'DELETE_TASK_BEGINS' }],
    [{ type: 'DELETE_TASK_FAILURE', payload: message }]
  ]);

});

test('Succefull update task', async () => {

  const task: Task = { id: 1 };
  const tasksData: ResponseUpdateTask = { task };
  const responseData = { data: tasksData };
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { put: jest.fn().mockResolvedValue(responseData) } } 

  await updateTaskThunk( task )(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([ 
    [{ type: 'UPDATE_TASK_BEGINS' }],
    [{ type: 'UPDATE_TASK_SUCCESS', payload: responseData.data.task }]
  ]);

});

test('Fail update task', async () => {

  const message: string = 'Something bad';
  const task: Task = { id: 1 };
  const dispatch = jest.fn();
  const getState = jest.fn();
  const services = { axios: { put: jest.fn().mockRejectedValue( new Error(message) ) } } 

  await updateTaskThunk( task )(dispatch, getState, services);

  expect(dispatch.mock.calls).toEqual([ 
    [{ type: 'UPDATE_TASK_BEGINS' }],
    [{ type: 'UPDATE_TASK_FAILURE', payload: message }]
  ]);

});
