import {
  CategoryResponseType,
  CategorySettingsActionType,
  FETCH_CATEGORIES_RESOLVED
} from '../actions/types';

const initialValue = {
  expense: [],
  income: []
};

export function categorySettingsReducer(
  state: CategoryResponseType = initialValue,
  action: CategorySettingsActionType
) {
  switch (action.type) {
    case FETCH_CATEGORIES_RESOLVED:
      return action.payload;
    default:
      return state;
  }
}
