import {combineReducers} from 'redux';
import {categorySettingsReducer} from '../routes/CategorySettings/redux/reducers/categorySettings.reducer';
import {dashboardRootReducer} from '../routes/Dashboard/redux/reducers';
import {loginReducer} from '../routes/Login/redux/reducers/login.reducer';

export const rootReducer = combineReducers({
  categories: categorySettingsReducer,
  dashboard: dashboardRootReducer,
  login: loginReducer
});
