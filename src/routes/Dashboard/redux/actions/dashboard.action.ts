import {LedgerDetailsType, LedgerPayloadType} from '../../types';
import {
  FETCH_LEDGER_DETAILS,
  FETCH_LEDGER_DETAILS_REJECTED,
  FETCH_LEDGER_DETAILS_RESOLVED
} from './types';

export function fetchLedgerDetails(payload: LedgerPayloadType) {
  return {
    type: FETCH_LEDGER_DETAILS,
    payload
  };
}

export function fetchLedgerDetailsResolved(response: LedgerDetailsType[]) {
  return {
    type: FETCH_LEDGER_DETAILS_RESOLVED,
    response
  };
}

export function fetchLedgerDetailsRejected(error: Error) {
  return {
    type: FETCH_LEDGER_DETAILS_REJECTED,
    error
  };
}
