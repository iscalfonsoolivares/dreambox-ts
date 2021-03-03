import {
  createGetTasksBeginsAction,
  createGetTasksSuccessAction,
  createGetTasksFailureAction,
  createAddTasksBeginsAction,
  createAddTasksSuccessAction,
  createAddTasksFailureAction,
  createDeleteTasksBeginsAction,
  createDeleteTasksSuccessAction,
  createDeleteTasksFailureAction,
  createUpdateTasksBeginsAction,
  createUpdateTasksSuccessAction,
  createUpdateTaskFailureAction
} from './taskActionCreators';
import { Task } from './taskInterfaces';

test('Testing task action creators', () => {

  const message: string = 'Something bad';
  const tasks: Task[] = [ { id: 1}, { id: 2} ];
  const [ task ] = tasks;

  // Get Tasks

  expect( createGetTasksBeginsAction() ).toEqual( { type: 'GET_TASK_BEGINS' } );
  expect( createGetTasksSuccessAction( tasks ) ).toEqual( { type: 'GET_TASK_SUCCESS', payload: tasks } );
  expect( createGetTasksFailureAction( message ) ).toEqual( { type: 'GET_TASK_FAILURE', payload: message } );

  // Add Task

  expect( createAddTasksBeginsAction() ).toEqual( { type: 'ADD_TASK_BEGINS' } );
  expect( createAddTasksSuccessAction( task ) ).toEqual( { type: 'ADD_TASK_SUCCESS', payload: task } );
  expect( createAddTasksFailureAction( message ) ).toEqual( { type: 'ADD_TASK_FAILURE', payload: message } );

  // Delete Task

  expect( createDeleteTasksBeginsAction() ).toEqual({ type: 'DELETE_TASK_BEGINS' });
  expect( createDeleteTasksSuccessAction( task.id ) ).toEqual( { type: 'DELETE_TASK_SUCCESS', payload: task.id });;
  expect( createDeleteTasksFailureAction( message )).toEqual( { type: 'DELETE_TASK_FAILURE', payload: message } );

  // Update Task

  expect( createUpdateTasksBeginsAction() ).toEqual( { type: 'UPDATE_TASK_BEGINS' } );
  expect( createUpdateTasksSuccessAction( task ) ).toEqual( { type: 'UPDATE_TASK_SUCCESS', payload: task } );
  expect( createUpdateTaskFailureAction( message ) ).toEqual( { type: 'UPDATE_TASK_FAILURE', payload: message } );

});
