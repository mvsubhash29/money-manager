import axios from 'axios';
import {InsuranceFormPayload} from '../types';

export function insuranceSubmitFormService(
  payload: InsuranceFormPayload
): Promise<InsuranceFormPayload> {
  return axios
    .post('http://localhost:3001/api/v1/money-manager/ledgerEntries', payload)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw err;
    });
}
