//import React from 'react';
//import ReactDOM from 'react-dom';
//import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
//import { createStore, combineReducers } from 'redux';
//import { Provider } from 'react-redux';
//import { reducer as formReducer } from 'redux-form';
//
//import App from './App';
//
//import './theme/globalStyle';
//
//ReactDOM.render(routes, document.getElementById('root'));
//registerServiceWorker();

import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
//import todoApp from './reducers'
//import Root from './components/Root'
import { reducer as formReducer } from 'redux-form';

import {IndexRoute, Router, Route, hashHistory } from 'react-router';
import Home from './containers/Home/Home';
import App from './containers/App/App';
import Projects from './containers/Projects/Projects';
import AboutMe from './containers/AboutMe/AboutMe';
import ContactMe from './containers/ContactMe/ContactMe';




const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/projects" component={Projects}/>
                <Route path="/aboutMe" component={AboutMe}/>
                <Route path="/contactMe" component={ContactMe}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();