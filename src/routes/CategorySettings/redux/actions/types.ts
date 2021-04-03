export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_RESOLVED = 'FETCH_CATEGORIES_RESOLVED';
export const FETCH_CATEGORIES_REJECTED = 'FETCH_CATEGORIES_REJECTED';

interface FetchCategoriesAction {
  type: typeof FETCH_CATEGORIES;
}

interface FetchCategoriesResolved {
  type: typeof FETCH_CATEGORIES_RESOLVED;
  payload: CategoryResponseType;
}

interface FetchCategoriesReject {
  type: typeof FETCH_CATEGORIES_REJECTED;
  error: Error;
}

export type CategorySettingsActionType =
  | FetchCategoriesAction
  | FetchCategoriesResolved
  | FetchCategoriesReject;

export interface CategoryType {
  icon: string;
  categoryName: string;
  type?: string;
}

export interface CategoryResponseType {
  expense: CategoryType[];
  income: CategoryType[];
}
