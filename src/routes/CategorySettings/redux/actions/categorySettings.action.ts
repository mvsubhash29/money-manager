import {
  CategorySettingsActionType,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_REJECTED,
  FETCH_CATEGORIES_RESOLVED
} from './types';

export function fetchCategories(): CategorySettingsActionType {
  return {
    type: FETCH_CATEGORIES
  };
}

export function fetchCategoriesResolve(payload: string[]) {
  return {
    type: FETCH_CATEGORIES_RESOLVED,
    payload
  };
}

export function fetchCategoriesReject(error: Error) {
  return {
    type: FETCH_CATEGORIES_REJECTED,
    error
  };
}
