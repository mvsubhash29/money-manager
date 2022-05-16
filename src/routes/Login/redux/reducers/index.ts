import {combineReducers} from 'redux';
import {loginReducer as login} from './login.reducer';

export const loginRootReducer = combineReducers({
  login
});
