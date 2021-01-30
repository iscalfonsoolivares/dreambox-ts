export const isAuthenticated = (state: { auth: { isAuthenticated: any; }; }) => state.auth.isAuthenticated;
export const token = (state: { auth: { token: any; }; }) => state.auth.token;
export const loginLoading = (state: { auth: { loginLoading: any; }; }) => state.auth.loginLoading;
export const message = (state: { auth: { message: any; }; }) => state.auth.message;