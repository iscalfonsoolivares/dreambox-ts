import { StroreState } from '../rootReducer';

export const userList = (state: StroreState) => state.user.userList;
export const message = (state: StroreState) => state.user.message;
export const getUserLoading = (state: StroreState) => state.user.getUserLoading;
export const addUserLoading = (state: StroreState) => state.user.addUserLoading;
export const deleteUserLoading = (state: StroreState) => state.user.deleteUserLoading;
export const updateUserLoading = (state: StroreState) => state.user.updateUserLoading;