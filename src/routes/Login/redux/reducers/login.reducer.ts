import {
  LoginFormSubmitActionTypes,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../types';

export function loginReducer(
  state = {isAuthenticated: false},
  action: LoginFormSubmitActionTypes
) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        ...action.payload
      };
    case LOGIN_FAILED:
      return {
        isAuthenticated: false
      };
    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false
      };
    default:
      return state;
  }
}
