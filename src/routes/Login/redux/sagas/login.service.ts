import axios, {AxiosResponse} from 'axios';
import {LoginFormPayload} from '../../../../components/LoginForm/types';
import {LoginFormResponse} from '../types';

export function loginService(
  payload: LoginFormPayload
): Promise<LoginFormResponse> {
  return axios
    .post('http://localhost:3001/api/v1/money-manager/login', payload, {
      withCredentials: true
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}
