import {CategorySettingsActionType, FETCH_CATEGORIES, FETCH_CATEGORIES_REJECT, FETCH_CATEGORIES_RESOLVE} from './types';

export function fetchCategories(): CategorySettingsActionType {
  return {
    type: FETCH_CATEGORIES
  }
}

export function fetchCategoriesResolve(payload: string[]) {
  return {
    type: FETCH_CATEGORIES_RESOLVE,
    payload
  }
}

export function fetchCategoriesReject(error: Error) {
  return {
    type: FETCH_CATEGORIES_REJECT,
    error
  }
}