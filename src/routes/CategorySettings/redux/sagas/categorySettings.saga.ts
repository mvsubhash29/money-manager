import { call, put, takeEvery } from '@redux-saga/core/effects';
import { fetchCategoriesReject, fetchCategoriesResolve } from '../actions/categorySettings.action';
import { FETCH_CATEGORIES } from '../actions/types';
import { fetchCategoryService } from './categorySettings.service';

function* fetchCategorySettings() {
  try {
    const response: string[] = yield call(fetchCategoryService);
    yield put(fetchCategoriesResolve(response));
  } catch (e) {
    yield put(fetchCategoriesReject(e));
  }
}

export function* watchCategorySettingsSaga() {
  yield takeEvery(FETCH_CATEGORIES, fetchCategorySettings);
}