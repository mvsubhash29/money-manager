import {LoginFormPayload} from '../../../components/LoginForm/types';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_FORM_SUBMIT = 'LOGIN_FORM_SUBMIT';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export interface LoginFormResponse {
  firstname: string;
  lastname: string;
  email: string;
}

export interface LoginFormSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: LoginFormResponse;
}

export interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
}

export interface LoginFormSubmit {
  type: typeof LOGIN_FORM_SUBMIT;
  payload: LoginFormPayload;
}

export interface LoginFailed {
  type: typeof LOGIN_FAILED;
  error: Error;
}

export type LoginFormSubmitActionTypes =
  | LoginFormSuccess
  | LogoutSuccess
  | LoginFormSubmit
  | LoginFailed;
