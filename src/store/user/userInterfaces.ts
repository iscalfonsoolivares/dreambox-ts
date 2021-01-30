import { ActionType } from './userActionType';

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


export interface UserState {
  userList: User[];
  message: string;
  getUserLoading: boolean;
  addUserLoading: boolean;
  deleteUserLoading: boolean;
  updateUserLoading: boolean;
}
