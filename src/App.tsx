import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {AppBar} from './components/AppBar/AppBar';
import {CategorySettingsPage} from './pages/CategorySettings/CategorySettings';

function App() {
  return (
    <Router>
      <AppBar title='Money Manager'>
        <Switch>
          <Route exact path='/'>
            <h1>Home</h1>
          </Route>
          <Route path='/category-settings'>
            <CategorySettingsPage />
          </Route>
          <Route path='/about'>
            <h1>About Page</h1>
          </Route>
          <Route path='/dashboard'>
            <h1>Dashboard</h1>
          </Route>
        </Switch>
      </AppBar>
    </Router>
  );
}

export default App;
