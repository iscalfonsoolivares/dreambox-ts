import { ActionType } from './taskActionType';

export interface Task {
  id: number;
}

export interface ResponseGetTaks{
  tasks: Task[];
}

export interface ResponsePostTask{
  task: Task;
}

export interface ResponseDeleteTask{
  task: Task;
}

export interface ResponseUpdateTask{
  task: Task;
}

export interface GetTasksBeginsAction{
  type: ActionType.GET_TASK_BEGINS;
}

export interface GetTasksSuccessAction{
  type: ActionType.GET_TASK_SUCCESS;
  payload: Task[];
}

export interface GetTasksFailureAction{
  type: ActionType.GET_TASK_FAILURE;
  payload: string;
}

export interface AddTasksBeginsAction{
  type: ActionType.ADD_TASK_BEGINS;
}

export interface AddTasksSuccessAction{
  type: ActionType.ADD_TASK_SUCCESS;
  payload: Task;
}

export interface AddTasksFailureAction{
  type: ActionType.ADD_TASK_FAILURE;
  payload: string;
}

export interface DeleteTasksBeginsAction{
  type: ActionType.DELETE_TASK_BEGINS;
}

export interface DeleteTasksSuccessAction{
  type: ActionType.DELETE_TASK_SUCCESS;
  payload: number;
}

export interface DeleteTasksFailureAction{
  type: ActionType.DELETE_TASK_FAILURE;
  payload: string;
}

export interface UpdateTasksBeginsAction{
  type: ActionType.UPDATE_TASK_BEGINS;
}

export interface UpdateTasksSuccessAction{
  type: ActionType.UPDATE_TASK_SUCCESS;
  payload: Task;
}

export interface UpdateTaskFailureAction{
  type: ActionType.UPDATE_TASK_FAILURE;
  payload: string;
}

export interface TaskState {
  taskList: Task[];
  getTaskLoading: boolean;
  addTaskLoading: boolean;
  deleteTaskLoading: boolean;
  updateTaskLoading: boolean;
}
