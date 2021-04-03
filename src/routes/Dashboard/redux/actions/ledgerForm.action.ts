import {LedgerFormProps} from '../../../../components/LedgerForm/types';
import {
  LedgerFormPayload,
  LEDGER_FORM_SUBMIT,
  LEDGER_FORM_SUBMIT_REJECTED,
  LEDGER_FORM_SUBMIT_RESOLVED
} from './types';

export function ledgerFormSubmit(payload: LedgerFormPayload) {
  return {
    type: LEDGER_FORM_SUBMIT,
    payload
  };
}

// TODO: Need to replace any type to proper type
export function ledgerFormSubmitResolved(response: LedgerFormProps) {
  return {
    type: LEDGER_FORM_SUBMIT_RESOLVED,
    response
  };
}

export function ledgerFormSubmitRejected(error: Error) {
  return {
    type: LEDGER_FORM_SUBMIT_REJECTED,
    error
  };
}
