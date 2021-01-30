import { ActionType, Actions } from './taskActionType';
import { TaskState } from './taskInterfaces'

const initialTaskState: TaskState = {
  taskList: [],
  getTaskLoading: false,
  addTaskLoading: false,
  deleteTaskLoading: false,
  updateTaskLoading: false
}

const taskReducer = (state: TaskState = initialTaskState, action: Actions ): TaskState => {
  switch (action.type) {
    case ActionType.GET_TASK_BEGINS:
      return {
        ...state,
        getTaskLoading: true
      }
    case ActionType.GET_TASK_SUCCESS:
      return {
        ...state,
        taskList: action.payload,
        getTaskLoading: false
      }
    case ActionType.GET_TASK_FAILURE:
      return {
        ...state,
        getTaskLoading: false
      }
    case ActionType.ADD_TASK_BEGINS:
      return {
        ...state,
        addTaskLoading: true
      }
    case ActionType.ADD_TASK_SUCCESS:
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
        addTaskLoading: false
      }
    case ActionType.ADD_TASK_FAILURE:
      return {
        ...state,
        addTaskLoading: false
      }
    case ActionType.DELETE_TASK_BEGINS:
      return {
        ...state,
        deleteTaskLoading: true
      }
    case ActionType.DELETE_TASK_SUCCESS:
      return {
        ...state,
        taskList: state.taskList.filter(task => task.id !== action.payload),
        deleteTaskLoading: false
      }
    case ActionType.DELETE_TASK_FAILURE:
      return {
        ...state,
        deleteTaskLoading: false
      }
    case ActionType.UPDATE_TASK_BEGINS:
      return {
        ...state,
        updateTaskLoading: true
      }
    case ActionType.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        taskList: state.taskList.map(task => (task.id === action.payload.id) ? action.payload : task),
        updateTaskLoading: false
      }
    case ActionType.UPDATE_TASK_FAILURE:
      return {
        ...state,
        updateTaskLoading: false
      }
    default:
      return state
  }
}

export default taskReducer;
