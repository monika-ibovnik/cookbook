import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {reduxPromise} from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

//import store from './store.js'

ReactDOM.render(
    <h1>Hello</h1>,
    document.querySelector('#root')
);
