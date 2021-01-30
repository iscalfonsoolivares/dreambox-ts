import { ActionType, Actions } from './userActionType';

import { UserState } from './userInterfaces';

const initialUserState: UserState = {
  userList: [],
  message: '',
  getUserLoading: false,
  addUserLoading: false,
  deleteUserLoading: false,
  updateUserLoading: false
}

const userReducer = (state: UserState = initialUserState, action: Actions ): UserState => {
  switch (action.type) {
    case ActionType.GET_USER_BEGINS:
      return {
        ...state,
        message: '',
        getUserLoading: true
      }
    case ActionType.GET_USER_SUCCESS:
      return {
        ...state,
        message: '',
        userList: action.payload,
        getUserLoading: false
      }
    case ActionType.GET_USER_FAILURE:
      return {
        ...state,
        message: action.payload,
        getUserLoading: false
      }
    case ActionType.ADD_USER_BEGINS:
      return {
        ...state,
        message: '',
        addUserLoading: true
      }
    case ActionType.ADD_USER_SUCCESS:
      return {
        ...state,
        userList: [...state.userList, action.payload],
        message: '',
        addUserLoading: false
      }
    case ActionType.ADD_USER_FAILURE:
      return {
        ...state,
        message: action.payload,
        addUserLoading: false
      }
    case ActionType.DELETE_USER_BEGINS:
      return {
        ...state,
        message: '',
        deleteUserLoading: true
      }
    case ActionType.DELETE_USER_SUCCESS:
      return {
        ...state,
        userList: state.userList.filter(user => user.id !== action.payload),
        message: '',
        deleteUserLoading: false
      }
    case ActionType.DELETE_USER_FAILURE:
      return {
        ...state,
        message: action.payload,
        deleteUserLoading: false
      }
    case ActionType.UPDATE_USER_BEGINS:
      return {
        ...state,
        message: '',
        updateUserLoading: true
      }
    case ActionType.UPDATE_USER_SUCCESS:
      return {
        ...state,
        userList: state.userList.map(user => (user.id === action.payload.id) ? action.payload : user),
        message: '',
        updateUserLoading: false
      }
    case ActionType.UPDATE_USER_FAILURE:
      return {
        ...state,
        message: action.payload,
        updateUserLoading: false
      }
    default:
      return state
  }
}

export default userReducer;
