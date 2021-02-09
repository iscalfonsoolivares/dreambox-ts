import axios from 'axios';
import { Dispatch } from 'redux';

import apiConfig from '../../config/api';
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
import { 
  Task,

  ResponseGetTaks,
  ResponsePostTask,
  ResponseDeleteTask,
  ResponseUpdateTask,

  GetTasksBeginsAction,
  GetTasksSuccessAction,
  GetTasksFailureAction,
  AddTasksBeginsAction,
  AddTasksSuccessAction,
  AddTasksFailureAction,
  DeleteTasksBeginsAction,
  DeleteTasksSuccessAction,
  DeleteTasksFailureAction,
  UpdateTasksBeginsAction,
  UpdateTasksSuccessAction,
  UpdateTaskFailureAction
} from './taskInterfaces';

/* note: https://daveceddia.com/what-is-a-thunk/ */

export const getTaskThunk = (): Function => async (dispatch: Dispatch): Promise< void > => {
  try {

    dispatch< GetTasksBeginsAction >( createGetTasksBeginsAction() );
    const result = await axios.get< ResponseGetTaks >( `${apiConfig.API_BASE_URL}/tasks` );
    dispatch< GetTasksSuccessAction >( createGetTasksSuccessAction( result.data.tasks ) );

  } catch ( error ) {

    dispatch< GetTasksFailureAction >( createGetTasksFailureAction( error.message ) );

  }
}

export const addTaskThunk = ( taskData: Task ): Function => async ( dispatch: Dispatch ): Promise< void > => {
  try {

    dispatch< AddTasksBeginsAction >( createAddTasksBeginsAction() );
    const result = await axios.post< ResponsePostTask >( `${apiConfig.API_BASE_URL}/tasks`, taskData );
    dispatch< AddTasksSuccessAction >( createAddTasksSuccessAction( result.data.task ) );

  } catch ( error ) {

    dispatch< AddTasksFailureAction >( createAddTasksFailureAction( error.message ) );

  }
}


export const deleteTaskThunk = ( id: number ): Function => async ( dispatch: Dispatch ): Promise< void > => {
  try {

    dispatch< DeleteTasksBeginsAction >( createDeleteTasksBeginsAction() );
    await axios.delete< ResponseDeleteTask >( `${apiConfig.API_BASE_URL}/tasks/${id}` );
    dispatch< DeleteTasksSuccessAction >( createDeleteTasksSuccessAction( id ) );
    
  } catch ( error ) {

    dispatch<DeleteTasksFailureAction>( createDeleteTasksFailureAction( error.message ) );

  }
}

export const updateTaskThunk = ( taskData: Task ): Function => async ( dispatch: Dispatch ): Promise< void > => {
  try {

    dispatch< UpdateTasksBeginsAction >( createUpdateTasksBeginsAction() );
    const result = await axios.put< ResponseUpdateTask >( `${apiConfig.API_BASE_URL}/tasks/${taskData.id}`, taskData );
    dispatch< UpdateTasksSuccessAction >( createUpdateTasksSuccessAction( result.data.task ) );
    
  } catch ( error ) {

    dispatch< UpdateTaskFailureAction >( createUpdateTaskFailureAction( error.message )) ;

  }
}