import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/details/:id">
        <Details />
      </Route>
    </Switch>
  </Router>
);
export default App;
