import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/main';
import Work3Page from './pages/work-3';

import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/work-1">
            <Work3Page />
          </Route>
          <Route path="/work-2">
            <Work3Page />
          </Route>
          <Route path="/work-3">
            <Work3Page />
          </Route>
          <Route path="/work-4">
            <Work3Page />
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
