import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {reduxPromise} from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import WelcomePage from './WelcomePage';
import App from './App';
//import store from './store.js'

let elementToRender;
if(location.pathname === '/welcome'){
    elementToRender = <WelcomePage/>
}else{
    elementToRender = <App />
}

ReactDOM.render(
    elementToRender,
    document.querySelector('#root')
);
