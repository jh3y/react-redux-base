import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';


/**
  * NOTE:: Use browserHistory for deployment/prod environments
  * github.com/reactjs/react-router-tutorial/tree/master/lessons/10-clean-urls
*/
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import App from './modules/app';
import TodoList from './components/list/list';
import Header from './components/header/header';
import CreateLayout from './modules/createLayout';
import Create from './modules/create';
import Test from './test';
import Layout from './modules/layout';

const AppRoot = ({ store }) => {
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route component={ Layout }>
          <Route path='/' component={ App }>
            <IndexRoute component={ Test }/>
            <Route component={ CreateLayout }>
              <Route path='/create' component={ Create }/>
            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  )
};

AppRoot.PropTypes = {
  store: PropTypes.object.isRequired
};

export default AppRoot;
