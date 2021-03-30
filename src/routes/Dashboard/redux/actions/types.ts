import {LedgerDetailsType, LedgerPayloadType} from '../../types';

export const FETCH_LEDGER_DETAILS = 'FETCH_LEDGER_DETAILS';
export const FETCH_LEDGER_DETAILS_RESOLVED = 'FETCH_LEDGER_DETAILS_RESOLVED';
export const FETCH_LEDGER_DETAILS_REJECTED = 'FETCH_LEDGER_DETAILS_REJECTED';

interface FetchLedgerDetailsAction {
  type: typeof FETCH_LEDGER_DETAILS;
  payload: LedgerPayloadType;
}

interface FetchLedgerDetailsResolved {
  type: typeof FETCH_LEDGER_DETAILS_RESOLVED;
  response: LedgerDetailsType;
}

interface FetchLedgerDetailsRejected {
  type: typeof FETCH_LEDGER_DETAILS_REJECTED;
  error: Error;
}

export type DashboardActionTypes =
  | FetchLedgerDetailsAction
  | FetchLedgerDetailsResolved
  | FetchLedgerDetailsRejected;
