import {combineReducers} from 'redux';
import {insuranceFormReducer as insuranceFormStatus} from './insuranceForm.reducer';

export const insuranceRootReducer = combineReducers({
  insuranceFormStatus
});
