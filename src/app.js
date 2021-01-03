import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/work';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
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
          <Route path="/skincare-quiz-case-study">
            <Work4Page />
          </Route>
          <Route path="/viprive-case-study">
            <Work3Page />
          </Route>
          <Route path="/kidsclub-case-study">
            <Work2Page />
          </Route>
          <Route path="/work-4">
            <Work1Page />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
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
