// eslint-disable-next-line import/no-extraneous-dependencies
import {put, takeEvery, call} from '@redux-saga/core/effects';
import {LedgerFormProps} from '../../../../components/LedgerForm/types';
import {
  ledgerFormSubmitRejected,
  ledgerFormSubmitResolved
} from '../actions/ledgerForm.action';
import {LedgerFormSubmit, LEDGER_FORM_SUBMIT} from '../actions/types';
import {ledgerSubmitFormService} from './ledgerForm.service';

export function* ledgerFormSubmit(action: LedgerFormSubmit) {
  const {payload} = action;
  try {
    const response: LedgerFormProps = yield call(
      ledgerSubmitFormService,
      payload
    );
    yield put(ledgerFormSubmitResolved(response));
  } catch (error) {
    yield put(ledgerFormSubmitRejected(error));
  }
}

export function* watchLedgerFormSubmitSaga() {
  yield takeEvery(LEDGER_FORM_SUBMIT, ledgerFormSubmit);
}
