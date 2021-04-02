import {
  CLEAR_LEDGER_ENTRY,
  SelectedLedgerEntryActionTypes,
  SELECTED_LEDGER_ENTRY
} from '../actions/types';

export function selectedLedgerEntry(
  state: any = {},
  action: SelectedLedgerEntryActionTypes
) {
  switch (action.type) {
    case SELECTED_LEDGER_ENTRY:
      return action.payload;
    case CLEAR_LEDGER_ENTRY:
      return {};
    default:
      return state;
  }
}
