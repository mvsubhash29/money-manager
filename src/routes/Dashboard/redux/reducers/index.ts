import {combineReducers} from 'redux';
import {dashboardReducer} from './dashboard.reducer';
import {selectedLedgerEntry} from './selectedLedgerEntry.reducer';

export const dashboardRootReducer = combineReducers({
  ledgerDetails: dashboardReducer,
  selectedLedgerEntry
});
