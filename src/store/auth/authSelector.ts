import { StroreState } from '../rootReducer';

export const isAuthenticated = ( state: StroreState ) => state.auth.isAuthenticated;
export const token = ( state: StroreState ) => state.auth.token;
export const loginLoading = ( state: StroreState ) => state.auth.loginLoading;
export const message = ( state: StroreState ) => state.auth.message;