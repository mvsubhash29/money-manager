import axios from 'axios';
import {LedgerFormPayload} from '../actions/types';

export function ledgerSubmitFormService(
  payload: LedgerFormPayload
): Promise<LedgerFormPayload> {
  return axios
    .post('http://localhost:3001/api/v1/money-manager/ledgerEntries', payload, {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
}
