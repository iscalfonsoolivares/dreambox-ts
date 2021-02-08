import { ActionType } from './taskActionType';

/*
 Interfaces for data structuring
 */

export interface Task {
  id: number;
}

/*
 Interfaces for api responnses
 */

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

/*
 Interfaces for actions
 */

// Get Task actions

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

// Add Task actions

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

// Delete Task actions

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

// Update Task actions

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

/*
 Interface for state
 */

export interface TaskState {
  taskList: Task[];
  getTaskLoading: boolean;
  addTaskLoading: boolean;
  deleteTaskLoading: boolean;
  updateTaskLoading: boolean;
}
