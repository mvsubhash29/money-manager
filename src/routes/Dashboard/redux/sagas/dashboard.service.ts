import axios from 'axios';
import {LedgerDetailsType} from '../../types';

export function fetchLedgerDetailsService(): Promise<LedgerDetailsType[]> {
  return axios
    .get('http://localhost:3001/api/v1/money-manager/ledgerEntries', {
      withCredentials: true
    })
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
}
