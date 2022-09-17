// eslint-disable-next-line import/no-extraneous-dependencies
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {AxiosError} from 'axios';
import {loginSuccess, loginFailed} from '../actions/login.action';
import {LoginFormResponse, LoginFormSubmit, LOGIN_FORM_SUBMIT} from '../types';
import {loginService} from './login.service';

function* verifyLogin(action: LoginFormSubmit) {
  const {payload} = action;
  try {
    const response: LoginFormResponse = yield call(loginService, payload);
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFailed(error as Error | AxiosError));
  }
}

export function* watchLoginSaga() {
  yield takeEvery(LOGIN_FORM_SUBMIT, verifyLogin);
}
