import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {AppBar} from './components/AppBar/AppBar';
import {EntryForm} from './components/EntryForm/EntryForm';
import {MoneyInfoDetailCard} from './components/MoneyInfoDetailCard/MoneyInfoDetailCard';
import {CategorySettingsPage} from './pages/CategorySettings/CategorySettings';
import {DashboardPage} from './pages/Dashboard/DashboardPage';

function App() {
  return (
    <Router>
      <AppBar title='Money Manager'>
        <Switch>
          <Route exact path='/'>
            <MoneyInfoDetailCard categoryName='Food' />
          </Route>
          <Route path='/category-settings'>
            <CategorySettingsPage />
          </Route>
          <Route path='/form'>
            <EntryForm />
          </Route>
          <Route path='/about'>
            <h1>About Page</h1>
          </Route>
          <Route path='/dashboard'>
            <DashboardPage />
          </Route>
        </Switch>
      </AppBar>
    </Router>
  );
}

export default App;
