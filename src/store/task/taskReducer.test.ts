import { ActionType } from './taskActionType';
import { Task, TaskState } from './taskInterfaces';
import taskReducer  from './taskReducer';

test('Testing task reducer', () => {

  const message: string = 'something bad';
  const tasks: Task[] = [ { id: 1}, { id: 2} ];
  const [ task ] = tasks;

  const taskInitialState: TaskState = {
    taskList: [],
    getTaskLoading: false,
    addTaskLoading: false,
    deleteTaskLoading: false,
    updateTaskLoading: false
  }

  // Get Task

  expect( taskReducer( taskInitialState, { type: ActionType.GET_TASK_BEGINS } ) ).toEqual({
    taskList: [],
    getTaskLoading: true,
    addTaskLoading: false,
    deleteTaskLoading: false,
    updateTaskLoading: false
  });

  expect( taskReducer( taskInitialState, { type: ActionType.GET_TASK_SUCCESS, payload: tasks } ) ).toEqual({
    taskList: tasks,
    getTaskLoading: false,
    addTaskLoading: false,
    deleteTaskLoading: false,
    updateTaskLoading: false
  });

  expect( taskReducer( taskInitialState, { type: ActionType.GET_TASK_FAILURE, payload: message } ) ).toEqual({
    taskList: [],
    getTaskLoading: false,
    addTaskLoading: false,
    deleteTaskLoading: false,
    updateTaskLoading: false
  });

  // Add Task

  expect( taskReducer( taskInitialState, { type: ActionType.ADD_TASK_BEGINS } ) ).toEqual({
    taskList: [],
    getTaskLoading: false,
    addTaskLoading: true,
    deleteTaskLoading: false,
    updateTaskLoading: false
  });

  expect( taskReducer( taskInitialState, { type: ActionType.ADD_TASK_SUCCESS, payload: task }) ).toEqual({
    taskList: [ { ...task } ],
    getTaskLoading: false,
    addTaskLoading: false,
    deleteTaskLoading: false,
    updateTaskLoading: false
  })

  expect( taskReducer( taskInitialState, { type: ActionType.ADD_TASK_FAILURE, payload: message } ) ).toEqual({
    taskList: [],
    getTaskLoading: false,
    addTaskLoading: false,
    deleteTaskLoading: false,
    updateTaskLoading: false
  });

  // Delete Task

  taskInitialState.taskList = tasks;

  expect( taskReducer( taskInitialState, { type: ActionType.DELETE_TASK_BEGINS } ) ).toEqual({
    taskList: tasks,
    getTaskLoading: false,
    addTaskLoading: false,
    deleteTaskLoading: true,
    updateTaskLoading: false
  });

  expect( taskReducer( taskInitialState, { type: ActionType.DELETE_TASK_SUCCESS, payload: task.id } ) ).toEqual({
    taskList: tasks.filter( currentTask => currentTask.id !== task.id ),
    getTaskLoading: false,
    addTaskLoading: false,
    deleteTaskLoading: false,
    updateTaskLoading: false
  });

  expect( taskReducer( taskInitialState, { type: ActionType.DELETE_TASK_FAILURE, payload: message } ) ).toEqual({
    taskList: tasks,
    getTaskLoading: false,
    addTaskLoading: false,
    deleteTaskLoading: false,
    updateTaskLoading: false
  });

  // Update Task
  
  expect( taskReducer( taskInitialState, { type: ActionType.UPDATE_TASK_BEGINS } ) ).toEqual({
    taskList: tasks,
    getTaskLoading: false,
    addTaskLoading: false,
    deleteTaskLoading: false,
    updateTaskLoading: true
  });

  expect( taskReducer( taskInitialState, { type: ActionType.UPDATE_TASK_SUCCESS, payload: task } ) ).toEqual({
    taskList: tasks,
    getTaskLoading: false,
    addTaskLoading: false,
    deleteTaskLoading: false,
    updateTaskLoading: false
  });

  expect( taskReducer( taskInitialState, { type: ActionType.UPDATE_TASK_FAILURE, payload: message } ) ).toEqual({
    taskList: tasks,
    getTaskLoading: false,
    addTaskLoading: false,
    deleteTaskLoading: false,
    updateTaskLoading: false
  });


});