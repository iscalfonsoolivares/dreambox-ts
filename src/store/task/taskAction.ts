import axios from 'axios';
import { Dispatch } from 'redux';

import apiConfig from '../../config/api';
import { ActionType } from './taskActionType';
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

export const getTask = () => async (dispatch: Dispatch) => {
  try {

    dispatch< GetTasksBeginsAction >( { type: ActionType.GET_TASK_BEGINS } );
    const result = await axios.get< ResponseGetTaks >( `${apiConfig.API_BASE_URL}/tasks` );
    dispatch< GetTasksSuccessAction >( { type: ActionType.GET_TASK_SUCCESS, payload: result.data.tasks } );

  } catch ( error ) {

    dispatch< GetTasksFailureAction >( { type: ActionType.GET_TASK_FAILURE, payload:error.message } );

  }
}

export const addTask = ( taskData: Task ) => async ( dispatch: Dispatch ) => {
  try {

    dispatch< AddTasksBeginsAction >( { type: ActionType.ADD_TASK_BEGINS } );
    const result = await axios.post< ResponsePostTask >( `${apiConfig.API_BASE_URL}/tasks`, taskData );
    dispatch< AddTasksSuccessAction >( { type: ActionType.ADD_TASK_SUCCESS, payload: result.data.task } );

  } catch ( error ) {

    dispatch< AddTasksFailureAction >( { type: ActionType.ADD_TASK_FAILURE, payload: error.message } );

  }
}

export const deleteTask = ( id: number ) => async ( dispatch: Dispatch ) => {
  try {

    dispatch< DeleteTasksBeginsAction >( { type: ActionType.DELETE_TASK_BEGINS } );
    await axios.delete< ResponseDeleteTask >( `${apiConfig.API_BASE_URL}/tasks/${id}` );
    dispatch< DeleteTasksSuccessAction >( { type: ActionType.DELETE_TASK_SUCCESS, payload: id } );
    
  } catch ( error ) {

    dispatch<DeleteTasksFailureAction>({ type: ActionType.DELETE_TASK_FAILURE, payload: error.message });

  }
}

export const updateTask = ( taskData: Task ) => async ( dispatch: Dispatch ) => {
  try {

    dispatch< UpdateTasksBeginsAction >( { type: ActionType.UPDATE_TASK_BEGINS } );
    const result = await axios.put< ResponseUpdateTask >( `${apiConfig.API_BASE_URL}/tasks/${taskData.id}`, taskData );
    dispatch< UpdateTasksSuccessAction >( { type: ActionType.UPDATE_TASK_SUCCESS, payload: result.data.task } );
    
  } catch ( error ) {

    dispatch< UpdateTaskFailureAction >( { type: ActionType.UPDATE_TASK_FAILURE, payload: error.message }) ;

  }
}