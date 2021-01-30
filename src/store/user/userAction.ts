import axios from 'axios';
import { Dispatch } from 'redux';

import apiConfig from '../../config/api';
import { ActionType } from './userActionType';
import { 

  User, 

  ResponseGetUsers,
  ResponsePostUser,
  ResponseDeleteUser,
  ResponseUpdateUser,

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

export const getUser = () => async ( dispatch: Dispatch ) => {
  try {

    dispatch< GetUsersBeginsAction >( { type: ActionType.GET_USER_BEGINS } );
    const result = await axios.get< ResponseGetUsers >( `${apiConfig.API_BASE_URL}/users.json` );
    dispatch< GetUsersSuccessAction >( { type: ActionType.GET_USER_SUCCESS, payload: result.data.users } );

  } catch ( error ) {

    dispatch< GetUsersFailureAction >( { type: ActionType.GET_USER_FAILURE, payload: error.message } );

  }
}

export const addUser = ( userData: User ) => async ( dispatch: Dispatch ) => {
  try {

    dispatch< AddUserBeginsAction >( { type: ActionType.ADD_USER_BEGINS } );
    const result = await axios.post< ResponsePostUser >( `${apiConfig.API_BASE_URL}/users`, userData );
    dispatch< AddUserSuccessAction >( { type: ActionType.ADD_USER_SUCCESS, payload: result.data.user } );

  } catch (error) {

    dispatch< AddUserFailureAction >( { type: ActionType.ADD_USER_FAILURE, payload: error.message } );

  }
}

export const deleteUser = ( id: number ) => async ( dispatch: Dispatch ) => {
  try {

    dispatch< DeleteUserBeginsAction >( { type: ActionType.DELETE_USER_BEGINS } );
    await axios.delete< ResponseDeleteUser >( `${apiConfig.API_BASE_URL}/users/${id}` );
    dispatch< DeleteUserSuccessAction >( { type: ActionType.DELETE_USER_SUCCESS, payload: id } );

  } catch ( error ) {

    dispatch< DeleteUserFailureAction >( { type: ActionType.DELETE_USER_FAILURE, payload: error.message } );

  }
}

export const updateUser = ( userData: User ) => async ( dispatch: Dispatch ) => {
  try {

    dispatch< UpdateUserBeginsAction >( { type: ActionType.UPDATE_USER_BEGINS } );
    const result = await axios.put< ResponseUpdateUser >( `${apiConfig.API_BASE_URL}/users/${userData.id}`, userData );
    dispatch< UpdateUserSuccessAction >( { type: ActionType.UPDATE_USER_SUCCESS, payload: result.data.user } );

  } catch (error) {

    dispatch< UpdateUserFailureAction >( { type: ActionType.UPDATE_USER_FAILURE, payload: error.message } );

  }
}