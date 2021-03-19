import {
  CategorySettingsActionType,
  FETCH_CATEGORIES_RESOLVE
} from '../actions/types';

export function categorySettingsReducer(
  state: string[] = [],
  action: CategorySettingsActionType
) {
  switch (action.type) {
    case FETCH_CATEGORIES_RESOLVE:
      return action.payload;
    default:
      return state;
  }
}
