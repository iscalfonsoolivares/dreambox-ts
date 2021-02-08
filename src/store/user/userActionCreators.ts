import { ActionType } from './userActionType';

import { 

  User, 

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
  UpdateUserFailureAction
  
} from './userInterfaces';

export const createGetUsersBeginsAction = (): GetUsersBeginsAction => ({ type: ActionType.GET_USER_BEGINS });
export const createGetUsersSuccessAction = (users: User[]): GetUsersSuccessAction => ({ type: ActionType.GET_USER_SUCCESS, payload: users });
export const createGetUsersFailureAction = (message: string): GetUsersFailureAction => ({ type: ActionType.GET_USER_FAILURE, payload: message })

export const createAddUserBeginsAction = (): AddUserBeginsAction => ({ type: ActionType.ADD_USER_BEGINS });
export const createAddUserSuccessAction = (user: User): AddUserSuccessAction => ({ type: ActionType.ADD_USER_SUCCESS, payload: user })
export const createAddUserFailureAction = (message: string): AddUserFailureAction => ({ type: ActionType.ADD_USER_FAILURE, payload: message })

export const createDeleteUserBeginsAction = (): DeleteUserBeginsAction => ({ type: ActionType.DELETE_USER_BEGINS });
export const createDeleteUserSuccessAction = ( id: number ): DeleteUserSuccessAction => ({ type: ActionType.DELETE_USER_SUCCESS, payload: id });
export const createDeleteUserFailureAction = ( message: string ): DeleteUserFailureAction => ({ type: ActionType.DELETE_USER_FAILURE, payload: message })

export const createUpdateUserBeginsAction = (): UpdateUserBeginsAction => ({ type: ActionType.UPDATE_USER_BEGINS });
export const createUpdateUserSuccessAction = ( user: User ): UpdateUserSuccessAction => ({ type: ActionType.UPDATE_USER_SUCCESS, payload: user });
export const createUpdateUserFailureAction = ( message: string ): UpdateUserFailureAction => ({ type: ActionType.UPDATE_USER_FAILURE, payload: message })
