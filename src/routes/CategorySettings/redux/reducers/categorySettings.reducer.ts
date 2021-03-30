import {
  CategorySettingsActionType,
  FETCH_CATEGORIES_RESOLVED
} from '../actions/types';

export function categorySettingsReducer(
  state: string[] = [],
  action: CategorySettingsActionType
) {
  switch (action.type) {
    case FETCH_CATEGORIES_RESOLVED:
      return action.payload;
    default:
      return state;
  }
}
