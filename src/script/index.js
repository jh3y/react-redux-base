import React from 'react';
import { render } from 'react-dom';

import 'style.styl';


import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux';
import AppReducer from 'reducer/app.reducer';

import Root from 'container/root';
import routes from 'routes/routes';



const configureStore = () => {
  const store = createStore(
    AppReducer,
    window.devToolsExtension && window.devToolsExtension()
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducer/app.reducer', () => {
      const nextAppReducer = require('reducer/app.reducer');
      store.replaceReducer(nextAppReducer);
    });
  }

  return store;
}

const store = configureStore()

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component
        store={store}
        routes={routes}/>
    </AppContainer>,
    document.getElementById('app')
  )
}

renderApp(Root)

if (module.hot) {
  module.hot.accept(require.resolve('./container/root'), () => {
    renderApp(require('./container/root').default)
  });
}
