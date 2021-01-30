import { combineReducers } from 'redux';

import taskReducer from './task/taskReducer';
import authReducer from './auth/authReducer';
import userReducer from './user/userReducer';

import { UserState } from './user/userInterfaces';
import { TaskState } from './task/taskInterfaces';

export interface StroreState {
  task: TaskState;
  auth: any;
  user: UserState;
}

const reducer = combineReducers< StroreState >({
  task: taskReducer,
  auth: authReducer,
  user: userReducer
});

export default reducer;
