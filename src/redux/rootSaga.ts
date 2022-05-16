import {all, fork} from 'redux-saga/effects';
import {watchCategorySettingsSaga} from '../routes/CategorySettings/redux/sagas/categorySettings.saga';
import {watchDashboardSaga} from '../routes/Dashboard/redux/sagas/dashboard.saga';
import {watchLedgerFormSubmitSaga} from '../routes/Dashboard/redux/sagas/ledgerForm.saga';
import {watchLoginSaga} from '../routes/Login/redux/sagas/login.saga';

export default function* rootSaga() {
  yield all([
    fork(watchCategorySettingsSaga),
    fork(watchDashboardSaga),
    fork(watchLedgerFormSubmitSaga),
    fork(watchLoginSaga)
  ]);
}
