import {combineReducers} from 'redux';
import {categorySettingsReducer} from '../routes/CategorySettings/redux/reducers/categorySettings.reducer';

export const rootReducer = combineReducers({
  categories: categorySettingsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
