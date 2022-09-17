import {AxiosError} from 'axios';
import {LoginFormPayload} from '../../../../components/LoginForm/types';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FORM_SUBMIT,
  LOGIN_FAILED,
  LoginFormResponse
} from '../types';

export function loginActionCreator(payload: LoginFormPayload) {
  return {
    type: LOGIN_FORM_SUBMIT,
    payload
  };
}

export function loginSuccess(payload: LoginFormResponse) {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
}

export function loginFailed(error: Error) {
  return {
    type: LOGIN_FAILED,
    error
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  };
}
