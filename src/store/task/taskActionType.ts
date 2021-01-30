import { 

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


export enum ActionType {
  
  GET_TASK_BEGINS = 'GET_TASK_BEGINS',
  GET_TASK_SUCCESS = 'GET_TASK_SUCCESS',
  GET_TASK_FAILURE = 'GET_TASK_FAILURE',
  
  ADD_TASK_BEGINS = 'ADD_TASK_BEGINS',
  ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS',
  ADD_TASK_FAILURE = 'ADD_TASK_FAILURE',
  
  DELETE_TASK_BEGINS = 'DELETE_TASK_BEGINS',
  DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS',
  DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE',
  
  UPDATE_TASK_BEGINS = 'UPDATE_TASK_BEGINS',
  UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS',
  UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE'
  
}

export type Actions = GetTasksBeginsAction      |
                      GetTasksSuccessAction     |
                      GetTasksFailureAction     |
                      AddTasksBeginsAction      |
                      AddTasksSuccessAction     |
                      AddTasksFailureAction     |
                      DeleteTasksBeginsAction   |
                      DeleteTasksSuccessAction  | 
                      DeleteTasksFailureAction  |
                      UpdateTasksBeginsAction   |
                      UpdateTasksSuccessAction  |
                      UpdateTaskFailureAction
