// eslint-disable-next-line import/no-extraneous-dependencies
import {call, put, takeEvery} from '@redux-saga/core/effects';
import {LedgerDetailsType} from '../../types';
import {
  fetchLedgerDetailsRejected,
  fetchLedgerDetailsResolved
} from '../actions/dashboard.action';
import {FETCH_LEDGER_DETAILS} from '../actions/types';
import {fetchLedgerDetailsService} from './dashboard.service';

function* fetchLedgerDetails() {
  try {
    const response: LedgerDetailsType[] = yield call(fetchLedgerDetailsService);
    yield put(fetchLedgerDetailsResolved(response));
  } catch (error) {
    yield put(fetchLedgerDetailsRejected(error));
  }
}

export function* watchDashboardSaga() {
  yield takeEvery(FETCH_LEDGER_DETAILS, fetchLedgerDetails);
}
