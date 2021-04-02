import {LedgerDetailsType, LedgerPayloadType} from '../../types';

export const FETCH_LEDGER_DETAILS = 'FETCH_LEDGER_DETAILS';
export const FETCH_LEDGER_DETAILS_RESOLVED = 'FETCH_LEDGER_DETAILS_RESOLVED';
export const FETCH_LEDGER_DETAILS_REJECTED = 'FETCH_LEDGER_DETAILS_REJECTED';
export const SELECTED_LEDGER_ENTRY = 'SELECTED_LEDGER_ENTRY';
export const CLEAR_LEDGER_ENTRY = 'CLEAR_LEDGER_ENTRY';

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

interface SelectedLedgerEntry {
  type: typeof SELECTED_LEDGER_ENTRY;
  payload: SelectedLedgerEntry;
}

interface ClearLedgerEntry {
  type: typeof CLEAR_LEDGER_ENTRY;
}

export type DashboardActionTypes =
  | FetchLedgerDetailsAction
  | FetchLedgerDetailsResolved
  | FetchLedgerDetailsRejected;

export type SelectedLedgerEntryActionTypes =
  | SelectedLedgerEntry
  | ClearLedgerEntry;
