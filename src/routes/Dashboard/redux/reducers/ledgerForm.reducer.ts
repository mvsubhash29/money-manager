import {
  LegerFormSubmitActionTypes,
  LEDGER_FORM_SUBMIT_RESOLVED,
  LEDGER_FORM_SUBMIT_REJECTED
} from '../actions/types';

export function ledgerFormReducer(
  state: any = {},
  action: LegerFormSubmitActionTypes
) {
  switch (action.type) {
    case LEDGER_FORM_SUBMIT_RESOLVED:
      return action.response;
    case LEDGER_FORM_SUBMIT_REJECTED:
      return {
        isError: true,
        error: action.error
      };
    default:
      return state;
  }
}
