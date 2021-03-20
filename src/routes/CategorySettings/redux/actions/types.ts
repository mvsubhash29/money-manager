import {CategoryItemProps} from '../../../../Components/CategoryListItems/CategortyItem/CategoryItem';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_CATEGORIES_RESOLVE = 'FETCH_CATEGORIES_RESOLVE';
export const FETCH_CATEGORIES_REJECT = 'FETCH_CATEGORIES_REJECT';

interface FetchCategoriesAction {
  type: typeof FETCH_CATEGORIES;
}

interface FetchCategoriesResolved {
  type: typeof FETCH_CATEGORIES_RESOLVE;
  payload: CategoryItemProps[];
}

interface FetchCategoriesReject {
  type: typeof FETCH_CATEGORIES_REJECT;
  error: Error;
}

export type CategorySettingsActionType =
  | FetchCategoriesAction
  | FetchCategoriesResolved
  | FetchCategoriesReject;
