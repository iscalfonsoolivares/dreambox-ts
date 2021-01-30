import { StroreState } from '../rootReducer';

export const taskList = (state: StroreState) => state.task.taskList;
export const getTaskLoading = (state: StroreState) => state.task.getTaskLoading;
export const addTaskLoading = (state: StroreState) => state.task.addTaskLoading;
export const deleteTaskLoading = (state: StroreState) => state.task.deleteTaskLoading;
export const updateTaskLoading = (state: StroreState) => state.task.updateTaskLoading;