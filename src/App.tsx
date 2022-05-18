import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {AppBar} from './components/AppBar/AppBar';
import {AuthRoute} from './components/AuthRoute/AuthRoute';
import {CategorySettingsPage} from './pages/CategorySettings/CategorySettings';
import {DashboardPage} from './pages/Dashboard/DashboardPage';
import {InsurancePage} from './pages/Insurance/InsurancePage';
import {LoginPage} from './pages/Login/LoginPage';
import {fetchCategories} from './routes/CategorySettings/redux/actions/categorySettings.action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <AppBar title='Money Manager'>
          <AuthRoute path='/category-settings'>
            <CategorySettingsPage />
          </AuthRoute>
          <AuthRoute path='/dashboard'>
            <DashboardPage />
          </AuthRoute>
          <AuthRoute path='/insurance'>
            <InsurancePage />
          </AuthRoute>
        </AppBar>
      </Switch>
    </Router>
  );
}

export default App;
