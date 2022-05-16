import {InsuranceFormValues} from '../../../../components/InsuranceForm/types';
import {
  InsuranceFormPayload,
  INSURANCE_FORM_SUBMIT,
  INSURANCE_FORM_SUBMIT_REJECTED,
  INSURANCE_FORM_SUBMIT_RESOLVED
} from '../types';

export function insuranceFormSubmit(payload: InsuranceFormPayload) {
  return {
    type: INSURANCE_FORM_SUBMIT,
    payload
  };
}

export function insuranceFormSubmitResolved(response: InsuranceFormValues) {
  return {
    type: INSURANCE_FORM_SUBMIT_RESOLVED,
    response
  };
}

export function insuranceFormSubmitRejected(error: Error) {
  return {
    type: INSURANCE_FORM_SUBMIT_REJECTED,
    error
  };
}
