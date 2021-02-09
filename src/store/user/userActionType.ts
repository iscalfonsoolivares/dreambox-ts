
import { 

  GetUsersBeginsAction, 
  GetUsersSuccessAction,
  GetUsersFailureAction,
  AddUserBeginsAction,
  AddUserSuccessAction,
  AddUserFailureAction ,
  DeleteUserBeginsAction,
  DeleteUserSuccessAction,
  DeleteUserFailureAction,
  UpdateUserBeginsAction,
  UpdateUserSuccessAction,
  UpdateUserFailureAction,
  UserClearMessageAction
  
} from './userInterfaces';

export enum ActionType {
  
  GET_USER_BEGINS = 'GET_USER_BEGINS',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_FAILURE = 'GET_USER_FAILURE',
  
  ADD_USER_BEGINS = 'ADD_USER_BEGINS',
  ADD_USER_SUCCESS = 'ADD_USER_SUCCESS',
  ADD_USER_FAILURE = 'ADD_USER_FAILURE',
  
  DELETE_USER_BEGINS = 'DELETE_USER_BEGINS',
  DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
  DELETE_USER_FAILURE = 'DELETE_USER_FAILURE',
  
  UPDATE_USER_BEGINS = 'UPDATE_USER_BEGINS',
  UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE',

  USER_CLEAR_MESSAGE = 'USER_CLEAR_MESSAGE'
  
}

export type Actions = GetUsersBeginsAction    | 
                      GetUsersSuccessAction   |
                      GetUsersFailureAction   |
                      AddUserBeginsAction     |
                      AddUserSuccessAction    |
                      AddUserFailureAction    |
                      DeleteUserBeginsAction  |
                      DeleteUserSuccessAction |
                      DeleteUserFailureAction |
                      UpdateUserBeginsAction  |
                      UpdateUserSuccessAction |
                      UpdateUserFailureAction |
                      UserClearMessageAction
