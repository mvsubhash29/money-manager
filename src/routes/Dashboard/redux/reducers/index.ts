import {combineReducers} from 'redux';
import {dashboardReducer} from './dashboard.reducer';

export const dashboardRootReducer = combineReducers({
  ledgerDetails: dashboardReducer
});
