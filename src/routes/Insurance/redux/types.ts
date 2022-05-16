import {InsuranceFormValues} from '../../../components/InsuranceForm/types';

export const INSURANCE_FORM_SUBMIT = 'INSURANCE_FORM_SUBMIT';
export const INSURANCE_FORM_SUBMIT_RESOLVED = 'INSURANCE_FORM_SUBMIT_RESOLVED';
export const INSURANCE_FORM_SUBMIT_REJECTED = 'INSURANCE_FORM_SUBMIT_REJECTED';

export interface InsuranceFormPayload {
  payload: InsuranceFormValues;
  formMode: string;
}

export interface InsuranceFormSubmit {
  type: typeof INSURANCE_FORM_SUBMIT;
  payload: InsuranceFormPayload;
}

interface InsuranceFormSubmitResolved {
  type: typeof INSURANCE_FORM_SUBMIT_RESOLVED;
  response: InsuranceFormPayload; // TODO: Need to change to proper type
}

interface InsuranceFormSubmitRejected {
  type: typeof INSURANCE_FORM_SUBMIT_REJECTED;
  error: Error;
}

export type InsuranceFormSubmitActionTypes =
  | InsuranceFormSubmit
  | InsuranceFormSubmitResolved
  | InsuranceFormSubmitRejected;
