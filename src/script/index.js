import React from 'react';
import { render } from 'react-dom';

import 'style.styl';

import { createStore } from 'redux';
import AppReducer from 'reducer/app.reducer';

import Root from 'container/root';
import routes from 'routes/routes';

const store = createStore(AppReducer, window.devToolsExtension && window.devToolsExtension());

render((
  <Root store={ store } routes={ routes }/>
), document.getElementById('app'));
