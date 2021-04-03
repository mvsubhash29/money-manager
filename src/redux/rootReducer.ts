import {combineReducers} from 'redux';
import {categorySettingsReducer} from '../routes/CategorySettings/redux/reducers/categorySettings.reducer';
import {dashboardRootReducer} from '../routes/Dashboard/redux/reducers';

export const rootReducer = combineReducers({
  categories: categorySettingsReducer,
  dashboard: dashboardRootReducer
});
