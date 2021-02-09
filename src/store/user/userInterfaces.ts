import { ActionType } from './userActionType';

/*
 Interfaces for data structuring
 */

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
}

/*
 Interfaces for api responnses
 */

export interface ResponseGetUsers{
  users: User[];
}

export interface ResponsePostUser{
  user: User;
}

export interface ResponseDeleteUser{
  user: User;
}

export interface ResponseUpdateUser{
  user: User;
}

/*
 Interfaces for actions
 */

// Get User actions

export interface GetUsersBeginsAction{
  type: ActionType.GET_USER_BEGINS;
}

export interface GetUsersSuccessAction {
  type: ActionType.GET_USER_SUCCESS;
  payload: User[];
}

export interface GetUsersFailureAction{
  type: ActionType.GET_USER_FAILURE;
  payload: string;
}

// Add User actions

export interface AddUserBeginsAction{
  type: ActionType.ADD_USER_BEGINS
}

export interface AddUserSuccessAction {
  type: ActionType.ADD_USER_SUCCESS;
  payload: User;
}

export interface AddUserFailureAction{
  type: ActionType.ADD_USER_FAILURE;
  payload: string;
}

// Delete User actions

export interface DeleteUserBeginsAction{
  type: ActionType.DELETE_USER_BEGINS
}

export interface DeleteUserSuccessAction {
  type: ActionType.DELETE_USER_SUCCESS
  payload: number;
}

export interface DeleteUserFailureAction{
  type: ActionType.DELETE_USER_FAILURE;
  payload: string;
}

// Update User actions

export interface UpdateUserBeginsAction{
  type: ActionType.UPDATE_USER_BEGINS
}

export interface UpdateUserSuccessAction {
  type: ActionType.UPDATE_USER_SUCCESS;
  payload: User;
}

export interface UpdateUserFailureAction{
  type: ActionType.UPDATE_USER_FAILURE;
  payload: string;
}

export interface UserClearMessageAction{
  type: ActionType.USER_CLEAR_MESSAGE
}

/*
 Interface for state
 */

export interface UserState {
  userList: User[];
  message: string;
  getUserLoading: boolean;
  addUserLoading: boolean;
  deleteUserLoading: boolean;
  updateUserLoading: boolean;
}
