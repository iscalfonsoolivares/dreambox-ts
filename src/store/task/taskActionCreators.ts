import { ActionType } from './taskActionType';

import { 
  Task,

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

export const createGetTasksBeginsAction = (): GetTasksBeginsAction => ( { type: ActionType.GET_TASK_BEGINS } );
export const createGetTasksSuccessAction = (tasks: Task[]): GetTasksSuccessAction => ({ type: ActionType.GET_TASK_SUCCESS, payload: tasks });
export const createGetTasksFailureAction = (message: string): GetTasksFailureAction => ({ type: ActionType.GET_TASK_FAILURE, payload: message });

export const createAddTasksBeginsAction = (): AddTasksBeginsAction => ({ type: ActionType.ADD_TASK_BEGINS });
export const createAddTasksSuccessAction = (task: Task): AddTasksSuccessAction => ({ type: ActionType.ADD_TASK_SUCCESS, payload: task });
export const createAddTasksFailureAction = (message: string): AddTasksFailureAction => ({ type: ActionType.ADD_TASK_FAILURE, payload: message });

export const createDeleteTasksBeginsAction = (): DeleteTasksBeginsAction => ({ type: ActionType.DELETE_TASK_BEGINS });
export const createDeleteTasksSuccessAction = ( id: number): DeleteTasksSuccessAction =>({ type: ActionType.DELETE_TASK_SUCCESS, payload: id });
export const createDeleteTasksFailureAction = (message: string): DeleteTasksFailureAction => ({ type: ActionType.DELETE_TASK_FAILURE, payload: message });

export const createUpdateTasksBeginsAction = (): UpdateTasksBeginsAction => ({ type: ActionType.UPDATE_TASK_BEGINS });
export const createUpdateTasksSuccessAction = (task: Task): UpdateTasksSuccessAction => ({ type: ActionType.UPDATE_TASK_SUCCESS, payload: task });
export const createUpdateTaskFailureAction = (message: string): UpdateTaskFailureAction => ({ type: ActionType.UPDATE_TASK_FAILURE, payload: message });
