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

import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBL67SHxHo33ICwhsghC1VtVHmeQzpMCVw",
    authDomain: "portfilio-form.firebaseapp.com",
    databaseURL: "https://portfilio-form.firebaseio.com",
    projectId: "portfilio-form",
    storageBucket: "portfilio-form.appspot.com",
    messagingSenderId: "841478938105"
};

var fire = firebase.initializeApp(config);
export default fire;


const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Projects}></IndexRoute>
                <Route path="/aboutMe" component={AboutMe}/>
                <Route path="/contactMe" component={ContactMe}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();