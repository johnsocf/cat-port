import React from 'react';
import {IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from './containers/Home/Home';
import App from './containers/App/App';
import Projects from './containers/Projects/Projects';
import AboutMe from './containers/AboutMe/AboutMe';
import ContactMe from './containers/ContactMe/ContactMe';


export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Projects}></IndexRoute>
      <Route path="/aboutMe" component={AboutMe}/>
      <Route path="/contactMe" component={ContactMe}/>
    </Route>
  </Router>
);