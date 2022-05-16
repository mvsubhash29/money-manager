import {
  LoginFormSubmitActionTypes,
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
    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false
      };
    default:
      return state;
  }
}
