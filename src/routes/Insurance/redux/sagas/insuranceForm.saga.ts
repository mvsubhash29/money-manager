// eslint-disable-next-line import/no-extraneous-dependencies
import {put, takeEvery, call} from '@redux-saga/core/effects';
import {InsuranceFormValues} from '../../../../components/InsuranceForm/types';
import {
  insuranceFormSubmitRejected,
  insuranceFormSubmitResolved
} from '../actions/insuranceForm.action';
import {InsuranceFormSubmit, INSURANCE_FORM_SUBMIT} from '../types';
import {insuranceSubmitFormService} from './insuranceForm.service';

export function* insuranceFormSubmit(action: InsuranceFormSubmit) {
  const {payload} = action;
  try {
    const response: InsuranceFormValues = yield call(
      insuranceSubmitFormService,
      payload
    );
    yield put(insuranceFormSubmitResolved(response));
  } catch (error) {
    yield put(insuranceFormSubmitRejected(error as Error));
  }
}

export function* watchInsuranceFormSubmitSaga() {
  yield takeEvery(INSURANCE_FORM_SUBMIT, insuranceFormSubmit);
}
