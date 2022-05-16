import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {AppBar} from './components/AppBar/AppBar';
import {CategorySettingsPage} from './pages/CategorySettings/CategorySettings';
import {DashboardPage} from './pages/Dashboard/DashboardPage';
import {InsurancePage} from './pages/Insurance/InsurancePage';
import {fetchCategories} from './routes/CategorySettings/redux/actions/categorySettings.action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <AppBar title='Money Manager'>
        <Switch>
          <Route path='/category-settings'>
            <CategorySettingsPage />
          </Route>
          <Route path='/about'>
            <h1>About Page</h1>
          </Route>
          <Route path='/dashboard'>
            <DashboardPage />
          </Route>
          <Route path='/insurance'>
            <InsurancePage />
          </Route>
        </Switch>
      </AppBar>
    </Router>
  );
}

export default App;
