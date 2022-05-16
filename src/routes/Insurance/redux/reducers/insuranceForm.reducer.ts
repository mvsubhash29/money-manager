import {
  InsuranceFormSubmitActionTypes,
  INSURANCE_FORM_SUBMIT_RESOLVED,
  INSURANCE_FORM_SUBMIT_REJECTED
} from '../types';

export function insuranceFormReducer(
  state: any = {},
  action: InsuranceFormSubmitActionTypes
) {
  switch (action.type) {
    case INSURANCE_FORM_SUBMIT_RESOLVED:
      return action.response;
    case INSURANCE_FORM_SUBMIT_REJECTED:
      return {
        isError: true,
        error: action.error
      };
    default:
      return state;
  }
}
