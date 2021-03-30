import {
  DashboardActionTypes,
  FETCH_LEDGER_DETAILS_RESOLVED,
  FETCH_LEDGER_DETAILS_REJECTED
} from '../actions/types';

export function dashboardReducer(
  state: any = [],
  action: DashboardActionTypes
) {
  switch (action.type) {
    case FETCH_LEDGER_DETAILS_RESOLVED:
      return action.response;
    case FETCH_LEDGER_DETAILS_REJECTED:
      return {
        isError: true
      };
    default:
      return state;
  }
}
