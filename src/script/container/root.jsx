import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import CoreLayout from '../layouts/core';
import Blob from '../components/header/header'
import 'style.styl';

/**
  * NOTE:: Use browserHistory for deployment/prod environments
  * github.com/reactjs/react-router-tutorial/tree/master/lessons/10-clean-urls
*/
import createHistory from 'history/createBrowserHistory'
import { Route, Router } from 'react-router';

const history = createHistory()

const Home = () => (
  <div>Still working?</div>
)

const Header = () => (
  <header>
    Some awesome header thingzzz
  </header>
)

const AppRoot = ({ store }) => (
  <Provider store={ store }>
    <Router
      history={history}>
      <div>
        <Header/>
        {/* <Route path='/' component={ Home }/> */}
        <Home/>
        <Blob/>
      </div>
    </Router>
  </Provider>
)

AppRoot.PropTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired
};

export default AppRoot;
