import {all, fork} from 'redux-saga/effects';
import {watchCategorySettingsSaga} from '../routes/CategorySettings/redux/sagas/categorySettings.saga';
import {watchDashboardSaga} from '../routes/Dashboard/redux/sagas/dashboard.saga';

export default function* rootSaga() {
  yield all([fork(watchCategorySettingsSaga), fork(watchDashboardSaga)]);
}
