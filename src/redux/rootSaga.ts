import {all, fork} from 'redux-saga/effects';
import {watchCategorySettingsSaga} from '../routes/CategorySettings/redux/sagas/categorySettings.saga';

export default function* rootSaga() {
  yield all([fork(watchCategorySettingsSaga)]);
}
