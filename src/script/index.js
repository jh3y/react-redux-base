import React from 'react';
import { render } from 'react-dom';

import '../style/style.styl';

import { createStore } from 'redux';
import AppReducer from './reducer/app.reducer';
const store = createStore(AppReducer);

import { stopLoad } from './components/todo/todo.actions';

import Main from './main';

render((<Main store={ store }/>), document.getElementById('app'))

setTimeout(() => {
  store.dispatch(stopLoad());
  console.info('dispatched');
}, 2000)
