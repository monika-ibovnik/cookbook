import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {reduxPromise} from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import WelcomePage from './WelcomePage';

//import store from './store.js'

ReactDOM.render(
    <WelcomePage />,
    document.querySelector('#root')
);
