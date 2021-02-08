import axios from 'axios';
import { Dispatch } from 'redux';

import apiConfig from '../../config/api';
import {
  createGetUsersBeginsAction,
  createGetUsersSuccessAction,
  createGetUsersFailureAction,
  createAddUserBeginsAction,
  createAddUserSuccessAction,
  createAddUserFailureAction,
  createDeleteUserBeginsAction,
  createDeleteUserSuccessAction,
  createDeleteUserFailureAction,
  createUpdateUserBeginsAction,
  createUpdateUserSuccessAction,
  createUpdateUserFailureAction  
} from './userActionCreators';
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

    dispatch< GetUsersBeginsAction >( createGetUsersBeginsAction() );
    const result = await axios.get< ResponseGetUsers >( `${apiConfig.API_BASE_URL}/users.json` );
    dispatch< GetUsersSuccessAction >( createGetUsersSuccessAction( result.data.users ) );

  } catch ( error ) {

    dispatch< GetUsersFailureAction >( createGetUsersFailureAction( error.message ) );

  }
}

export const addUser = ( userData: User ) => async ( dispatch: Dispatch ) => {
  try {

    dispatch< AddUserBeginsAction >( createAddUserBeginsAction() );
    const result = await axios.post< ResponsePostUser >( `${apiConfig.API_BASE_URL}/users`, userData );
    dispatch< AddUserSuccessAction >( createAddUserSuccessAction( result.data.user ) );

  } catch (error) {

    dispatch< AddUserFailureAction >( createAddUserFailureAction( error.message ) );

  }
}

export const deleteUser = ( id: number ) => async ( dispatch: Dispatch ) => {
  try {

    dispatch< DeleteUserBeginsAction >( createDeleteUserBeginsAction() );
    await axios.delete< ResponseDeleteUser >( `${apiConfig.API_BASE_URL}/users/${id}` );
    dispatch< DeleteUserSuccessAction >( createDeleteUserSuccessAction( id ) );

  } catch ( error ) {

    dispatch< DeleteUserFailureAction >( createDeleteUserFailureAction( error.message ) );

  }
}

export const updateUser = ( userData: User ) => async ( dispatch: Dispatch ) => {
  try {

    dispatch< UpdateUserBeginsAction >( createUpdateUserBeginsAction() );
    const result = await axios.put< ResponseUpdateUser >( `${apiConfig.API_BASE_URL}/users/${userData.id}`, userData );
    dispatch< UpdateUserSuccessAction >( createUpdateUserSuccessAction( result.data.user ) );

  } catch (error) {

    dispatch< UpdateUserFailureAction >( createUpdateUserFailureAction( error.message ) );

  }
}