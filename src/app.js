import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/main';
import Work1Page from './pages/work-1';
import Work2Page from './pages/work-2';
import Work3Page from './pages/work-3';
import Work4Page from './pages/work-4';

import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/work-1">
            <Work1Page />
          </Route>
          <Route path="/work-2">
            <Work2Page />
          </Route>
          <Route path="/work-3">
            <Work3Page />
          </Route>
          <Route path="/work-4">
            <Work4Page />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
