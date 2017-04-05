import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';


/**
  * NOTE:: Use browserHistory for deployment/prod environments
  * github.com/reactjs/react-router-tutorial/tree/master/lessons/10-clean-urls
*/
import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router';

const history = createHistory()

const AppRoot = ({ store, routes }) => {
  return (
    <Provider store={ store }>
      <div>Provider working???</div>
    </Provider>
    //   <Router history={history} children={ routes }/>
  )
};

AppRoot.PropTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired
};

export default AppRoot;
