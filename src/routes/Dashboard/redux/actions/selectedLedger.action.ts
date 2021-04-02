import {SelectedLedgerEntry} from '../../types';
import {CLEAR_LEDGER_ENTRY, SELECTED_LEDGER_ENTRY} from './types';

export function selectedLedgerEntry(payload: SelectedLedgerEntry) {
  return {
    type: SELECTED_LEDGER_ENTRY,
    payload
  };
}

export function clearLedgerEntry() {
  return {
    type: CLEAR_LEDGER_ENTRY
  };
}
